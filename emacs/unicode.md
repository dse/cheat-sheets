# Unicode

If you know the hex code: `C-x 8 RET <hex-code> RET`

If you know the Unicode character name: `C-x 8 RET <character-name> RET`

For info on a character in a buffer, move point before that character
then: `C-x =`

For detailed Unicode info: `C-u C-x =`

For a complete list of key translations: `C-x 8 C-h`

| Sequence             | Ch. | Codepoint | Name                        | Note |
|:---------------------|:---:|----------:|:----------------------------|:----:|
| `C-x 8 !`            | `¡` |    U+00A1 | INVERTED EXCLAMATION MARK   |      |
| `C-x 8 ?`            | `¿` |    U+00BF | INVERTED QUESTION MARK      |      |
|                      |     |           |                             |      |
| `C-x 8 [`            | `‘` |    U+2018 | LEFT SINGLE QUOTATION MARK  |      |
| `C-x 8 ]`            | `’` |    U+2019 | RIGHT SINGLE QUOTATION MARK |      |
| `C-x 8 {`            | `“` |    U+201C | LEFT DOUBLE QUOTATION MARK  |      |
| `C-x 8 }`            | `”` |    U+201D | RIGHT DOUBLE QUOTATION MARK |      |
|                      |     |           |                             |      |
| `C-x 8 _ n`          | `–` |    U+2013 | EN DASH                     |      |
| `C-x 8 _ m`          | `—` |    U+2014 | EM DASH                     |      |
| `C-x 8 RET 2026 RET` | `…` |    U+2026 | HORIZONTAL ELLIPSIS         |      |
|                      |     |           |                             |      |
| `C-x 8 _ -`          | `−` |    U+2212 | MINUS SIGN                  |      |
| `C-x 8 x`            | `×` |    U+00D7 | MULTIPLICATION SIGN         |      |
| `C-x 8 / /`          | `÷` |    U+00F7 | DIVISION SIGN               |      |
| `C-x 8 +`            | `±` |    U+00B1 | PLUS-MINUS SIGN             |      |
| `C-x 8 / =`          | `≠` |    U+2260 | NOT EQUAL TO                |      |
| `C-x 8 RET 2245 RET` | `≅` |    U+2245 | APPROXIMATELY EQUAL TO      |      |
| `C-x 8 ~ =`          | `≈` |    U+2248 | ALMOST EQUAL TO             |      |
| `C-x 8 _ <`          | `≤` |    U+2264 | LESS-THAN OR EQUAL TO       |      |
| `C-x 8 _ >`          | `≥` |    U+2265 | GREATER-THAN OR EQUAL TO    |      |
|                      |     |           |                             |      |
| `C-x 8 SPC`          | ` ` |    U+00A0 | NO-BREAK SPACE              |      |
| `C-x 8 RET 200B RET` | -   |    U+200B | ZERO WIDTH SPACE            |      |
|                      |     |           |                             |      |
| `C-x 8 * '`          | `′` |    U+2032 | PRIME                       |      |
| `C-x 8 * "`          | `″` |    U+2033 | DOUBLE PRIME                |      |
|                      |     |           |                             |      |
| `C-x 8 C`            | `©` |    U+00A9 | COPYRIGHT SIGN              |      |
| `C-x 8 R`            | `®` |    U+00AE | REGISTERED SIGN             |      |
| `C-x 8 RET 2122 RET` | `™` |    U+2122 | TRADE MARK SIGN             |      |
| `C-x 8 o`            | `°` |    U+00B0 | DEGREE SIGN                 |      |
|                      |     |           |                             |      |
| `C-x 8 * E`          | `€` |    U+20AC | EURO SIGN                   |      |
| `C-x 8 * L`          | `£` |    U+00A3 | POUND SIGN                  |      |
| `C-x 8 c`            | `¢` |    U+00A2 | CENT SIGN                   |      |
|                      |     |           |                             |      |
| `C-x 8 * *`          | `•` |    U+2022 | BULLET                      |      |
|                      |     |           |                             |      |
| `C-x 8 1 +`          | `†` |    U+2020 | DAGGER                      |      |
| `C-x 8 2 +`          | `‡` |    U+2021 | DOUBLE DAGGER               |      |
| `C-x 8 ^ 1`          | `¹` |    U+00B9 | SUPERSCRIPT ONE             |      |
| `C-x 8 ^ 2`          | `²` |    U+00B2 | SUPERSCRIPT TWO             |      |
| `C-x 8 ^ 3`          | `³` |    U+00B3 | SUPERSCRIPT THREE           |      |
|                      |     |           |                             |      |
| `C-x 8 a <`          | `←` |    U+2190 | LEFTWARDS ARROW             |      |
| `C-x 8 a >`          | `→` |    U+2192 | RIGHTWARDS ARROW            |      |
| `C-x 8 a =`          | `↔` |    U+2194 | LEFT RIGHT ARROW            |      |
| `C-x 8 a ^`          | `↑` |    U+2191 | UPWARDS ARROW               | 1    |
| `C-x 8 a v`          | `↓` |    U+2193 | DOWNWARDS ARROW             | 1    |

## Notes

1.  A custom keybinding of my own, in my `~/.emacs.d/init.el`, not an
    Emacs standard.
