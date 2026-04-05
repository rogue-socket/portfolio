# portfolio

Simple static portfolio website with an editorial taxonomy-browser UI.

## What This Is

This is a lightweight static website built with plain HTML, CSS, and JavaScript.

- index.html is the main landing page.
- styles.css holds the shared visual system and layout.
- script.js contains the explorer data and interactions.
- details/ contains the individual project detail pages.

## How To Preview It

You can use the site without a build step.

1. Open index.html in your browser.
2. Browse the main taxonomy explorer and open the project detail pages from there.

If you prefer serving it locally through a simple dev server, any static server will work.

## How To Edit The Content

Most of the homepage content lives in two places.

1. Update the hero text, summary panels, and overview cards in index.html.
2. Update the explorer sections, groups, and items in script.js.

In script.js, each top-level section contains:

- a label and title
- a subtitle
- groups
- items inside each group

Each item can include:

- title
- subtitle
- status
- chips
- href for links to a detail page or external URL

## How To Add A New Project

1. Add a new item inside the Selected Projects section in script.js.
2. Set its href to a new page inside the details folder.
3. Create the matching HTML detail page in details/.
4. Reuse the existing detail-page structure so the design stays consistent.

## How To Update Experience Or Portfolio Materials

The homepage explorer already includes dedicated sections for:

- projects
- experience
- portfolio materials
- writing
- contact

Add or remove entries in script.js to expand those areas as your portfolio grows.

## How To Change Styling

Edit styles.css to adjust:

- colors
- spacing
- typography
- card layouts
- explorer row styling

The design uses a soft editorial layout, so major changes should usually stay light, spacious, and text-first.

## Publishing

Because the site is static, it can be hosted on any static platform, including GitHub Pages, Netlify, Vercel static hosting, or any standard web server.

## Placeholder Content

The current content uses placeholder names, links, and project descriptions. Replace those with your own:

- name
- email
- GitHub and LinkedIn links
- project titles and summaries
- role history
- supporting portfolio materials