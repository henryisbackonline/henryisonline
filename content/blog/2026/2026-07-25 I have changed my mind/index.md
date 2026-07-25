---
title: I have changed my mind
date: 2026-07-25
---

Eleventy isn't enjoyable or useful for me any more. I have [lamented](../enough-is-enough) [about this](../not-enough-for-me-to-leave) and finally came to a decision thanks to [Louie Mantia](https://lmnt.me/blog/how-to-make-a-damn-website.html). I'm scrapping everything and starting from scratch. Real, honest-to-goodness scratch, like raw HTML and CSS and getting in the weeds about things. 

The biggest drawback is the lack of markdown. I *love* markdown, and it makes writing all my posts *much* easier, but I will admit that the main job of any static site generator that I'd ever use is pretty much just markdown conversion. I'm sure I could make writing HTML tags just as simple in a code editor (though Louie advocates for just [starting with TextEdit](https://lmnt.me/blog/how-to-make-a-damn-website.html#:~:text=The%20very%20first%20thing%20I%20did%20was%20open%20TextEdit), which I really like and may end up doing), *or* I could just suck it up and type the tags by hand. They're easy to type.

Anyway, this whole place is gonna look different pretty soon. I'm tearing everything down and building it back from the ground up. I'll be building it live, so it'll look a bit wonky for a while. My RSS feeds will probably break, and a bunch of links will no longer work. If I'm being honest, that's sort of the plan, since my site is unmanageable in its current state. The infrastructure[^1] is built with a language I don't understand (and don't really want to), and the fact that I had to build up a whole development environment and deal with NPM and `node_modules` should have told me that this was the wrong way to go from the beginning.

 Not to mention that as flexible as Eleventy claims to be, It'll *never* match the flexibility of  raw HTML and CSS. Template files are great when you want to make something be the same all the time. If I want that, I can just make a `template.html` file that has everything I need to get started. And if I truly can't live without markdown, I have `pandoc` to help me. As soon as I have the time, I'm going to get started.

I feel better about this already.

[^1]: The fact that my website has infrastructure that isn't just the domain and the web hosting is truly the crux of the problem. HTML is plain text with a few fancy bits, and my decision to manage all those plain text files with javascript was a clear indication that I was well out of my depth using a static site generator. I have no idea how to use Eleventy if I think about it, and if something about a new Eleventy version broke my site, I'd be SOL until someone else found a fix that I could copy and paste.
