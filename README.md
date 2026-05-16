# Astro Local Service Template

Template for local service businesses built with Astro, Vue 3, Tailwind CSS v4, and GSAP.

## Tech Stack
- **Astro 5+** — Static site generation
- **Vue 3** — Interactive islands (forms, sliders, etc.)
- **Tailwind CSS v4** — Utility-first styling
- **GSAP** — Scroll-triggered animations
- **@astrojs/sitemap** — Auto-generated sitemap

## Quick Start

1. **Replace placeholders** in all files:
   - `src/lib/constants.ts` — All client data
   - `src/styles/global.css` — Brand colors
   - `astro.config.mjs` — Domain
   - `public/robots.txt` — Domain
   - `public/llms.txt` — Client info
   - All `.astro` files — `{{PLACEHOLDER}}` values

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Run dev server:**
   ```bash
   bun dev
   ```

4. **Build:**
   ```bash
   bun run build
   ```

## Customization Guide

### Adding a Service
1. Add to `SERVICES` array in `src/lib/constants.ts`
2. The service page at `/{service-slug}/` is auto-generated
3. Local SEO pages at `/{service-slug}/{city}/` are auto-generated

### Adding a City
1. Add to `CITIES` array in `src/lib/constants.ts`
2. Local SEO pages are auto-generated for all service+city combinations

### Changing Colors
Edit CSS custom properties in `src/styles/global.css`:
- `--color-primary` — Main brand color
- `--color-accent` — CTA/WhatsApp color

### Adding Testimonials
Add to the `TESTIMONIALS` array in `src/lib/constants.ts` (or create one if not present)

## Page Structure
- `/` — Homepage (hero, services, differentials, testimonials, areas, FAQ, CTA)
- `/{service}/` — Service page
- `/{service}/{city}/` — Local SEO page

## SEO Features
- Unique title, meta description, canonical URL per page
- Open Graph + Twitter Card tags
- JSON-LD Schema.org (LocalBusiness, Service, FAQPage)
- Auto-generated sitemap
- llms.txt for AI discoverability
- Semantic HTML with proper heading hierarchy

## Deployment
Designed for Vercel deployment. Connect GitHub repo to Vercel for auto-deploys.
