# FluentBoards User Documentation

Official user documentation for [FluentBoards](https://fluentboards.com) — the project management plugin for WordPress by WPManageNinja. Built with [VitePress](https://vitepress.dev/).

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |

---

## Project Structure

```
fluent-boards-user-docs/
├── .claude/
│   └── skills/
│       └── fluentboards-doc-writer.md   # Doc writing skill for Claude
├── .vitepress/
│   ├── theme/                           # Custom theme overrides
│   └── config.mts                       # VitePress configuration
├── docs/
│   ├── getting-started/
│   ├── boards/
│   ├── task-management/
│   ├── stage-management/
│   ├── integrations/
│   ├── settings/
│   ├── import-export/
│   ├── reports/
│   ├── roadmap/
│   ├── updates/
│   └── public/
│       └── images/                      # Doc images (per category/page)
│           ├── getting-started/
│           ├── boards/
│           └── ...
├── public/
│   └── images/
│       └── brand/                       # Logos, favicon, hero banner
├── scripts/
│   └── localize-images.py              # Downloads & localizes remote images
├── index.md                             # Home page
├── CLAUDE.md                            # Claude Code instructions for this project
└── package.json
```

---

## URL Structure

All doc pages use clean, flat URLs with no category prefix:

| Page | URL |
|---|---|
| Introduction | `/get-started-with-fluentboards` |
| Creating a Board | `/how-to-create-a-new-board` |
| Task Management | `/how-to-create-a-new-task` |
| Member Roles | `/member-roles` |

URLs are mapped via VitePress `rewrites` in `.vitepress/config.mts`. Source files live in `docs/{category}/` but are served at `/{slug}`.

---

## Content Sections

| Section | Files |
|---|---|
| Getting Started | 6 pages |
| Board Management | 6 pages |
| Task Management | 6 pages |
| Stage Management | 2 pages |
| Integrations | 7 pages |
| Import / Export | 3 pages |
| Settings | 8 pages |
| Reports | 1 page |
| Roadmap | 2 pages |
| Updates | 1 page |

---

## Images

All documentation images are stored locally under `docs/public/images/{category}/{page-slug}/` and referenced with relative paths in markdown.

To re-download or refresh images from the original source:

```bash
python3 scripts/localize-images.py
```

Brand assets (logo, favicon, hero banner) are in `public/images/brand/` and served as static files.

---

## Contributing to the Docs

See `CLAUDE.md` at the project root for the full writing guide — tone, style rules, terminology, update workflow, and VitePress conventions.

---

## License

MIT
