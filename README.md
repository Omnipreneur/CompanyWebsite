# Omnipreneur Company Website

Production-ready marketing website for Omnipreneur, a B2B engineering firm specializing in digital and AI transformation.

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next-intl** for internationalization (Turkish/English)
- **shadcn/ui** components
- **Framer Motion** for subtle animations
- **Lucide React** for icons

## Features

- ✅ Bilingual support (Turkish default, English)
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized (sitemap, robots.txt, metadata)
- ✅ Modern UI with enterprise-grade design
- ✅ All pages implemented with full content

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Install dependencies:

```bash
pnpm install
# or
npm install
```

2. Place your logo file at `public/brand/logo.png`

3. Run the development server:

```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── [locale]/          # Localized routes
│   │   ├── page.tsx       # Home page
│   │   ├── hizmetler/     # Services page
│   │   ├── cozumler/      # Solutions page
│   │   ├── teknoloji/     # Technology page
│   │   ├── referanslar/   # References page
│   │   ├── blog/          # Blog listing & posts
│   │   └── iletisim/      # Contact page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/
│   ├── layout/            # Header, Footer
│   ├── ui/                # shadcn/ui components
│   └── animations/        # Framer Motion wrappers
├── messages/              # Translation files
│   ├── tr.json           # Turkish translations
│   └── en.json           # English translations
├── i18n/                 # i18n configuration
└── lib/                  # Utilities
```

## Pages

- **Home** (`/`) - Hero, services overview, use cases, process, references
- **Services** (`/hizmetler`) - 4 detailed service offerings
- **Solutions** (`/cozumler`) - Use case narratives
- **Technology** (`/teknoloji`) - Approach and principles
- **References** (`/referanslar`) - Case studies
- **Blog** (`/blog`) - Blog listing and posts
- **Contact** (`/iletisim`) - Contact form

## Internationalization

The site supports Turkish (default) and English. Routes:
- Turkish: `/`, `/hizmetler`, `/cozumler`, etc.
- English: `/en`, `/en/services`, `/en/solutions`, etc.

Language switcher is available in the header.

## Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Environment Variables

Create a `.env.local` file if needed:

```env
SITE_URL=https://omnipreneur.io
```

## Design System

- **Primary Color**: #705CF2
- **Gradient**: Purple to blue gradient
- **Typography**: Inter font family
- **Max Width**: 1280px container
- **Spacing**: 72-96px desktop, 48-64px mobile

## License

Proprietary - Omnipreneur
