# Comparative Regular Expressions

## Sources

-   [The Open Group](https://pubs.opengroup.org/onlinepubs/009695399/basedefs/xbd_chap09.html#:~:text=Regular%20Expressions%20(REs)%20provide%20a,according%20to%20the%20current%20locale.)
    for basic and extended regular expressions

## Comparative

Most implementations use regular expressions based on Extended Regular
Expressions.  GNU Emacs bases its regexs on Basic Regular Expressions.

    --------------  ------------------------------------------  ----------------
    |               alternation                                 ERE PL PHP PY JS
    *               zero or more occurrences                    ERE PL PHP PY JS
    +               one or more occurrences                     ERE PL PHP PY JS
    ?               zero or one occurrence                      ERE PL PHP PY JS
    {m}             m occurrences                               ERE
    {m,}            m or more occurrences                       ERE
    {m,n}           m to n occurrences                          ERE
    {,n}            zero to n occurrences                           PL
    *? +? ?? {}?    non-greedy                                      PL
    *+ ++ ?+ {}+    give nothing back                               PL
    (...)           (capturing) group                           ERE PL PHP PY JS
    .               any single character                        ERE PL PHP PY JS
                        PL: any char except \n; any char if /s is used
    ^               beginning of line                           ERE PL PHP PY JS
                        PL: EOS (or BOL if /m is used)
    $               end of line                                 ERE PL PHP PY JS
                        PL: EOS, or before \n at EOS, or before \n if /m is used
    [abc]           any of these characters                     ERE PL PHP PY JS
    [^abc]          negated character range                     ERE PL PHP PY JS
    [a-z]           character range                             ERE PL PHP PY JS
    [^a-z]          negated character range                     ERE PL PHP PY JS
    [-...] [...-]   to include '-'                              ERE
    []...] [^]...]  to include ']'                              ERE
    [[.-.]-z]       to start a range with '-'                   ERE
    [...[.xxx.]...] collating element                           ERE
    [...[=xxx=]...] equivalence class                           ERE
    [..[:blank:]..] character class                             ERE PL
    
    \<char>         literal ^ . [   $ ( ) | * + ? {     \       ERE
                        JS: ^ . [ ] $ ( ) | * + ? { } / \              JS
    \<non-alnum>    literal character                               PL JS
    #               comment to EOL if /x is used                    PL
    
    \w \W           word character [A-Za-z0-9_] or negated          PL JS
    \d \D           decimal digit or negated                        PL JS
    \b \B           word boundary or negated                        PL JS

    \t              U+0009 CHARACTER TABULATION                     PL JS
    \n              U+000A LINE FEED                                PL JS
    \r              U+000D CARRIAGE RETURN                          PL JS
    \f              U+000C FORM FEED                                PL JS
    \v              U+000B LINE TABULATION                          -- JS
    \a              U+0007 BELL                                     PL --
    \e              U+001B ESCAPE                                   PL --
    [\b]            U+0008 BACKSPACE                                PL JS
    \cK             control character                               PL JS
                        PL: not certain
                        JS: \cA to \cZ, \ca to \cz only
    \x00 .. \xff    hexadecimal                                     PL JS
    \x{...}         hexadecimal                                     PL --
    \uxxxx          hexadecimal                                     -- JS
    \u{...}         hexadecimal unicode                             -- JS
    \N{name}        named Unicode character                         PL
    \N{U+263D}      Unicode character                               PL
    \0 \00 \000     octal                                           PL
    \o{...}         octal                                           PL
    \l \u           lowercase or uppercase next character           PL
    \L...\E \U...\E lowercase or uppercase                          PL
    \Q...\E         quote - disable metacharacters                  PL
    
    (?[...])        extended bracketed character class              PL
    \s \S           whitespace character or negated                 PL
    \pP \p{...}     named property                                  PL *
    \PP \P{...}         " but negated                               PL *
                        JS: \p{} and \P{} only; requires /u flag
    \X              extended grapheme cluster                       PL
    \10 ...         backreference                                   PL JS
    \g1 \g{-1}      relative backreference                          PL
    \g{name}        named backreference                             PL
    \k<name>        named backreference                             PL JS
    \k'name'        named backreference                             PL
    \k{name}        named backreference                             PL
    \N              any character other than \n                     PL
    \v \V           vertical whitespace                             PL
    \h \H           horizontal whitespace                           PL
    \R              any kind of linebreak                           PL
    \b{} \B{}       unicode boun. of specific type or negated       PL
    \A              only at beginning of string                     PL
    \Z              only at EOS or before \n at EOS                 PL
    \z              only at EOS                                     PL
    \G              match only at end of prior m//g                 PL

    EXTENDED PATTERNS
    
    (?:pattern)     non-capturing group                             PL JS
    (?=pattern)     positive lookahead                              PL JS
    (?!pattern)     negative lookahead                              PL JS
    (?<=pattern)    positive lookbehind                             PL JS
    (?<!pattern)    negative lookbehind                             PL JS
    (?<name>pat)    named capture group                             PL JS

    (?#text)        comment                                         PL
    (?flags-flags)  turn on flags for rest of RE                    PL
    (?^flags)                                                       PL

    (?flags:pat)    non-capturing group with flags specified        PL JS
    (?flags-flags:pat)                                              PL JS
                            JS: i m s flags only; limited avail

    (?^flags:pat)                                                   PL
    (?|pattern)     branch reset                                    PL
    (?'name'pat)    named capture group                             PL
    (?{code})       execute code                                    PL
    (*{code})                                                       PL
    (??{code})                                                      PL
    (?parno) (?-parno) (?+parno) (?R) (?0)  recursive subpat        PL
    (?&name)        recursive named subpattern                      PL
    (?(cond)yes|no)                                                 PL
    (?>pattern)                                                     PL
    (?[...])        extended bracketed character class              PL

    REGULAR EXPRESSION FLAGS
    
    /m              ^ matches after \n; $ matches before \n         PL JS
                        [multi-line]
    /s              . matches any character including \n            PL JS
                        [single line]
    /i              case insensitive                                PL JS
    /x              allow whitespace and comments                   PL
    /xx                 " and also ignore spaces inside []          PL
    /a /aa /d /l /u character set modifiers                         PL
    /n              () groups do not capture                        PL
    /p              enable ${^PREMATCH} ${^MATCH} ${^POSTMATCH}     PL
                        (always available since perl 5.20)
    /c              keep current posn during repeated matching      PL
    /g              globally match the pattern repeatedly           PL JS
    /e              evaluate RHS as Perl code                       PL
    /ee             evaluate RHS as a string then `eval`            PL
    /o              buggy optimization                              PL
    /r              non-destrubtive substn; return new value        PL
    
    /d              Generate indices for substrings matches         -- JS
    /u              Unicode code points                             -- JS
    /v              additional Unicode features                     -- JS
    /y              sticky search                                   -- JS
    
    BASIC REGULAR EXPRESSIONS VS. EXTENDED
    
    | + ? { }       always ordinary characters
    \{...\}         bounds
    \(...\)         grouping
    ^               if start of re or \(\) then begin string else literal ^
    $               if start of re or \(\) then end string   else literal $
    *               if start of re or \(\) then literal * else zero or more
    \1 ... \9       backreferences
                    no alternation '|', no 1 or more '+', nor 0 or 1 '?'

