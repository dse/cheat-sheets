# coreutils

https://www.gnu.org/software/coreutils/manual/html_node/index.html

## cut

## paste

## comm

Write lines that are common, and writes that are unique, to two input
files.

    comm <file1> <file2>

Specified files must be sorted.  `sort` with no arguments will produce
compliant files.

Column 1 contains lines unique to file1.

Column 2 contains lines unique to file2.

Column 3 contains lines common to both files.

## stdbuf

    stdbuf --output=L find . -type f -name .editorconfig | tee editorconfig-files.txt
           -oL

# Needed

a good unbuffered or line-buffered `tee`.
