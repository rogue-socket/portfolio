# portfolio

Simple static portfolio website with an editorial, scan-first layout.

## What This Is

This is a lightweight static website built with plain HTML, CSS, and JavaScript.

- index.html is the main landing page.
- styles.css holds the shared visual system, right-side rail, and layout.
- script.js contains the homepage section data and rendering.
- theme.js handles theme switching and rail section highlighting.
- details/ contains the individual project detail pages.
- writing/ contains the writing archive and individual essays, notes, and lists.

## How To Preview It

You can use the site without a build step.

1. Open index.html in your browser.
2. Browse the homepage overview lanes, writing archive, and project detail pages from there.

If you prefer serving it locally through a simple dev server, any static server will work.

## How To Edit The Content

Most of the homepage content lives in three places.

1. Update the hero text, action links, and signal cards in index.html.
2. Update the homepage sections, groups, and items in script.js.
3. Update the writing archive and post pages in writing/.

In script.js, each top-level homepage section contains:

- a label and title
- a subtitle
- an optional summary line
- groups
- items inside each group

Each item can include:

- title
- subtitle
- status
- chips
- href for links to a detail page or external URL

## How To Add A New Project

1. Add a new item inside the Selected Work section in script.js.
2. Set its href to a new page inside the details folder.
3. Create the matching HTML detail page in details/.
4. Reuse the existing detail-page structure so the design stays consistent.

## How To Add Writing

1. Add or update entries in writing/index.html.
2. Create the matching HTML page inside writing/.
3. Add the piece to the Writing section in script.js if you want it featured on the homepage.

## How To Update Homepage Sections

The homepage already includes dedicated sections for:

- selected work
- writing
- experience
- education
- leadership
- contact

Add or remove entries in script.js to expand those areas as your portfolio grows.

## How To Change Styling

Edit styles.css to adjust:

- colors
- spacing
- typography
- signal board cards
- homepage lane styling
- right-side rail behavior

The design uses a soft editorial layout, so major changes should usually stay light, spacious, and text-first.

## Publishing

Because the site is static, it can be hosted on any static platform, including GitHub Pages, Netlify, Vercel static hosting, or any standard web server.

## Content Notes

The content is plain HTML and JavaScript data, so most updates are simple text edits. Keep homepage summaries short, and use the writing archive for anything that needs more room than a project caption.