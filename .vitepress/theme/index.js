// The single theme entry.
//
// There used to be an index.ts alongside this file holding the changelog styles
// and the external-link patch below. Vite resolves a directory import with its
// default extension order (.mjs, .js, .mts, .ts, ...), so `index.js` always won
// and `index.ts` was never loaded - the changelog page shipped unstyled. Both
// files are merged here; keep this the only index.* in the theme directory.
import DefaultTheme from 'vitepress/theme'
import { nextTick } from 'vue'

import './index.css'
import './changelog.css'

import ZoomableImage from './components/ZoomableImage.vue'
import VideoEmbed from './components/VideoEmbed.vue'

/** Same rule as VitePress: absolute URLs and explicit protocols (mailto:, etc.). */
const EXTERNAL_HREF_RE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i

/**
 * Open external links in a new tab.
 *
 * `markdown.externalLinks` in config.mts already covers links written as
 * markdown. This pass catches the rest: links inside raw HTML blocks and links
 * rendered by components, which the markdown renderer never sees.
 */
function patchExternalLinksInDoc() {
  document.querySelectorAll('.vp-doc a[href]').forEach((el) => {
    const href = el.getAttribute('href')
    if (!href || href.startsWith('#')) return
    if (!EXTERNAL_HREF_RE.test(href)) return

    el.setAttribute('target', '_blank')

    const rel = el.getAttribute('rel')
    if (!rel) {
      el.setAttribute('rel', 'noreferrer')
    } else if (!/\bnoreferrer\b/.test(rel)) {
      el.setAttribute('rel', `${rel} noreferrer`.replace(/\s+/g, ' ').trim())
    }
  })
}

export default {
  extends: DefaultTheme,

  enhanceApp({ app, router }) {
    // Register ZoomableImage globally so the markdown renderer can emit it.
    // The guard avoids a duplicate-registration warning when enhanceApp runs
    // more than once (HMR, or multiple render passes).
    if (!app.component('ZoomableImage')) {
      app.component('ZoomableImage', ZoomableImage)
    }

    // VideoEmbed is written by hand in the markdown pages, so it has to be
    // globally available the same way.
    if (!app.component('VideoEmbed')) {
      app.component('VideoEmbed', VideoEmbed)
    }

    // Everything below touches the DOM, so it is client-only.
    if (typeof window === 'undefined') return

    // nextTick, not queueMicrotask: the patch has to run after Vue has flushed
    // the new page into the DOM, otherwise it walks the previous page's links.
    const run = () => nextTick(patchExternalLinksInDoc)

    const prevRoute = router.onAfterRouteChange
    router.onAfterRouteChange = async (to) => {
      await prevRoute?.(to)
      run()
    }

    const prevPage = router.onAfterPageLoad
    router.onAfterPageLoad = async (to) => {
      await prevPage?.(to)
      run()
    }

    run()
  },
}
