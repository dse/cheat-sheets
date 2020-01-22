# Entering Unicode

## Outlook 2016

To enter a character, type the hex code then press `Alt+X`.

To see the hex code for a previously entered character, move the
cursor **after** that character, and press `Alt+X`.

## Emacs

See <a href="emacs/unicode.md">emacs/unicode.md</a>.

## HTML

See <a href="html-unicode.md">html-unicode.md</a>.

## UTF-8

[UTF-8](https://en.wikipedia.org/wiki/UTF-8) is a variable width
character encoding.

| Bits of Codepoint | Range from | to       | Bytes | Byte 1   | Byte 2   | Byte 3   | Byte 4   |
|------------------:|:-----------|:---------|------:|:---------|:---------|:---------|:---------|
|                 7 | U+0000     | U+007F   |     1 | 0xxxxxxx |          |          |          |
|                11 | U+0080     | U+07FF   |     2 | 110xxxxx | 10xxxxxx |          |          |
|                16 | U+0800     | U+FFFF   |     3 | 1110xxxx | 10xxxxxx | 10xxxxxx |          |
|                21 | U+10000    | U+10FFFF |     4 | 11110xxx | 10xxxxxx | 10xxxxxx | 10xxxxxx |

The codepoints from U+0000 through U+FFFF are known as the Basic
Multilingual Plane.  Most text you will find in the wild is in the
BMP, and each character occupies no more than three bytes.

## UTF-16

[UTF-16](https://en.wikipedia.org/wiki/UTF-16) is a two-byte encoding
of Unicode, in which all characters in the BMP occupy two bytes.
Characters beyond the BMP are encoded in pairs of surrogates, each
codepoint totalling four bytes.

UTF-16 is most often used in memory, primarily as the official
encoding of JavaScript and Java, though such things as registry files
in Windows and property list files in macOS are encoded in UTF-16.

### U+0000 though U+FFFF

The UTF-16 encoding for Unicode's first 65,536 codepoints, the set of
codepoints in the Basic Multilingual Plane, is simple enough: use the
internal 16-bit representation for that codepoint.

### U+10000 through U+10FFFF

The remaining 1,048,576 codepoints, those outside the BMP, cannot be
encoded in the manner above.  A small sliver of 2,048 codepoints
within the BMP is reserved for use as what are known as surrogates,
which themselves have no interpretation as characters.

U+D800 through U+DBFF are the high surrogates.

U+DC00 through U+DFFF are the low surrogates.

Each codepoint outside the BMP is encoded using a **surrogate pair**,
formed by a high surrogate followed by a low surrogate, using the
following steps:

-   Subtract 65,536 from the codepoint, to get a number between 0 and
    1,048,575.  Example:

    ```
    U+1F4A9 => 0xf4a9 => 0b00001111010010101001
                           HHHHHHHHHHLLLLLLLLLL
    ```

-   Take the high 10 bits of that number and add `0xd800` to it to
    form the **high surrogate**, which will be a number between
    `0xd800` and `0xdbff`.

    ```
    0b0000111101 => 0x3d => 0xd83d
    ```

-   Take the low 10 bits of that number and add `0xdc00` to it to form
    the **low surrogate**, which will be a number between `0xdc00` and
    `0xdfff`.  Example:

    ```
    0b0010101001 => 0xa9 => 0xdca9
    ```

-   Your UTF-16 encoding is the high surrogate followed by the low
    surrogate.

    ```
    "\ud83d\udca9" => "💩"
    ```
