# perl(1) options

    -0<oct>     specify input record separator
    -0x<hex>
    -00         specify null character 
    -0777       slurp entire files at a time
    

    Usage: perl [switches] [--] [programfile] [arguments]
      -a                autosplit mode with -n or -p (splits $_ into @F)
      -C[number/list]   enables the listed Unicode features
      -c                check syntax only (runs BEGIN and CHECK blocks)
      -d[:debugger]     run program under debugger
      -D[number/list]   set debugging flags (argument is a bit mask or alphabets)
      -e program        one line of program (several -e's allowed, omit programfile)
      -E program        like -e, but enables all optional features
      -f                don't do $sitelib/sitecustomize.pl at startup
      -F/pattern/       split() pattern for -a switch (//'s are optional)
      -i[extension]     edit <> files in place (makes backup if extension supplied)
      -Idirectory       specify @INC/#include directory (several -I's allowed)
      -l[octal]         enable line ending processing, specifies line terminator
      -[mM][-]module    execute "use/no module..." before executing program
      -n                assume "while (<>) { ... }" loop around program
      -p                assume loop like -n but print line also, like sed
      -s                enable rudimentary parsing for switches after programfile
      -S                look for programfile using PATH environment variable
      -t                enable tainting warnings
      -T                enable tainting checks
      -u                dump core after parsing program
      -U                allow unsafe operations
      -v                print version, patchlevel and license
      -V[:variable]     print configuration summary (or a single Config.pm variable)
      -w                enable many useful warnings
      -W                enable all warnings
      -x[directory]     ignore text before #!perl line (optionally cd to directory)
      -X                disable all warnings

    Run 'perldoc perl' for more help with Perl.

## One-Liners

    -0  -0<oct>     specify $/ input record separator
        -0<hex>
        -00         null character
        -0777       slurp files whole
    -l[<oct>]       enable automatic chomping and appending of input record separator

    -a              when used with -n or -p, turn on autosplit mode saving to @F; implies -n
    -F<pattern>     when using -a, specifies split pattern; implies -a -n

    -e'<code>'      enter one line of a program. separate lines with semicolons.
    -E'<code>'      same as -e, enabling all optional features, see `feature`.

    -m<module>                  use <module> ();
    -M<module>                  use <module>;       # imports default symbols
    -m-<module>                 no <module>;
    -m<animal>=<cow>,<moo>      use animal qw(cow, moo);
    
    -n              iterate lines of code over each line, a la sed -n
    -p              iterate lines of code over each line, and print, a la sed -p
    -s              rudimentary command line switch parsing
    
    -S              makes Perl search $PATH for the program argument
    -T              turns on taint, issuing fatal errors
    -t              turns on taint, but with warnings instead of fatal errors
    -u              coredump on exit
    -U              enable certain unsafe operations
    -v              print version and patchlevel
    -V              print configuration values and current @INC path
    -w              print warnings about dubious code
    -W, -X          enable or disable all warnings

## Run Control

    -C              controls Unicode features
    -f              disable execution of `$Config{sitelib}/sitecustomize.pl`
    -i[<ext>]       edit files in place; <ext> specifies backup, either a la 'orig_*' or '.orig'
    -I<dir>         prepend to module search pathspecs
    -c              check syntax; exit without executing
    -h              print option summary

## Debugging

    -d              run code through the debugger
    -dt             run debugger instructing that threads will be used
    -d:<mod>[=<name>,<value>]
    -dt:<mod>[=<name>,<value>]
    -D<letters>     set debugging flags
    -D<number>
