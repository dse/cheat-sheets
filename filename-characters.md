# Characters To Watch Out For In Filenames

\* = disallowed

|     | Character | W | indows                       | U | nix                                                                         |
|:----|:---------:|:--|:-----------------------------|:--|:----------------------------------------------------------------------------|
|     | SPACE     |   | cmd line requires quotes     |   | same                                                                        |
|     | `!`       |   |                              |   | reserved word; command history; must be `'`-quoted or escaped in `"` quotes |
|     | `"`       | * | quoting                      |   | quoting                                                                     |
|     | `#`       |   |                              |   | comment                                                                     |
|     | `$`       |   |                              |   | variable name                                                               |
|     | `%`       |   |                              |   | watch out if STARTS a filename; job specification                           |
|     | `&`       |   |                              |   | command separator                                                           |
|     | `'`       |   |                              |   | quotes                                                                      |
|     | `()`      |   |                              |   | command grouping                                                            |
|     | `*`       | * | wildcard                     |   | wildcard                                                                    |
| :-) | `+`       |   |                              |   | watch out if STARTS a filename (command-line options)                       |
|     | `,`       |   | comma separator              |   | same                                                                        |
| :-) | `-`       |   |                              |   | watch out if STARTS a filename (command-line options)                       |
| :-) | `.`       |   | `.` and `..` special meaning |   | same                                                                        |
|     | `/`       | * | directory separator          | * | directory separator                                                         |
|     | `:`       | * | drive letters                |   | directory separator in classic macOS                                        |
|     | `;`       |   |                              |   | command separator                                                           |
|     | `<`       | * | input redirection            |   | input redirection in unix and windows shells                                |
|     | `=`       |   |                              |   | environment variable settings                                               |
|     | `>`       | * | output redirection           |   | output redirection                                                          |
|     | `?`       | * | wildcard                     |   | wildcard                                                                    |
|     | `@`       |   |                              |   |                                                                             |
|     | `[]`      |   |                              |   | wildcards                                                                   |
|     | `\`       | * | directory separator          |   | directory separator; character escaping                                     |
|     | `^`       |   |                              |   | command line history                                                        |
| :-) | `_`       |   |                              |   |                                                                             |
|     | `` ` ``   |   |                              |   | tilde expansion                                                             |
|     | `{}`      |   |                              |   | wildcards in unix shells                                                    |
|     | `|`       | * | pipe redirection             |   | pipe redirection                                                            |
|     | `~`       |   |                              |   | starts user's home directory                                                |

## Best Practice Issues

-   `Capital_Letters_and_Underscores`
    vs. `all-lowercase-with-hyphens`: the former is slightly easier to
    read; the latter requires slightly less effort for programmers to
    type, and better avoids mishaps related to case-sensitivity in
    some operating systems and programming languages.

-   Filenames using `CamelCase` are mostly fine, but if used for web
    resources, may not be optimal for SEO.  Use hyphens or
    underscores, whichever you deem fit.

-   Filenames `usingalllowercaseandnopunctuation` are downright
    unreadable.

-   For dates, use `YYYYMMDD` or `YYYY-MM-DD`, so sorting will result
    in correct chronological order.

    -   For months: `201501` for January 2015.
    -   For quarters: `2015Q1` instead of `1Q2015`.

-   Instead of `1` through `99`, use `01` through `99`.  Some
    platforms will sort in strict, non-natural lexical order: 1, 10,
    11, ..., 2, 20, 21, ..., 3, 30, 31, ...
