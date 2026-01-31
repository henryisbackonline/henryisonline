---
title: A solution for Topcon Office on ARM-based computers
tags:
- technology
- guide
- software
- surveying
date: 2024-12-15
---

Recently, the surveying students in my cohort were required to use Topcon Office as part of a university course. As with most CAD software, Topcon Office only runs on Windows, but I didn’t realise that it would have issues running on specific versions of Windows. I’m going to get detailed about this, so if you’re just after the solution for this problem, there’s a TL;DR at the bottom of this article.

The issue arose when my friend was asked to install Topcon Office – it simply wouldn’t install on her computer. Initially, I couldn’t figure out why it wouldn’t install, besides general Windows Weirdness™. She had bought a new Surface Laptop for the surveying degree so she could run CAD software locally and not have to deal with our university’s browser-based remote virtual machines. Generally, a new laptop with an up-to-date OS wouldn’t be a problem. However, I found out that this was an ARM-based Surface Laptop, which used Microsoft’s Prism emulation layer for x86 software compatibility.

For those unfamiliar, there are two main processor architectures: **ARM** and **x86**. **x86** is known as a “legacy” architecture, and most software for desktops and laptops has been written to work on these processors. **ARM** is a newer and more efficient architecture, and is used in phones, tablets, and all Apple products (at the time of writing). These two architectures operate differently at a fundamental level, so software written for one processor architecture *cannot* run directly on the other architecture. It’s like different languages – it would be almost impossible for someone who only knows French to communicate with someone who only knows Japanese. 

For any software written x86 to run on ARM, an emulation layer is required – essentially a layer of code that pretends to be an x86 processor to the software and spits out ARM instructions to the actual processor. Think of it like a translator – they can act as a bridge between the French person and the Japanese person, translating to Japanese when the French person asks a question, and translating back to French when the Japanese person responds. 

Apple recently transitioned all their Macs away from using Intel’s x86-based processors and onto their own M-series processors, which use the ARM architecture. Their emulation layer, called Rosetta, has been largely successful, and the entire Intel to M-series transition has been met with resounding praise. Microsoft recently attempted a similar thing, and they partnered with Qualcomm to try to create a laptop chip that performed just as well as Apple’s M-series does. They also needed a translation layer, which they called Prism. However, because of the way that Windows works, Prism can’t emulate any software that requires more direct access to the processor (called kernel mode in Windows). As a result, many pieces of software just *don’t work* on ARM-based Windows computers when you install it the normal way, including Topcon Office.

During the install process, I saw that the Topcon Office installer was attempting to install the x86 version of the “Microsoft Visual C++ Redistributable”, which is a code library that a lot of Windows software uses. This in itself is not a problem, as you can install a lot of x86 software on ARM laptops thanks to emulation layers. However, the C++ Redistributable is one of those bits of software that needs kernel mode to work properly, which Prism can’t emulate. As such, this x86 based software simply wouldn’t install or run on the ARM based laptop.

The solution was simple in the end: just manually download and install [the C++ Redistributable that has been written and compiled for ARM](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) (called ARM64 in Microsoft’s documentation) and hope that the Topcon Office installer sees the C++ Redistributable that’s already installed and doesn’t attempt to install the x86 version instead. After installing the ARM Redistributable package, I ran the Topcon Office installer again, and it worked flawlessly. It detected that a C++ Redistributable package was already installed and carried on without trying to download anything else. The rest of the CAD package was perfectly supported by the Prism emulation layer and was operating entirely as normal. 

- - - - 

**TL;DR:** The issue was that Topcon Office called for the Microsoft Visual C++ Redistributable to be installed but was attempting to install and run the x86 version, which does not work on ARM-based Windows laptops. To rectify this, I installed [the C++ Redistributable that has been written and compiled for ARM](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) (called ARM64 in Microsoft’s documentation) and ran the installer again. There were no problems after that, and the rest of the CAD package operated perfectly.

