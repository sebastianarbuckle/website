# Drunken Ninja — Website Specification

**Version:** 1.5  
**Status:** Draft — awaiting approval  
**Last updated:** 2026-11-24

---

## 1. Purpose

Drunken Ninja is a personal blog for writing and projects on journalism, finance, film, and other topics the owner is interested in. The site is public — anyone can visit and read. Only the owner (Sebastian) publishes content. There is no user login, no comments section, and no social features in this first version.

---

## 2. Pages

### 2.1 Home Page
- Displays published articles in a two-column grid, newest first.
- Each article in the list shows:
  - Title
  - Publication date
  - A short description (one or two sentences)
  - A category label (e.g. "Journalism", "Finance", "Film", or similar — categories are open-ended, not a fixed list)
- Clicking an article takes you to the full article page.
- The site name "Drunken Ninja" appears prominently at the top.
- No tagline — pure minimalism, name only.

### 2.2 Article Page
- Displays the full text of a single article.
- Shows: title, date, category, and the article body.
- A "Share" button is included on the article page. Clicking it copies the article's web address to the clipboard and shows a brief confirmation message (e.g. "Link copied").
- A link at the bottom returns the reader to the home page.

### 2.3 About Page
- A short page introducing the site and its author.
- Linked from the navigation.
- Final text:

  > Writing and projects on journalism, finance, film, and other things I'm interested in.

---

## 3. Navigation

A simple navigation bar at the top of every page containing:
- **Drunken Ninja** (site name, links to home)
- **About** (links to About page)

No other navigation items in version 1.

---

## 4. Visual Design

### Tone
Minimal, slightly formal, and playful. Clean and uncluttered. Takes itself seriously enough to feel credible, but has personality. Inspired by the aesthetic of Retro Ralph (@retroralph.uk).

### Colours
- Background: off-white / pale cream
- Body text: black
- Titles: black, set in the editorial serif style referenced below (no separate accent colour — the contrast comes from typography, not colour)

### Typography
- Headings/titles: an elegant serif font with an editorial, slightly film-grain feel — referencing the caption style seen in Retro Ralph's videos (e.g. "born in the 19th century on Savile Row")
- Body text: a clean, readable sans-serif
- Both fonts to be free and web-safe

### Layout
- Single column, centred on the page
- Generous spacing between elements
- No sidebars
- No clutter

### Logo / Branding
- Text-only — no image logo in version 1
- The name "Drunken Ninja" styled with the chosen heading font

---

## 5. Content Management (How Sebastian Publishes Articles)

Sebastian writes and publishes articles without any third-party platform or admin dashboard. The process is:

1. Create a new text file in a specific folder in the project
2. Write the article using a simple format (title, date, category, body text)
3. Save and push the file to GitHub
4. The website updates automatically within one to two minutes

No coding knowledge is required to write an article — only familiarity with saving a file and using GitHub.

---

## 6. Technical Approach (Plain English Summary)

| Component | What it is | Why |
|-----------|-----------|-----|
| Astro | The framework that turns text files into a website | Purpose-built for blogs; simple and fast |
| Markdown | The format for writing articles | Like a plain text file with basic formatting |
| GitHub | Where all files are stored | Already set up; triggers automatic publishing |
| Vercel | Free hosting service | Watches GitHub and publishes updates automatically |
| Tailwind CSS | Styling tool | Makes it easy to apply consistent design |

---

## 7. Out of Scope (Version 1)

The following will NOT be built in this version:

- Search functionality
- Comments or reader interaction
- Email newsletter
- Platform-specific share buttons (e.g. direct-to-X/Facebook/WhatsApp posting) — only a copy-link share is included in version 1
- Tags or filtering by category on the home page
- Dark mode
- Mobile app

These can be added in a future version.

---

---

*This specification must be approved before any code is written. To approve, confirm in conversation. To request changes, describe what you'd like adjusted.*
