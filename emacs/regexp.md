# Emacs Regular Expressions

    \{n\}                       repetition
    \{n,m\}
    \(...\|...\)                grouping and alternation
    \(?:...\)                   zero-width positive lookahead assertion

# Zero-Width Assertions

    \`      (backtick)          beginning of string or buffer
    \'      (single quote)      end of string or buffer
    \=                          at point
    \b, \B                      beginning or end of word, neither beginning nor end of word
    \<, \>                      beginning, end of word (beginning, end of buffer IFF word-constitutent character follows, precedes)
    \w, \W                      word-constitutent, non-word-constitutent character
    \_<, \_>                    beginning or end of symbol

# Syntax Tables

<https://www.gnu.org/software/emacs/manual/html_node/elisp/Syntax-Class-Table.html#Syntax-Class-Table>

    \s-                         whitespace
    \s.                         ordinary punctuation
    \sw                         word-constitutent character
