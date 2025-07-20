# ed, man!  man ed

Ed is the standard text editor.

## Synopsis

    ed [-E, --extended-regexp]
       [-s, --silent, --quiet]
       [--skip-trailing-cr] [<filename>]
   
## Modes

-   **command mode** is ed's initial mode

-   Some commands switch to **input mode**.
    In it, type some text.  A "." on a line by itself
    ends input mode.

## Commands

Each ed command operates on whole lines or ranges of lines.

Each ed command contains:
-   zero or more addresses
-   the single-character command itself
-   optional parameters

## Addresses

    .           The current line, or current address
    $           The last line
    <n>         The nth line in the buffer, 0 ... $
    -           The previous line
    ^<n>        The nth previous line
    +           The next line
    +<n>        The nth next line
    ,           The first through last lines
    ;           The current through last lines
    /re/        The next line matching /re/
    ?re?        The previous line matching /re/
    'x          A line previously marked as x

## Commands

    (.)         a               append - insert (input mode) text to buffer after addressed line
    (.,.)       c               change - delete addressed lines; insert (append mode)
    (.,.)       d               delete addressed lines; set current address to address of (deleted) last line
                e <file>        edit file, warning on unsaved changes; set default filename; set current address to last line
                e !<shell-cmd>  read output of shell command
                E <file>        edit unconditionally
                f <file>        set default filename
    (1,$)       g/re/<cmd>      mark each matching line; apply command list to each marked line
                g/re/<cmd>\
                <cmd>\
                <cmd>
    (1,$)       G/re/           input command list
                

## Regular Expressions

    .           any single character
    [<class>]   any single character in the class
    [[:alnum:]] POSIX character classes
    [.col-elm.]
    [=col-elm=]
    [^<class>]  any single character EXCEPT ones in the class
    ^   $       beginning or end of line
    \(<re>\)    grouping
    *           zero or more characters
    \{n,m\}     n through m (inclusive) occurrences
    \{n,\}      n or more occurrences
    \{n\}       exactly n occurrences

### gnu ed extensions

    \<  \>      beginning or end of word
    \`  \'      beginning or end of line
    \?
    \+
    \b  \B      word boundary or not word boundary
    \w  \W      word or non-word character

