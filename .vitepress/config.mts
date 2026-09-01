import { defineConfig } from 'vitepress'
import { zoomablePlugin } from './theme/plugin-zoomable'

export default defineConfig({
  title: 'FluentBoards',
  description: 'FluentBoards User Documentation',

  srcDir: '.',
  srcExclude: ['**/node_modules/**', 'CLAUDE.md', 'README.md'],

  cleanUrls: true,

  markdown: {
    externalLinks: { target: '_blank', rel: 'noreferrer' },
    config: (md) => {
      md.use(zoomablePlugin)
    },
  },

  // Every image in docs/ uses a relative path (../public/images/...), which Vite
  // normally rewrites via its asset pipeline on the <img> tag. The zoom plugin
  // swaps that <img> for <ZoomableImage>, so the same rewrite has to be declared
  // for the component's src prop - otherwise the raw path is emitted verbatim and
  // every image 404s in the production build.
  // Listing a flat tag map replaces the compiler defaults, so the built-in tags
  // are repeated here on purpose.
  vue: {
    template: {
      transformAssetUrls: {
        video: ['src', 'poster'],
        source: ['src'],
        img: ['src'],
        image: ['xlink:href', 'href'],
        use: ['xlink:href', 'href'],
        ZoomableImage: ['src'],
      },
    },
  },

  rewrites: {
    'docs/getting-started/:slug': ':slug',
    'docs/boards/:slug': ':slug',
    'docs/tasks/:slug': ':slug',
    'docs/stages/:slug': ':slug',
    'docs/integrations/:slug': ':slug',
    'docs/settings/:slug': ':slug',
    'docs/migrate/:slug': ':slug',
    'docs/reports/:slug': ':slug',
    'docs/roadmap/:slug': ':slug',
    'docs/changelog/:slug': ':slug',
  },

  // Custom CSS for brand colors
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/images/brand/fluentboards_primary_icon.png' }],
    [
      'style',
      {},
      `:root {
        --vp-c-brand: #473CCC;
        --vp-c-brand-1: #473CCC;
        --vp-c-brand-2: #5d4fd4;
        --vp-c-brand-3: #7362dc;
        --vp-c-brand-light: #5d4fd4;
        --vp-c-brand-lighter: #7362dc;
        --vp-c-brand-dark: #3b2fb8;
        --vp-c-brand-darker: #2f25a4;
        --vp-c-brand-soft: rgba(71, 60, 204, 0.14);
      }
      .dark {
        --vp-c-brand: #5d4fd4;
        --vp-c-brand-1: #5d4fd4;
        --vp-c-brand-2: #7362dc;
        --vp-c-brand-3: #8a7ae4;
        --vp-c-brand-light: #7362dc;
        --vp-c-brand-lighter: #8a7ae4;
        --vp-c-brand-dark: #473CCC;
        --vp-c-brand-darker: #3b2fb8;
        --vp-c-brand-soft: rgba(93, 79, 212, 0.16);
      }`
    ]
  ],

  // Theme configuration
  themeConfig: {
    logo: {
      light: '/images/brand/fluentboards_primary_logo.png',
      dark: '/images/brand/fluentboards_secondary_logo.png'
    },
    siteTitle: false,

    // Site navigation
    nav: [
      { text: 'Home', link: '/' },
      { text: 'User Guide', link: '/get-started-with-fluentboards' },
      {
        text: 'Website',
        link: 'https://fluentboards.com',
        target: '_blank',
        rel: 'noreferrer',
      },
      { text: 'Changelog', link: '/changelog' },
      { text: 'Support', link: '/how-to-get-support' },
    ],

    // Sidebar — flat array so it shows on all rewritten URLs
    sidebar: [
      {
        text: 'Getting Started',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/get-started-with-fluentboards' },
          { text: 'Installation', link: '/fluentboards-installation-guide' },
          { text: 'License Activation', link: '/fluentboards-licence-activation' },
          { text: 'Dashboard Overview', link: '/fluentboards-dashboard-overview' },
          { text: 'First Board Setup', link: '/onboarding-board' },
          { text: 'Shortcodes', link: '/shortcodes' }
        ]
      },
      {
        text: 'Boards',
        collapsed: true,
        items: [
          { text: 'Board Overview', link: '/board-overview' },
          { text: 'Create a Board', link: '/how-to-create-a-new-board' },
          { text: 'Board Views', link: '/boards-view' },
          { text: 'Board Settings', link: '/board-settings' },
          { text: 'Pinned Boards', link: '/pinned-boards' },
          { text: 'Board Folders', link: '/boards-with-folders' },
          { text: 'Manage Stages', link: '/how-to-create-a-new-stage' },
          { text: 'Default Assignee', link: '/stage-default-assignee' }
        ]
      },
      {
        text: 'Tasks',
        collapsed: true,
        items: [
          { text: 'Profile & Tasks', link: '/fluentboards-profile-and-task-overview' },
          { text: 'Manage Tasks', link: '/how-to-create-a-new-task' },
          { text: 'Task Actions', link: '/task-action' },
          { text: 'Task Templates', link: '/task-template' },
          { text: 'Recurring Tasks', link: '/recurring-task' },
          { text: 'Time Tracking', link: '/task-time-tracking' },
          { text: 'Custom Fields', link: '/custom-fields-for-task' },
          { text: 'AI Task Features', link: '/ai-features-in-task-cards' }
        ]
      },
      {
        text: 'Team & Collaboration',
        collapsed: true,
        items: [
          { text: 'Member Roles', link: '/member-roles' },
          { text: 'Notifications', link: '/notification-settings' },
          { text: 'Daily Reminders', link: '/daily-reminder-settings' }
        ]
      },
      {
        text: 'Integrations',
        collapsed: true,
        items: [
          { text: 'Fluent Forms', link: '/fluentboards-integration-with-fluent-forms' },
          { text: 'FluentCRM', link: '/fluentboards-integration-with-fluentcrm' },
          { text: 'FluentSupport', link: '/fluentboards-integration-with-fluentsupport' },
          { text: 'Incoming Webhooks', link: '/incoming-webhook' },
          { text: 'Outgoing Webhooks', link: '/outgoing-webhooks' }
        ]
      },
      {
        text: 'Cloud Storage',
        collapsed: true,
        items: [
          { text: 'Amazon S3', link: '/fluentboards-integration-with-amazon-s3' },
          { text: 'Cloudflare R2', link: '/fluentboards-integration-with-cloudflare-r2' },
          { text: 'Backblaze', link: '/fluentboards-integration-with-backblaze' },
          { text: 'DigitalOcean', link: '/fluentboards-integration-with-digital-ocean' }
        ]
      },
      {
        text: 'Migrate to FluentBoards',
        collapsed: true,
        items: [
          { text: 'Import from Trello', link: '/import-from-trello' },
          { text: 'Import from Asana', link: '/import-boards-from-asana' },
          { text: 'Import Boards', link: '/import-boards-into-fluentboards' }
        ]
      },
      {
        text: 'Settings & Preferences',
        collapsed: true,
        items: [
          { text: 'Card View', link: '/card-view-preference-settings' },
          { text: 'Frontend Portal', link: '/frontend-portal-settings' },
          { text: 'Menu Position', link: '/fluentboards-menu-position-in-wordpress' },
          { text: 'AI Model Setup', link: '/ai-model-setup' },
          { text: 'MCP for AI Agents', link: '/mcp-for-ai-agents' }
        ]
      },
      {
        text: 'Roadmap & Reports',
        collapsed: true,
        items: [
          { text: 'Reports', link: '/fluentboard-reports' },
          { text: 'Tasks Report', link: '/task-report' },
          { text: 'Activity Reports', link: '/activity-report' },
          { text: 'Roadmap Overview', link: '/fluentboards-roadmap-overview' },
          { text: 'Roadmap Settings', link: '/roadmap-settings' },
          { text: 'Roadmap Report', link: '/roadmap-report' }
        ]
      },
      {
        text: 'Changelog',
        collapsed: true,
        items: [
          { text: 'Changelog', link: '/changelog' }
        ]
      }
    ],

    // Social links
    socialLinks: [],

    // Footer
    footer: {
      copyright: 'Copyright © 2026 FluentBoards'
    },

    // Search
    search: {
      provider: 'local'
    }
  }
})
