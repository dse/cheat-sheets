# Emacs Regular Expressions

    .                           matches any character except a newline
    *   +   ?                   greedy postfix operators with their usual meanings
    *?  +?  ??                  non-greedy postfix operators

    \{n\}                       repetition
    \{n,m\}

    [...]                       character class
    [^...]                      complemented (negated) character class
    [[:ascii:]], etc.           character classes, see https://www.gnu.org/software/emacs/manual/html_node/elisp/Char-Classes.html#Char-Classes
    ^                           beginning of LINE - used only at beginning of regexp or after \( or \|
    $                           end of LINE - used only at end of regexp or after \) or \|

    \|                          alternation
    \(...\)                     grouping
    \(?:...\)                   non-capturing grouping
    \1 through \9               backreference

## Zero-Width Assertions

    \`      (backtick)          beginning of string or buffer
    \'      (single quote)      end of string or buffer
    \=                          at point
    \b   \B                     beginning or end of word, neither beginning nor end of word
    \<   \>                     beginning, end of word (beginning, end of buffer IFF word-constitutent character follows, precedes)
    \w   \W                     word-constitutent, non-word-constitutent character
    \_<  \_>                    beginning or end of symbol

## Syntax Tables

    \s<class>    \S<class>      any character matching, or not matching, a syntax class

    \s-                         whitespace
    \s.                         ordinary punctuation
    \sw                         word-constitutent character

<https://www.gnu.org/software/emacs/manual/html_node/elisp/Syntax-Class-Table.html#Syntax-Class-Table>

## Character Categories

    \c<class>  \C<class>        any character matching, or not matching, a character category

<https://www.gnu.org/software/emacs/manual/html_node/elisp/Categories.html#Categories>
