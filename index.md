---
layout: home

hero:
  name: "FluentBoards"
  text: "Documentation"
  tagline: "The Simplest WordPress Project Management Plugin"
  image:
    src: /images/brand/fluentboards-hero-banner.webp
    alt: FluentBoards
  actions:
    - theme: brand
      text: Get Started
      link: /get-started-with-fluentboards
    - theme: alt
      text: Dev Docs
      link: https://developers.fluentboards.com/

features:
  - icon: 🚀
    title: Getting Started
    details: Learn the basics of FluentBoards and get up and running quickly with our comprehensive getting started guides.
    link: /get-started-with-fluentboards
    linkText: Get Started 
  - icon: 📋
    title: Board Management
    details: Master board creation, organization, and management. Learn how to create boards, manage folders, and customize your workflow.
    link: /how-to-create-a-new-board
    linkText: Learn More 
  - icon: ✅
    title: Task Management
    details: Discover powerful task management features including task templates, time tracking, recurring tasks, and custom fields.
    link: /how-to-create-a-new-task
    linkText: Explore Tasks 
  - icon: 🔌
    title: Integrations
    details: Connect FluentBoards with Fluent Forms, FluentCRM, FluentSupport, and cloud storage services like S3, R2, and more.
    link: /fluentboards-integration-with-fluent-forms
    linkText: See Integrations 
  - icon: ⚙️
    title: Settings & Configuration
    details: Configure member roles, notifications, webhooks, frontend portal, and customize your FluentBoards experience.
    link: /member-roles
    linkText: Configure 
  - icon: 📈
    title: Reports & Analytics
    details: Track your project progress with comprehensive reports and analytics to keep your team on track.
    link: /fluentboard-reports
    linkText: View Reports 

---

<style>
.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.quick-links h3 {
  margin-top: 0;
  color: var(--vp-c-brand-1);
  font-size: 1.2rem;
}

.quick-links ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}

.quick-links li {
  margin: 0.75rem 0;
  padding-left: 0;
}

.quick-links a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s;
}

.quick-links a:hover {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
}

.footer-note {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.footer-note a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.footer-note a:hover {
  text-decoration: underline;
}

/* Get Started button brand color */
.VPHero .VPButton.brand {
  background-color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.VPHero .VPButton.brand:hover {
  background-color: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
}
</style>
