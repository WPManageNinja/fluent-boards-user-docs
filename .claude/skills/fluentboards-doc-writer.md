# Skill: FluentBoards Doc Writer

## Purpose

Use this skill when:
- Writing a **new documentation page** for a FluentBoards feature
- **Updating an existing page** with new information, changed behavior, or removed functionality
- **Improving clarity** on a page without changing its structure or content

Always follow the CLAUDE.md writing rules alongside this workflow.

---

## Input Required

Before starting, confirm you have:

| Input | Description |
|---|---|
| **Task type** | New page or update to existing page |
| **Feature / topic** | What FluentBoards feature this covers |
| **New information** | What is new, changed, or removed |
| **File path** | Required for updates — the exact path to the file being edited |

If any of these are missing, ask before proceeding.

---

## Workflow: Writing a NEW Page

### Phase 1 — Understand the Feature

Answer these questions before writing a single word:
- What does this feature do?
- What does the user achieve by using it?
- What is the user's starting point? (e.g., "The user is inside a Board and wants to add a new Stage.")
- Are there any prerequisites the user needs to complete first?

### Phase 2 — Structure the Page

Use this VitePress template as the starting skeleton:

```md
---
title: Page Title
---

# Page Title

Brief intro — one or two sentences. What is this feature and what will the user be able to do after reading this page.

## Section Heading

Intro sentence for this section.

1. Step one.
2. Step two.
3. Step three.

::: tip
Optional helpful note.
:::

## Next Steps

Where the user should go after completing this page.
```

Sections should follow the user's natural journey through the feature — not the feature's internal architecture.

### Phase 3 — Write the Content

- Use **numbered steps** for any sequence of actions.
- Begin each step with an action verb: **Click, Select, Enter, Toggle, Open, Navigate, Save.**
- After each step, explain what happens as a result — what the user will see or what changes on screen.
- End the page with a clear next step or a link to a related page.

**Example of a well-written step:**
> 3. Click **Add Stage**. A new Stage column appears at the right side of your Board.

### Phase 4 — Tone Check (Checklist)

Before finishing, confirm:
- [ ] No technical jargon without an immediate plain-language explanation
- [ ] Steps are in the correct order — can a first-time user follow them top to bottom?
- [ ] Tone is friendly and encouraging, not instructional or robotic
- [ ] FluentBoards terms are capitalized correctly (Board, Task, Card, Stage, Member)
- [ ] Sentences are under 20 words where possible
- [ ] Active voice throughout — the user does things, not things happen to the user

---

## Workflow: Updating an EXISTING Page

### Phase 1 — Read the Full File

Read the entire existing file before making any changes. Identify:
- The current tone and writing style
- The heading structure
- Where images are referenced
- The overall flow and user journey

### Phase 2 — Analyze the Change

From the information provided, determine:
- What is **new** (a feature or option that didn't exist before)?
- What has **changed** (existing behavior that works differently now)?
- What has been **removed** (a feature or option no longer available)?

### Phase 3 — Match and Integrate

- Find the exact location in the file where the update belongs.
- Write the new or changed content in the **same tone and style** as the surrounding text.
- If the existing writing around the update is unclear, you may improve clarity for that section only — do not edit unrelated sections.

### Phase 4 — Constraints

- Do **not** restructure the page.
- Do **not** change headings that are not part of the update.
- Do **not** modify image paths, filenames, or alt text.
- Do **not** add new sections unless the update genuinely requires one and the user has confirmed this.
- Change **only** what the new information directly affects.

### Phase 5 — Output Format

Return:
1. The **full updated file** (not just the changed section).
2. A short **change summary** at the end in this format:

```
## Change Summary

- [Section name]: What was changed and why
- [Section name]: What was added
```

---

## FluentBoards Terminology Reference

Always use the terms in the **Use** column. Never use the terms in the **Avoid** column.

| Term | Use | Avoid |
|---|---|---|
| Board | Board | board, project board, kanban board |
| Task | Task | task, ticket, item, card item |
| Card | Card | card, task card, work card |
| Stage | Stage | stage, column, lane, status column |
| Member | Member | member, user, assignee, team user |

When in doubt, capitalize. These are proper nouns within the FluentBoards context.

---

## Example Trigger Prompts

**New page:**
> "Write a new doc page for the Time Tracking feature in FluentBoards. Users can log hours against a Task. The file should go in `docs/task-management/time-tracking.md`."

**Update:**
> "Update `docs/settings/email-notifications.md`. FluentBoards now has a new toggle: 'Notify on Stage Change'. It sends an email to all Task Members when a Task moves to a new Stage. Add this to the existing notifications settings page."

---

## Quality Bar

A page meets the quality bar when:
- A non-technical first-time user can complete the described task **without confusion** and **without needing to refer to another source**
- The page **feels consistent** in tone, structure, and style with the rest of the FluentBoards docs
- **No step is skipped** — every action the user needs to take is written out explicitly
- The page answers the user's implicit question: *"What do I do next?"*

If the page doesn't meet all three criteria, revise before returning output.
