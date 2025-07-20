# Perl Regular Expressions

The quote-like operators are `m//`, `s///`, `qr//`, and `??`; see `perlop`.

The match operators are `=~` and `!~`.

# Delimiters

    m//     m''     m##     m||     use any character
    m<>     m()     m[]     m{}     paired mirror-image characters

# Metacharacters

    ^.$|()[]*+?^-       -^ in []    # if /x is used

    ^   BOS                             BOL if /m is used
    .   any single character except \n  include \n if /s is used
    $   match EOS, before \n at EOS     or before any \n if /m is used
    |   alternation
    ()  grouping
    []  bracketed character class
    *   0+ times
    +   1+ times
    ?   0 or 1 time
    ^   only in []: complement
    -   only in []: character range
    #   starts a line comment if /x is used
    {}  range of occurrence count:   {n}   {n,}   {,m}   {n,m}
    *? +? ?? {...}?                 *+ ++ ?+ {...}+
        non-greedy quantifiers          greedy with no backtracking

# Escapes

    \t      tab
    \r      return
    \n      newline
    \f      form feed
    \a      alarm (bell)
    \e      escape
    \cK     control char.
    \N{PILE OF POO}     named character
    \N{U+1F4A9}         hex codepoint
    \x{0000} \00...\ff  hex codepoint
    \o{377} \000..\377  octal codepoint
    \l \u   lowercase or uppercase next character
    \L...\E lowercase until \E
    \U...\E uppercase until \E
    \Q...\E disable metacharacters

# Character Classes

    [abc]           either a, b, or c
    [a-z]           any lowercase letter
    [^a-z]          anything except a lowercase letter
    [+\-] or [-+]   minus or plus sign
    [[:...:]]       POSIX character classes, e.g., [[:upper:]]
    (?[...])
        extended bracketed char. classes **EXPERIMENTAL** see perlrecharclass
    
# Other Special Escapes
    
    \w \W       word character (alphanumeric + '_') *or* non-word character
    \s \S       whitespace *or* not
    \d \D       decimal digit *or* not
    \v \V       vertical whitespace *or* not
    \h \H       horizontal whitespace *or* not
    \R          any line break
    \n \N       \n *or* any character except \n

# Unicode
    
    \pP \PP     \p{Prop}    \P{Prop}    char. having/not having named property
    \X          unicode eXtended grapheme cluster
    

# Assertions

    \b    \B    word boundary (\w\W or \W\w)
    \b{}  \B{}  unicode boundary of specified type
    \A          only at BOS
    \Z          EOS or before \n at EOS
    \z          only at EOS
    \G          match only at pos() - end-of-match pos'n of prior m//g

# Groups

    ()                      capture group               use via $1, $2, etc.
    (?<name>...)            named capture group         use via $+{name}
    (?#text)                comment
    (?:pattern)             non-capturing group

    (?adlupimnsx-imnsx)     turn on/off modifiers for remainder of group
    (?^flags)               ^ is equiv. to d-imnsx
    (?flags:pattern)        turn flags on/off for pattern
    
    (?=pattern)     (?!pattern)     zero-width pos/neg lookahead assertns
    (?<=pattern)    (?<!pattern)    zero-width pos/neg lookBEHIND assertns

    (?{code})       execute code; always succeeds; refer via $^R
    (??{code})      execute code; use return value as pattern
    (?(condition)yes-pattern|no-pattern)        conditional regexp
    
    \1   \g1   \g{name}   \k<name>   \k'name'  \k{name}     backreferences
    \g-1 ...        backreference to immediately preceding capture group
    
# Black Magick Voodoo
    
    (?>pattern)     don't backtrack INTO this pattern
    \K              keep the stuff left of the \K, don't include in $&
    (?|pattern)     branch reset
    (?1) (?2) ...   (?-2) (?+2) (?R) (?0)       recursive subpattern
    (?&name)                                    recurse to named subpatrn

# Flags

    /m  multiple lines: ^ and $ also match BOL and EOL
    /s  single line: . also includes \n
    /i  case-insensitive
    /x  permit whitespace and comments; to match a space: [<space>] or \<space>
        or other means; \Q and \E not affected
    /xx also ignore spaces in []
    /n  stop () from capturing
    /a /d /l /u
        character set modifiers; see perlre(1) "Character set modifiers"
    /c  when matching: keep current posn during repeated matching
    /g  globally match the pattern repeatedly in the string
        when substituting: replace all occurrences
    /e  evaluate the replacement as an expression
    /ee evaluate the replacement as a string then eval the result
    /o  no!
    /r  perform non-destructive substitution; return the new value

# Whitespace

    U+0009  U+000A  U+000B  U+000C  U+000D  U+0020  U+0085  U+200E  U+2028
    tab     LF      line    FF      CR      space   next    U+200F  U+2029
    \t      \r      tab     \f      \n              line    LTR/RTL lin/par
                                                                    separtr

                                                     
