---
title: Adding the published date to post URLs in Eleventy
tags:
  - eleventy
  - development
date: 2026-01-25
---
I have been fiddling with [Eleventy](https://eleventy.dev) for a little while now, in an effort to build the website that you're (probably) reading this on. I'll end up writing a longer post about that and including it in the [colophon](./colophon), but I digress.

As I was building this website, I initially though it would be a good idea to include the year the post was published in the url, formatted like `./blog/YYYY/blog-post-title/`, as well as organise my output blog directory by year. I had unsuccessfully tried for a while to make this work, and only found success by modifying some code that I took from the [eleventy base blog](https://github.com/11ty/eleventy-base-blog/tree/main) repo.

The repo has a custom filter set in `_config/filters.js`, and part of this filter set creates dates using the [luxon](https://moment.github.io/luxon/#/) date engine. Using these filters, eleventy is able to create strings based on the input date metadata and format them however you want (within the contraints of luxon, of course). The two filers create:
- a human-readable date (called `readableDate`);
- an [ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html) date which can be prepended to a post title in the post list for quick scanning (called `htmlDateString`).
`htmlDateString` in particular was interesting to me, as it did almost exactly what I wanted it to do. 
```
eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat('yyyy-LL-dd');
    });
```
This function passes the date through luxon and formats it by using the [luxon tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) into an output string that looks like `2026-01-25`(for example).

Since all I wanted was a string that contained the date to be part of my URL structure, and I already had a filter that created a date string, I just needed some way to use that date filter in my `blog.json` [directory date file](https://www.11ty.dev/docs/data-template-dir/), transfer the post date to that filter, and put the whole thing in a [permalink](https://www.11ty.dev/docs/permalinks/) key which applies to every post. I ended up with this:
```
{
    "layout": "layouts/post.njk",
    "tags": "post",
    "permalink": "/blog/{{ page.date | htmlDateString }}/{{ title | slugify}}/index.html"
}
```

This does the following:
1. Assigns the layout file `post` to every blog post in the directory
2. Applies the `post` tag to every post in the directory (to make for easy sorting later)
3. Creates an output URL by taking the date from each page (`page.date`) and piping (`|`) it to the `htmlDateString` filer, which is globally available since it's referenced in the `.eleventy.config.js` [configuration file](https://www.11ty.dev/docs/config/).

All of this creates an output directory which looks like this:
```
. 
└── _site/ 
    └── blog/ 
        └── 2026-01-25/ 
            └── adding-the-publish-date-to-post-urls-in-eleventy
```
and a URL that looks like this:
`https://henryisonline/blog/2026-01-25/adding-the-publish-date-to-post-urls-in-eleventy`

This was, to me, a huge success. But I still wasn't done. I wanted just the year in both my URL and output directory, and this way just put the whole date there. This made my URLs longer and meant that my `_site/blog/` output directory would end up filled with folders that only contain one post, instead of being organised by year.

This was a simple fix. I created a new function called `yearString` which was identical in every way to `htmlDateString` with one exception: **only the year tokens for luxon were used.** This meant that the output string only contained the year.
```
eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat('yyyy');
    });
```

I referenced this function in my `blog.json` under the `permalink` key, giving me:
```
{
    "layout": "layouts/post.njk",
    "tags": "post",
    "permalink": "/blog/{{ page.date | yearString }}/{{ title | slugify}}/index.html"
}
```

With this change, my output directory now looks like this:
```
. 
└── _site/ 
    └── blog/ 
        └── 2026/ 
            └── adding-the-publish-date-to-post-urls-in-eleventy
```
and URLs look like this:
`https://henryisonline/blog/2026/adding-the-publish-date-to-post-urls-in-eleventy`

This also means that for every blog post I create, my output directory only grows by the year, which makes the whole thing much more manageable.

To implement this, I created a `date.js` file under a `_config` directory at the root of my site.
```
// Custom date filters based on = eleventy-base-blog

import { DateTime } from "luxon";

export default function(eleventyConfig) {
    eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
        // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
        return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
    });

    eleventyConfig.addFilter("htmlDateString", (dateObj) => {
        // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat('yyyy-LL-dd');
    });

    eleventyConfig.addFilter("yearString", (dateObj) => {
        // This is identical to the above function
        // The only difference is the removal of the month and year portions of the date format
        //
        // I use this to get the year a post was created and create a matching folder in the 
        // output directory, which then contains the slug of the post title.
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat('yyyy');
    });
};
```


I then referenced it in my config file:
```
import dateFilters from "./_config/date.js";
```

Everything was working perfectly.

However, I later learned that putting the dates in your URL is *perhaps* not best practice. That's not to say it's outright *wrong*, but a lot of blogs that I follow don't do this. In fact, I haven't seen *any* personal blogs do this. It seems to be a practice mostly reserved for newsrooms, where relaying the currency of any information is so important that *not* having the date in the URL would be completely foolish.

Last I checked, I'm not a newsroom. So I'm going back — removing all the work I did to create this permalink structure and replacing it with the good old `blog/title-slug/` URL structure. It seems like most blogs that use static site generators work this way, as do many other sites. Wordpress blogs seem to exhibit this behaviour by default, which seems to be a Wordpress quirk more than anything.

Oh well. At least I kept this record for my own sake, in case I every want to create something similar in the future. This might actually be a great way to run a photo gallery, where I can create albums organised by year. If I ever get around to doing that, I certainly will.