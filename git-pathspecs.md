# Pathspecs in Git

[gitglossary(7): pathspec](https://git-scm.com/docs/gitglossary.html#def_pathspec)

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
