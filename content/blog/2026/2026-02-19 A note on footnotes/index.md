---
title: A note on footnotes
date: 2026-02-19
tags:
  - blogging
---
I like writing in obsidian because to me, it's the most capable editor out there. It can do *so so* much with markdown, and the extensive plugin support is amazing. However, many of the base features will do just about anything anyone needs. By simply typing the markdown syntax for a footnote, you get the option to add one [^1]. 

Getting these to work in Eleventy is a little more complex, but fortunately for us, this is the Internet®, and [someone has already figured it out](https://blog.martin-haehnel.de/blog/2025/02/11/footnotes-in-eleventy/). For the sake of posterity and preservation, I'll put a short version here.

1. Install the markdown-it-footnotes plugin (I use pnpm, but the syntax is the same for npm)
```sh
pnpm install markdown-it-footnote --save
```

2. Import the library in your `eleventyconfig.js` — this goes at the top of your file
```js
import footnote_plugin from 'markdown-it-footnote';
```

3. Put this line under `export default async function(eleventyConfig) {` in your config file
```js
eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(footnote_plugin));
```

That's it! Super simple. Now you can have all the footnotes you want [^2].

- - -

[^1]: Like this one here. They're very useful.

[^2]: Massive thanks to [Martin Hähnel](https://blog.martin-haehnel.de/) for this.
