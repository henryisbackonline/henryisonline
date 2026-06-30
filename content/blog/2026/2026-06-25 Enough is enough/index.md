---
title: Enough is Enough
date: 2026-06-25
tags:
  - blogging
  - technology
---
*Originally this was going to be a lot longer, but I don’t think I have anything useful to add to this conversation that [hasn't already](https://brennan.day/the-end-of-eleventy/) [been said](https://nathanupchurch.com/blog/eleventy-becomes-build-awesome/).*

My website is built using Eleventy. It didn’t feel like it at the time, but I think building everything using this infrastructure was the wrong decision. Eleventy is in the process of rebranding into “Build Awesome” which aims to be a static site generator that works at scale for enterprise users. There will be subscription pricing involved for enterprise licences, but the base version will remain free and open source.  

I have mixed feeling about this move. I trust that Zach Leatherman (the creator of Eleventy) has the best interest of Eleventy and the community at heart, and that he means it [when he says that Eleventy/Build Awesome will have a sustainable business model](https://www.11ty.dev/blog/build-awesome/#:~:text=The%20Awesomeverse%20of%20projects%20have%20a%20straightforward%20business%20model%20and%20Font%20Awesome%20has%20the%20track%20record%20to%20prove%20it.) like Font Awesome, but this still leaves a bad taste in my mouth. 

Of course I want Zach to be paid a living wage for his work. Like [Nathan](https://nathanupchurch.com/blog/eleventy-becomes-build-awesome/#:~:text=I%E2%80%99ll%2520leave%2520it,websites%2520is%2520disgusting), the disappointment and frustration I feel is solely directed at the myriad huge companies that use Eleventy for their own websites and yet somehow, between *all of them,* couldn’t manage to scrape together the piddly amount of money required each month to fully fund Zach’s work. $6000 per month was all that was required. For Microsoft, Google, Cloudflare, and Shopify, that’s *pocket change.*  It’s disgraceful on their part.

I like the idea of the tools I use being developed *for* the community, *by* the community. Eleventy’s business model promises that this will still be the case. I sincerely hope so, for all the people that rely on Zach’s tools for their own website. I’m upset that he had to turn to this model to start to see his hard work be compensated in any way. I’m not sure if this was the right move for the Eleventy project, but I’m not sure what else could have been done.

Regardless, the shape of Eleventy’s future business model isn’t what makes me uneasy about the project—I trust Zach to do the right things here. My problems are with the technology that the project is built upon.

Eleventy is built with Javascript. More saliently, it uses [node.js](https://nodejs.org/en) and the plethora of javascript packages and snippets that live in the [node package manager (or NPM)](https://www.npmjs.com) to run. NPM has been the subject of numerous supply chain attacks (I’m not going to bother linking them, there’s that many) where bad actors inject malicious code into the NPM repository, which then gets dowloaded by NPM when people update their Javascript projects. 

The dependency structure of node.js-based projects is *insane.* Every single thing relies on tens or hundreds of smaller packages, which each rely on hundreds of other packages, which all rely on hundreds of other packages. You can download *several thousand* node modules just by updating one package. I trust the curators of Eleventy to look after their own packages, but I’m not sure how much I trust everyone else in that convoluted supply chain. 

As a result, I really have no desire to run node.js or NPM on my computer any longer than I have to. I’ve stopped updating my packages, purely our of fear that there’s some dependency that I don’t control which has been subjected to one of these supply-chain attacks, and I’m *severely* unequipped to deal with the fallout of my computer being affected by any malicious code that gets pulled in from NPM. I don't want to deal with this any more.

I plan to move away from Eleventy over time. It won’t be quick, but it’ll happen. I don’t plan on posting anything other than this post before I change my blog infrastructure. I’m looking at [Pelican](https://getpelican.com) as a potential replacement. It’s built with Python, which is a language I’m *much* more familiar with than Javascript. I doubt it’ll be the silver bullet I want (really, that kind of flexibility and functionality only exists within Eleventy, which is one of the reasons I’m a little reluctant to move away from it), but it should get the job done *more* than well enough for my dinky little website.

Of course, the alternative is rolling my own. I have tools that provide much of the functionality I already need - `pandoc` being one of them. I can always try to build a script that utilises some of these tools and builds things as I need them to be built. Or, I can just hand-write some HTML, as many others have done before me. Honestly, I don’t mind that option. I’ll think on it.

Anyway, the long and short of this is; I’m changing some things behind the scenes. You probably won’t notice anything. If that happens, I’ll have done my job well. 