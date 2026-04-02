---
title: Reconfiguring a HP EliteDesk 800 G6 into a home server
date: 2026-03-09
tags:
  - technology
  - computers
  - homelab
---
I bought a mini pc on eBay recently with the goal of turning it into a home server — specifically, a Minecraft server. However, my efforts were cut short when I discovered that the PC was BIOS locked.

This means that the system that boots the operating system was locked behind a password field, and I didn't have the password at all. The seller must have forgotten to enter it and subsequently disable the BIOS lock, or simple received this computer as-is, cleaned and refurbished it, and then sold it in eBay without look at it's software situation. Given who the seller was and the other devices they were selling, I assumed the latter was true, meaning that they would not be able to supply me with the password.

I knew there was a way to remove the lock on these systems, and on older versions of these mini PCs, it's as simple as removing a connector which shorted two motherboard pins. However, no such contraption exists in the computer I had bought, which made things a whole lot more complicated. I thought I would have to desolder the BIOS chip and re-flash a modified BIOS which didn't contain the password hash, and I was nowhere near prepared enough to do that.

Fortunately, this is the Internet®, and [someone already figured it out](https://blog.rhysgoodwin.com/it/hp-elite-800-bios-password-removal/).

I followed the steps in their post, carefully holding the jumper wire onto the tiny solder joint of (what seems to be) the chip that secures the BIOS (called HP SureStart for HP systems) and shorted the connection — hopefully wiping the BIOS password and resetting the BIOS to the factory settings.

**It worked!!** The BIOS was completely reset to factory settings and the password was gone. I could freely access and change all the settings I needed to — namely, disabling secure boot and changing the boot order to I could flash linux onto it.

Man, do I love the internet. I was able to find valid instructions to a problem I was specifically having with y specific computer, all because someone else had the same problem and decided to document it for everyone. That's what the internet is all about, folks.
