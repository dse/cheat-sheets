## Synopsos

    find <find options> <starting points> <expression>

## Find Options

    -H
    -L
    -P
    -D <debugopts>
    -O <level>

## Expressions

### Tests

    access, status change, last modified times in minutes or days
        -amin <n>       -cmin <n>       -mmin <n>
        -atime <n>      -atime <n>      -mtime <n>
      examples
        -mtime -5       -mtime +5       -mtime 5
        lt 5 days ago   gt 5 days ago   eq 5 days ago
      also
        -used <n>       last accessed < or > or = <n> days after status changed
      also
        -anewer <reference>     last access time more recent than referred file
        -cnewer <reference>     status change time
        -newer <reference>      modification time
        -newerXY <reference>    timestamp X is more recent than timestamp Y
                                (a)ccess, (B)irth, status (c)hange, (m)odified,
                                (t)ime [see date -d]
    permissions
        -executable
        -readable
        -writable
        -perm <mode>    perms are exactly specified mode
        -perm -<mode>   all specified bits are set
        -perm /<mode>   any specified bit is set
                            octal <mode>:    664
                            symbolic <mode>: a=rwx,g=rwx,o=rwx,u=rwx
    ownership
        -gid <n>
        -group <name>
        -uid <n>
        -user <name>
        -nogroup
        -nouser
    filename/pathname matching
        -lname <pattern>        -ilname <pattern>       symlink w/dest path matching
                                                        -L: false unless symlink broken
        -name <pattern>         -iname <pattern>        basename matching pattern
        -path <pattern>         -ipath <pattern>        path matching pattern
        -regex <pattern>        -iregex <pattern>       basename matches regex
    other file tests
        -empty                  empty and regular file or directory
        -fstype <type>          ext4, nfs, ...
        -inum <n>               inode number lt, gt, or eq <n>
        -links <n>              lt, gt, or eq <n> links
        -samefile <name>        is same inode as specified filename (-L include symlinks)
        -size <n>               < or > or = <n> units of space, rounding up.
                                <n>b        <n>c   <n>w          <n>k  <n>M  <n>G
                                512b bloks  bytes  2-byte words  KiB   MiB   GiB
        -type <c>               (d)irectory, regular (f)ile, symbolic (l)ink
                                (b)lock special, (c)har special, named (p)ipe, (s)ocket
        -xtype <c>              -H, -L: true if file is a symlink to a file of this type
                                -P:     true if file is a symlink
    miscellany
        -false -true            always returns false or true

### Actions
    
    -ls                         -fls <file>
    -print                      -fprint <file>
    -print0                     -fprint0 <file>
    -printf <format>            -fprintf <file> <format>
    -exec <command> \;          -execdir <command> \;
    -exec <command> {} \+       -execdir <command> {} \+
    -ok <command> \;            -okdir <command> \;
    -delete
    -prune
    -quit

### Global Options

Always return true.
Affect all tests no matter where specified on the command line.

    -depth
    -maxdepth <levels>
    -mindepth <levels>
    -mount
    -xdev

    -help
    -ignore_readdir_race
    -noignore_readdir_race
    -noleaf
    -version

### Positional Options

Always return true.
Only affect tests occurring later on the command line.

    -daystart
    -follow
    -regextype <type>
        -regextype help lists valid regex types
        findutils-default
        ed
        emacs
        gnu-awk
        grep
        posix-awk
        awk
        posix-basic
        posix-egrep
        egrep
        posix-extended
        posix-minimal-basic
        sed
    -warn
    -nowarn

### Operators

    \( <expr> \)
    \! <expr>
    -not <expr>
    <expr1> <expr2>     and
    <expr1> -o <expr2>  or
    <expr1> , <expr2>   always evaluate both; return <expr2>
