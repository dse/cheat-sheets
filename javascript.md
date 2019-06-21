# JavaScript

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

| Precedence | Operator type                 | Associativity | Individual operators |
|:-----------|:------------------------------|:--------------|:---------------------|
| 20 (tight) | Grouping                      | n/a           | `(` ... `)`          |
| 19         | Member Access                 | left-to-right | ... `.` ...          |
|            | Computed Member Access        | left-to-right | ... `[` ... ]        |
|            | `new` (with argument list)    | n/a           | new ... `(` ... `)`  |
|            | Function Call                 | left-to-right | ... `(` ... `)`      |
| 18         | `new` (without argument list) | right-to-left | `new` ...            |
| 17         | Postfix Increment             | n/a           | ... `++`             |
|            | Postfix Decrement             |               | ... `--`             |
| 16         | Logical NOT                   | right-to-left | `!` ...              |
|            | Bitwise NOT                   |               | `~` ...              |
|            | Unary Plus                    |               | `+` ...              |
|            | Unary Negation                |               | `-` ...              |
|            | Prefix Increment              |               | `++` ...             |
|            | Prefix Decrement              |               | `--` ...             |
|            | `typeof`                      |               | `typeof` ...         |
|            | `void`                        |               | `void` ...           |
|            | `delete`                      |               | `delete` ...         |
|            | `await`                       |               | `await` ...          |
| 15         | Exponentiation                | right-to-left | ... `**` ...         |
| 14         | Multiplication                | left-to-right | ... `*` ...          |
|            | Division                      |               | ... `/` ...          |
|            | Remainder                     |               | ... `%` ...          |
| 13         | Addition                      | left-to-right | ... `+` ...          |
|            | Subtraction                   |               | ... `-` ...          |
| 12         | Bitwise Left Shift            | left-to-right | ... `<<` ...         |
|            | Bitwise Right Shift           |               | ... `>>` ...         |
|            | Bitwise Unsigned Right Shift  |               | ... `>>>` ...        |
| 11         | Less Than                     | left-to-right | ... `<` ...          |
|            | Less Than Or Equal            |               | ... `<=` ...         |
|            | Greater Than                  |               | ... `>` ...          |
|            | Greater Than Or Equal         |               | ... `>=` ...         |
|            | `in`                          |               | ... `in` ...         |
|            | `instanceof`                  |               | ... `instanceof` ... |
| 10         | Equality                      | left-to-right | ... `==` ...         |
|            | Inequality                    |               | ... `!=` ...         |
|            | Strict Equality               |               | ... `===` ...        |
|            | Strict Inequality             |               | ... `!==` ...        |
| 9          | Bitwise AND                   | left-to-right | ... `&` ...          |
| 8          | Bitwise XOR                   | left-to-right | ... `^` ...          |
| 7          | Bitwise OR                    | left-to-right | ... `|` ...          |
| 6          | Logical AND                   | left-to-right | ... `&&` ...         |
| 5          | Logical OR                    | left-to-right | ... `||` ...         |
| 4          | Conditional                   | right-to-left | ... `?` ... `:` ...  |
| 3          | Assignment                    | right-to-left | ... `=` ...          |
|            |                               |               | ... `+=` ...         |
|            |                               |               | ... `-=` ...         |
|            |                               |               | ... `**=` ...        |
|            |                               |               | ... `*=` ...         |
|            |                               |               | ... `/=` ...         |
|            |                               |               | ... `%=` ...         |
|            |                               |               | ... `<<=` ...        |
|            |                               |               | ... `>>=` ...        |
|            |                               |               | ... `>>>=` ...       |
|            |                               |               | ... `&=` ...         |
|            |                               |               | ... `^=` ...         |
|            |                               |               | ... `|=` ...         |
| 2          | `yield`                       | right-to-left | `yield` ...          |
|            | `yield*`                      |               | `yield*` ...         |
| 1 (loose)  | Comma / Sequence              | left-to-right | ... `,` ...          |
