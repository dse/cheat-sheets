## Detecting if you're in an iframe

```
if (window.self === window.top) {
    // you're not in an iframe!
} else {
    // you **are** in an iframe!
}
```
