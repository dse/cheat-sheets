# a printf cheatsheet

```
<conversion-specification>:
    %[<position>][<flags>][<width>][.<precision>][<size>]<type>
<position>:
    <decimal-integer>$
    If one positional parameter is used, all parameters must be positional.
<flags>, a series of one or more of the following characters:
    -           left-justify, padding right with blanks
                default is to right-justify, padding left with blanks
    +           for %{diaAeEfFgG}:      result will always begin with + or -
    (space)     for %{diaAeEfFgG}:      result will always begin with space or -
    0           for %{diouxXaAeEfFgG}:  left-padding uses zeroes instead of spaces
    #           convert result to alternative form according to <type>
                for %o:         force first digit to be 0
                for %{xX}:      non-zero result will have 0x or 0X prefix
                for %{aAeEfF}:  result will always contain a decimal point; trailing zeroes are removed
                for %{gG}:      result will always contain a decimal point; trailing zeroes are not removed
    '           no-op
<width>:
    <nonneg-decimal-integer>
    *                             next argument specifies field width
    *<nonneg-decimal-integer>$    positional argument specifies field width
<precision>:
    <decimal-integer>
    *                             next argument specifies precision
    *<decimal-integer>$           positional argument specifies precision
    for %{diouxX}:  precision specifies minimum number of digits to appear, defaulting to 1
    for %{aA}:      precision specifies number of digits to appear after the decimal point;
                    default to minimum required for an exact representation
    for %{eEfF}:    precision specifies number of digits to appear after the decimal point, defaulting to 6
    for %{gG}:      precision specifies maximum number of significant digits, defaulting to 6, minimum is 1
    for %{sS}:      precision specifies maximum number of characters to print from a string, defaulting to entire string
    for others:     undefined
    NOTE: a negative precision is interpreted as not specifying one.
<size>:
    optional modifier specifying the size of a data type
    hh  for %{diouxX}:   convert argument to a signed or unsigned char
        for %n:          specify that argument is a pointer to a signed char
    h   for %{diouxX}:   convert argument to a short or unsigned short
        for %n:          specify that argument is a pointer to a short
    l   for %{diouxX}:   specify that argument is a (signed) or unsigned long
        for %c:          specify that argument has type wint_t
        for %s:          specify that argument is a pointer to wchar_t
        for %n:          specify that argument is a pointer to a long
        for %{aAeEfFgG}: no effect
    ll  for %{diouxX}:   specify that argument is a (signed) or unsigned long long
        for %n:          specify that argument is a pointer to a long long
    j   for %{diouxX}:   specify that argument is an intmax_t or uintmax_t
        for %n:          specify that argument is a pointer to an intmax_t
    z   for %{diouxX}:   specify that argument is a size_t
        for %n:          specify that argument is a pointer to a size_t
    t   for %{diouxX}:   specify that argument is a ptrdiff_t
        for %n:          specify that argument is a pointer to a ptrdiff_t
    L   for %{aAeEfFgG}: specify that argument is a long double
<type>:
    integers: all of these insert leading zeroes as necessary to reach the precision
              a value of 0 with precision of 0 prints an empty string
              each takes an int or unsigned int
        %d  %i  print a signed decimal integer
        %o      print an unsigned octal integer
        %u      print an unsigned decimal integer
        %x  %X  print an unsigned hexadecimal integer; %X capitalizes
    floating points: each of these take a double; floats are converted to doubles as varargs
        %f  %F  prints signed value [-]9999.9999, inf, or nan; %F capitalizes
        %e  %E  prints signed value [-]9.9999e[+-]999, inf, or nan; exponent always contains at least two digits; %E capitalizes
        %g  %G  prints a signed value in %e, %E, %f, or %F form
        %a  %A  prints a signed value of the form [-]0x1.ffffp[+-]9, inf, or nan; %A capitalizes
    characters and strings:
        %c  %lc     prints a single- or multi-byte character (char or wchar_t)
        %s  %ls     prints a single- or multi-byte character string (char* or wchar_t*)
                    characters are printed until a NULL or the precision is reached
    miscellaneous:
        %n      takes a pointer to an int; stores a count of the number of bytes written so far; outputs nothing
        %p      takes any pointer; prints it in an implementation defined format
        %m      takes no argument; prints the output of strerror(errno); GNU extension
        %%      takes no argument; prints a percent character (%)
    shorthands:
        %D      short for %ld (newlib extension)
        %O      short for %lo (newlib extension)
        %U      short for %lu (newlib extension)
        %C      short for %lc (POSIX extension)
        %S      short for %ls (POSIX extension)
```

*conversion-specification*:\
        `%`[*position*][*flags*][*width*][`.`*precision*][*size*]*type*

*position*:
        *decimal-integer*`$`

If one positional parameter is used, all parameters must be positional.

*flags*: A series of one or more of the following characters:
        `-`\
        `+`\
        (space)\
        `0`\
        `#`\
        `'`\

*width*:
        *integer*\
        `*`\
        `*`*integer*`$`\

*precision*:
        *integer*\
        `*`\
        `*`*integer*`$`\

*size*:
        `hh`\
        `h`\
        `l`\
        `ll`\
        `j`\
        `z`\
        `t`\
        `L`\

*type*:
        `d`\
        `i`\
        `o`\
        `u`\
        `x`\
        `X`\
        `f`\
        `F`\
        `e`\
        `E`\
        `g`\
        `G`\
        `a`\
        `A`\
        `c`\
        `lc`\
        `s`\
        `ls`\
        `n`\
        `p`\
        `m`\
        `%`\
        `D`\
        `O`\
        `U`\
        `C`\
        `S`\
