# All The Kinds of Regular Expressions

## Sources

-   [The Open Group](https://pubs.opengroup.org/onlinepubs/009695399/basedefs/xbd_chap09.html#:~:text=Regular%20Expressions%20(REs)%20provide%20a,according%20to%20the%20current%20locale.)
    for basic and extended regular expressions

## Comparative

| Perl           | JavaScript     | Description                           |
|:---------------|:---------------|:--------------------------------------|
| `.`            |                | any character except newline          |
|                |                | \  if `/m`, also matches newline      |
| `\|`           | `\|`           | alternation                           |
| `(...)`        | `(...)`        | capturing group                       |
| `(?:...)`      | `(?:...)`      | non-capturing group                   |
| `(?<name>...)` | `(?<name>...)` | named group                           |
| `\000`...      | `\000`...      | octal                                 |
| `\x00`...      | `\x00`...      | hexadecimal                           |
| `\x{...}`      | `\u{...}`      | "                                     |
| `[abc]`        | `[abc]`        | character class                       |
| `[a-z]`        | `[a-z]`        | character range                       |
| `[-abc]`       | `[-abc]`       | character class including `-`         |
| `[^abc]`       | `[^abc]`       | negated character class               |
| `[[:...:]]`    |                | POSIX character class                 |
| `*`            | `*`            | match 0 or more times                 |
| `+`            | `+`            | match 1 or more times                 |
| `?`            | `?`            | match 0 or 1 times                    |
| `*?`           | `*?`           | match 0 or more times, non-greedy     |
| `+?`           | `+?`           | match 1 or more times, non-greedy     |
| `??`           | `??`           | match 0 or 1 times, non-greedy        |
| `^`            |                | match start of string                 |
|                |                | \  if `/m`, also start of line        |
| `$`            |                | match end of string                   |
|                |                | \  or before newline at end of string |
|                |                | \  if `/m`, also before any newline   |
| `{n}`          | `{n}`          | match exactly _n_ times               |
| `{n,}`         | `{n,}`         | match _n_ or more times               |
| `{,n}`         | **`{0,n}`**    | match 0 to _n_ times                  |
| `{m,n}`        | `{m,n}`        | match _m_ to _n_ times                |
| `\t`           | `\t`           | tab                                   |
| `\n`           | `\n`           | newline                               |
| `\r`           | `\r`           | carriage return                       |
| `[\v]`         | **`\v`**       | vertical tab                          |
| `[\b]`         | `[\b]`         | backspace (only in char. class)       |
| `\f`           | `\f`           | form feed                             |
| `\a`           | **`\x07`**     | bell                                  |
| `\e`           | **`\x1b`**     | escape                                |
| `(?=...)`      | `(?=...)`      | positive look-ahead assertion         |
| `(?!...)`      | `(?!...)`      | negative look-ahead assertion         |
| `(?<=...)`     | `(<?=...)`     | positive look-behind assertion        |
| `(?<!...)`     | `(<?!...)`     | negative look-behind assertion        |
| `\d`, `\D`     | `\d`, `\D`     | any digit                             |
| `\w`, `\W`     | `\w`, `\W`     | any word character                    |
| `\s`, `\S`     | `\s`, `\S`     | any whitespace character              |
| `\b`, `\B`     | `\b`, `\B`     | word boundary                         |
| `\cX`          | `\cX`          | control character                     |
