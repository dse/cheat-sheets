# Sorting Naturally

```
array.sort(function (a, b) {
    // assuming a and b are just strings
    return a.localeCompare(b, navigator.languages[0] || navigator.language,
                           { numeric: true, ignorePunctuation: true });
});
```

[hat tip](https://fuzzytolerance.info/blog/2019/07/19/The-better-way-to-do-natural-sort-in-JavaScript/)
