# Coercing Operators in JavaScript

## `<`, `>`, `<=`, and `>=`

When doing comparisons involving less-than or greater-than, you cannot
avoid coercion.  You might as well understand coercion.

These operators use the following algorithm:

-   Convert the left operand to a primitive, then convert the right
    operand.

    -   If `[Symbol.toPrimitive]()` exists and using it returns a
        primitive, that is the result.

    -   Otherwise, if `.valueOf()` exists and using it returns a
        primitive, that is the result.

    -   Otherwise, use `.toString()`.

    -   NOTE: if the coercions have side effects, watch out as the
        left operand is always coerced before the right operand.

-   If both operands are strings, compare as strings.

-   Convert non-numeric types to numeric.

    -   `true` becomes `1`.
    -   `false` becomes `0`.
    -   `undefined` becomes `NaN`.
    -   Strings become the numeric values they contain, or `NaN`.

-   Return false if either value is `NaN`.

-   Compare as numeric values.  BigInts and Numbers can be compared.

### Examples:

-   If both operands are `Date` objects, then these four operators
    compare their timestamps.
    
    However, `==` always returns false.

## `==` and `!=`

Common conventional wisdom proscribes the use of these operators in
favor of their strict, non-coercing counterparts, `===` and `!==`.

-   object to object: return true iff they are the same object.

-   string to string: return true iff they contain the same characters
    in the same order.

-   number to number: return true iff they have the same value.

    -   `+0` and `-0` are treated as the same value.

    -   If either or both values are `NaN`, return false.  `NaN`
        cannot equal itself.

-   boolean to boolean: return true iff they have the same value.

-   bigint to bigint: return true iff they have the same value.

-   symbol to symbol: return true iff they reference the same symbol.

-   `undefined` or `null` to `undefined` or `null`: return true

-   `underined` or `null` to any other value: return false

-   object to primitive: convert the object to a primitive.

-   At this point both operands are primitives (strings, numbers,
    booleans, symbols, or bigints).
    
    -   If they are the same type, start over.
    
    -   symbol to non-symbol: return false
    
    -   boolean to non-boolean: convert the **boolean** to a number:
        -   true becomes 1.
        -   false becomes 0.
    
    -   number to string: convert the **string** to a number then
        compare numeric values.  Conversion failure results in `NaN`
        rendering the comparison result false.
    
    -   number to bigint: compare numeric values.  If the **number**
        is ±Infinity or NaN, return false.
    
    -   string to bigint: convert the **string** to a bigint using the
        same algorithm as `BigInt()`.
