---
layout: "layouts/base.njk"
title: Henry is Online
eleventyNavigation:
  key: Home
  order: 1
---
# This is my website.
I'm Henry, and this is my website. I made this because I wanted a place on the internet that wasn't just an Instagram page or Mastodon account.

If you want to read more about me, you can do so [here](/about).

If you want to know more about this website and how I made it, check out [the colophon](/colophon/).

# Recent Posts
I have some nunjucks here that I need to get working. I haven't yet figured out how I can do that, but when I do, god help you all.

{% raw %}
```
{% set postslist = collections.posts | head(-1 * numberOfLatestPostsToShow) %}
{% set postslistCounter = postsCount %}
{% include "postslist.njk" %}
```
{% endraw %}

More posts can be found in the [blog](/blog/)
