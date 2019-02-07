# Miscellaneous HTML Notes

## id and name Attributes

-   Identifiers are **case-sensitive**.
-   I strongly recommend keeping the HTML 4 restrictions listed below
    for most applications, though the HTML 5 specification removes
    most of them.

HTML 4 restrictions:

-   Must start with a leter (`[A-Za-z]`)
-   May be followed by any number of:
    -   letters (`[A-Za-z]`)
    -   digits (`[0-9]`)
    -   U+002D HYPHEN-MINUS (`-`)
    -   U+005F LOW LINE (underscore `_`)
    -   U+003A COLON (`:`)
    -   U+002E FULL STOP (period `.`)
-   Source: <https://www.w3.org/TR/REC-html40/types.html#type-name>

HTML 5 restrictions:

-   Must contain at least one character.
-   Must not contain any space characters:
    -   U+0020 SPACE
    -   U+0009 CHARACTER TABULATION
    -   U+000A LINE FEED (LF)
    -   U+000C FORM FEED (FF)
    -   U+000D CARRIAGE RETURN (CR)
    -   may contain other characters having the Unicode property "White_Space".
        -   See: <https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt>
-   Source: <https://www.w3.org/TR/html50/dom.html#the-id-attribute>

## class Attribute

TBD

## id and class in CSS Selectors

-   `#foo` and `[id=foo]` are equivalent.
-   `.foo` and `[class~=foo]` are equivalent.
-   Characters that must be escaped:
    -   TBD
