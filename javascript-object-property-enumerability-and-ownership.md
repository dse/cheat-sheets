# JavaScript Object Property Enumerability and Ownership

Your reference is <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties>.

## Assigning

| .                                   | enum. | non-enum. |   | string | symbol |   | own | inherited |                                                                                                                    |
|:------------------------------------|:------|:----------|:--|:-------|:-------|:--|:----|:----------|--------------------------------------------------------------------------------------------------------------------|
| simple assignment                   | *     |           |   | *      | *      |   | *   |           |                                                                                                                    |
| assignment via property initializer | *     |           |   | *      | *      |   | *   |           |                                                                                                                    |
| `Object.defineProperty`             |       | * by dflt |   |        |        |   |     |           | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)   |
| `Object.defineProperties`           |       | * by dflt |   |        |        |   |     |           | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) |

## Querying object properties

| .                                       | enum. | non-enum. |   | string | symbol |   | own | inherited |                                                                                                                            |
|:----------------------------------------|:------|:----------|:--|:-------|:-------|:--|:----|:----------|----------------------------------------------------------------------------------------------------------------------------|
| `Object.prototype.propertyIsEnumerable` | *     |           |   |        |        |   | *   |           | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)     |
| `Object.prototype.hasOwnProperty`       |       |           |   |        |        |   | *   |           | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)           |
| `Object.hasOwn`                         |       |           |   |        |        |   | *   |           | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)                   |
| <var>prop</var> `in` <var>obj</var>     |       |           |   |        |        |   | *   | *         | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)                                   |
| \-                                      |       |           |   |        |        |   |     |           |                                                                                                                            |
| `Object.getOwnPropertyDescriptor`       | ?     | ?         |   | ?      | ?      |   | ?   | ?         | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) |

## Traversing object properties

| .                                  | enum. | non-enum. |   | string | symbol |   | own | inherited |                                                                                                                             |
|:-----------------------------------|:------|:----------|:--|:-------|:-------|:--|:----|:----------|-----------------------------------------------------------------------------------------------------------------------------|
| `Object.keys`                      | *     |           |   | *?     |        |   | *   |           | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)                      |
| `Object.values`                    | *     |           |   | *?     |        |   | *   |           | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)                    |
| `Object.entries`                   | *     |           |   | *      |        |   | *   |           | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)                   |
| `Object.getOwnPropertyNames`       | *     | *         |   | *      |        |   | *   |           | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)       |
| `Object.getOwnPropertySymbols`     | *     | *         |   |        | *      |   | *   |           | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)     |
| `Reflect.ownKeys`                  | *     | *         |   | *      | *      |   | *   |           | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)                  |
| `for (` ... `in` ... `)`           | *     |           |   | *      |        |   | *   | *         | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)                             |
| `Object.assign`                    | *     |           |   | *      | *      |   | *   |           | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)                    |
| \-                                 |       |           |   |        |        |   |     |           |                                                                                                                             |
| Object spread                      | *     | ?         |   | ?      | ?      |   | ?   | ?         | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)                         |
| `Object.getOwnPropertyDescriptors` | ?     | ?         |   | ?      | ?      |   | ?   | ?         | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors) |

## Iterating

| .                                  | enum. | non-enum. |   | string | symbol |   | own | inherited |                                                                                                                             |
|:-----------------------------------|:------|:----------|:--|:-------|:-------|:--|:----|:----------|-----------------------------------------------------------------------------------------------------------------------------|
| `for (` ... `of` ... `)`           |       |           |   |        |        |   |     |           | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)                             |
| `for await (` ... `of` ... `)`     |       |           |   |        |        |   |     |           | [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)                       |
