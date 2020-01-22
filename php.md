# PHP stuff

## isset vs. empty

### isset

Returns `true` if a variable is declared, set to a value other than
`null`, and has not had `unset()` called on it.

### empty

returns `true` if a variable is either:

-   unset
-   has one of the following empty values:
    -   `''` (the empty string)
    -   0 (the integer)
    -   0.0 (the float)
    -   `'0'` (the string)
    -   `null`
    -   `false`
    -   `[]` (an empty array)

### "falsy" values

-   `false`
-   the integers 0 and -0
-   the floats 0.0 and -0.0
-   `''` (the empty string)
-   `'0'` (the string)
-   `[]` (an empty array)
-   `null`
-   an unset variable
-   a `SimpleXML` object created from an empty tag

Values you might think are falsy but are not:

-   `NaN`

## print\_r vs. var\_dump vs. var\_export

### [print\_r](https://www.php.net/manual/en/function.print-r.php)

```
Array
(
    [a] => apple
    [b] => banana
    [c] => Array
        (
            [0] => x
            [1] => y
            [2] => z
        )
)
```

### [var\_dump](https://www.php.net/manual/en/function.var-dump.php)

```
array(3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  array(3) {
    [0]=>
    string(1) "a"
    [1]=>
    string(1) "b"
    [2]=>
    string(1) "c"
  }
}
```

### [var\_export](https://www.php.net/manual/en/function.var-export.php)

```
array (
  0 => 1,
  1 => 2,
  2 =>
  array (
    0 => 'a',
    1 => 'b',
    2 => 'c',
  ),
)
```

## htmlentities vs. htmlspecialchars

### [htmlentities](https://www.php.net/manual/en/function.htmlentities.php)

Encodes anything that has an entity.

Non-ASCII characters **not** having an entity are left alone.

Does not encode `'` by default.

### [htmlspecialchars](https://www.php.net/manual/en/function.htmlspecialchars.php)

Only encodes `" & < >`.  Does not encode `'` by default.

Does not encode non-ASCII characters.
