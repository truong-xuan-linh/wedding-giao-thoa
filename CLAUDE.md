# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Nét Giao Thoa" — an online Vietnamese wedding invitation website for Trần Minh Quân & Nguyễn Thị Lan Anh (wedding date: June 15, 2026). Built on Next.js 15 App Router with React 19, TypeScript, Tailwind CSS 4, and Framer Motion.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Run production server
npm run lint     # ESLint check
```

## Architecture

### Entry Flow

1. `src/app/page.tsx` reads `?guest=Name` URL param and passes it down
2. `src/components/MainContent.tsx` is the root orchestrator — it owns `introComplete` state
3. `EnvelopeIntro` renders as a full-screen overlay; once dismissed, the main content fades in
4. Content is a single vertical-scroll page with sections in fixed order

### Key Patterns

- **Dynamic imports with `ssr: false`** are used for heavy/interactive components: `PhotoAlbum`, `Guestbook`, `LixiBox`, `MiniGame`
- **All wedding content/data** lives in `src/data/weddingData.ts` — update content there, not in components
- **API route** at `src/app/api/wishes/route.ts` uses in-memory storage (no database); wishes reset on server restart
- **Path alias**: `@/*` maps to `src/*`

### Design System

All CSS variables are defined in `src/app/globals.css`:

- Colors: `--lacquer-red` (#7A1515), `--gold` (#B8860B), `--cream` (#FDF6E3), `--jade` (#2D6A4F), `--lotus-pink` (#E8738A)
- Fonts: `--font-display` (Playfair Display), `--font-body` (Lora), `--font-accent` (Dancing Script)
- Decorative patterns: Trống Đồng SVG, lotus dividers, traditional frames — all in globals.css

### Assets

- Wedding photos: `public/images/1.webp` through `20.webp`
- Background music: `public/audio/background-music.mp3`
- Next.js image optimization is disabled (`unoptimized: true` in `next.config.ts`)
