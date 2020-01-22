# Windows 1252

[Windows-1252](https://en.wikipedia.org/wiki/Windows-1252), or Code
Page 1252, is a superset of ISO-8859-1 (Latin-1) that adds character
mappings for most of codepoints 128 through 159, a set of codepoints
that ISO-8859-1 uses for control characters.  Windows-1252 is a legacy
encoding used in Windows for English and Western European text.  It
includes all printable characters in ISO 8859-15.

This cheat sheet exists because occasionally you will find
Windows-1252 encoded text, either in its raw form, or encoded as HTML
entities from `&#128;` to `&#159;` (or `&#x80;` to `&#x9f;`).

Needless to say, the Unicode column and its accompanying Hex column
are the correct codepoints to use in Unicode.

| Windows-1252 | Hex    | Character | Unicode | Hex    | Name                                       | HTML       |
|-------------:|:-------|:---------:|--------:|:-------|:-------------------------------------------|:-----------|
|          128 | U+0080 | `€`       |    8364 | U+20AC | EURO SIGN                                  | `&euro;`   |
|          129 | U+0081 |           |         |        |                                            |            |
|          130 | U+0082 | `‚`       |    8218 | U+201A | SINGLE LOW-9 QUOTATION MARK                | `&sbquo;`  |
|          131 | U+0083 | `ƒ`       |     402 | U+0192 | LATIN SMALL LETTER F WITH HOOK             | `&fnof;`   |
|          132 | U+0084 | `„`       |    8222 | U+201E | DOUBLE LOW-9 QUOTATION MARK                | `&bdquo;`  |
|          133 | U+0085 | `…`       |    8230 | U+2026 | HORIZONTAL ELLIPSIS                        | `&hellip;` |
|          134 | U+0086 | `†`       |    8224 | U+2020 | DAGGER                                     | `&dagger;` |
|          135 | U+0087 | `‡`       |    8225 | U+2021 | DOUBLE DAGGER                              | `&Dagger;` |
|          136 | U+0088 | `ˆ`       |     710 | U+02C6 | MODIFIER LETTER CIRCUMFLEX ACCENT          | `&circ;`   |
|          137 | U+0089 | `‰`       |    8240 | U+2030 | PER MILLE SIGN                             | `&permil;` |
|          138 | U+008A | `Š`       |     352 | U+0160 | LATIN CAPITAL LETTER S WITH CARON          | `&Scaron;` |
|          139 | U+008B | `‹`       |    8249 | U+2039 | SINGLE LEFT-POINTING ANGLE QUOTATION MARK  | `&lsaquo;` |
|          140 | U+008C | `Œ`       |     338 | U+0152 | LATIN CAPITAL LIGATURE OE                  | `&OElig;`  |
|          141 | U+008D |           |         |        |                                            |            |
|          142 | U+008E | `Ž`       |     381 | U+017D | LATIN CAPITAL LETTER Z WITH CARON          | `&Zcaron;` |
|          143 | U+008F |           |         |        |                                            |            |
|          144 | U+0090 |           |         |        |                                            |            |
|          145 | U+0091 | `‘`       |    8216 | U+2018 | LEFT SINGLE QUOTATION MARK                 | `&lsquo;`  |
|          146 | U+0092 | `’`       |    8217 | U+2019 | RIGHT SINGLE QUOTATION MARK                | `&rsquo;`  |
|          147 | U+0093 | `“`       |    8220 | U+201C | LEFT DOUBLE QUOTATION MARK                 | `&ldquo;`  |
|          148 | U+0094 | `”`       |    8221 | U+201D | RIGHT DOUBLE QUOTATION MARK                | `&rdquo;`  |
|          149 | U+0095 | `•`       |    8226 | U+2022 | BULLET                                     | `&bull;`   |
|          150 | U+0096 | `–`       |    8211 | U+2013 | EN DASH                                    | `&ndash;`  |
|          151 | U+0097 | `—`       |    8212 | U+2014 | EM DASH                                    | `&mdash;`  |
|          152 | U+0098 | `˜`       |     732 | U+02DC | SMALL TILDE                                | `&tilde;`  |
|          153 | U+0099 | `™`       |    8482 | U+2122 | TRADE MARK SIGN                            | `&trade;`  |
|          154 | U+009A | `š`       |     353 | U+0161 | LATIN SMALL LETTER S WITH CARON            | `&scaron;` |
|          155 | U+009B | `›`       |    8250 | U+203A | SINGLE RIGHT-POINTING ANGLE QUOTATION MARK | `&rsaquo;` |
|          156 | U+009C | `œ`       |     339 | U+0153 | LATIN SMALL LIGATURE OE                    | `&oelig;`  |
|          157 | U+009D |           |         |        |                                            |            |
|          158 | U+009E | `ž`       |     382 | U+017E | LATIN SMALL LETTER Z WITH CARON            | `&zcaron;` |
|          159 | U+009F | `Ÿ`       |     376 | U+0178 | LATIN CAPITAL LETTER Y WITH DIAERESIS      | `&Yuml;`   |
