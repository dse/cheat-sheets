# CSS Class Names

https://drafts.csswg.org/css-syntax-3/#ident-token-diagram

NOTE: The following things in CSS are completely independent:

- A CSS property name starting with `--`
- A CSS variable name starting with `--` (they all do)
- A CSS property value starting with `--`
- A CSS class name starting with `--`

This talks about CSS class names.

## What's a Valid CSS Class Name?

A CSS class name can actually be anything.  Really.

When people say **some CSS classes can't be specified**; it's really
that some CSS class names cannot be specified fully unescaped.

## CSS Class Names You Can Use Fully Unescaped

-   Any name that:
    -   starts with a:
        -   _letter_, _low line_, or _non-ASCII ident character_,
    -   followed immediately by zero or more:
        -   _letters_, _digits_, _low lines_, or _non-ASCII ident characters_
        
-   Any name that:
    -   starts with one _hyphen-minus_,
    -   followed immediately by one:
        -   _letter_, _low line_, or _non-ASCII ident character_,
    -   followed immediately by zero or more:
        -   _letters_, _digits_, _low lines_, or _non-ASCII ident characters_

-   Any name that:
    -   starts with two _hyphen-minus_ characters,
    -   followed immediately by zero or more:
        -   _letters_, _digits_, _low lines_, or _non-ASCII ident characters_
        
## CSS Class Names You Cannot Use Fully Unescaped

-   Any name starting with a _digit_.

-   A lone _hyphen-minus_.

-   Any name:
    -   starting with one _hyphen-minus_,
    -   followed immediately by a _digit_.

-   Any name including any character in the "NO" column below.

## CSS Class Names You Cannot Use At All

-   The empty string.

## Can These Characters Appear in a Fully Unescaped CSS Class Name?

If you use anything past U+007F, be sure to specify your `charset`
(which in CSS is really your encoding).

| YES               | SOMETIMES        | NO               |                         |
|:------------------|:-----------------|:-----------------|-------------------------|
|                   |                  | U+0000 to U+001F | control characters      |
|                   |                  | U+0020           | SPACE                   |
|                   |                  | U+0021 to U+002C | ! " # $ % & ' ( ) * + , |
|                   | U+002D           |                  | HYPHEN-MINUS            |
|                   |                  | U+002E           | .                       |
|                   |                  | U+002F           | /                       |
|                   | U+0030 to U+0039 |                  | DIGITS ZERO TO NINE     |
|                   |                  | U+003A to U+0040 | : ; < = > ? @           |
| U+0041 to U+005A  |                  |                  | LATIN CAPITAL LETTERS   |
|                   |                  | U+005B to U+005E | [ \\ ] ^                |
| U+005F            |                  |                  | LOW LINE                |
|                   |                  | U+0060           | GRAVE ACCENT            |
| U+0061 to U+007A  |                  |                  | **SPEEK UP LIBRUL**     |
|                   |                  | U+007B to U+007E | { \| } ~                |
|                   |                  | U+007F           | DELETE                  |
|                   |                  | U+0080 to U+009F | C1 control characters   |
|                   |                  | U+00A0 to U+00B6 |                         |
| U+00B7            |                  |                  | MIDDLE DOT              |
|                   |                  | U+00B8 to U+00BF |                         |
| U+00C0 to U+00D6  |                  |                  |                         |
|                   |                  | U+00D7           | MULTIPLICATION SIGN     |
| U+00D8 to U+00F6  |                  |                  |                         |
|                   |                  | U+00F7           | DIVISION SIGN           |
| U+00F8 to U+037D  |                  |                  |                         |
|                   |                  | U+037E           | GREEK QUESTION MARK     |
| U+037F to U+1FFF  |                  |                  |                         |
|                   |                  | U+2000 to U+200B |                         |
| U+200C            |                  |                  | ZERO WIDTH NON-JOINER   |
| U+200D            |                  |                  | ZERO WIDTH JOINER       |
|                   |                  | U+200E to U+203E |                         |
| U+203F            |                  |                  | UNDERTIE                |
| U+2040            |                  |                  | CHARACTER TIE           |
|                   |                  | U+2041 to U+206F |                         |
| U+2070 to U+218F  |                  |                  |                         |
|                   |                  | U+2190 to U+2BFF |                         |
| U+2C00 to U+2FEF  |                  |                  |                         |
|                   |                  | U+2FF0 to U+2FFF |                         |
|                   |                  | U+3000           | IDEOGRAPHIC SPACE (CJK) |
| U+3001 to U+D7FF  |                  |                  |                         |
|                   |                  | U+D800 to U+DFFF |                         |
|                   |                  | U+E000 to U+F8FF |                         |
| U+F900 to U+FDCF  |                  |                  |                         |
|                   |                  | U+FDD0 to U+FDEF |                         |
| U+FDF0 to U+FFFD  |                  |                  |                         |
|                   |                  | U+FFFE           | not a character         |
|                   |                  | U+FFFF           | not a character         |
| U+10000 or higher |                  |                  |                         |
