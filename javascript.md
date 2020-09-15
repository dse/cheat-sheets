# JavaScript

This cheat sheet is geared towards ES5 development, including support
for Microsoft Internet Explorer 11.  Use of polyfillable objects and
methods from newer JavaScript standards is allowed.

Much of this should still be helpful to you if you are using ES6 or
higher, with or without [Babel](https://babeljs.io/).

You are expected to determine which objects and methods need to be
polyfilled for your particular use case.

## Style Guides

-   [Airbnb ES5](https://github.com/airbnb/javascript/tree/es5-deprecated/es5)

-   [Airbnb Current](https://github.com/airbnb/javascript)

These are great style guides.  I deviate a little from them, but
primarily in that I use four spaces instead of two, still with soft
tabs.  More spaces mean nesting level is more obvious, making matching
nesting levels easier.

## The `location` and `Location` Objects

```
var anchor = document.createElement('a');
anchor.href = 'https://example.com/';
```

### Examples

    [1] https://bob:hunter2@example.com:8080/path/to/resource?query=value&query2=value2#hash
    [2] http://www.google.com/

### Properties

                        [1]                             [2]

    location.href       [entire string]                 [entire string]
    location.protocol   'https:'                        'http:'
    location.host       'example.com:8080'              'www.google.com'
    location.hostname   'example.com'                   'www.google.com'
    location.port       '8080'                          ''
    location.pathname   '/path/to/resource'             '/'
    location.search     '?query=value&query2=value2'    ''
    location.hash       '#hash'                         ''
    location.username   'bob'                           ''
    location.password   'hunter2'                       ''
    location.origin     'https://example.com:8080'      'http://www.google.com/'

## “Falsy” Values

-   `undefined`
-   `null`
-   `false`
-   `NaN`
-   0
-   `""` (the empty string)

## Characters Not Touched by `encodeURIComponent`

`A–Z a–z 0–9 ! & ( ) * - . _ ~`

`encodeURIComponent()` encodes other characters as URI-encoded UTF-8.

## Operator Precedence

| Precedence | Operator type                 | Associativity | Individual operators  |
|:-----------|:------------------------------|:--------------|:----------------------|
| 20 (tight) | Grouping                      | n/a           | `(` ... `)`           |
| 19         | Member Access                 | left-to-right | ... `.` ...           |
|            | Computed Member Access        | left-to-right | ... `[` ... `]`       |
|            | `new` (with argument list)    | n/a           | `new` ... `(` ... `)` |
|            | Function Call                 | left-to-right | ... `(` ... `)`       |
| 18         | `new` (without argument list) | right-to-left | `new` ...             |
| 17         | Postfix Increment             | n/a           | ... `++`              |
|            | Postfix Decrement             |               | ... `--`              |
| 16         | Logical NOT                   | right-to-left | `!` ...               |
|            | Bitwise NOT                   |               | `~` ...               |
|            | Unary Plus                    |               | `+` ...               |
|            | Unary Negation                |               | `-` ...               |
|            | Prefix Increment              |               | `++` ...              |
|            | Prefix Decrement              |               | `--` ...              |
|            | `typeof`                      |               | `typeof` ...          |
|            | `void`                        |               | `void` ...            |
|            | `delete`                      |               | `delete` ...          |
|            | `await`                       |               | `await` ...           |
| 15         | Exponentiation                | right-to-left | ... `**` ...          |
| 14         | Multiplication                | left-to-right | ... `*` ...           |
|            | Division                      |               | ... `/` ...           |
|            | Remainder                     |               | ... `%` ...           |
| 13         | Addition                      | left-to-right | ... `+` ...           |
|            | Subtraction                   |               | ... `-` ...           |
| 12         | Bitwise Left Shift            | left-to-right | ... `<<` ...          |
|            | Bitwise Right Shift           |               | ... `>>` ...          |
|            | Bitwise Unsigned Right Shift  |               | ... `>>>` ...         |
| 11         | Less Than                     | left-to-right | ... `<` ...           |
|            | Less Than Or Equal            |               | ... `<=` ...          |
|            | Greater Than                  |               | ... `>` ...           |
|            | Greater Than Or Equal         |               | ... `>=` ...          |
|            | `in`                          |               | ... `in` ...          |
|            | `instanceof`                  |               | ... `instanceof` ...  |
| 10         | Equality                      | left-to-right | ... `==` ...          |
|            | Inequality                    |               | ... `!=` ...          |
|            | Strict Equality               |               | ... `===` ...         |
|            | Strict Inequality             |               | ... `!==` ...         |
| 9          | Bitwise AND                   | left-to-right | ... `&` ...           |
| 8          | Bitwise XOR                   | left-to-right | ... `^` ...           |
| 7          | Bitwise OR                    | left-to-right | ... `\|` ...          |
| 6          | Logical AND                   | left-to-right | ... `&&` ...          |
| 5          | Logical OR                    | left-to-right | ... `\|\|` ...        |
| 4          | Conditional                   | right-to-left | ... `?` ... `:` ...   |
| 3          | Assignment                    | right-to-left | ... `=` ...           |
|            |                               |               | ... `+=` ...          |
|            |                               |               | ... `-=` ...          |
|            |                               |               | ... `**=` ...         |
|            |                               |               | ... `*=` ...          |
|            |                               |               | ... `/=` ...          |
|            |                               |               | ... `%=` ...          |
|            |                               |               | ... `<<=` ...         |
|            |                               |               | ... `>>=` ...         |
|            |                               |               | ... `>>>=` ...        |
|            |                               |               | ... `&=` ...          |
|            |                               |               | ... `^=` ...          |
|            |                               |               | ... `\|=` ...         |
| 2          | `yield`                       | right-to-left | `yield` ...           |
|            | `yield*`                      |               | `yield*` ...          |
| 1 (loose)  | Comma / Sequence              | left-to-right | ... `,` ...           |

## `RegExp.$1`, etc.

[RegExp documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

[My more detailed notes](https://webonastick.com/javascript/regexp/properties/)

| These are deprecated...         | a/k/a...                              | Which is...                                               |
|:--------------------------------|:--------------------------------------|:----------------------------------------------------------|
| `RegExp.$1` through `RegExp.$9` |                                       | Captured parenthesized submatch strings                   |
| `RegExp.input`                  | `RegExp.$_`                           | The whole string against which the pattern was matched    |
| `RegExp.lastMatch`              | `RegExp['$&']`                        | The entire substring matching the pattern                 |
| `RegExp.lastParen`              | `RegExp['$+']`                        | The last parenthesized substring match                    |
| `RegExp.leftContext`            | `` RegExp['$`'] ``                    | The portion of the string preceding the matched substring |
| `RegExp.rightContext`           | `RegExp["$'"]`                        | The portion of the string following the matched substring |
| `RegExp.index`                  | This only works in Internet Explorer. |                                                           |

| When using...   | Switch to...   |
|:----------------|:---------------|
| `Regexp#test`   | `RegExp#exec`  |
| `String#search` | `String#match` |

| Instead of...                   | a/k/a...           | Use...                                                                                                                    |
|:--------------------------------|:-------------------|:--------------------------------------------------------------------------------------------------------------------------|
| `RegExp.$1` through `RegExp.$9` |                    | `matches[1]` through `matches[9]`                                                                                         |
| `RegExp.input`                  | `RegExp.$_`        | Keep track of the last successfully matched string yourself. Note that `matches.input` also contains the original string. |
| `RegExp.lastMatch`              | `RegExp['$&']`     | `matches[0]`                                                                                                              |
| `RegExp.lastParen`              | `RegExp['$+']`     | `matches[matches.length - 1]`                                                                                             |
| `RegExp.leftContext`            | `` RegExp['$`'] `` | `String(s).substring(0, matches.index)`                                                                                   |
| `RegExp.rightContext`           | `RegExp["$'"]`     | `String(s).substring(matches.index + matches[0].length)`                                                                  |
| `RegExp.index`                  |                    | This only works in Internet Explorer. If you come across this, look it up and fix your code!                              |

### Old example

```
var result;

if (/regex/.test(s)) {
    result = RegExp.$1;
    // do stuff with RegExp.$1, RegExp.$2, etc.
} else {
    // do other stuff
}
```

### New example

```
var matches;
var result;

matches = /regex/.exec(s);
if (matches) {
    result = matches[1];
    // do stuff with matches[1], matches[2], etc.
} else {
    // do other stuff
}
```

## Special Patterns in `String#replace`

Specifying special replacement patterns in `String#replace` is fine:

    'John Smith'.replace(/(\w+)\s+(\w+)/, '$2, $1') === 'Smith, John'

These are the special replacement patterns:

| Pattern            | Inserts...                                                    |
|:-------------------|:--------------------------------------------------------------|
| `$$`               | a `$`                                                         |
| `$&`               | the matched substring                                         |
| `` $` ``           | the portion of the string that precedes the matched substring |
| `$'`               | the portion of the string that follows the matched substring  |
| `$1` through `$99` | the *n*th captured parenthesized submatch string              |

## Specifying a Replacer Function as the Second Parameter for `String#replace`

    <string>.replace(/(\w+)\s+(\w+)/, function (match, p1, p2, offset, string) {
        return p2 + ', ' + p1;
    });

These are the arguments that are passed to the replacer function:

| Argument         | Supplied Value                                                                                                 | Corresponds To  |
|:-----------------|:---------------------------------------------------------------------------------------------------------------|:----------------|
| `match`          | The matched substring                                                                                          | `$&`            |
| `p1`, `p2`, etc. | The captured parenthesized subsmatch string.  As many arguments as the number of parenthesized capture groups. | `$1`, `$2`, ... |
| `offset`         | The zero-based offset of the matched substring within the whole string being examined                          |                 |
| `string`         | The whole string being examined                                                                                |                 |

You may use any names for your parameters.

## Arrays vs. Array-Like Objects

JavaScript arrays have special features:

-   As elements are added or removed, the `length` property is automatically updated.
-   Setting `length` to a smaller value truncates the array.
-   Arrays inherit the `Array.prototype` methods.
-   Arrays have a *class* attribute of `Array`.

Occasionally you will come across array-like objects.  They differ
from arrays in that:

-   The `length` property is not magical as in arrays.
-   You can not directly invoke array methods on them.

If an object has an integer `length` property and a series of
integer-indexed properties from `0` through `length - 1`, it is
effectively an array-like object.

### Examples of Array-Like Objects

-   The `arguments` object provided to every function scope.

-   A `NodeList` object, such as the return value from
    `document.querySelectorAll()` and many other DOM methods.

    Note that `NodeList` objects have the following methods, which are
    similar to ones on `Array` objects:

    -   `forEach`
    -   `entries`
    -   `keys`
    -   `values`

### How to Convert Array-Like Objects to Arrays

Use [`Array.from`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from):

```
var args = Array.from(arguments);
```

Old-school method:

```
var args = Array.prototype.slice.call(arguments);
```

## jQuery.getScript() without jQuery.

```
$.getScript(url, callback);

// becomes

$.get(url, undefined, callback, 'script');

// becomes

$.ajax({
    url: url,
    type: 'get',
    dataType: 'script',
    data: undefined,
    success: callback
});

// becomes


```
