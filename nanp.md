# On Phone Numbers and Web Forms

The PCRE-compatible regular expression to match a NANP
(US/Canada/etc.) telephone number shall be as follows:

    /^[\-\.\(\)\s]*(?:tel:[\-\.\(\)\s]*)?(?:(?:\+[\-\.\(\)\s]*)?1[\-\.\(\)\s]*)?(\d{3})[\-\.\(\)\s]*(\d{3})[\-\.\(\)\s]*(\d{4})[\-\.\(\)\s]*(?:\;.*)$/i

It is designed to encompass and parse every common telephone number
format, and most others, within reason.

It is broken down and commented thusly for readability:

    /^
        [\-\.\(\)\s]*           (?# visual separators: spaces)
                                (?#      and/or punctuation)
        (?:                     (?# for tel: URIs)
            tel:
            [\-\.\(\)\s]*       (?# for good measure)
        )?
        (?:                     (?# optional +1 or 1 prefix)
            (?:
                \+
                [\-\.\(\)\s]*
            )?
            1
            [\-\.\(\)\s]*
        )?
        (\d{3})                 (?# NPA or area code)
        [\-\.\(\)\s]*
        (\d{3})                 (?# NXX or exchange code)
        [\-\.\(\)\s]*
        (\d{4})                 (?# XXXX or subscriber number)
        [\-\.\(\)\s]*
        (?:                     (?# for tel: URIs containing)
            \;.*                (?#     additional data after the)
        )?                      (?#     phone number)
    $/i

The following common formats, and numerous variants, are allowed:

    502-555-1212
    5025551212
    1-502-555-1212
    +1 (502) 555-1212
    502.555.1212
    tel:+1-502-555-1212

Notes:

-   The capturing subgroups save the groups of the first three, next
    four, and last three digits of the telephone number.  No other
    subgroups are captured.

-   The `tel:` prefix is optional, and shall be allowed, for
    copy/paste convenience.

    This regular expression now accomodates `tel:` URIs containing
    telephone extensions (`;ext=...`) and other semicolon-separated
    data in addition to the subscriber telephone number.

-   A `+1` or `1` prefix is optional, and shall be allowed, before the
    ten-digit phone number, to allow an E.123 notated phone number.

-   Any permissible punctuation between the groups of three digits,
    and between the optional +1 prefix and the area code, shall be
    allowed.

    According to RFC3966, permissible punctuation characters for
    visual separation are `- . ( )`.  We also allow spaces, though
    `tel:` URIs do not.

    We may consider allowing additional punctuation, though it will
    significantly increase the length of the regular expression:
    `,/[]{}`

-   Whitespace at permissible points in the string shall be allowed.

-   This regular expression **does not** check the ten-digit phone
    number for such errors as invalid NPA (area) or NXX (exchange)
    codes.  That would be overkill.

An HTML5 input element for entering a phone number shall be similar to
the following:

    <input type="tel" inputmode="tel" name="phone-number" value=""
           pattern="[\-\.\(\)\s]*(?:[Tt][Ee][Ll]:[\-\.\(\)\s]*)?(?:(?:\+[\-\.\(\)\s]*)?1[\-\.\(\)\s]*)?(\d{3})[\-\.\(\)\s]*(\d{3})[\-\.\(\)\s]*(\d{4})[\-\.\(\)\s]*(?:\;.*)"
           data-value-missing="Please enter a phone number."
           data-pattern-mismatch="Please enter a valid 10-digit phone number including area code.  Example: 555-555-5555">

Note that we had to fix `tel:` because `pattern` attributes cannot be
interpreted case-insensitively.

## Phone Number Extensions

To simplify phone number parsing, any telephone extension shall be
entered using a separate field.

While the regular expression herein prescribed attempts to do a
reasonably thorough job of accepting most phone number formats, it's
complex enough for now.

Future possibilities:

-   Only allowing the user to append `x` followed by digits.

    There shall be no restrictions on the digits or the number of
    digits, other than there shall be at least one.

-   Only allowing the user to append `x`, `xt`, `ext`, `extn`, or
    `extension` followed by digits.

    There shall be no restrictions on the digits or the number of
    digits, other than there shall be at least one.

-   Allowing the user to enter *any* text after the phone number.

    In this case the following restriction **must** be implemented:
    the first non-visual-separator character after the phone number
    shall **not** be a digit.

Any of these possibilities will most likely be mutually exclusive with
any optional `;` separated data after the phone number for a `tel:`
URI.

## Sources and Resources

-   [RFC 3966: The tel URI for Telephone Numbers](https://tools.ietf.org/html/rfc3966)

-   [E.123](https://en.wikipedia.org/wiki/E.123), Notation for national and international telephone numbers, e-mail addresses and Web addresses

-   [E.164](https://en.wikipedia.org/wiki/E.164), The international public telecommunication numbering plan

-   The
    [North American Numbering Plain](https://en.wikipedia.org/wiki/North_American_Numbering_Plan) is
    the telephone numbering plan used by the United States, Canada,
    and 18 other countries primarily in North America, including the
    Caribbean.

-   [LincMad's site](http://lincmad.com/), containing literally
    everything you could possibly know about North American (Numbering
    Plan) telephone numbers and their history.  I included this just
    for fun.  Totally not to lead you down an Internet rabbit hole.

-   [libphonenumber](https://github.com/googlei18n/libphonenumber),
    Google's phone number parsing library.
