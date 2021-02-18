# Miscellaneous HTML Notes

## id and name Attributes

-   Identifiers are **case-sensitive**.

HTML 4 restrictions (**recommended to keep in most applications**):

-   Must start with a leter
-   May be followed by any number of letters, digits, `-`, `_`, `:`, and/or `.`
-   Source: <https://www.w3.org/TR/REC-html40/types.html#type-name>

HTML 5 restrictions are looser:

-   Must contain at least one character.
-   Must not contain U+0020 SPACE, U+0009 TAB, U+000A LF, U+000C FF,
    or U+000D CR.
-   Source: <https://www.w3.org/TR/html50/dom.html#the-id-attribute>

## attribute selectors for class and id

-   `#foo` and `[id=foo]` are equivalent.

    The former has higher specificity; the latter has the same
    specificity as class selectors and other attribute selectors.

-   `.foo` and `[class~=foo]` are equivalent.

    Both have the same specificity.

## element names, ids, and classes that DO NOT NEED to be escaped in CSS selectors

http://dev.w3.org/csswg/css-syntax/#ident-token-diagram

-   may contain the following symbols:
    -   `a` through `z`
    -   `A` through `Z`
    -   `0` through `9`
    -   `_` (underscore)
    -   `-` (hyphen)
    -   non-ASCII symbols (code point greater than or equal to U+0080)
    -   escape sequences
-   cannot start with:
    -   a digit
    -   a hyphen followed by a digit
-   cannot be:
    -   a hyphen by itself
-   must contain at least one symbol

## what MUST be escaped in a CSS selector?

-   `-` by itself
-   anything starting with a digit
-   anything starting with `-` followed by a digit
-   any of the following:
    -   U+0020 SPACE
    -   U+007F DELETE
    -   `!"#$%&'()*+,./:;<=>?@[\]^``{|}~`
        (which is any ASCII punctuation except for `-` and `_`)

Notes:

-   `-` can be escaped to `\-` (as with all other punctuation)
-   ` ` can be escaped to `\ `
-   `0` through `9` can be escaped to `\30 ` through `\39 `.
-   U+0009 TAB (usually `\t`) must be scaped based on codepoint: `\9 `
-   U+000A LF (usually `\n`) must be scaped based on codepoint: `\a `
-   U+000B VT (usually `\v`) must be scaped based on codepoint: `\b `
-   U+000C FF (usually `\f`) must be scaped based on codepoint: `\c `
-   U+000D CR (usually `\r`) must be scaped based on codepoint: `\d `

## escape sequences

-   `\` followed by 1+ hexdigits followed by one optional space
    character (LF, CR, FF, tab, or U+0020 SPACE)

-   `\` followed by any character other than hexdigit, LF, CR, or FF

-   `\:` does not work in IE 7 or older; use `\3a ` (with a trailing
    space) instead.

## escapes may be:

## CSS class names

<https://www.w3.org/TR/CSS21/grammar.html#scanner>

```
ident		-?{nmstart}{nmchar}*
nmstart		[_a-z]|{nonascii}|{escape}
nmchar		[_a-z0-9-]|{nonascii}|{escape}
nonascii	[\240-\377]
escape		{unicode}|\\[^\r\n\f0-9a-f]
unicode		\\{h}{1,6}(\r\n|[ \t\r\n\f])?
h           [0-9a-f]
```

## Examples

```
valid                   invalid
----------------------  ----------------------
--                      -
-e    -3    -_    -\!   -!
e     3     _     \!    !
foo\ bar                foo bar
foo\!bar                foo!bar
foo-bar                 foo<DEL>bar
foo_bar
foo--bar
foo__bar
```

Sources:

-   <https://mathiasbynens.be/notes/css-escapes>

-   CSS Syntax Module Level 3 <https://drafts.csswg.org/css-syntax/#ident-token-diagram>
