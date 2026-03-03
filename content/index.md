---
title: henry is online
eleventyNavigation:
  key: Home
  order: 1
---
# This is my website.
I'm Henry, and this is my website. I made this because I wanted a place on the internet that wasn't attached to any kind of social media service. 

If you want to read more about me, or about this website, you can do so [here](/about/).

Sometime soon, I'll have my most recent posts listed here. Until that point, enjoy this *very* basic landing page. The whole website is still under construction, so layouts and other things are subject to change. I'll try my best not to break too many links, though.

{#
# Recent Posts
I have some nunjucks here that I need to get working. I haven't yet figured out how I can do that, but when I do, god help you all.

{% raw %}
```
{% set postslist = collections.posts | head(-1 * numberOfLatestPostsToShow) %}
{% set postslistCounter = postsCount %}
{% include "postslist.njk" %}
```
{% endraw %}
#}

More posts can be found in the [blog](/blog/).
