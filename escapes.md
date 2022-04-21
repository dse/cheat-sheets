```
JS      JS      Perl    Perl    PHP     PHP
string  regexp  string  regexp  string  regexp

\0                                              U+0000 NULL
\'                                              U+0027 APOSTROPHE
\"                                              U+0022 QUOTATION MARK
\\                                              U+005C REVERSE SOLIDUS
\n                      \n                      U+000A LINE FEED; LF
\r                                              U+000D CARRIAGE RETURN; CR
\v                                              U+000B LINE TABULATION
\t                                              U+0009 CHARACTER TABULATION
\b                      [\b]                    U+0008 BACKSPACE
\f                      \f                      U+000C FORM FEED
                        \a                      U+0007 BELL
                        \e                      U+001B ESCAPE

\uXXXX                                          range U+0000 to U+FFFF
\u{..}                                                U+0000 to U+10FFFF
\xXX                                                  U+0000 to U+00FF
                                                      U+0000 to 
                        \cX                     Control-X
                        \d                      [0-9]
                        \A                      beginning of STRING
                        \b                      word boundary
                        \B                      not a word boundary
```
