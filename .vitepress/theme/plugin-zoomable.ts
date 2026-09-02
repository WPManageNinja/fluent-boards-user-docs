import type { MarkdownRenderer } from "vitepress";

/** Escape for HTML attribute value to avoid broken markup and XSS. */
function escapeAttr(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Plain-text alt from an image token's inline children.
 *
 * markdown-it's own renderInlineAsText() skips `text_special` tokens, which is
 * what an HTML entity in the alt text parses into. An alt written as
 * "access key &amp; secret key" would silently lose the "&". Handling that token
 * type here keeps the character.
 *
 * token.content is not usable directly either: it is the raw label text, so an
 * entity arrives still encoded and escapeAttr() below would encode it a second
 * time, rendering a literal "&amp;" to the user.
 */
function altText(tokens: any[] | null): string {
  if (!tokens) return "";

  let result = "";

  for (const token of tokens) {
    switch (token.type) {
      case "text":
      case "text_special":
      case "code_inline":
      case "html_inline":
      case "html_block":
        result += token.content;
        break;
      case "image":
        result += altText(token.children);
        break;
      case "softbreak":
      case "hardbreak":
        result += " ";
        break;
      // all other tokens (emphasis markers, links, ...) are skipped
    }
  }

  return result;
}

export function zoomablePlugin(md: MarkdownRenderer) {
  const defaultRender =
    md.renderer.rules.image ||
    ((tokens, idx, options, env, self) => {
      return self.renderToken(tokens, idx, options);
    });

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    if (!token.attrs) return defaultRender(tokens, idx, options, env, self);

    const srcIndex = token.attrIndex("src");
    if (srcIndex < 0) return defaultRender(tokens, idx, options, env, self);

    const src = token.attrs[srcIndex][1];
    const alt = altText(token.children) || token.content || "";

    // Wrapped in <ClientOnly>, matching the reference implementation in
    // essentials/theme (see its ZOOMABLE_PLUGIN_REPORT.md).
    //
    // ClientOnly makes the server render nothing here at all. With no
    // server-rendered markup there is nothing for Vue to hydrate against, so
    // the duplicate-image bug cannot occur by construction - the client builds
    // the image once, from scratch, on every page.
    //
    // The cost is SEO: every documentation image, and its alt text, is absent
    // from the static HTML. Crawlers that do not execute JavaScript see none of
    // them. That is a deliberate trade in favour of certainty about duplicates.
    //
    // The relative src is rewritten by Vite's asset pipeline because config.mts
    // declares `ZoomableImage: ['src']` under vue.template.transformAssetUrls.
    // Without that declaration the path is emitted verbatim and 404s in the
    // production build.
    //
    // Explicit closing tag (not self-closing) - Vue's SSR-side parsing of
    // markdown-emitted markup is more reliable with an explicit close.
    return `<ClientOnly><ZoomableImage src="${escapeAttr(src)}" alt="${escapeAttr(alt)}"></ZoomableImage></ClientOnly>`;
  };
}
