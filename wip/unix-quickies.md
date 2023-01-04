# Unix Quickies

## Unique `.editorconfig` Files

    stdbuf --output=L find . -type f -name .editorconfig > editorconfig-files.txt
    xargs -d'\n' md5sum < editorconfig-files.txt |
    perl -lne 'if (s/^([[:xdigit:]]+)\*?\s+\*?//) { $sum = $1; if (!$x{$sum}) { $x{$sum} = 1; print $_; } }' | xargs -d'\n' kitty -i | sed -n '/./p'
    
