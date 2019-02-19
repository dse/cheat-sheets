# Terminal Control Sequences

If you are reading this, you most likely care about VTxxx-style and/or
ANSI-style escape sequences.

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
