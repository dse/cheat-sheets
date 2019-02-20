# Terminal Control Sequences

If you are reading this, you most likely care about VTxxx-style and/or
ANSI-style escape sequences.

This is intended to be a quick reference to useful terminal control
sequences, mainly colors and text attributes.

## Character Attributes

    ESC [ <Ps> m
    ESC [ <Ps> ; <Ps> ; ... m

        0   normal
        1   bold
        2   faint                       22  normal (neither bold nor faint)
        3   italicized                  23  not italicized
        4   underlined                  24  not underlined
        5   blink                       25  steady (not blinking)
        7   inverse                     27  positive (not inverse)
        8   invisible                   28  visible
        9   crossed-out                 29  not crossed-out
        21  doubly underlined

        30-37   set fg to ISO color     39  reset fg to default
        40-47   set bg to ISO color     49  reset bg to default

    if 16-color support is enabled:
        90-97   set fg color to bright version of 0-7 (aixterm)
        100-107 set fg color to bright version of 0-7 (aixterm)
    otherwise:
        100     set fg and bg colors to default

    if 88-, 256-, or direct-color support is enabled:
        38;2;<Pi>;<Pr>;<Pg>;<Pb>    set fg color to closest match
        48;2;<Pi>;<Pr>;<Pg>;<Pb>    set bg color to closest match
                                    <Pi> is ignored
                                    <Pr>, <Pg>, <Pb> are 0 to 255

## ISO Colors

        0       1       2       3       4       5       6       7
        black   red     green   yellow  blue    magenta cyan    white

## Window Manipulation

    ESC [ <Ps> ; <Ps> ; ... t

        1               de-iconify
        2               iconify
        3;<x>;<y>       move window to [<x>, <y>]
        4;<h>;<w>       resize window to <h> x <w> pixels
        5               raise
        6               lower
        7               refresh
        8;<h>;<w>       resize window to <h> x <w> characters
        9;0             restore maximized window
        9;1             maximize
        9;2             maximize vertically
        9;3             maximize horizontally
        10;0            turn off full-screen
        10;1            turn on full-screen
        10;2            toggle full-screen

    ESC [ > <Ps> ; <Ps> t

        0               set window/icon labels using hexadecimal
        2               set window/icon labels using UTF-8

## Other Control Sequences

    ESC [ ! p           soft terminal reset

    ESC [ <Ps> <SPC> q  set cursor style
                            0   blinking block (default)
                            1/2 blinking/steady block
                            3/4 blinking/steady underline
                            5/6 blinking/steady bar

## Set Text Parameters (Operating System Commands)

    ESC ] <Ps> ; <Pt> BEL
    ESC ] <Ps> ; <Pt> ESC \

        0;<Pt>          change icon name and window title
        1;<Pt>          change icon name
        2;<Pt>          change window title
        4;<c>;<spec>    change color number <c> to <spec>
                            <c> is 0 to 7 for ISO colors
                                   8 to 15 for bright versions
                                   16-87 or 16-255
                            <spec> is per XParseColor.
        104;<c>         reset color number
        5;<c>;<spec>    change special color number
                            <c> is 0    bold
                                   1    underline
                                   2    blink
                                   3    reverse
                                   4    italic
        10;<Pt>         vt100 text foreground
        11;<Pt>         vt100 text background
        12;<Pt>         text cursor
        17;<Pt>         highlight bg
        19;<Pt>         highlight fg
        105;<c>         reset special color number
        6;<c>;<f>       enable/disable special color number
        106;<c>;<f>     enable/disable special color number
        50;<Pt>         set font to <Pt>
        110 to 119      reset colors changed in 10 to 19

## <Pt>

    <Pt> is a string of printable characters

    ESC \ is String Terminator (ST)
    ESC ] is Operating System Command (OSC)
    ESC [ is Control Sequence Introducer (CSI)

## XParseColor

    #<xxx>
    #<xxxxxx>
    #<xxxxxxxxxxxx>
    rgb:<x>/<x>/<x>
    rgb:<xx>/<xx>/<xx>
    rgb:<xxx>/<xxx>/<xxx>
    rgb:<xxxx>/<xxxx>/<xxxx>
    rgbi:<fp>/<fp>/<fp>

## Documentation Sources

-   [XTerm Control Sequences](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html)

    This is *the* best go-to source for everything you could possibly
    want to know about control sequences for your terminal emulator.
    It's part of the documentation for our good old friend, `xterm`.

-   [DEC Documents](https://vt100.net/docs/) for VTxxx-series terminals.

    The DEC VT100, introduced in 1978, was the first hardware terminal
    to support these control sequences.  Based on ECMA-48, they became
    the *de facto* standard used by almost every video terminal or
    terminal emulator in existence to this day.

-   [ECMA-48](http://www.ecma-international.org/publications/standards/Ecma-048.htm), *Control Functions for Coded Character Sets*, 5th Edition, 1991

    The official standard for terminal control sequences.  The first
    edition of ECMA-48, adopted in 1976, was first commercially
    implemented in DEC's VT100 terminal.  (Ecma, originally a European
    body, is now a worldwide standards organization.)

-   **ISO/IEC 6429:1992**, *Information technology — Control Functions for Coded Character Sets*

    This is the international standards bodies' equiavelent standard.

    If you really want to [purchase a copy](https://www.iso.org/standard/12782.html), then more power to you.

-   **ANSI X3.64-1979**, *Additional Controls For Use With American National Standard Code for Information Interchange*

    This was the American standards body's version of the standard.
    Adopted in 1979, and withdrawn in 1994 in favor of ECMA-48, it is
    why these are frequently called "ANSI escape sequences".

    If you really want to purchase a copy of this **historical standard**,
    [you can do so](https://www.browntechnical.org/products/ansi-x3-64-1979-historical-edition-american-national-standard-additional-controls-for-use-with-american-national-standard-code-for-information-interchange.html).

-   `terminfo(5)` is the Un*x man page describing the terminfo
    capability database.  Most if not all terminal capabilities listed
    there will be available for your terminal emulator.  The
    capability tables list a `capname` that you can specify as an
    argument to `tput(1)`.

    -   [Linux man page from die.net](https://linux.die.net/man/5/terminfo)

    -   [Linux man page from the Linux man-pages project](http://man7.org/linux/man-pages/man5/terminfo.5.html)

    -   [FreeBSD man page](https://www.freebsd.org/cgi/man.cgi?query=terminfo&sektion=5)

-   `tput(1)` documents the `tput` Un*x utility, which makes terminal
    control sequences available to the shell, initializes or resets
    the terminal, and returns the terminal type name.

    -   [Linux man page from die.net](https://linux.die.net/man/1/tput)

    -   [Linux man page from the Linux man-pages project](http://man7.org/linux/man-pages/man1/tput.1.html)

    -   [FreeBSD man page](https://www.freebsd.org/cgi/man.cgi?query=tput&sektion=1)

-   Other, proprietary sets of control sequences were used by:

    -   DEC VT52 (the VT100 was backwards-compatible with VT52
        terminals)
    -   IBM
    -   HP

-   [The Archive of Video Terminal Information](https://webonastick.com/vt/)

    An archive of Richard Shuford's repository, last edited in 2010.
