# Getopt::Long
```
         use Getopt::Long;
         my $data   = "file.dat";
         my $length = 24;
         my $verbose;
         GetOptions ("length=i" => \$length,    # numeric
                     "file=s"   => \$data,      # string
                     "verbose"  => \$verbose)   # flag
         or die("Error in command line arguments\n");
```
-   modifies `@ARGV`
-   simple options, e.g., `--verbose`
-   negatable options
    -   `'verbose!' => \$verbose` allows `--noverbose` or `--no-verbose` to disable.
-   incremental options
    -   `'verbose+' => \$verbose` allows every instance of `--verbose` to increment `$verbose`.
-   `--` terminates option processing
-   options with values
    -   `'tag=s' => \$tag`
    -   `'length=i' => \$length`
    -   `'length=f' => \$length`
    -   `'value=o' => \$value` for decimal, 0ctal, or 0xadecimal
    -   default numeric value: `'value:2'`
    -   default to increment: `'verbose:+'`
    -   optional values use `:` instead of `=`
    -   arrays: `'tag=s@' => \@tag`
    -   hashes: `'define=s%' => \%defines` or `\$defines`
    -   subs: `'quiet' => sub { $verbose = 0; }`
    -   multiple names: `'length|height=f'`

## Procedural
```
    GetOptions(...)
    GetOptionsFromArray(\@array, ...)
```
## OO
```
    my $p = Getopt::Long::Parser->new();
    my $p = Getopt::Long::Parser->new(config => [...]);
    $p->configure(...);
    $p->getoptions(...);
    $p->getoptionsfromarray(\@array, ...);
```
## Store Options in a Hash
```
    GetOptions(\%options, 'verbose', 'debug', ...)
```
