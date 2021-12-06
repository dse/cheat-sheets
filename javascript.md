# JavaScript

This cheat sheet is geared towards ES5 development, including support
for Microsoft Internet Explorer 11.  Use of polyfillable objects and
methods from newer JavaScript standards is allowed.

See [ie11.md](ie11.md).

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

## `encodeURIComponent`

-   `A-Z a-z 0-9` are left unchanged.

-   `! ' ( ) * - . _ ~` are left unchanged.

-   `<space> " # $ % & + , / : ; < = > ? @ [ \ ] ^ `` { | } ~` are encoded.

Encoding is URI-encoded UTF-8.

## Operator Precedence (cheat sheet)

```
tighter                                                                            looser
|                                                                                       |

()  x.x    new X  x++  !x  **  *  +  <<   <   ==  &  ^  |  &&  ||  ??  ? :   =  yield   ,
    x[]           x--  ~x      /  -  >>   <=  !=                            +=  yield*
    new X()            +x      %     >>>  >   ===                           -=
    x()                -x                 >=  !==                           *=
    x?.x               ++x                in                                /=
                       --x            instanceof                          etc.
                       typeof x
                       void x
                       delete x
                       await x
```

## Operator Precedence (detail)

| Precedence | Operator type                 | Associativity | Individual operators   |
|:-----------|:------------------------------|:--------------|:-----------------------|
| 21 (tight) | Grouping                      | n/a           | `(` ... `)`            |
| 20         | Member Access                 | left-to-right | ... `.` ...            |
|            | Computed Member Access        | left-to-right | ... `[` ... `]`        |
|            | `new` (with argument list)    | n/a           | `new` ... `(` ... `)`  |
|            | Function Call                 | left-to-right | ... `(` ... `)`        |
|            | Optional Chaining             | left-to-right | `?.`                   |
| 19         | `new` (without argument list) | right-to-left | `new` ...              |
| 18         | Postfix Increment             | n/a           | ... `++`               |
|            | Postfix Decrement             |               | ... `--`               |
| 17         | Logical NOT                   | right-to-left | `!` ...                |
|            | Bitwise NOT                   |               | `~` ...                |
|            | Unary Plus                    |               | `+` ...                |
|            | Unary Negation                |               | `-` ...                |
|            | Prefix Increment              |               | `++` ...               |
|            | Prefix Decrement              |               | `--` ...               |
|            | `typeof`                      |               | `typeof` ...           |
|            | `void`                        |               | `void` ...             |
|            | `delete`                      |               | `delete` ...           |
|            | `await`                       |               | `await` ...            |
| 16         | Exponentiation                | right-to-left | ... `**` ...           |
| 15         | Multiplication                | left-to-right | ... `*` ...            |
|            | Division                      |               | ... `/` ...            |
|            | Remainder                     |               | ... `%` ...            |
| 14         | Addition                      | left-to-right | ... `+` ...            |
|            | Subtraction                   |               | ... `-` ...            |
| 13         | Bitwise Left Shift            | left-to-right | ... `<<` ...           |
|            | Bitwise Right Shift           |               | ... `>>` ...           |
|            | Bitwise Unsigned Right Shift  |               | ... `>>>` ...          |
| 12         | Less Than                     | left-to-right | ... `<` ...            |
|            | Less Than Or Equal            |               | ... `<=` ...           |
|            | Greater Than                  |               | ... `>` ...            |
|            | Greater Than Or Equal         |               | ... `>=` ...           |
|            | `in`                          |               | ... `in` ...           |
|            | `instanceof`                  |               | ... `instanceof` ...   |
| 11         | Equality                      | left-to-right | ... `==` ...           |
|            | Inequality                    |               | ... `!=` ...           |
|            | Strict Equality               |               | ... `===` ...          |
|            | Strict Inequality             |               | ... `!==` ...          |
| 10         | Bitwise AND                   | left-to-right | ... `&` ...            |
| 9          | Bitwise XOR                   | left-to-right | ... `^` ...            |
| 8          | Bitwise OR                    | left-to-right | ... `\|` ...           |
| 7          | Logical AND                   | left-to-right | ... `&&` ...           |
| 6          | Logical OR                    | left-to-right | ... `\|\|` ...         |
| 5          | Null Coalescing               | left-to-right | ... `??` ...           |
| 4          | Conditional                   | right-to-left | ... `?` ... `:` ...    |
| 3          | Assignment                    | right-to-left | ... `=` ...            |
|            |                               |               | ... `+=` ...           |
|            |                               |               | ... `-=` ...           |
|            |                               |               | ... `**=` ...          |
|            |                               |               | ... `*=` ...           |
|            |                               |               | ... `/=` ...           |
|            |                               |               | ... `%=` ...           |
|            |                               |               | ... `<<=` ...          |
|            |                               |               | ... `>>=` ...          |
|            |                               |               | ... `>>>=` ...         |
|            |                               |               | ... `&=` ...           |
|            |                               |               | ... `^=` ...           |
|            |                               |               | ... `\|=` ...          |
|            |                               |               | ... `&&=` ... (2020)   |
|            |                               |               | ... `\|\|=` ... (2020) |
|            |                               |               | ... `??=` ... (2020)   |
| 2          | `yield`                       | right-to-left | `yield` ...            |
|            | `yield*`                      |               | `yield*` ...           |
| 1 (loose)  | Comma / Sequence              | left-to-right | ... `,` ...            |

[source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Assignment_operators)

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

### How to Check for an Array-Like Object

See [isArrayLike.js](js/isArrayLike.js).

## jQuery.getScript() without jQuery.

See [jquery.md](jquery.md).

## Iframe Detection

```
if (window.self === window.top) {
    // you're not in an iframe!
} else {
    // you **are** in an iframe!
}
```

## slice vs. substring vs. substr

-   None of the methods change the original string.
-   All methods take the starting index as their first argument.
-   If the second argument is omitted, all methods return the substring from the start argument to the end of the string.

|                                                         | slice              | substr             | substring       |
|:--------------------------------------------------------|:-------------------|:-------------------|:----------------|
| optional second argument                                | end index          | desired length     | end index       |
| negative start argument                                 | from end of string | from end of string | 0               |
| first index argument greater than second index argument | empty string       | n/a                | swaps arguments |

```
'0123456789'.slice(4)          === '456789'     // absent second argument, all
'0123456789'.substr(4)         === '456789'     // methods go to end of string
'0123456789'.substring(4)      === '456789'

'0123456789'.slice(2, 6)       === '2345'       // start at 2, end before 6
'0123456789'.substr(2, 6)      === '234567'     // start at 2, get next 6 characters
'0123456789'.substring(2, 6)   === '2345'       // start at 2, end before 6

'0123456789'.slice(-4)         === '6789'       // start at 4 behind end of string
'0123456789'.substr(-4)        === '6789'       // start at 4 behind end of string
'0123456789'.substring(-4)     === '0123456789' // start at 0, not -4

'0123456789'.slice(-6, 2)      === ''           // start at 0, end before 2
'0123456789'.substr(-6, 2)     === '45'         // starts at -6, get next 2
'0123456789'.substring(-6, 2)  === '01'         // start at 0, end before 2

'0123456789'.slice(6, 2)       === ''
'0123456789'.substr(6, 2)      === '67'
'0123456789'.substring(6, 2)   === '2345'

'0123456789'.slice(-6, -2)     === '4567'       // start at -6, end before -2
'0123456789'.substr(-6, -2)    === ''           // start at -6, get next -2 characters
'0123456789'.substring(-6, -2) === ''           // start at 0 (-6), end at 0 (-2)
```

-   `slice` and `substring` take the `end` index as their optional
    second argument; `substr` takes the desired substring `length`.

-   If a negative `start` argument is specified, `slice` and `substr`
    start from behind the end of the string; `substring` treats a
    negative `start` argument as `0`.

-   If an argument greater than the length of the string is specified:
    -   `substring` treats both index arguments as 0.

-   If the first argument is greater than the second, `substring` will
    swap the arguments; `slice` will return an empty string.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
https://www.bennadel.com/blog/2159-using-slice-substring-and-substr-in-javascript.htm

## Natural Sort

[hat tip](https://fuzzytolerance.info/blog/2019/07/19/The-better-way-to-do-natural-sort-in-JavaScript/)

```
array.sort(function (a, b) {
    // assuming a and b are just strings
    return a.localeCompare(b, navigator.languages[0] || navigator.language,
                           { numeric: true, ignorePunctuation: true });
});
```

## String Types

-   [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

    JavaScript's negative string type.  A sequence of UTF-16 integers
    (code units).  For characters beyond the BMP, you get the high and
    low surrogates.

-   [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString)

    A sequence of UTF-16 integers.  Corresponds exactly to the
    built-in `String` type.

-   [`USVString`](https://developer.mozilla.org/en-US/docs/Web/API/USVString)

    A sequence of Unicode code points.

-   [`CSSOMString`](https://developer.mozilla.org/en-US/docs/Web/API/CSSOMString)

## Ways to Convert Things to Strings

...and to check what types of objects they are, for varying
definitions of *type*.

```
                        Object.prototype.                                                                       JSON.stringify(x)               typeof x
                        toString.apply(x)       x.toString() or String(x) or "" + x                             x.toJSON();
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
undefined               "[object Undefined]"    -                                                               -                               "undefined"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
null                    "[object Null]"         -                                                               "null"                          "object"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
[3, 4, 5]               "[object Array]"        "3,4,5"                                                         "[3,4,5]"                       "object"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
arguments               "[object Arguments]"    "[object Arguments]"                                            "{}"                            "object"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
function () {}          "[object Function]"     "function () {}"                                                -                               "function"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
() => {}                "[object Function]"     "() => {}"                                                      -                               "function"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
new Error('message')    "[object Error]"        "Error: message"                                                "{}"                            "object"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
true                    "[object Boolean]"      "true"                                                          "true"                          "boolean"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
new Boolean(true)       "[object Boolean]"      "true"                                                          "true"                          "object"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
42                      "[object Number]"       "42"                                                            "42"                            "number"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
new Number(42)          "[object Number]"       "42"                                                            "42"                            "object"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
"string"                "[object String]"       "string"                                                        "\"string\""                    "string"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
new String("string")    "[object String]"       "string"                                                        "\"string\""                    "object"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
new Date()              "[object Date]"         "Wed Dec 01 2021 12:44:18 GMT-0500 (Eastern Standard Time)"     "\"2021-12-01T17:44:18.084Z\""  "object"
                                                                                                                "2021-12-01T17:44:18.084Z"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
/^meow$/                "[object RegExp]"       "/^meow$/"                                                      "{}"                            "object"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
{ "cow": "moo" }        "[object Object]"       "[object Object]"                                               "{\"cow\":\"moo\"}"             "object"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
42n                     "[object BigInt]"       "42"                                                            // can't serialize a bigint     "bigint"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
Symbol('foo')           "[object Symbol]"       "Symbol(cat)"                                                   undefined                       "symbol"
                                                        // "" + x throws an error on symbol values
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
an array-like object,
e.g., a NodeList        "[object NodeList]"     "[object NodeList]"                                             {"0":{},"1":{},...}             "object"
----------------------  ----------------------  --------------------------------------------------------------  ------------------------------  --------------
```

## Checking for Plain Objects

To check if a supplied value is a plain object:

    if (Object.prototype.toString.apply(value) === '[object Object]') {
        // ...
    }

If `typeof value === 'object'`:

-   If your `value` is any of the following, the check above returns
    false:

    -   `null`
    -   an `Array`
    -   `arguments`
    -   an `Error`
    -   a `Boolean`, `Number`, or `String` primitive wrapper **object**
    -   a `Date`
    -   a `RegExp`
    -   an array-like object such as a `NodeList`
    
    This practically excludes anything that isn't a plain object.

If `typeof value !== 'object'`:

-   Then the check above is going to return false.  This applies to
    the following types of values:

    -   `undefined`
        -   `typeof value === "undefined"`
    -   a function
        -   `typeof value === "function"`
    -   a boolean, number, string, or bigint primitive
        -   `typeof value === "boolean`
        -   `typeof value === "number"`
        -   `typeof value === "string"`
        -   `typeof value === "bigint"`
    -   a `Symbol`
        -   `typeof value === "symbol"`

## Node.js

### Are we running the script directly?

    if (require.main === module) {
        ...
    }

