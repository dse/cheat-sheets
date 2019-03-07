# Perl Cheat Tips

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

## A Safer `chomp`

Instead of:

    chomp();

run:

    s{\R\z}{};

## Beyond the `warnings` and `strict` Pragmata

-   [`use common::sense;`](https://metacpan.org/pod/common::sense)

## To Enable Modern Features

-   [`use Modern::Perl;`](https://metacpan.org/pod/Modern::Perl)

## Enlightened Perl: Collections of Modules

-   [`use Task::Kensho;`](https://metacpan.org/pod/Task::Kensho)

## Resources

-   [Mishin's Perl Cheat Sheet](https://www.cheatography.com/mishin/cheat-sheets/perlcheat/)
