# OLWWDJT_GOOGLE

A modern, responsive Next.js landing page for an Airbnb assistant/property management service. The project is built with reusable section components, typed local data modules, animated UI interactions, and light/dark theming.

<div align="center">
    <img src="/public/assets/landing1.png" width="49%" alt="Landing Page 1" />
    <img src="/public/assets/landing2.png" width="49%" alt="Landing Page 2" />
</div>

![React](https://img.shields.io/badge/React-19.2.4-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.2.1-38bdf8) ![Next.js](https://img.shields.io/badge/Next.js-16.1.7-000000)

## ✨ Features

- Section-based landing experience: hero, partner logos, services, pricing, tools, getting-started flow, testimonials, FAQs, and contact CTA.
- Interactive pricing toggle between monthly and yearly plans.
- FAQ accordion UI with animated reveal behavior.
- Smooth scrolling powered by Lenis.
- Scroll-triggered animations using AOS.
- Custom image-based cursor that adapts on interactive elements.
- Theme support via `next-themes` with a keyboard toggle (`D`).
- Fully typed local content sources in `db/*` for pricing, FAQs, services, tools, steps, and reviews.

## ⚙️ Environment Variables

Create a `.env.local` file in the root of the project and configure the following environment variables:

```dotenv
NEXT_PUBLIC_SITE_URL=production-site-url
```

## 🚀 Getting Started

```bash
yarn install
yarn dev
```

Build and run production:

```bash
yarn build
yarn start
```

Quality checks:

```bash
yarn lint
yarn typecheck
yarn format
```

## 🛠️ Built With

- Next.js
- React
- TypeScript
- Tailwind CSS
- Radix UI
- shadcn/ui
- AOS
- Lenis
- next-themes
- Phosphor Icons

## 📁 Project Structure

```text
app/                  # App Router entry files (layout, page, global styles)
components/           # Reusable UI and section components
components/ui/        # Base UI primitives (accordion, sheet, switch, button)
db/                   # Typed local data sources for page sections
lib/                  # Shared utility helpers
public/assets/        # Static images and brand assets
```

## 💡 Key Notes

- The page composition is centralized in `app/page.tsx` using modular section components.
- Global providers and UX behaviors (theme, AOS init, smooth scroll, custom cursor) are managed in `components/theme-provider.tsx`.
- Content is decoupled from presentation through typed data modules in `db/`.

## 👨‍💻 Author

- tushar-454 (<imtushar454@gmail.com>)
