# CSS Classes and Ids

Technically, you can use anything as a CSS class or ID.

However, there are syntax considerations in:

## CSS Class Selectors

### Level 4 CSS class selector

https://drafts.csswg.org/selectors/#class-selector

A class selector is a full stop followed by an identifier.

### CSS identifier

https://drafts.csswg.org/css-values-4/#css-css-identifier

Denoted as `\<ident\>`.

#### Ident-token grammar

Non-normative railroad diagram: https://drafts.csswg.org/css-syntax-3/#ident-token-diagram

https://drafts.csswg.org/css-syntax/#ident-token-diagram

Look for the formal grammar: https://drafts.csswg.org/selectors-4/#grammar

https://drafts.csswg.org/css-syntax-3/#typedef-ident-token

In a CSS class, selector, a class name or ID:

-   May start with `-` followed by `-`.
-   May start with `-` followed by an escape.
-   May start with an escape.
-   May start with `-` followed by [A-Za-z_].
-   May start with `-` followed by non-ASCII.
-   May start with [A-Za-z_].
-   May start with non-ASCII.
-   May **not** be a lone hyphen-minus.
-   May **not** start with `-` followed by space.
-   May **not** start with `-` followed by digit.
-   May **not** start with `-` followed by any ASCII punctuation character except `-_`:

        !"#$%&'()*+,./:;<=>?@[\]^`{|}~

then followed by zero or more:
-   [-A-Za-z0-9_]
-   non-ASCII
-   escape
-   The following **must** be escaped:

        !"#$%&'()*+,./:;<=>?@[\]^`{|}~

#### Escapes

-   A `\` followed by 1 to 6 hex digits followed by one optional whitespace token,
    meaning the specified hex codepoint.

-   A `\` followed by any character that is not a newline or hex digit,
    simply meaning that character.

#### Whitespace

    \n    \r    \r\n    \f    \t    U+0020

#### Newline

    \n    \r    \r\n    \f

## HTML `class` Attributes

