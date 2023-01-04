# ImageMagick

## Resize

**convert -resize** *geometry* *filename* *filename*

**mogrify -resize** *geometry* *filename*

-   **-resize** 64x64

    scale down to fit inside a 64x64 box.
    
-   **-resize** '64x64!'

    resize to 64x64, ignoring aspect ratio.
    
-   **-resize** '64x64>'

    scale down to fit within 64x64, only if larger.

-   **-resize** '64x64^'

    scale down just enough to cover the 64x64 area.
    
-   **-resize** 50%

    scale the image by the amount specified.

-   **-resize** 4096@

    scale the image down to no more than 4096 pixels.

-   **-resize** 64

    scale down to 64 pixels wide, maintaining aspect ratio.
    
-   **-resize** x64

    scale down to 64 pixels high, maintaining aspect ratio.
    
-   Use **-adaptive-resize** for clearer results.

More about the *geometry* argument:
https://legacy.imagemagick.org/script/command-line-processing.php#geometry

## Misc.

resize any excessively large images to 300px wide

    for i in `imgsize -r *.* | grep -E '[0-9]{4}' | cut -f1 -d:` ; do echo $i ; mogrify -resize 300 $i ; done
    #                                                                                           ^^^

get the mode (most frequently occurring result) of image widths:

    imgsize -r *.* | cut -f2 -d' ' | sort -n | uniq -c | sort -n

get the mode of image heights:

    imgsize -r *.* | cut -f3 -d' ' | sort -n | uniq -c | sort -n

