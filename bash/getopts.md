# GNU Bash's 'getopts' builtin

It's 2019.  It's okay to use `#!/usr/bin/env bash` or `#!/bin/bash`
scripts now.

## Usage

```
getopts <optstring> <name> [<args>]
```

## Variables

-   `OPTARG` (set by Bash)

    The value of the last option argument provided processed by
    `getopts`.

-   `OPTIND` (set by Bash)

    The index of the next argument to be processed by `getopts`.

    The shell initializes this to `1`.

-   `OPTERR` (used by the shell)

    If set to `1` (the default), Bash displays `getopts` error
    messages.

-   `OPTION`

    Not strictly used by GNU Bash.  We use `OPTION` as the `<name>`
    parameter in examples here.

## Parameters

-   `<optstring>`

    A string containing the option characters to be recognized.

    If a character is followed by a `:`, the option will take a
    required argument.  It *should* be separated by whitespace.

    If `<optstring>` begins with a `:`, silent error reporting is
    used.

    You may not use `:` and `?` as option characters.

    -   `:` indicates an option requiring an argument
    -   `?` is placed into `<name>` to indicate invalid options
        and options missing an argument.

-   `<name>`

    The name of the shell variable into which each successful
    invocation of `getopts` places the next option it finds.

    We set this to `OPTION` in our examples, but you can use any name.

-   `<args>`

    An optional list of arguments that `getopts` parses.  If no
    arguments are specified, `getopts` parses the positional
    parameters.

    The latter is the typical usage.
    
## Description

Each time `getopts` is invoked, it:

-   places the next option in `<name>`.
-   places the index of the next argument to be processed into `OPTIND`.
-   If an option requires an argument, `getopts` places its value into `OPTARG`.

When the end of options is encountered, `getopts`:

-   exits with non-zero
-   sets `OPTIND` to the index of the first non-option argument
-   sets `<name>` to `?`

When an invalid option is encountered, `getopts`:

-   places `?` into `<name>`
-   prints a diagnostic message
-   unsets `OPTARG`
-   if silent reporting is on:
    -   prints no diagnostic message
    -   sets `OPTARG` to the invalid option character

If a required argument is not found:

-   places `?` into `<name>`
-   unsets `OPTARG`
-   prints a diagnostic message
-   if silent reporting is on:
    -   prints no diagnostic message
    -   sets `<name>` to `:`
    -   sets `OPTARG` to the option character

Before parsing a new set of parameters:

-   You must reset `OPTIND` each time you do so.

## Error Reporting

By default, diagnostic messages are printed to stderr if:

-   an invalid option is found
-   an option requiring a parameter is missing its parameter

If the first character of `<optstring>` is a colon (`:`), **silent**
error reporting is used:

If `OPTERR` is set to 0, no error messages are displayed even if
`<optstring>` does not begin with a colon.

## An Archetypal 'getopts' Example

See [`getopts-demo.sh`](getopts-demo.sh).

This example does not illustrate silent error reporting, nor the use
of `getopts` to parse arguments other than the positional parameters.

## Long Options?  You Might As Well Jump off a Cliff.  But Hey, More Power to You.

You may use `-` as an option character.  You can take advantage of
this to implement long options for your shell script in a crude
fashion, but why would you want to?

The steroids you add to the above example are as follows:

-   We append `-:` to `<optstring>`.

-   We check for long options.  This part's a bit hairy:

    -   For long options we set `OPTION` and `OPTARG` as if the user
        specified a short option.
    
    -   But we must still check `OPTION` for the long option names.
    
    -   And we must handle `--<name> <value>` (two arguments), and
        `--<name>` without its required argument, manually.

### A Long Options Example

See [`getopts-long-demo.sh`](getopts-long-demo.sh).

Limitations are as follows:

-   Because we use the `getopts` builtin, you're not going to be able
    to mix options and non-option parameters this way.

-   We only check for the **full** long option names.  If you want to
    check for unambiguous abbreviations (e.g., `--hei`, etc. for
    `--height`), you can go nuts.

-   Because `getopts` does not support optional parameters for short
    options, this demo does not support optional parameters for long
    options.

---

# Excerpts from bash(1)

The following excerpts are from the man page for GNU Bash.  License
information follows:

>   GNU bash, version 4.4.12(3)-release (x86_64-unknown-cygwin)<br>
>   Copyright (C) 2016 Free Software Foundation, Inc.<br>
>   License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
> 
>   This is free software; you are free to change and redistribute it.<br>
>   There is NO WARRANTY, to the extent permitted by law.

## Parameters

### Shell Variables

The following variables are set by the shell:

-   `OPTARG`

    The value of the last option argument processed by the `getopts`
    builtin command (see SHELL BUILTIN COMMANDS below).

-   `OPTIND`

    The index of the next argument to be processed by the `getopts`
    builtin command (see SHELL BUILTIN COMMANDS below).

The following variables are used by the shell.  In some cases, bash
assigns a default value to a variable; these cases are noted below.

-   `OPTERR`

    If set to the value 1, `bash` displays error messages generated by
    the `getopts` builtin command (see SHELL BUILTIN COMMANDS below).
    `OPTERR` is initialized to 1 each time the shell is invoked or a
    shell script is executed.

## Shell Builtin Commands

-   `getopts` *optstring* *name* [*args*]

    `getopts` is used by shell procedures to parse positional
    parameters.  *optstring* contains the option characters to be
    recognized; if a character is followed by a colon, the option is
    expected to have an argument, which should be separated from it by
    white space.  The colon and question mark characters may not be
    used as option characters.  Each time it is invoked, `getopts`
    places the next option in the shell variable *name*, initializing
    *name* if it does not exist, and the index of the next argument to
    be processed into the variable `OPTIND`.  `OPTIND` is initialized
    to 1 each time the shell or a shell script is invoked.  When an
    option requires an argument, `getopts` places that argument into
    the variable `OPTARG`.  The shell does not reset `OPTIND`
    automatically; it must be manually reset between multiple calls to
    `getopts` within the same shell invocation if a new set of
    parameters is to be used.

    When the end of options is encountered, `getopts` exits with a
    return value greater than zero.  `OPTIND` is set to the index of
    the first non-option argument, and *name* is set to ?.

    `getopts` normally parses the positional parameters, but if more
    arguments are given in *args*, `getopts` parses those instead.

    `getopts` can report errors in two ways.  If the first character
    of *optstring* is a colon, **silent** error reporting is used.  In
    normal operation, diagnostic messages are printed when invalid
    options or missing option arguments are encountered.  If the
    variable `OPTERR` is set to 0, no error messages will be
    displayed, even if the first character of *optstring* is not a
    colon.

    If an invalid option is seen, `getopts` places ? into *name* and,
    if not silent, prints an error message and unsets `OPTARG`.  If
    `getopts` is silent, the option character found is placed in
    `OPTARG` and no diagnostic message is printed.

    If a required argument is not found, and `getopts` is not silent,
    a question mark (`?`) is placed in name, `OPTARG` is unset, and a
    diagnostic message is printed.  If `getopts` is silent, then a
    colon (`:`) is placed in name and `OPTARG` is set to the option
    character found.

    `getopts` returns true if an option, specified or unspecified, is
    found.  It returns false if the end of options is encountered or
    an error occurs.
