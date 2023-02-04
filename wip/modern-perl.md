# Modern Perl

## Modern::Perl

https://github.com/chromatic/Modern-Perl

    use warnings;
    use strict;
    use 5.010_000;              # perl 5.6 compatible syntax
    use mro ();
    use feature ();
    use IO::File ();
    use IO::Handle ();

## Perl Feature Bundles

    use feature ':default';     #                          # adds indirect, multidimenstional, and bareword_filehandles
    use feature ':5.10';        # use Modern::Perl '2010'; # adds say, state, switch
    use feature ':5.12';        # use Modern::Perl '2011'; # adds unicode_strings
    use feature ':5.14';        # use Modern::Perl '2012';
    use feature ':5.16';        # use Modern::Perl '2013'; # adds current_sub, evalbytes, fc, unicode_eval
    use feature ':5.18';        # use Modern::Perl '2014';
    use feature ':5.20';        # use Modern::Perl '2015';
    use feature ':5.22';        # use Modern::Perl '2016';
    use feature ':5.24';        # use Modern::Perl '2017'; # adds postderef_qq
    use feature ':5.26';        # use Modern::Perl '2018';
    use feature ':5.28';        # use Modern::Perl '2019'; # adds bitwise
    use feature ':5.30';        # use Modern::Perl '2020';
    use feature ':5.32';        # use Modern::Perl '2021';
    use feature ':5.34';        # use Modern::Perl '2022';
    use feature ':5.36';        # use Modern::Perl '2023'; # adds signatures, isa, warnings; no longer adds switch; disables indirect, multidimensional

    :default    bareword_filehandles                                     indirect    multidimensional
    :5.10       bareword_filehandles                                     indirect    multidimensional              say state switch
    :5.12       bareword_filehandles                                     indirect    multidimensional              say state switch              unicode_strings
    :5.14       bareword_filehandles                                     indirect    multidimensional              say state switch              unicode_strings
    :5.16       bareword_filehandles         current_sub evalbytes fc    indirect    multidimensional              say state switch unicode_eval unicode_strings
    :5.18       bareword_filehandles         current_sub evalbytes fc    indirect    multidimensional              say state switch unicode_eval unicode_strings
    :5.20       bareword_filehandles         current_sub evalbytes fc    indirect    multidimensional              say state switch unicode_eval unicode_strings 
    :5.22       bareword_filehandles         current_sub evalbytes fc    indirect    multidimensional              say state switch unicode_eval unicode_strings 
    :5.24       bareword_filehandles         current_sub evalbytes fc    indirect    multidimensional postderef_qq say state switch unicode_eval unicode_strings 
    :5.26       bareword_filehandles         current_sub evalbytes fc    indirect    multidimensional postderef_qq say state switch unicode_eval unicode_strings 
    :5.28       bareword_filehandles bitwise current_sub evalbytes fc    indirect    multidimensional postderef_qq say state switch unicode_eval unicode_strings 
    :5.30       bareword_filehandles bitwise current_sub evalbytes fc    indirect    multidimensional postderef_qq say state switch unicode_eval unicode_strings 
    :5.32       bareword_filehandles bitwise current_sub evalbytes fc    indirect    multidimensional postderef_qq say state switch unicode_eval unicode_strings
    :5.34       bareword_filehandles bitwise current_sub evalbytes fc    indirect    multidimensional postderef_qq say state switch unicode_eval unicode_strings
    :5.34       bareword_filehandles bitwise current_sub evalbytes fc    indirect    multidimensional postderef_qq say state switch unicode_eval unicode_strings
    :5.36       bareword_filehandles bitwise current_sub evalbytes fc no indirect no multidimensional postderef_qq say state        unicode_eval unicode_strings signatures isa warnings

## Features Added by Year

    5.10    2010    say
                    state
                    switch              given/when
    5.12    2011    unicode_strings     use unicode rules in all string operations
    5.14    2012    unicode_strings     improvements
    5.16    2013    unicode_strings     covers quotemeta
                    unicode_eval
                    evalbytes
                    current_sub         __SUB__
                    array_base          re-enables $[; unavailable since 5.30
                    fc                  fc, the unicode casefolding function
    5.18    2014    lexical_subs        experimental before 5.26
    5.20    2015    postderef           experimental before 5.24
                    postderef_qq        experimental before 5.24
                    signatures          experimental before 5.36
    5.22    2016    refaliasing         experimental as of 5.34
                    bitwise             experimental before 5.28
    5.24    2017
    5.26    2018    unicode_strings     covers the range operator
                    declared_refs       experimental as of 5.34
    5.28    2019    unicode_strings     covers special-cased whitespace splitting
    5.30    2020
    5.32    2021    isa                     experimental before 5.36
                    indirect                on by default; allows turning off
    5.34    2022    multidimensional        on by default; allows turning off
                    bareword_filehandles    on by default; allows turning off
                    try                     experimental as of 5.36
    5.36    2023    extra_paired_delimiters experimental as of 5.36

## Other Best Practices

Fatal

autodie

warnings qw(FATAL all)

strict vars refs subs

Modern::Open
Strict::Perl

