---
title: Creating a simpler static site generator
tags:
- blog
- web
date: 2025-11-14
---

I have a lofty goal of creating a simpler static site generator.

I understand that other generators exist. They're all great, I'm sure, but I noticed something was missing in the whole realm of SSGs. I wanted something so simple, it's entire operations could be contained to one script. I wanted something so laser-focused on blogs in a way that so many other SSGs aren't. I wanted it to run locally, not build from a command in cloudflare pages or something. I wanted a simple way to write in markdown, create html files, and send them to a remote repository somewhere.

I wanted a **python script.**

This is a development log of how I made that happen. All of the decision I made along the way, the ways I resolved various issues, and how I eventually succeeded in my goal of creating the simplest site generator around.

## 2025-11-04 - Starting from scratch
- Started by defining what I wanted from this thing:
	- A single script.
	- As few dependencies as possible.
	- Easy to reproduce regardless of my OS.
	- Work with existing tools I use to write markdown like VSCode or Obsidian.
	- Simple folder stricture that makes sense to a human as much as a program.
- Looked at python packages that I could use to create it:
	- knew I needed a markdown parser.
	- knew I needed something to deal with images.
	- discovered python has an inbuilt but limited markdown library.
	- found `markdown-it-py`, decided to use that since it follows the established [CommonMark spec](https://spec.commonmark.org).
	- found `pillow` and while overkill, does exactly what I need — resize images.
- Found out about how dependencies can install OS-wide and mess things up (important, as I plan to work more with python in the future).
	- Found `uv`, which promised to solve all my problems.
	- Created a new python project in my project folder.
	- Didn't do any research on how to use the tools.
	- Fiddled for a bit and gave up for the day.

## 2025-11-05 - Deciding on tooling
- Fiddled some more with `uv`.
- Hated it.
- Gave up.
	-  It was overcomplicated for my needs, and ended up causing me more frustration than it would theoretically solve. 
	- It was another tool, and my goal was to create something that relied on a few tools as possible.
- I decided to use the standard python tooling: `venv` and `pip`.
	- This was plenty for my needs  this is not a complicated project, and a simple `venv` for two dependencies was all I would need.
- Discovered a beautiful [obsidian plugin](https://github.com/bingryan/obsidian-markdown-export-plugin) that made my life about 50 times easier.
	- Unfortunately, though I would love to convert straight to HTML, I want to have a dynamic homepage or blog page that updates with an index of all the posts I've ever made.
	- I'll still be able to export as markdown to my source folder and run the site generator script over everything when I want to publish a post.
	- This saved me from having to use `draft` frontmatter tags in my posts — they only appear on my blog when I manually put them there.
- Found an *incredible* macOS shortcut for punctuation: `opt+-` makes an en-dash (–), and `opt+shift+-` makes an em-dash(—). 
	- *God I love this computer.*

## 2025-11-08
- I did some (read: one) tests with `markdown-it-py`. They were successful! I passed a string into the renderer, and when printing the result of the variable attached to the render command, I got an HTML output in the terminal.
- I decided that now would be the best time to also learn ZSH, since I wanted ti put together a shell script that would install all the things I needed in one command. I have no idea why I did this, but I have a `.sh` file in my directory now.

## 2025-11-14
I gave up. 

There are a lot of static site generators out there already, and of them all, [Eleventy](https://111ty.dev) is probably the best option for me anyway. I want to create a real home on the internet, and having a tool like Eleventy that can grow with me is the best thing I need. Sure, it's *way* more than I need at the moment for just building a blog, but it means that I don't have to spend the time and energy building a new tool when everything I could ever want is only an `npm install` away. 

I'll have to learn some javascript to make this work, but it's a well documented language and will expand my knowledge base. It's worth the effort of learning something new to do what I want to do. If I want to expand my website in the future, I can pick and choose from the vast array of plugins that work with Eleventy. 

This, above anything, was a learning experience. It helped me learn that trying to make everything exactly the way I want (at least while I'm in the stage of life that I am now) is not the best way of doing things, especially when there are already tools that do everything I want to do and all I have to do is learn how to use them.

I'm sure I'll come back to this. [It's been done before in other languages](https://herluf-ba.github.io/writing-a-static-site-generator-in-a-single-file.html), and I don't see why I couldn't do what I see out to do sometime in the future, given I have the time and resources to do so. In the meantime, I'll read the [Mozilla JavaScript docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and learn how to use the tools that already exist.