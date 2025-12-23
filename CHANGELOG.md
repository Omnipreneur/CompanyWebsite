# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-12-XX

### Added

- **Initial Website Release** - Complete production-ready marketing website for Omnipreneur
  - Next.js 14+ with App Router and TypeScript
  - Bilingual support (Turkish default, English) using next-intl
  - Complete page structure:
    - Home page with hero, services overview, use cases, observability highlights, process, and references
    - Services page with 4 detailed service offerings (Digital Systems, AI Analysis, RAG, Observability)
    - Solutions page with 4 use case narratives (Wholesale, Federation, Operations, Catalog)
    - Technology page covering principles, architecture, observability stack, governance, and environments
    - References page with 2 detailed case studies
    - Blog listing and post pages with 3 sample posts (bilingual)
    - Contact page with form and scheduling CTA
  - Design system implementation:
    - Brand colors (#705CF2 primary, gradient from purple to blue)
    - Inter font family
    - Responsive layout (max-width 1280px, mobile-first)
    - shadcn/ui component library (Button, Card, Badge, Input, Textarea, Select)
    - Subtle Framer Motion animations
  - SEO optimization:
    - Sitemap generation
    - Robots.txt
    - Page metadata
    - Structured data ready
  - Layout components:
    - Header with navigation, language switcher, and mobile menu
    - Footer with links, contact info, and legal pages
  - Internationalization:
    - Complete Turkish and English translations
    - Language switcher functionality
    - Locale-aware routing (/ for Turkish, /en for English)

### Technical Details

- **Framework**: Next.js 14.2.0 with App Router
- **Styling**: Tailwind CSS 3.4.7
- **i18n**: next-intl 3.19.0
- **Animations**: Framer Motion 11.3.0
- **Icons**: Lucide React 0.400.0
- **Components**: shadcn/ui style components

