# ffmpeg incantations
I don't use [ffmpeg](https://ffmpeg.org/) all that often, but when I do, I usually need to do something that I've done before and have since forgotten how. This page is my ffmpeg spellbook — the place I write down all these incantations so I can always have them on hand.

**If the file name is complex in any way (spaces, punctuation, etc.) wrap it in `""` quotation marks.** This goes for both the input and output file names.

## Simple video transcoding
Generally, all I need to do is turn one video format into another video format. QuickTime (for whatever reason) doesn;t let me do this easily, and the `Export As` menu only shows resolutions — helpful sometmes, but not always. 
Simple transcoding can be done with:
```
ffmpeg -i input-file.mov output-file.mp4
```
(since an `mp4` is usually the target, and a `mov` is usually the source)

If I want to get fancy with it, I can specify the video and audio codec, though this generally isn't needed.
```
ffmpeg -i input-file.mov -vcodec h264 -acodec aac output-file.mp4
```

## Changing video size
I recommend you do this with QuickTime, since it's quicker *(ding)* and easier.
To maintain the original aspect ratio of the video, use this:
```
ffmpeg -i input.mov -vf scale=[width]:-1 output.mp4
```
where `[width]` is the width of the output video. ffmpeg will calculate the height of the video needed to maintain the original aspect ratio.

If you know the input and output aspect ratios and the desired resolution of the output, use this:
```
ffmpeg -i input.mov -vf "scale=[scale]" output.mp4
```
where `[scale]` is replaced by the video resolution — say 1920:1080, or 1280:720 (both of these assume a 16:9 video).
**If you do this on a video where the input and output ratios are different, the video will be distorted.** It's often *much* better to use the first command.

**Note:** the ffmpgeg commands above use `.mov` as the input and `.mp4` as the output. This is because ffmpeg will transcode the video for you in the same step as resizing it.

For more ono scaling, read the [documentation0](https://ffmpeg.org/ffmpeg-filters.html#scale-1) and look at some [examples](https://ffmpeg.org/ffmpeg-filters.html#Examples-117).
