# andreisimion.eu

Personal website and consulting portfolio for Andrei Simion — Enterprise Architecture & AI Adoption.

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [MDX](https://mdxjs.com/).

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run check
```

The dev server runs at `http://localhost:4321` by default.

## Project Structure

```
src/
├── components/       # Reusable UI components
├── content/
│   ├── blog/         # Blog posts (MDX)
│   └── case-studies/ # Case study content (MDX)
├── layouts/          # Page layouts (Base, Blog)
├── pages/            # Route pages
│   ├── blog/         # Blog listing and dynamic post pages
│   ├── case-studies/ # Case study listing and detail pages
│   ├── services.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── privacy.astro
│   └── legal.astro
├── styles/           # Global CSS
├── consts.ts         # Site constants and service definitions
└── content.config.ts # Content collection schemas
public/
├── CNAME             # Custom domain for GitHub Pages
├── favicon.svg
└── robots.txt
```

## Adding Content

### Blog Posts

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
description: "Brief description for SEO and cards."
date: 2026-03-01
tags: ["Tag1", "Tag2"]
---

Your content here...
```

### Case Studies

Create a new `.mdx` file in `src/content/case-studies/`:

```mdx
---
title: "Project Title"
client: "Client Name"
industry: "Industry"
description: "Brief description."
date: 2026-03-01
tags: ["Tag1", "Tag2"]
results:
  - "Key result 1"
  - "Key result 2"
---

## Challenge
...
```

## Contact Form

By default, the contact form uses a `mailto:` fallback. To connect a form service:

1. Copy `.env.example` to `.env`
2. Set `PUBLIC_FORM_ENDPOINT` to your form service URL (e.g., Formspree, Getform)
3. The form will automatically POST to that endpoint

## Analytics

To enable analytics:

1. Set `PUBLIC_ANALYTICS_PROVIDER` to `plausible` or `ga`
2. Set `PUBLIC_ANALYTICS_ID` to your site ID or tracking code
3. Analytics scripts load only when these variables are set

## Deployment

This site is configured for **GitHub Pages** with a custom domain.

### GitHub Pages Setup

1. In your repo settings, go to **Pages**
2. Set source to **GitHub Actions** (or deploy from the `dist/` folder)
3. Add custom domain: `www.andreisimion.eu`

### DNS Configuration

Add these DNS records at your domain registrar:

| Type  | Name  | Value                       |
|-------|-------|-----------------------------|
| CNAME | www   | andreisimio.github.io       |
| A     | @     | 185.199.108.153             |
| A     | @     | 185.199.109.153             |
| A     | @     | 185.199.110.153             |
| A     | @     | 185.199.111.153             |

### Alternative: Netlify / Cloudflare Pages

For Astro sites, these platforms also work well:

```bash
# Build command
npm run build

# Publish directory
dist/
```

## Tech Stack

- **Framework**: [Astro](https://astro.build) (static output)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) with `@tailwindcss/typography`
- **Content**: [MDX](https://mdxjs.com/) via Astro content collections
- **SEO**: `@astrojs/sitemap`, OpenGraph, Twitter cards, structured data
- **Icons**: Inline SVG (zero JS overhead)
- **Fonts**: Inter + Plus Jakarta Sans (Google Fonts)

## License

MIT
