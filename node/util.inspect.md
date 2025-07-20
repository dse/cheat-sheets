# util.inspect

```
function inspect(value) {
    return require('node:util').inspect(value, {
        depth: Infinity,
        sorted: true,
        // showHidden: true, // include non-enumerables
        // maxArrayLength: Infinity,
        // maxStringLength: Infinity,
        // compact: true,
        // breakLength: 132,
    });
}
```

[source](https://nodejs.org/docs/latest-v14.x/api/util.html#util_util_inspect_object_options)
