# CSS Blah

## Styling an `<hr>`

### Now?

Just do what Normalize, Bootstrap, and/or Foundation do, I guess.

### An Old Way

```
hr {
    border-color: black;
    border-width: 0;
    border-style: solid;
    border-top-width: 1px;
    background-color: transparent;
    color: transparent;                 /* ??? */
    padding: 0;                         /* ??? */
}
```

### Another Old Way

```
hr {
    height: 1px;
    border: solid 0px;                  /* or none */
    background-color: black;
    color: black;                       /* ??? */
    padding: 0;                         /* ??? */
}
```

