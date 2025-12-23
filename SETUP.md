# Omnipreneur Website - Setup Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Place logo:**
   - Copy your logo to `public/brand/logo.png`
   - The logo should be at least 180px wide for best results

3. **Run development server:**
   ```bash
   pnpm dev
   ```

4. **Access the site:**
   - Turkish (default): http://localhost:3000
   - English: http://localhost:3000/en

## Project Structure

```
├── app/
│   ├── [locale]/              # All pages are under locale
│   │   ├── page.tsx          # Home (/)
│   │   ├── hizmetler/         # Services (/hizmetler or /en/hizmetler)
│   │   ├── cozumler/          # Solutions
│   │   ├── teknoloji/         # Technology
│   │   ├── referanslar/       # References
│   │   ├── blog/              # Blog listing & posts
│   │   └── iletisim/          # Contact
│   ├── layout.tsx             # Root layout (html/body)
│   ├── [locale]/layout.tsx    # Locale layout (Header/Footer)
│   ├── sitemap.ts             # Sitemap generation
│   └── robots.ts              # Robots.txt
├── components/
│   ├── layout/                # Header, Footer
│   ├── ui/                    # shadcn/ui components
│   └── animations/            # Framer Motion wrappers
├── messages/                  # Translation files
│   ├── tr.json               # Turkish
│   └── en.json               # English
└── i18n/                      # i18n configuration
```

## Routing

With `localePrefix: 'as-needed'`:
- Turkish (default): `/`, `/hizmetler`, `/cozumler`, etc.
- English: `/en`, `/en/hizmetler`, `/en/cozumler`, etc.

The same route paths work for both locales - content changes based on locale via translations.

## Key Features Implemented

✅ **All Pages:**
- Home with all sections (Hero, Services, Why, Use Case, Observability, Process, References, CTA)
- Services (4 detailed service blocks)
- Solutions (4 use case narratives)
- Technology (Principles, Architecture, Observability, Governance)
- References (2 case studies)
- Blog (Listing + 3 sample posts)
- Contact (Form + info)

✅ **Internationalization:**
- Turkish (default) and English
- Language switcher in header
- All content from translation files

✅ **Design System:**
- Brand colors (#705CF2 primary, gradient)
- Inter font family
- Responsive (mobile-first)
- shadcn/ui components
- Subtle Framer Motion animations

✅ **SEO:**
- Sitemap generation
- Robots.txt
- Metadata per page
- Structured data ready

## Customization

### Adding New Pages

1. Create page in `app/[locale]/your-page/page.tsx`
2. Add translations to `messages/tr.json` and `messages/en.json`
3. Add nav link in `components/layout/Header.tsx`

### Updating Content

All user-facing text is in translation files:
- `messages/tr.json` - Turkish content
- `messages/en.json` - English content

### Styling

- Colors: `tailwind.config.ts`
- Global styles: `app/globals.css`
- Component styles: Tailwind classes

## Build & Deploy

```bash
# Build
pnpm build

# Start production
pnpm start
```

## Notes

- Logo must be placed at `public/brand/logo.png`
- All routes work for both locales automatically
- Form submissions need backend integration (currently logs to console)
- Blog posts are hardcoded - can be moved to CMS/database

