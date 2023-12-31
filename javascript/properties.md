## An Object's Properties, Enumerability and Ownership

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties

|                                         |       |            |        |                                                        |
|:----------------------------------------|-------|------------|--------|--------------------------------------------------------|
| for ... in                              |       | enumerable | string | own or inherited                                       |
| Object.entries()                        | own   | enumerable | string |                                                        |
| Object.keys()                           | own   | enumerable | string |                                                        |
| Object.values()                         | own   | enumerable | string |                                                        |
| Object.getOwnPropertyNames()            | own   |            | string | enum or non-enum                                       |
| Object.getOwnPropertySymbols()          | own   |            | symbol | enum or non-enum                                       |
| Object.assign()                         | own   | enumerable |        | string or symbol                                       |
|:----------------------------------------|-------|------------|--------|--------------------------------------------------------|
| Object.hasOwn()                         | own   |            |        | string or symbol, enum or non-enum                     |
| Object.prototype.hasOwnProperty()       | own   |            |        | string or symbol, enum or non-enum                     |
| Object.prototype.propertyIsEnumerable() | own   | enumerable |        | string or symbol                                       |
| in                                      |       |            |        | string or symbol, own or inherited, (enum or non-enum) |
| delete                                  | (own) |            |        |                                                        |
