# Determining if a value is a...

## ...number, string, boolean, bigint, symbol

Works with both primitive objects and their wrappers.

```
value?.constructor === Number
value?.constructor === String
value?.constructor === Boolean
value?.constructor === BigInt
value?.constructor === Symbol
```
