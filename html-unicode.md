# Entering Unicode in HTML

## HTML Special Characters

| Character | Codepoint | Name              | Decimal | HTML     |
|:---------:|----------:|:------------------|--------:|:--------:|
| `<`       |    U+003C | LESS-THAN SIGN    |      60 | `&lt;`   |
| `>`       |    U+003E | GREATER-THAN SIGN |      62 | `&gt;`   |
| `&`       |    U+0026 | AMPERSAND         |      38 | `&amp;`  |
| `'`       |    U+0027 | APOSTROPHE        |      39 | `&#39;`  |
| `"`       |    U+0022 | QUOTATION MARK    |      34 | `&quot;` |

In HTML:
-   You only need to escape `"` in double-quoted values containing `"`, i.e., `value="&quot;"`.
-   You only need to escape `'` in double-quoted values containing `'`, i.e., `value='&#39;'`.
-   You **must** escape `<`, `>`, and `&`.

## Typographic Symbols

| Character | Codepoint | Name                      | Decimal | HTML       |
|:---------:|----------:|:--------------------------|--------:|:----------:|
| `¡`       |    U+00A1 | INVERTED EXCLAMATION MARK |     161 | `&iexcl;`  |
| `¿`       |    U+00BF | INVERTED QUESTION MARK    |     191 | `&iquest;` |

| Character | Codepoint | Name                        | Decimal | HTML      |
|:---------:|----------:|:----------------------------|--------:|:---------:|
| `‘`       |    U+2018 | LEFT SINGLE QUOTATION MARK  |    8216 | `&lsquo;` |
| `’`       |    U+2019 | RIGHT SINGLE QUOTATION MARK |    8217 | `&rsquo;` |
| `“`       |    U+201C | LEFT DOUBLE QUOTATION MARK  |    8220 | `&ldquo;` |
| `”`       |    U+201D | RIGHT DOUBLE QUOTATION MARK |    8221 | `&rdquo;` |

-   Use RIGHT SINGLE QUOTATION MARK as an apostrophe.
    -   Example: isn’t, cf. isn't
    -   Example: wouldn’t’ve, cf. wouldn't've

| Character | Codepoint | Name                        | Decimal | HTML      |
|:---------:|----------:|:----------------------------|--------:|:---------:|
| `–`       |    U+2013 | EN DASH                     |    8211 | `&ndash;` |
| `—`       |    U+2014 | EM DASH                     |    8212 | `&mdash;` |

-   Use the EN DASH for numeric ranges and other purposes.
    -   Example: Hours 8am – 5pm; cf. 8am - 5pm
-   Use the EM DASH for sentence interruptions and other purposes.

| Character | Codepoint | Name                | Decimal | HTML       |
|:---------:|----------:|:--------------------|--------:|:----------:|
| `−`       |    U+2212 | MINUS SIGN          |    8722 | `&minus;`  |
| `×`       |    U+00D7 | MULTIPLICATION SIGN |     215 | `&times;`  |
| `÷`       |    U+00F7 | DIVISION SIGN       |     247 | `&divide;` |
| `±`       |    U+00B1 | PLUS-MINUS SIGN     |     177 | `&plusmn;` |
| `≠`       |    U+2260 | NOT EQUAL TO        |    8800 | `&ne;`     |

-   Use the MINUS SIGN as a counterpart to the plus sign, and to represent negative numbers.
    -   Example: 5 − 8 + 2 = −1; cf. 5 - 8 + 2 = -1

| Character | Codepoint | Name         | Decimal | HTML      |
|:---------:|----------:|:-------------|--------:|:---------:|
| `′`       |    U+2032 | PRIME        |    8242 | `&prime;` |
| `″`       |    U+2033 | DOUBLE PRIME |    8243 | `&Prime;` |

-   Use PRIME to represent feet, or minutes.
-   Use DOUBLE PRIME to represent inches, or seconds.
-   Examples:
    -   5′10″ tall; cf. 5'10" tall
    -   38°24′30″ N; cf. 38°24'30" N

| Character | Codepoint | Name            | Decimal | HTML      |
|:---------:|----------:|:----------------|--------:|:---------:|
| `©`       |    U+00A9 | COPYRIGHT SIGN  |     169 | `&copy;`  |
| `®`       |    U+00AE | REGISTERED SIGN |     174 | `&reg;`   |
| `™`       |    U+2122 | TRADE MARK SIGN |    8482 | `&trade;` |
| `°`       |    U+00B0 | DEGREE SIGN     |     176 | `&deg;`   |

| Character | Codepoint | Name       | Decimal | HTML      |
|:---------:|----------:|:-----------|--------:|:---------:|
| `€`       |    U+20AC | EURO SIGN  |    8364 | `&euro;`  |
| `£`       |    U+00A3 | POUND SIGN |     163 | `&pound;` |
| `¢`       |    U+00A2 | CENT SIGN  |     162 | `&cent;`  |

| Character | Codepoint | Name   | Decimal | HTML     |
|:---------:|----------:|:-------|--------:|:--------:|
| `•`       |    U+2022 | BULLET |    8226 | `&bull;` |
