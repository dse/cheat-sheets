# JavaScript Object Property Enumerability and Ownership

[reference][reference]

## Querying

|                                       | enum own | enum inh | nonenum own | nonenum inh |            |         |         |
|:--------------------------------------|:---------|:---------|:------------|:------------|------------|---------|---------|
| [Object#propertyIsEnumerable][isenum] | ✓        |          |             |             | enum       | own     | str/sym |
| [Object#hasOwnProperty][hasownprop]   | ✓        |          | ✓           |             | enum/¬enum | own     | str/sym |
| [Object.hasOwn][hasown]               | ✓        |          | ✓           |             | enum/¬enum | own     | str/sym |
| [in][inoperator]                      | ✓        | ✓        | ✓           | ✓           | enum/¬enum | own/inh | str/sym |

## Traversing

|                                               | enum own  | enum inh  | nonenum own | nonenum inh |            |         |         |
|:----------------------------------------------|:----------|:----------|:------------|:------------|:-----------|:--------|:--------|
| [Object.keys][keys]                           | ✓ strings |           |             |             | enum       | own     | str     |
| [Object.values][values]                       | ✓ strings |           |             |             | enum       | own     | str     |
| [Object.entries][entries]                     | ✓ strings |           |             |             | enum       | own     | str     |
| [Object.getOwnPropertyNames][ownnames]        | ✓ strings |           | ✓ strings   |             | enum/¬enum | own     | str     |
| [Object.getOwnPropertySymbols][ownsymbols]    | ✓ symbols |           | ✓ symbols   |             | enum/¬enum | own     | sym     |
| [Object.getOwnPropertyDescriptors][owndescrs] | ✓         |           | ✓           |             | enum/¬enum | own     | str/sym |
| [Reflect.ownKeys][reflectownkeys]             | ✓         |           | ✓           |             | enum/¬enum | own     | str/sym |
| [for...in][forin]                             | ✓ strings | ✓ strings |             |             | enum       | own/inh | str     |
| [Object.assign][objassign]                    | ✓         |           |             |             | enum       | own     | str/sym |
| [Object spread][objspread]                    | ✓         |           |             |             | enum       | own     | str/sym |

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

[this]: https://github.com/dse/cheat-sheets/blob/master/javascript-object-property-enumerability-and-ownership.md

[reference]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties

