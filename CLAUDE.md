# CLAUDE.md — FluentBoards User Documentation

## 1. Project Overview

Official user documentation for **FluentBoards**, a WordPress project management plugin by WPManageNinja. Built with **VitePress** and published as a static site.

**Key paths:**
- VitePress config: `.vitepress/config.mts` (project root — NOT inside `docs/`)
- Content: `docs/` — 10 section folders, 42 markdown files
- Images: `docs/public/images/{section}/{doc-slug}/`
- Dev server: `npm run dev`
- Build: `npm run build`

**Section folders under `docs/`:**
```
getting-started/   boards/    tasks/     stages/
integrations/      settings/  migrate/   roadmap/
reports/           changelog/
```

> Files live directly in these folders — there is NO `docs/guide/` subdirectory.

**URL rewrites:** Config maps `docs/{section}/:slug` → `/:slug` so sidebar links use short slugs like `/board-overview`, not `/docs/boards/board-overview`.

---

## 2. Audience

**Non-technical end users** — WordPress site owners, small business owners, team managers.

- Never assume the reader knows WordPress internals, developer tools, or code.
- If a technical term must be used, explain it immediately. Example: "the menu position (a number that controls where FluentBoards appears in the WordPress sidebar)."
- Write as if explaining to someone who is comfortable using apps but not building them.
- Always frame instructions around what the user is trying to **accomplish**, not what the feature does in isolation.

---

## 3. Writing Tone & Style

### Tone
Friendly, approachable, and encouraging. The user is capable — this is easy. Never condescending, never overly formal.

### Voice
Always active voice. The user is always doing something.
- ✅ "Click the **Save** button."
- ❌ "The Save button should be clicked."

### Perspective
Use "you" and "your" throughout. Never write "the user" or "one."

### Sentence length
Under 20 words per sentence. Break longer thoughts into two sentences. One idea per paragraph.

---

## 4. Opening Sentence Formulas

Every page starts with 1–2 sentences. Use one of these proven patterns:

| Pattern | Example |
|---|---|
| `You can [action] with [feature].` | "You can easily add tasks with several features to your boards." |
| `FluentBoards [does X].` | "FluentBoards is a handy plugin that makes managing your projects in WordPress a breeze." |
| `[Feature] is [quality]. Let's [action].` | "Getting started with boards is incredibly simple. Let's delve into the fundamental features." |
| `Suppose [user scenario].` | "Suppose you have a form on your website from where you want to add a task on your Board." |
| `The **[Feature]** allows you to [benefit].` | "The **Pinned Boards** feature allows users to mark specific project boards as pinned." |
| `With FluentBoards, you can [action].` | "With FluentBoards, you can establish a frontend portal." |
| `[Feature] in FluentBoards [does X].` | "Custom Fields in FluentBoards allow you to add task-specific information." |

---

## 5. Step Instruction Patterns

Use these exact phrasings for instructions:

| Purpose | Pattern |
|---|---|
| Navigate | `Go to the FluentBoards **Dashboard** and select **[Section]**.` |
| Click | `Click on the **[Button Name]** button.` |
| Simple action | `Simply click on the **[Element]**.` |
| After action | `A pop-up will appear with [options].` |
| Completion | `Once you're done, click the **Save** button.` |
| Transition | `After that, [what happens].` |
| Orienting | `Here you will find [thing].` / `Here you will see [thing].` |
| Optional | `From here, you can [action].` |
| Input | `Enter your [thing] in the **[Field Name]** field.` |

**Transition words used in the docs:** Once, After, Then, Now, Simply, Here, From here, Down here.

---

## 6. Closing / Support Link

End every new page with this exact line:

```markdown
If you have any further queries, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/){:target="_blank"}.
```

---

## 7. Capitalization Rules

**Always capitalize regardless of sentence position:**
- Board, Task, Card, Stage, Member
- Dashboard, Roadmap, Changelog
- FluentBoards, FluentCRM, FluentSupport, WPManageNinja
- Fluent Forms (two words in prose)

**Bold for UI elements — capitalize only as they appear in the actual UI:**
- **Save**, **Delete**, **Menu**, **Plus**, **Arrow**, **Pencil**, **Dropdown**
- **Add Task**, **Board Menu**, **Three Dot**, **Send Invitation**, **Export**

**Do NOT bold** general nouns — only actual clickable UI element names get bold.

---

## 8. Vocabulary Rules

| Avoid | Use instead |
|---|---|
| utilize | use |
| leverage | use |
| facilitate | help |
| robust | describe the specific benefit |
| "the user" | "you" |
| "in order to" | "to" |
| "please note that" | state it directly |
| navigate (overused) | go to / head to / click |

**Positive filler words used sparingly for tone:**
- "simply" — before easy steps
- "easily" — in opening sentences
- "handy" — when describing features
- "just" — "Just head over to the board..."
- "feel free to" — for optional actions

---

## 9. Image Format

**Path formula (relative — always starts with `../public/images/`):**
```markdown
![alt text](../public/images/{section}/{doc-slug}/filename.webp)
```

**Example:**
```markdown
![board activity 4](../public/images/boards/board-settings/Board-Activity-4-scaled.webp)
```

**Rules:**
- Path is RELATIVE — `../public/images/` — never root-relative like `/images/...`
- `{section}` = the `docs/{section}/` folder name (e.g., `boards`, `task-management`)
- `{doc-slug}` = markdown filename without `.md`
- Filenames: Title-Case-With-Hyphens, often ending in `-scaled.webp`
- Alt text: lowercase, brief, sometimes sequenced with numbers (`board notification 9`)
- Never change existing image paths, filenames, or alt text

---

## 10. Page Structure

```
# Page Title

[1–2 sentence intro]

## Major Section

[1 sentence context]

![alt text](../public/images/...)

### Sub-feature

[Steps or description]

![alt text](../public/images/...)

[Support link]
```

**Heading levels:**
- `#` — page title only
- `##` — major feature sections
- `###` — sub-features
- `####` — deeply nested items only (rare)
- Never skip levels. Never use `#####` or deeper.

**Lists:**
- Numbered: strictly sequential steps
- Bullets: options, features, non-sequential items

**Blockquotes** (`>`): Developer notes or tips that most users can skip.

**No frontmatter** on guide pages — just a bare `# Title`. (Only `docs/index.md` uses frontmatter.)

---

## 11. Update Process

**Step 1 — Understand the new information**
Read what was provided. Identify what is new, changed, or removed.

**Step 2 — Find the right file**
Use the Content Map in memory (`project_docs_map.md`) to locate the exact file. Do not create a new page unless explicitly told to.

**Step 3 — Apply the update**
- Edit only the section where the update belongs.
- Keep original structure, headings, and flow intact.
- Never touch image references, alt text, or image paths.

**Step 4 — Clarity check**
- Is this understandable for a non-technical user?
- Does it flow naturally with surrounding content?
- Are FluentBoards terms capitalized correctly?
- Are sentences under 20 words and in active voice?
- Does it end with the support link (if a new page)?

---

## 12. File Naming Convention

- All filenames: **kebab-case** (lowercase, hyphen-separated)
- Files live directly in `docs/{section}/` — no subdirectory inside the section folder
- Examples:
  - `docs/getting-started/fluentboards-installation-guide.md`
  - `docs/settings/notification-settings.md`
  - `docs/tasks/how-to-create-a-new-task.md`
  - `docs/migrate/import-from-trello.md`
  - `docs/changelog/changelog.md`

---

## 13. Content Map (quick reference)

| Section | Files | Key topics |
|---|---|---|
| `getting-started/` | 6 | Install, license, intro concepts, dashboard, first board, profile |
| `boards/` | 6 | Create board, board layout, board settings/menu, views, pin, folders |
| `stages/` | 2 | Create/manage stages, default assignee per stage |
| `tasks/` | 6 | Create tasks, templates, actions, time tracking, recurring, custom fields |
| `settings/` | 8 | Member roles, notifications, daily reminders, card view, portal, menu position, webhooks (in+out) |
| `integrations/` | 7 | Fluent Forms, FluentCRM, FluentSupport, Amazon S3, Backblaze, Cloudflare R2, DigitalOcean |
| `migrate/` | 3 | Import from Trello, Asana, FluentBoards JSON |
| `roadmap/` | 2 | Roadmap overview, roadmap settings |
| `reports/` | 1 | Task progress reports |
| `changelog/` | 1 | Changelog |

Full per-file descriptions are in memory: `project_docs_map.md`

---

## 14. What Claude Must Never Do

- **Never rewrite a full page** when only one section needs updating.
- **Never change a page slug or filename** without explicit instruction.
- **Never remove content** unless told to — flag outdated content instead.
- **Never assume how a feature works** — if behavior is unclear, ask before writing.
- **Never change image paths, filenames, or alt text** unless explicitly instructed.
- **Never add new sections or pages** unless told to.
- **Always ask** before making changes that touch more than one section.

---

## 15. When in Doubt

Stop and ask. One clarifying question is always better than a wrong edit that needs to be undone.
