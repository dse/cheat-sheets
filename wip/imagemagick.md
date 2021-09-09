# ImageMagick Command Line Examples

## Size down some images to no more than 135 pixels wide

    mogrify -resize 135 *.jpg

## -geometry, -resize, and -size

-   [geometry](https://imagemagick.org/script/command-line-options.php#geometry)
-   [resize](https://imagemagick.org/script/command-line-options.php#resize)
-   [size](https://imagemagick.org/script/command-line-options.php#size)

## Image Geometry

https://imagemagick.org/script/command-line-processing.php#geometry

| Specification           | Description                                      |                         |
|:------------------------|:-------------------------------------------------|:------------------------|
| `<scale>%`              | Scale width and height by specified percentage.  | Preserves aspect ratio. |
| `<scale-x>%x<scale-y>%` | Scale width and height by specified percentages. | Modifies aspect ratio.  |
| `<width>`               | Specifies width.  Automatically adjusts height.  | Preserves aspect ratio. |
| `x<height>`             | Specifies height.  Automatically adjusts width.  | Preserves aspect ratio. |
| `<width>x<height>`      | Specifies upper bounds for width and height.     | Preserves aspect ratio. |
| `<width>x<height>^`     | Specifies lower bounds for width and height.     | Preserves aspect ratio. |
| `<width>x<height>!`     | Resizes to exactly the dimensions given.         | Ignores aspect ratio.   |

## Convert to PDF

    convert -density 600 <filename>.pdf -resize 1200 <filename>.jpg

