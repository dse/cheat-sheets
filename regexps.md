```
zero or more
    *               BRE, ERE, Perl, JS, Emacs
zero or one
    \?              BRE extension
    ?               ERE, Perl, JS, Emacs
one or more
    \+              BRE extension
    +               ERE, Perl, JS, Emacs
non-greedy
    *?              Perl, JS, Emacs
    ??              Perl, JS, Emacs
    +?              Perl, JS, Emacs
from m to n times inclusive
    \{m\} \{m,\} \{m,n\}     BRE
    {m}   {m,}   {m,n}       ERE, Perl, JS

any character
    .               BRE, ERE, Perl, JS, Emacs
character alternate
    [...]           BRE, ERE, Perl, JS, Emacs
negated character alternate
    [^...]          BRE, ERE, Perl, JS, Emacs

beginning of line
    ^               BRE
                    ERE
                    Perl if /m is set
                    JS if /m is set
                    Emacs
end of line
    $               BRE
                    ERE
                    Perl if /m is set
                    JS if /m is set
                    Emacs
beginning/end of STRING
    \\` \\'         Elisp
    \A  \z          Perl
    ^   $           JS if /m is not set
escape
    \
    \\              Elisp

grouping
    \(...\)         BRE
    (...)           ERE
backreference
    \1 through \9   BRE
                    not in ERE
positive lookahead, lookbehind
    (?=...)         JS, Perl
    (?<=...)        JS, Perl
negative lookahead, lookbehind
    (?!...)         JS, Perl
    (?<!...)        JS, Perl
non-capturing group
    (?:...)         JS, Perl
named group
    (?<name>...)    JS, Perl
named group backreference
    \k<name>        JS

alternation
    \|              ERE
    |               BRE, JS, Perl
character types
    digit               \d \D                   JS, Perl
    word                \w \W                   JS              [A-Za-z0-9_]
    whitespace          \s \S                   JS              [ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\ue000\ufeff]
    tab                 \t                      JS
    cr                  \r                      JS
    lf                  \n                      JS
    vtab                \v                      JS
    ff                  \f                      JS
    backspace           [\b]                    JS
    null                \0                      JS
    control             \cA to \cZ              JS
                        \x00 to \xff            JS
                        \u0000 to \uffff        JS
                        \u{0} to \u{10ffff}     JS
    unicode property    \p{prop} \P{prop}       JS

character classes
    ASCII               [:ascii:]               0 to 127            Emacs
    non-ASCII           [:nonascii:]                                Emacs
    alphanumeric        [:alnum:]               [A-Za-z0-9]         POSIX
    blank               [:blank:]               [ \t]               POSIX
                                                                    Emacs   horizontal whitespace per Annex C of Unicode Tech. Standard #18
    control             [:cntrl:]               0 to 31             POSIX
    digit               [:digit:]               [0-9]               POSIX
    hex digit           [:xdigit:]              [0-9A-Fa-f]         POSIX
    graphic             [:graph:]               [^ [:cntrl:]] [ -~] POSIX
                                                                    Emacs   everything except for whitespace, control, surrogates, unassigned codepoints
    lowercase           [:lower:]               [a-z]               POSIX
    uppercase           [:upper:]               [A-Z]               POSIX
    alphabetic          [:alpha:]               [A-Za-z]            POSIX
    print               [:print:]               [[:graph:] ]        POSIX
                                                whitespace or graphic
    punct               [:punct:]               all non-alphanumeric graphic characters
    space               [:space:]               [ \t\r\n\v\f]       POSIX
    word                [:word:]                [A-Za-z0-9_]        Bash, Emacs
    
    multibyte           [:multibyte:]                               Emacs
    unibyte             [:unibyte:]                                 Emacs
    
    collating symbols   [.ch.]                                      POSIX
    equivalence class   [=a=]                                       POSIX
```
