---
description: "Embed FluentBoards on any WordPress page with shortcodes for a single board, a public board, the frontend portal, and your public Roadmap."
---

# FluentBoards Shortcodes

FluentBoards gives you a handful of shortcodes so you can embed your boards, your entire workspace, or your public Roadmap directly on any WordPress page. This is separate from the WordPress Dashboard view, letting you share your work with clients, teammates, or website visitors.

In this article, we'll walk you through every shortcode FluentBoards offers, what each one does, and where to find it.

## How to Use a Shortcode

Every shortcode in this article follows the same basic steps to add it to a page:

1. Go to **Pages** or **Posts** in your WordPress Dashboard and open the page you want to add it to, or create a new one.
2. Add a **Shortcode block** from the Gutenberg Blocks.
3. Paste your shortcode into the block.
4. Click the **Update** or **Publish** button to save your changes.

## Single Board Shortcode

The **Single Board Shortcode** embeds one specific board, with its full Kanban view, on any page. This is handy when you want to share just one project with a client or stakeholder instead of your whole workspace.

```
[fluent_board id="12"]
```

Replace `12` with your board's ID. To find it, go to your board, click the **Three Dot** menu, then select **About This Board**. You'll find the **Shortcode** field there, already filled in with your board's ID, ready to copy.

Visitors need to log in and have access to that board to see it. If they aren't logged in, they'll see a login form instead.

## Public Board Shortcode

The **Public Board Shortcode** works just like the Single Board Shortcode, but lets anyone view the board without logging in.

```
[fluent_board_public id="12"]
```

Replace `12` with your board's ID. Before using this shortcode, turn on the **Public Access** toggle for that board from the **About This Board** panel. If Public Access is off, this shortcode won't display anything.

## Frontend Portal Shortcode

The **Frontend Portal Shortcode** embeds your entire FluentBoards workspace, all boards, tasks, and the dashboard, on a single page. This gives your board members a way to log in and work from your website's frontend instead of the WordPress Dashboard.

```
[fluent_boards]
```

This shortcode doesn't need an **id** attribute, since it loads your whole workspace based on the visitor's permissions.

Before using it, go to **Settings > Features & Modules**, turn on the **Front Portal** toggle, click its **Manage** button, and choose **WordPress page using a shortcode** under **How would you like to display the portal?**. For more details, check out the [Frontend Portal](/frontend-portal-settings) guide.

## Roadmap Shortcode

The **Roadmap Shortcode** embeds your public-facing Roadmap board, where visitors can browse ideas, vote, and submit their own suggestions.

```
[fluent-roadmap id="12"]
```

Replace `12` with your Roadmap Board's ID. To find it, go to your Roadmap Board, click the **Three Dot** menu, then select **About This Board**. You'll find the **Roadmap Shortcode** field there, already filled in.

Visitors can browse your Roadmap without logging in. Depending on your **Roadmap Settings**, they may need to log in to submit ideas, vote, or add comments. Check out the [Roadmap Settings](/roadmap-settings) guide to configure this.

