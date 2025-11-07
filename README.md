# Fundex Landing (Next.js + Tailwind)

Concept landing inspired by the shared Fundex visuals. Built with Next.js App Router and Tailwind.

## Quick start

1. Install deps
2. Run dev server

```pwsh
# From the project root
npm i
npm run dev
```

Open http://localhost:3000.

## Cookie consent (CookieYes)

- Add `.env.local` with `NEXT_PUBLIC_COOKIEYES_ID=<your-id>` to load the official CookieYes script.
- If not set, a lightweight local banner renders as a fallback.

## Customize

- Colors and radii in `tailwind.config.ts`
- Global utilities in `app/globals.css`
- Sections live in `app/page.tsx`. Replace placeholder blocks with your assets (dashboard screenshots, charts, etc.).
