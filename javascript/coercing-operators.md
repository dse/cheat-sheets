# Coercing Operators

NOTE: `Symbol.toPrimitive`, e.g., are usually stylized as
`@@toPrimitive`.

## binary `+`

The `+` operator is special in that it both computes the sum of two
numbers and concatenates two strings.

-   if one of the operands is a string
    -   the other is coerced to a string and they're concatenated
-   if both operands are bigint
    -   the bigints are added
-   if one and only one operand is a bigint
    -   a `TypeError` is thrown
-   otherwise both operands are coerced to numbers, then added

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition

## coercion to number

-   `undefined` => `NaN`
-   `null` => 0
-   `true` => 1
-   `false` => 0
-   strings => parse as a numeric literal; failure returns `NaN`
    -   leading and trailing whitespace are trimmed
    -   leading `0` does not parse as an octal number
    -   `+` or `-` occurring once and immediately followed by the number
    -   `Infinity`
    -   `-Infinity`
    -   empty or whitespace-only => 0
    -   `_` not allowed
-   bigints throw a `TypeError`
-   symbols throw a `TypeError`
-   objects are converted to primitives with `"number"` as hint,
    then resulting primitive is run through these steps.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion

## coercion to string

-   `undefined` => `"undefined"`
-   `null` => `"null"`
-   `true` => `"true"`
-   `false` => `"false"`
-   numbers => <var>number</var>`.toString(10)`
-   bigints => <var>bigint</var>`.toString(10)`
-   symbols => throw a `TypeError`
-   objects => convert to primitive with `"string"` as hint,
    then resulting primitive is run through these steps

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion

## coercion of object to primitive

-   if a `[@@toPrimitive]` method is present:
    -   call it with `"default"` as hint
    -   if return value is anything other than a primitive, throw a `TypeError`
    -   if return value is a primitive, return it.
-   if a `valueOf()` method is present,
    -   call it.
    -   if return value is anything other than a primitive, ignore that value
    -   if return value is a primitive, return it
-   if a `toString()` method is present,
    -   call it.
    -   if return value is anything other than a primitive, ignore that value
    -   if return value is a primitive, return it
-   throw a `TypeError`
    -   no `[@@toPrimitive]` exists or it does not return a primitive, OR:
    -   no `valueOf()` exists or it does not a primitive AND
        no `toString()` exists or it does not return a primitive

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion
