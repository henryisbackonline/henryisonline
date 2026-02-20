---
title: Gaming on Linux
date: 2026-02-19
tags:
  - technology
  - FOSS
  - linux
---
Windows has really given me the shits lately.

I find it very challenging to justify using or installing that operating system on anything in the state that it's currently in. It's useful for enterprises I suppose, since most enterprise software runs on Windows by default, but for home use? It's not fit for purpose. At least, not to me.

I find using Windows in my spare time to be one of the most *grating* things in my life. Things will often not work or simply break over the course of a single update. Not to mention, if you want to change anything about how the system works, you will often have to reimplement those changes after every update. Windows has also become *massively* bloated and cumbersome, to the point where there are [specific](https://github.com/ChrisTitusTech/winutil) [tools](https://rufus.ie/en/) and [utilities](https://www.revouninstaller.com)  designed to remove crap from Windows.

Computers are supposed to be fun. Or at least, that's how I think they should be. They should be tools to do whatever you want, and when you ask them to do something, they should *get the hell out of the way*. Windows does none of those things. It's obstructive, challenging, and downright *miserable* to use in its' current state. You shouldn't have to follow a guide on how to make an operating system *usable* after you install it. It should be that way ***immediately***. 

I have held these gripes for a few years now, and my opinion on Windows as a piece of software has definitely soured over time. However, what I didn't expect was for the hardware on which I ran Windows to become as unreliable as the operating system itself. My custom built PC started having some problems with power delivery to the motherboard, which ultimately ended with the whole computer being unable to turn on. Not only was I tinkering with the operating system to get it to work the way I wanted, but now I was tinkering with the computer itself.

I was *so* sick of tinkering. I've done enough fiddling with the registry and uninstalling AI crap. I've plugged in more than my fair share of cables and installed plenty of SSDs. I just wanted to start using the computers I owned and stop having to work on them all the time.

So I left Windows (and the custom PC world) behind. I did two things after that:
1. Bought a Macbook, which I *adore* and will probably write about in the future, and
2. Started looking into Linux.

# Linux? 
**Why Linux? Isn't that more fiddly?**

That's what I thought too. But I heard that Linux had become much more useable in 2025, and that you didn't need to do nearly as much fiddling with it — or often, no fiddling at all. I decided to give it a try. After all, by this point I had been using my Mac for months, and had saved so much time that I had could afford to spend some of it fiddling with a new operating system for fun.

I fixed my PC first — turns out it was a power button issue, and something had gone wrong with the whole front panel circuit board. The front panel was not available as a part and couldn't easily be replaced, but it wasn't a big deal. I was considering a new case anyway. I bought a [small cooler master case](https://www.coolermaster.com/en-au/products/masterbox-nr200p/) that has been around forever and has a *lot* of good reviews. Nothing fancy for me this time. I also decided to buy a new graphics card (right before prices went ballistic at the end of 2025) as I needed a new one anyway, and ended up with an [AMD RX 9070XT](https://www.centrecom.com.au/xfx-swift-amd-radeon-rx-9070-xt-triple-fan-gaming-edition-graphics-card) since I read that AMD cards work very well on Linux.

As for the operating system, I went with [Fedora](https://www.fedoraproject.org) with the GNOME desktop. It seemed like the most reasonable and stable choice, and appealed to me as a very no-frills base-level operating system. If I needed anything else, I could simply install it from the software store. Oh, and as a bonus, this whole system was completely free. I spent no money to buy a licence as I did with Windows, which made the deal a whole lot sweeter.

# Getting started
Getting everything set up was super easy. I downloaded the `.iso`  file from the fedora website and used [balena etcher](https://etcher.balena.io) to write it onto a USB. Then I plugged it into my now-refurbished PC, turned it on, and was immediately met with the install screen. The installation process took very few steps: it asked for the language, the keyboard settings, the time zone, asked to enable third party repositories (which confused me at the time, but you should click "yes"), and then finally where to install it (which was as simple as clicking on the SSD I had already installed). There might be some steps I'm missing, but I think that's a testament to how fast I was able to fly through it.

Getting through the installer took (maybe) five minutes, and the install itself was complete in another five. Comparing that to the ***four f-cking hours*** it took me to install Windows last time, I'd say that's a pretty good start. As soon as the installer was finished, it prompted me to restart and remove the drive I used originally, and so I did. Lo and behold, I now had Fedora Linux on my computer. That was *shockingly* easy.

# Getting all my software
Like Windows, many Linux systems need an updates-and-restart cycle after the initial install. Unlike Windows systems, it's *so* much easier on Linux — and particularly easy in GNOME. You just open the Software Centre app — it looks like a big shopping bag — and press the big blue "Update All" button under the "Updates" menu. It runs though and updates everything (yes, *everything*, including all your apps) and then prompts for a restart. After that, everything it up and running! Again, *shockingly* easy.

But what about gaming? I made this PC to play games with my friends, so it better be able to do that too. Ah, well that's now (almost) solved too. Since Valve debuted the [Steam Desk](https://store.steampowered.com/steamdeck) (which runs a version of Linux called SteamOS), there have been *huge* advances in gaming on Linux. Valve created a translation layer called Proton which allows Windows games to run on Linux as if they were natively compiled for the platform. Even while running though the translation layer, many Windows games have actually been benchmarked to run *faster* on Linux than on Windows, even when running the same hardware.

This works for the majority of Steam games which, to be fair, is most of the games. Some of them don't work quite as well, but most work perfectly out of the box. All I had to do to start playing games on linux was to go to the Software Centre, search for Steam, and install it. I did absolutely nothing else.

I launched the Steam app (which takes a few minutes to launch for the first time on Linux as it has a lot to initialise) and downloaded some games. They ran. They just *ran*. [^1] I didn't have to do any fiddling or programming or even touch the terminal *once*. Even my Xbox controller just connected automatically and worked flawlessly right away. I was completely blown away. This was all *unbelievably* easy to do.

# Conclusion
I'm simplifying some of the research it took to get to this point, but not by *that* much. Understanding what a linux distribution is and finding the one I wanted was the extent the research I did for this project, and I highly doubt that you want a blow-by-blow of what I typed in to google that led to me choosing [Fedora](https://www.fedoraproject.org/) (which you should choose too, if you've made it this far in). Everything else is *as it happened*, which is beyond amazing. 

I'm so impressed with this system, and especially how easy it is to maintain. I just press that big blue "Update All" button whenever I remember to and otherwise completely forget about it. There's no management, there's no concerns over whether [the next update](https://au.pcmag.com/migrated-15175-windows-10/112704/microsoft-investigating-reports-of-ssds-vanishing-after-latest-windows-11-update) [will brick ](https://www.windowslatest.com/2026/01/29/microsoft-confirms-windows-11-kb5074109-january-2026-update-causes-bsod-boot-issues-on-some-pcs-commerical/)[something](https://www.windowscentral.com/microsoft/windows-11/windows-11-february-update-kb5077181-hits-installation-errors-and-system-issues), and theres no weird software or telemetry running in the background to worry about. I love that aspect of Linux so very much.

Oh, I forgot to mention — I have this thing hooked up to my TV. I play games on the couch and treat this computer like a console. It doesn't care. I don't care. Everything just *works*.

I have fallen in love with computers again, and I have Linux to thank for that.

[^1]: Well, aside from Minecraft: Bedrock Edition, but that one's entirely Microsoft's fault. Java Edition (my preferred version to play) runs *beautifully*. And by the looks of things, [Bedrock might be playable on Linux within the next year or two](https://github.com/Weather-OS/WineGDK). I'll be keeping my eye on this, but it's a little too much work for me to set it up in its' current state. And without online play available (which is the only reason I play Bedrock), it's not of much use to me right now. Still, I'm *very* excited to see where this goes.
