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

    use open qw(:locale);
    use Encode::Locale;
    use Encode qw(decode);
    BEGIN {
        @ARGV = map { decode('locale', $_, Encode::FB_CROAK) } @ARGV;
    }

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
local $, = undef;       # $OUTPUT_FIELD_SEPARATOR
local $. = undef;       # $INPUT_LINE_NUMBER
local $/ = "\n";        # $INPUT_RECORD_SEPARATOR
local $\ = undef;       # $OUTPUT_RECORD_SEPARATOR
```

Edit as needed.  For example, to slurp an entire file at once:

```
local $/ = undef;       # $INPUT_RECORD_SEPARATOR
```

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

## To Enable Modern Features

-   [`use Modern::Perl;`](https://metacpan.org/pod/Modern::Perl)

## Enlightened Perl: Collections of Modules

-   [`use Task::Kensho;`](https://metacpan.org/pod/Task::Kensho)

## Other Cool Things

-   [`use perl5i;`](https://metacpan.org/pod/perl5i)
-   [`use uni::perl;`](https://metacpan.org/pod/release/MONS/uni-perl-0.03/lib/uni/perl.pm)
-   [`use Toolkit;`](https://metacpan.org/pod/Toolkit)
-   [`use ToolSet;`](https://metacpan.org/pod/ToolSet)
-   [`use Acme::Very::Modern::Perl;`](https://metacpan.org/pod/Acme::Very::Modern::Perl)

## Resources

-   [Mishin's Perl Cheat Sheet](https://www.cheatography.com/mishin/cheat-sheets/perlcheat/)
