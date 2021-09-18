# CommonJS

## Your Module's Code is Wrapped in...

```
(function (exports, require, module, __filename, __dirname) {
    /* ... */
});
```

`exports` is simply a reference to `module.exports`.

`module` is a reference to the current module.

NOTE: assigning to `exports` will **not** modify `module.exports`.

