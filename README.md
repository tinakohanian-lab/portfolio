# Tina Ohanian — Portfolio

A static portfolio site built with [Astro](https://astro.build). Same design as
before, now broken into reusable components with content you can edit without
touching layout code.

## Running locally

```bash
npm install      # first time only
npm run dev      # start the local dev server → http://localhost:4321
npm run build    # build the production site into ./dist
npm run preview  # preview the production build locally
```

(If `npm` isn't found, Node lives at `/opt/homebrew/bin` — run
`export PATH="/opt/homebrew/bin:$PATH"` first.)

## Where everything lives

```
src/
  pages/index.astro       ← the homepage (just stitches the sections together)
  layouts/Layout.astro    ← <head>, fonts, global styles
  components/             ← one file per section (Hero, Work, Deals, …)
  content/work/           ← Selected Work projects — one .md file per project
  data/                   ← editable lists: deals.json, gallery.json, brands.json
  styles/global.css       ← all the site styling
public/                   ← images, Files (PDFs), and the standalone HTML pages
reference/                ← the original single-file index.html, kept for reference
```

## Editing content (no code needed)

- **Add / edit a work project** → edit or add a file in `src/content/work/`.
  Copy an existing `.md` file, change the fields at the top, and set `order` to
  position it in the grid. Drop the image into `public/images/`.
- **Deals supported** → edit `src/data/deals.json`.
- **Gallery mockups** → edit `src/data/gallery.json`. Set `"span": 2` to make a
  tile twice as wide.
- **Scrolling brand bar** → edit `src/data/brands.json`.
- **Bio, education, resume, contact details** → edit the matching component in
  `src/components/`.

The section counts ("06 projects", "21 mockups", etc.) update automatically.

## Contact form

The contact form uses **Netlify Forms** — no backend code. Netlify detects it
automatically when the site deploys. To get messages emailed to you:

> Netlify dashboard → your site → **Forms** → **contact** →
> **Settings & notifications** → add an email notification to
> `tinakohanian@gmail.com`.

## Deploying

Pushing to `main` triggers the GitHub Action in `.github/workflows/deploy.yml`,
which runs `npm run build` and publishes `dist/` to Netlify.
