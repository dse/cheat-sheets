# JavaScript Object Property Enumerability and Ownership

[properties]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties

[Your reference][properties]

## Querying

|                                       | enum own | enum inh | nonenum own | nonenum inh |
|:--------------------------------------|:---------|:---------|:------------|:------------|
| [Object#propertyIsEnumerable][isenum] | ✓        |          |             |             |
| [Object#hasOwnProperty][hasownprop]   | ✓        |          | ✓           |             |
| [Object.hasOwn][hasown]               | ✓        |          | ✓           |             |
| [in][inoperator]                      | ✓        | ✓        | ✓           | ✓           |

## Traversing

|                                               | enum own  | enum inh  | nonenum own | nonenum inh |
|:----------------------------------------------|:----------|:----------|:------------|:------------|
| [Object.keys][keys]                           | ✓ strings |           |             |             |
| [Object.values][values]                       | ✓ strings |           |             |             |
| [Object.entries][entries]                     | ✓ strings |           |             |             |
| [Object.getOwnPropertyNames][ownnames]        | ✓ strings |           | ✓ strings   |             |
| [Object.getOwnPropertySymbols][ownsymbols]    | ✓ symbols |           | ✓ symbols   |             |
| [Object.getOwnPropertyDescriptors][owndescrs] | ✓         |           | ✓           |             |
| [Reflect.ownKeys][reflectownkeys]             | ✓         |           | ✓           |             |
| [for...in][forin]                             | ✓ strings | ✓ strings |             |             |
| [Object.assign][objassign]                    | ✓         |           |             |             |
| [Object spread][objspread]                    | ✓         |           |             |             |

[isenum]:         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
[hasownprop]:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
[hasown]:         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn
[inoperator]:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

[keys]:           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
[values]:         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
[entries]:        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

[ownnames]:       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
[ownsymbols]:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
[owndescrs]:      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
[reflectownkeys]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
[forin]:          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
[objassign]:      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
[objspread]:      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
