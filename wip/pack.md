# Perl's pack and unpack

## pack (list to string)

```
my $string = pack(TEMPLATE, LIST);
``` 

-   takes a LIST of values
-   converts each to a string using rules specified by the TEMPLATE
-   returns the result of joining those strings

## unpack (string to list)

```
my @values = unpack(TEMPLATE, EXPR);
my @values = unpack(TEMPLATE);           # uses $_
```

-   takes a string
-   breaks it into chunks described by the TEMPLATE
-   converts each chunk into a value
-   return the list of values

## templates

                a  A string with arbitrary binary data, will be null padded.
                A  A text (ASCII) string, will be space padded.
                Z  A null-terminated (ASCIZ) string, will be null padded.

                b  A bit string (ascending bit order inside each byte, like vec()).
                B  A bit string (descending bit order inside each byte).
                h  A hex string (low nybble first).
                H  A hex string (high nybble first).

                c  A signed char (8-bit) value.
                C  An unsigned char (octet) value.
                W  An unsigned char value (can be greater than 255).

                s  A signed short (16-bit) value.
                S  An unsigned short value.

                l  A signed long (32-bit) value.
                L  An unsigned long value.

                q  A signed quad (64-bit) value.
                Q  An unsigned quad value.
                     (Quads are available only if your system supports 64-bit
                      integer values _and_ if Perl has been compiled to support
                      those.  Raises an exception otherwise.)

                i  A signed integer value.
                I  An unsigned integer value.
                     (This 'integer' is _at_least_ 32 bits wide.  Its exact
                      size depends on what a local C compiler calls 'int'.)

                n  An unsigned short (16-bit) in "network" (big-endian) order.
                N  An unsigned long (32-bit) in "network" (big-endian) order.
                v  An unsigned short (16-bit) in "VAX" (little-endian) order.
                V  An unsigned long (32-bit) in "VAX" (little-endian) order.

                j  A Perl internal signed integer value (IV).
                J  A Perl internal unsigned integer value (UV).

                f  A single-precision float in native format.
                d  A double-precision float in native format.

                F  A Perl internal floating-point value (NV) in native format
                D  A float of long-double precision in native format.
                     (Long doubles are available only if your system supports
                      long double values. Raises an exception otherwise.
                      Note that there are different long double formats.)

                p  A pointer to a null-terminated string.
                P  A pointer to a structure (fixed-length string).

                u  A uuencoded string.
                U  A Unicode character number.  Encodes to a character in char-
                   acter mode and UTF-8 (or UTF-EBCDIC in EBCDIC platforms) in
                   byte mode.

                w  A BER compressed integer (not an ASN.1 BER, see perlpacktut
                   for details).  Its bytes represent an unsigned integer in
                   base 128, most significant digit first, with as few digits
                   as possible.  Bit eight (the high bit) is set on each byte
                   except the last.

                x  A null byte (a.k.a ASCII NUL, "\000", chr(0))
                X  Back up a byte.
                @  Null-fill or truncate to absolute position, counted from the start of the innermost ()-group.
                .  Null-fill or truncate to absolute position specified by the value.
                (  Start of a ()-group.

## modifiers

         modifier   for:

                !   sSlLiI     Forces native (short, long, int) sizes instead of fixed (16-/32-bit) sizes.

                !   xX         Make x and X act as alignment commands.

                !   nNvV       Treat integers as signed instead of unsigned.

                !   @.         Specify position as byte offset in the internal
                               representation of the packed string.  Efficient
                               but dangerous.

                >   sSiIlLqQ jJfFdDpP   Force big-endian byte-order on the type.  (The "big end" touches the construct.)

                <   sSiIlLqQ jJfFdDpP   Force little-endian byte-order on the type.  (The "little end" touches the construct.)

### Repeat Count

Specify a repeat count after the letter to gobble that many values.
-   Use `[69]` or `69` to specify that many.
    -   For `aAZbBhH@.xXP` it means something else.
    -   For `@` the repeat count is an offset from the start of the innermost `()`
    -   For `.`
        -   if repeat count is 0, relative to current position
        -   if repeat count is `*` ofs is rel to start of packed str
        -   if it's 1 or greater, ofs is rel to start of nth innermost `()`
    -   For `u`: max # bytes to encode per line of output
        -   0, 1, 2 are replaced by 45.
        -   Should not be more than 65.
    -   `aAZ` pack as a string of length `count` padding with nulls or spaces
        -   `A` unpacking strips trailing space and nulls
        -   `Z` strips everything after first null
        -   `a` no stripping
        If value to pack is too long, result is truncated
        -   `Z` packs count-1 bytes followed by a null
    -   `bB` pack a string that many bits long 
    -   `hH` pack a string that many nybbles long
-   Use `*` to gobble the remaining values.
    -   For `@xX` it is equivalent to 0.
    -   For `.` it's relative to the start of the string.
    -   For `u` it is equivalent to 1 or 45
    -   For `Z` pack appends a trailing null byte.
-   Use `[L]` a template letter to specify its packed length in bytes.
