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
-   You only need to escape `"` within `double="quoted"` attribute values, i.e., `value="&quot;"`.
-   You only need to escape `'` within `single='quoted'` attribute values, i.e., `value='&#39;'`.
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

| Character | Codepoint | Name                        | Decimal | HTML       |
|:---------:|----------:|:----------------------------|--------:|:----------:|
| `–`       |    U+2013 | EN DASH                     |    8211 | `&ndash;`  |
| `—`       |    U+2014 | EM DASH                     |    8212 | `&mdash;`  |
| `…`       |    U+2026 | HORIZONTAL ELLIPSIS         |    8230 | `&hellip;` |

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

-   Use the MINUS SIGN to represent negative numbers.
    -   Example: 5 − 8 + 2 = −1; cf. 5 - 8 + 2 = -1
-   Also use the MINUS SIGN as a counterpart to the PLUS SIGN for +/−
    toggles.
    -   Better yet, consider using FontAwesome for icons that will
        look consistent across platforms, browsers, and user
        configurations.

| Character | Codepoint | Name             | Decimal | HTML       |
|:---------:|----------:|:-----------------|--------:|:----------:|
| ` `       |    U+00A0 | NO-BREAK SPACE   |     160 | `&nbsp;`   |
| -         |    U+200B | ZERO WIDTH SPACE |    8203 | `&#x200b;` |

-   Use the ZERO WIDTH SPACE in places where you want a possible word
    break **without** a hyphen, such as potentially long email
    addresses.  Preferably, insert in any position that's after
    punctuation and before an alphanumeric.
    -   Example: `john.&#8203;jacob.&#8203;jingleheimerschmidt@&#8203;example.&#8203;com`

| Character | Codepoint | Name         | Decimal | HTML      |
|:---------:|----------:|:-------------|--------:|:---------:|
| `′`       |    U+2032 | PRIME        |    8242 | `&prime;` |
| `″`       |    U+2033 | DOUBLE PRIME |    8243 | `&Prime;` |
| `‴`       |    U+2034 | TRIPLE PRIME |    8244 | `&#8244;` |

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

| Character | Codepoint | Name              | Decimal | HTML       |
|:---------:|----------:|:------------------|--------:|:----------:|
| `†`       |    U+2020 | DAGGER            |    8224 | `&dagger;` |
| `‡`       |    U+2021 | DOUBLE DAGGER     |    8225 | `&Dagger;` |
| `¹`       |    U+00B9 | SUPERSCRIPT ONE   |     185 | `&sup1;`   |
| `²`       |    U+00B2 | SUPERSCRIPT TWO   |     178 | `&sup2;`   |
| `³`       |    U+00B3 | SUPERSCRIPT THREE |     179 | `&sup3;`   |

## Not to Be Confused...

| Character | Codepoint | Name                        | Decimal | HTML      |
|:---------:|----------:|:----------------------------|--------:|:---------:|
| `°`       |    U+00B0 | DEGREE SIGN                 |     176 | `&deg;`   |
| `⁰`       |    U+2070 | SUPERSCRIPT ZERO            |    8304 | `&#8304;` |
| `º`       |    U+00BA | MASCULINE ORDINAL INDICATOR |     186 | `&ordm;`  |
| `˚`       |    U+02DA | RING ABOVE                  |     730 | `&#730;`  |
| `ᵒ`       |    U+1D52 | MODIFIER LETTER SMALL O     |    7506 | `&#7506;` |

-   The MASCULINE ORDINAL INDICATOR will appear underlined in some fonts.

| Character | Codepoint | Name                        | Decimal | HTML      |
|:---------:|----------:|:----------------------------|--------:|:---------:|

U+2022 `•` BULLET (HTML &#8226; · &bull;)
U+2023 `‣` TRIANGULAR BULLET (HTML &#8227;)
U+2043 `⁃` HYPHEN BULLET (HTML &#8259;)
U+204C `⁌` BLACK LEFTWARDS BULLET (HTML &#8268;)
U+204D `⁍` BLACK RIGHTWARDS BULLET (HTML &#8269;)
U+2219 `∙` BULLET OPERATOR (HTML &#8729;) for use in mathematical notation primarily as a dot product instead of interpunct.
U+22C5 `⋅` DOT OPERATOR (HTML &#8901;)
U+25CB `○` WHITE CIRCLE (HTML &#9675;)
U+25D8 `◘` INVERSE BULLET (HTML &#9688;)
U+25D9 `◙` INVERSE WHITE CIRCLE (HTML &#9689;)
U+25E6 `◦` WHITE BULLET (HTML &#9702;)
U+2619 `☙` REVERSED ROTATED FLORAL HEART BULLET (HTML &#9753;); see Fleuron (typography)
U+2765 `❥` ROTATED HEAVY BLACK HEART BULLET (HTML &#10085;)
U+2767 `❧` ROTATED FLORAL HEART BULLET (HTML &#10087;); see Fleuron (typography)
U+29BE `⦾` CIRCLED WHITE BULLET (HTML &#10686;)
U+29BF `⦿` CIRCLED BULLET (HTML &#10687;)

## Resources

-   [HTML4 entities](https://www.w3.org/TR/html4/sgml/entities.html) are best for backward compatibility.
