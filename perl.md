# Perl Cheat Tips

## Frequently Used Data::Dumper Settings

    local $Data::Dumper::Indent   = 1;
    local $Data::Dumper::Terse    = 1;
    local $Data::Dumper::Deepcopy = 1;
    local $Data::Dumper::Sortkeys = 1;
    local $Data::Dumper::Useqq    = 1;

## Best Practices for Working with Locales

    #!/usr/bin/env perl
    use warnings;
    use strict;
    use v5.8.1;                     # or higher

    #--------------------------------------------------------------------------
    # interpret i/o in locale
    use open qw(:locale);
    use Encode::Locale;

    # interpret args in locale
    use Encode qw(decode);
    BEGIN {
        @ARGV = map { decode('locale', $_, Encode::FB_CROAK) } @ARGV;
    }
    #--------------------------------------------------------------------------

This instructs all filehandles to decode when reading, and encode when
writing, in the user's locale.

This also instructs `@ARGV` to be decoded in the user's locale.

You can effect this behavior by setting `PERL_UNICODE` or running
`perl -C` with the `A` flag, but it has no runtime equivalent.

## A Reset for I/O

Perl modules performing I/O should ideally include the following in
order to avoid mucking around with those variables from the caller's
perspective, and to avoid the caller's values for those variables from
affecting them.

```
local $_ = undef;       # $ARG (the default input and pattern-matching space)
local $" = " ";         # $LIST_SEPARATOR (for print "@array\n";)
local $ARGV = undef;
# how to localize *ARGV and *ARGVOUT, resetting them?
local $, = undef;       # $OUTPUT_FIELD_SEPARATOR
local $. = undef;       # $INPUT_LINE_NUMBER
local $/ = "\n";        # $INPUT_RECORD_SEPARATOR
local $\ = undef;       # $OUTPUT_RECORD_SEPARATOR
local $| = 0;               # $OUTPUT_AUTOFLUSH
local ${^LAST_FH} = undef;  # added in Perl v5.18.0
```

Edit as needed.  For example, to slurp an entire file at once:

```
local $/ = undef;       # $INPUT_RECORD_SEPARATOR
```

Other variables you may want to temporarily localize:

```
local @ARGV = ();
local $; = "\034";      # $SUBSCRIPT_SEPARATOR
local $a = undef;       # sort
local $b = undef;       # sort</F
local @F = ();          # array of fields in autosplit mode

local $^I = undef;      # value of inplace-edit switch (-i)
local $^W = undef;      # value of warning switch (-w)

local ${^CHILD_ERROR_NATIVE} = 0;
local $^E = undef;      # $EXTENDED_OS_ERROR
local $! = 0;           # $ERRNO
local $? = 0;           # $CHILD_ERROR
local $@ = '';          # $EVAL_ERROR
```

Variables related to formats are not included here.

Variables related to the interpreter state are not included here.

## A Safer `chomp`

Instead of:

    chomp();

run:

    s{\R\z}{};

This will safely deal with both `\n` and `\r\n`.

It will also deal with `\r`, the MacOS versions 1 through 9 line
terminator, but `$/` would also have to be set to `\r`.

## Beyond the `warnings` and `strict` Pragmata

-   [`use common::sense;`](https://metacpan.org/pod/common::sense)
    -   allow `utf8` in source code
    -   `strict vars`
    -   `strict subs`
    -   but not `strict refs`
    -   `feature say`
    -   `feature state`
    -   `feature switch`
    -   `feature unicode_strings` to use Unicode rules in all string operations executed in its scope
    -   `feature unicode_eval` to fix plain-string `eval` to work better in Unicode
    -   `feature evalbytes` to enable `evalbytes` which is like `eval` but always parses byte strings
    -   `feature current_sub` enables `__SUB__` which returns a reference to the current subroutine
    -   `feature fc` enables `fc` which implements Unicode casefolding
    -   `no feature array_base` disables non-zero array index bases

What this provides:

```
no warnings;
use warnings qw(FATAL);
use warnings qw(closure);
use warnings qw(debugging);
use warnings qw(digit);
use warnings qw(glob);
use warnings qw(inplace);
use warnings qw(internal);
use warnings qw(io);
    # closed, layer, pipe, and syscalls only.
    # exec, newline, and unopened warnings disabled later.
use warnings qw(malloc);
use warnings qw(pack);
use warnings qw(printf);
use warnings qw(prototype);
use warnings qw(reserved);
use warnings qw(semicolon);
use warnings qw(taint);
use warnings qw(threads);
use warnings qw(unpack);
no warnings qw(exec);
no warnings qw(newline);
no warnings qw(unopened);

The tree of warnings and which ones are enabled and not.

        all -+
             +- deprecated (not enabled)
             +- exiting (not enabled)
             +- experimental --+ (not enabled)
             |                 +- experimental::* (not enabled)
             +- glob (not enabled)
             +- imprecision (not enabled)
             +- io ------------+
             |                 +- closed (enabled)
             |                 +- exec
             |                 +- layer (enabled)
             |                 +- newline
             |                 +- pipe (enabled)
             |                 +- syscalls (enabled)
             |                 +- unopened
             +- locale (not enabled)
             +- misc (not enabled)
             +- missing (not enabled)
             +- numeric (not enabled)
             +- once (not enabled)
             +- overflow (not enabled)
             +- portable (not enabled)
             +- recursion (not enabled)
             +- redefine (not enabled)
             +- redundant (not enabled)
             +- regexp (not enabled)
             +- shadow (not enabled)
             +- signal (not enabled)
             +- substr (not enabled)
             +- syntax --------+
             |                 +- ambiguous
             |                 +- bareword
             |                 +- digit (enabled)
             |                 +- illegalproto
             |                 +- parenthesis
             |                 +- precedence
             |                 +- printf (enabled)
             |                 +- prototype (enabled)
             |                 +- qw
             |                 +- reserved (enabled)
             |                 +- semicolon (enabled)
             +- uninitialized (not enabled)
             +- untie (not enabled)
             +- utf8 ----------+ (not enabled)
             |                 +- non_unicode (not enabled)
             |                 +- nonchar (not enabled)
             |                 +- surrogate (not enabled)
             +- void (not enabled)
```

## To Enable Modern Features

-   [`use Modern::Perl;`](https://metacpan.org/pod/Modern::Perl)
    -   `strict`
    -   `warnings`
    -   all Perl 5.10 features
        -   or all Perl 5.12 features if you say `use Modern::Perl '2011';`
        -   or all Perl 5.14 features if you say `use Modern::Perl '2012';`
        -   autc.
    -   C3 method resolution order (`perldoc mro`)
    -   `IO::File`
    -   `IO::Handle`

## Enlightened Perl: Collections of Modules

-   [`use Task::Kensho;`](https://metacpan.org/pod/Task::Kensho)

## Other Cool Things

-   [`use Toolkit;`](https://metacpan.org/pod/Toolkit)
-   [`use Acme::Very::Modern::Perl;`](https://metacpan.org/pod/Acme::Very::Modern::Perl)
    -   [`use Modern::Perl;`](https://metacpan.org/pod/Modern::Perl)
    -   [`use Toolkit;`](https://metacpan.org/pod/Toolkit)
    -   [`use latest;`](https://metacpan.org/pod/latest)
    -   [`use uni::perl;`](https://metacpan.org/pod/release/MONS/uni-perl-0.03/lib/uni/perl.pm)
    -   [`use perl5i;`](https://metacpan.org/pod/perl5i)
    -   [`use common::sense;`](https://metacpan.org/pod/common::sense)

## Resources

-   [perlmodlib(3)](https://perldoc.perl.org/perlmodlib.html)
-   [Mishin's Perl Cheat Sheet](https://www.cheatography.com/mishin/cheat-sheets/perlcheat/)

## Awesome Perls and Perl Awesomes

-   [hachiojipm](https://github.com/hachiojipm/awesome-perl)
-   [uhub](https://github.com/uhub/awesome-perl)
-   [oalders](https://github.com/oalders/awesome-perl)
-   [awesome-programming.com](https://perl.awesome-programming.com/)
-   [nk23x](https://gitlab.com/nk23x/awesome-perl)
