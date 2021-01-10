# Miscellaneous HTML Notes

## id and name Attributes

-   Identifiers are **case-sensitive**.

HTML 4 restrictions (**recommended to keep in most applications**):

-   Must start with a leter
-   May be followed by any number of letters, digits, `-`, `_`, `:`, and/or `.`
-   Source: <https://www.w3.org/TR/REC-html40/types.html#type-name>

HTML 5 restrictions are looser:

-   Must contain at least one character.
-   Must not contain U+0020 SPACE, tab, LF, FF, or CR.
-   Source: <https://www.w3.org/TR/html50/dom.html#the-id-attribute>

## id and class in CSS Selectors

-   `#foo` and `[id=foo]` are equivalent.

    The former has higher specificity; the latter has the same
    specificity as class selectors and other attribute selectors.

-   `.foo` and `[class~=foo]` are equivalent.

    Both have the same specificity.

## ids and classes that DO NOT NEED to be escaped in CSS selectors

-   one of the following:
    -   `--`
    -   `-` followed by one letter, digit, `_`, non-ASCII character, or escape
    -   one letter, digit, `_`, non-ASCII character, or escape
-   followed by zero or more letters, digits, `-`, `_`, non-ASCII characters, or escapes

-   cannot be:
    -   `-` by itself
-   cannot contain any of:
    -   U+0020 SPACE, U+007F DELETE, or `!"#$%&'()*+,./:;<=>?@[\]^``{|}~`
        (that's all punctuation except for `-` and `_`)
    -   unless it's part of an escape

-   An escape may be:
    -   `\` followed by 1+ hexdigits followed by optional whitespace (LF, CR, FF, tab, U+0020 SPACE)
    -   `\` followed by any character other than hexdigit, LF, CR, or FF
    -   `\:` does not work in IE<8; use `\3a ` instead.

## CSS class names

<https://www.w3.org/TR/CSS21/grammar.html#scanner>

-

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
