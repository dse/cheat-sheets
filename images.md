# Images

## Removing extraneous data from JPEG images

    jpegtran -copy none file.jpg | sponge file.jpg

## Reducing the quality of JPEG images

    mogrify -quality 60 file.jpg

## Resize and crop the middle

    convert image.jpg -resize "275x275^" -gravity center -crop 275x275+0+0 +repage resultimage.jpg
