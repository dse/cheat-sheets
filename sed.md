# sed cheat sheet

-   Some commands accept no addresses.

    They work on each input line.
    
-   Some commands accept one address.

    They work on each input line matching that address.

-   Some commands accept two addresses.

    They work on each line from `<addr1>` to `<addr2>` inclusive.

## Zero Address Commands

    :<label>        reachable destination for b or t commands
    #<comment>      single line comment
    }               close a { } block

## Zero- or One-Address Commands

    [<addr>]<command>

    =                       print the current line number
    a\<newline><text>       append <text>
    i\<newline><text>       insert <text>
    q                       print if auto-printing; immediately exit
    q<exit-code>            " with <exit-code> (GNU)
    Q[<exit-code>]          immediately exit without printing (GNU)
    r<filename>             append text from <filename>
    R<filename>             append next line from <filename> (GNU)

## Commands That Can Accept Ranges

    [<addr>|<range>]<command>

    {                       begin block
    b[<label>]              branch to <label> or end of script
    c\<newline><text>       replace selected lines with <text>
    d                       delete; start next cycle
    D                       delete first line in pattern space;
                                if empty, next line; else restart cycle
    h                       copy   pattern space to hold space
    H                       append "
    g                       copy   hold space to pattern space
    G                       append "
    l                       list current line
    l<width>                same but wrap at <width> chars (GNU)
    n                       read   next line into pattern space
    N                       append "
    p                       print pattern space
    P                       print pattern space up to first embedded newline
    s/<regexp>/<replace>/   replace; '&' for text matching <regexp>;
                                \1 to \9 for sub-expressions
    t[<label>]              branch to <label> or EOS if last s/// successful
    T[<label>]              branch if last s/// unsuccessful (GNU)
    w<filename>             write pattern space to <filename>
    W<filename>             write first line of p.s. to <filename> (GNU)
    x                       exchange hold and pattern spaces
    y/<source>/<dest>/      transliterate

## Addresses

    <line-number>           match specified <line-number> in all input,
                                or in each file if -s option is specified
    <line-number>~<step>    match <line-number> and every <step>th line after
    $                       match last line
    /<regexp>/              each line matching <rx>
    \<char><rx><char>       each line matching <rx> -- <char> is any character
                                e.g., \&<rx>&
    <addr1>,<addr2>         each line from <addr1> to <addr2> inclusive
                                if <addr2> is a /<regexp>/, it is not tested
                                against <addr1>

## Commands With Embedded Text

The `a`, `i`, and `c` commands accept a `<text>` parameter.

    1i\
    # -*- perl -*-
    <command>
    ...

The `<text>` is normally one line, but may contain embedded newlines
each preceded by a `\`.

    $a\
    # Local Variables:\
    # mode: perl\
    # End:
    <command>
    ...
