# Pathspecs in Git

[gitglossary(7): pathspec](https://git-scm.com/docs/gitglossary.html#def_pathspec)

A **pathspec** is usually just a filename you specify for `git add`,
`git grep`, `git diff`, `git checkout`, or other commands to limit
the scope of their actions to specific directories and/or filenames.

-   Paths match themselves.

-   `<filename>.<ext>` without any kind of directory prefix

    matches all files thusly named in the entire directory tree.  Uses
    `fnmatch(3)`.  `*` and `?` **can** match directory separators.

-   `<a>/<b>/<filename>.<ext>`

    matches any thusly named file in `<a>/<b>` or any of its
    subdirectories.

A pathspec starting with a colon `:` has a special meaning.

-   `:(<magic-word>,<magic-word>,...)<pattern>`

    | pathspec | |
    |:--|:--|
    | `:(top)<pattern>` | matches from the working tree root no matter where you are |

-   `:(literal)<pattern>` treats wildcards as literal.

-   `:(icase)<pattern>` case-insensitive match

-   `:(glob)<pattern>` an `fnmatch(3)` `FNM_PATHNAME` glob

    -   `**/` matches what follows in all directories in an entire
        tree

    -   trailing `/**` matches everything inside

    -   `/**/` matches zero or more directories

-   `:(attr:<reqmt> <reqmt> ...)` where each `<reqmt>` is

    | `<reqmt>`        |                                       |
    |:-----------------|:--------------------------------------|
    | `<attr>`         | attribute is set                      |
    | `-<attr>`        | attribute is unset                    |
    | `<attr>=<value>` | set to the specified string `<value>` |
    | `!<attr>`        | attribute is unspecified              |
    
    1.  `:(attr:text vendored)*.json`
    
    2.  `:(attr:!text !vendored)*.pdf`

    See `gitattributes(5)`.

-   `:(exclude)<pattern>` to exclude pathnames.

    Non-exclude pathspecs are checked, then exclude pathspecs.







Patterns normally match themselves.

`*` and `?` wildcards can match directory separators.

The [fnmatch(3)](http://man7.org/linux/man-pages/man3/fnmatch.3.html) function is used.

| This pathspec...      | Matches...                              |
|:----------------------|:----------------------------------------|
| `Documentation/*.jpg` | `Documentation/chapter_1.jpg`           |
|                       | `Documentation/chapter_1/figure_1.jpg`  |
|                       | but not `submodule/Documentation/1.jpg` |

## Special Magic Patterns

| Pattern                | Meaning                                                                      |
|:-----------------------|:-----------------------------------------------------------------------------|
| `:(exclude)about.html` | exclude pathspecs are used to ignore filenames matching a specified pattern. |
| or `:!about.html`      | (short form) |
| or `:!:about.html`     | (short form) |
| `:(top)Documentation`  | path is specified from the top level though you may be in a subdirectory.    |
| or `:/Documentation`   | (short form) |
| or `:/:Documentation`  | (short form) |
| `:(icase)*.jpg`        | case insensitive match                                                       |
| `:(literal)chap1?.jpg` | literal characters                                                           |
| `:(glob)<path>`        | see Glob Magic, below                                                        |
| `:(attr)<path>`        | see Attribute Magic, below                                                   |

Patterns can be combined:

-   `:(icase,literal)<path>`
-   `:(top,glob)<path>`
-   `:(exclude,icase)<path>`

Short forms can be combined:

-   `:!/:.gitignore`
-   or `:!/.gitignore`

## Glob Magic

`:(glob)<path>` switches to a pattern matching style more compatible
with shell globs.  The two differences are as follows:

-   Uses fnmatch(3) with the `FNM_PATHNAME` flag: `*` and `?`
    wildcards will not match a slash.

-   Adds special meaning for `**`:

    -   Leading `**/` matches all directories.
    -   Trailing `/**` matches everything inside.
    -   `/**/` matches zero or more path components.

| This glob...        | Matches...                                                          |
|:--------------------|:--------------------------------------------------------------------|
| `:(glob)**/foo`     | file or directory `foo` anywhere                                    |
| `:(glob)**/foo/bar` | file or directory `bar` anywhere directly under any directory `foo` |
| `:(glob)abc/**`     | all files and directories inside `abc`                              |
| `:(glob)a/**/b`     | `a/b`                                                               |
|                     | `a/x/b`                                                             |
|                     | `a/x/y/b`                                                           |

## Attribute Magic

`:(attr:<attrreq> <attrreq> ...)<path>` limits paths to those that match attribute settings.

-   `ATTR`: requires `ATTR` to be set
-   `-ATTR`: requires `ATTR` to be unset
-   `ATTR=VALUE`: requires `ATTR` to be set to `VALUE`
-   `!ATTR`: requires `ATTR` to be unspecified

See [gitattributes(5)](https://git-scm.com/docs/gitattributes).
