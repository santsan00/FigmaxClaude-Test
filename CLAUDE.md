# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install dependencies (run once after cloning)
npm run dev        # start dev server at http://localhost:3000
npm run build      # production build (verifies static generation)
npm run start      # serve production build
npm run lint       # run ESLint
```

## Architecture

This is a **statically generated Next.js 15 blog** (App Router) where content comes entirely from Markdown files — no database, no API.

### Data flow

```
posts/*.md  →  lib/posts.ts  →  app/page.tsx (listing)
                             →  app/posts/[slug]/page.tsx (post)
```

`lib/posts.ts` is the single data layer:
- `getAllPosts()` — synchronous; reads all `.md` files, parses frontmatter with `gray-matter`, returns `PostMeta[]` sorted newest-first
- `getPostBySlug(slug)` — async; runs the markdown body through `remark` + `remark-html` (`sanitize: false`) to produce `contentHtml`

Both pages are React Server Components with no client-side data fetching.

### Adding a blog post

Drop a `.md` file into `/posts/` with this frontmatter:

```md
---
title: "Post Title"
date: "YYYY-MM-DD"
excerpt: "One-sentence description shown on the listing page."
---

Body content here (standard Markdown).
```

The slug is derived from the filename (e.g. `my-post.md` → `/posts/my-post`). No code changes needed.

### Next.js 15 patterns in use

- `params` is typed as `Promise<{ slug: string }>` and must be awaited — this is a Next.js 15 breaking change from v13/14
- `generateStaticParams` in `app/posts/[slug]/page.tsx` pre-renders all posts at build time (all routes show as `○` static in `npm run build` output)
- `generateMetadata` provides per-post `<title>` using the template defined in `app/layout.tsx`

### Styling

Tailwind CSS with `@tailwindcss/typography`. The `prose` utility class in the post page styles all raw HTML output from remark (headings, code blocks, links, etc.) without hand-targeting elements.

# Unicorn Studio Integration

I want to embed a Unicorn Studio WebGL scene into my project.

**Project ID:** `DQAxZZ5IK1QPCHyuQu3C`
**SDK Version:** `2.1.3`

## For React / Next.js

Install the package:
```bash
npm install unicornstudio-react
```

**Next.js** (App Router or Pages Router):
```jsx
import UnicornScene from "unicornstudio-react/next";

export default function MyComponent() {
  return (
    <UnicornScene 
      projectId="DQAxZZ5IK1QPCHyuQu3C" 
      sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js"
      width="100%" 
      height="400px" 
    />
  );
}
```

## Important Notes

- The container element needs explicit width and height to render properly
- Use `scale` (0.25-1) to improve performance on slower devices
- Set `lazyLoad: true` to defer loading until visible in viewport
- For production, add `production: true` to enable CDN caching

## Links
- React Package: https://www.npmjs.com/package/unicornstudio-react
- SDK Docs: https://github.com/hiunicornstudio/unicornstudio.js
- Full Guide: https://www.unicorn.studio/docs/embed/
- Performance Guide: https://www.unicorn.studio/docs/performance/