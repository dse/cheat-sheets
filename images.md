# Images

## Removing extraneous data from JPEG images

    jpegtran -copy none file.jpg | sponge file.jpg

## Reducing the quality of JPEG images

    mogrify -quality 60 file.jpg
