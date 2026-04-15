# Useful Exiftool commands

This is a small collection of useful [Exiftool](https://exiftool.org) commands that I have found useful over the years. Exiftool is an incredible resource, and if you do *anything* with photos, it's worth using (at at least knowing) about this wonderful software and what it can do.

I hope these commands can help you as much as they have helped me.

- [Useful Exiftool commands](#useful-exiftool-commands)
  - [Modifying GPS metadata](#modifying-gps-metadata)
  - [Geotaging a whole folder of photos](#geotaging-a-whole-folder-of-photos)
  - [Change dates with a script](#change-dates-with-a-script)

- - -

## Modifying GPS metadata
```
exiftool -GPSLatitude=xxxxxxxx -GPSLatitudeRef=X -GPSLongitude=xxxxxxxx -GPSLongitudeRef=X "-FileCreateDate<DateTimeOriginal" "-FileModifyDate<DateTimeOriginal" -overwrite_original -P .
```
This changes the latitude and longitude of all photos in a directory (`.`) while preserving (`-P`) all the original date metadata. This means the that all dates will be the same, even the ones that the file system might modify. On macOS, if you make any changes to a file, the Date Modified in Finder changes, despite the original file creation date never having changed. This command prevents that Modifed date from changing. 

You need the following in this command:
1. the latitude as a decimal coordinate
2. the reference frame for the latitude (North (N) or South (S))
3. the longitude as a decimal coordinate
4. the reference frame for the latitude (East (E) or West (W))

For example, `exiftool -GPSLatitude=48.85787 -GPSLatitudeRef=N -GPSLongitude=2.29512 -GPSLongitudeRef=E "-FileCreateDate<DateTimeOriginal" "-FileModifyDate<DateTimeOriginal" -overwrite_original -P .` Will change the location of all the photos in the directory (without modifying any of their dates) such that all the photos appear to be taken in front of the Eiffel Tower.

- - -

## Geotaging a whole folder of photos
This really is one of my favorre things to do with exiftool. It's dead simple, especially if you have a GPX trail. I usually create a GPX trail on my phone and transfer it to my Mac, along with my photos (RAW and JPEG) into a folder on my desktop. I then run this command:
```
exiftool -geotag track.gpx . -P 
```
which add GPS data to all the images in the folder from the track, and like above, doesn't modify any date data (`-P`). 

If you want to read more about that option specifically, [the documentation](https://exiftool.org/geotag.html) is super clear and very helpful.

- - -

## Change dates with a script

This one's a little more involved, but *man* is it ever useful. I had occasion to change a lot of dates for a lot of photos at once, and Exiftool is great for batch edits like that. However, all of these dates would have to be different. I didn't much like the idea of entering all these dates manually, so I came up with a little python script that would help me do that.

This script is neat (to me) because it has some logic that makes it easier and quicker to enter dates. Instead of typing the date as an exiftool-recognisable format (with colons between numbers like `2025:01:01 21:07:52`) one can use a hyphen so that no modifier keys have to be pressed at all (like `2025-01-01 21-07-52`). This makes date entry possible with only the number pad on the keyboard, or at the very least, less cumbersome than using the normal exiftool syntax.

```
import os
import subprocess
import sys
import re

FOLDER = "."

def is_image_file(filename):
    image_extensions = {
        ".jpg", ".jpeg", ".png", ".tif", ".tiff", ".heic", ".webp", ".bmp"
    }
    return os.path.splitext(filename)[1].lower() in image_extensions


def convert_date_format(user_input):
    """
    Convert YYYY-MM-DD HH-MM-SS
    to      YYYY:MM:DD HH:MM:SS
    """
    match = re.fullmatch(
        r"(\d{4})-(\d{2})-(\d{2}) (\d{2})-(\d{2})-(\d{2})",
        user_input
    )

    if not match:
        return None

    y, m, d, hh, mm, ss = match.groups()
    return f"{y}:{m}:{d} {hh}:{mm}:{ss}"


files = sorted(os.listdir(FOLDER))

for filename in files:
    path = os.path.join(FOLDER, filename)

    if not os.path.isfile(path):
        continue

    if not is_image_file(filename):
        continue

    print(f"\nFile: {filename}")
    user_input = input(
        "Enter date/time (YYYY-MM-DD HH-MM-SS), Enter to skip, or 'q' to quit: "
    ).strip()

    if user_input.lower() in {"q", "quit"}:
        print("Quitting.")
        sys.exit(0)

    if not user_input:
        print("Skipped.")
        continue

    exif_date = convert_date_format(user_input)

    if exif_date is None:
        print("Invalid format. Expected YYYY-MM-DD HH-MM-SS")
        continue

    command = [
        "exiftool",
        "-overwrite_original",
        f"-AllDates={exif_date}",
        path
    ]

    try:
        subprocess.run(command, check=True)
        print(f"Dates updated → {exif_date}")
    except subprocess.CalledProcessError as e:
        print("Error updating file:", e)
```
