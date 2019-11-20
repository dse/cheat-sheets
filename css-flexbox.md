# CSS Flexbox

Details: <https://css-tricks.com/snippets/css/a-guide-to-flexbox/>

## Properties for the Flex Container (parent)

```
.container {

    display: flex;                              /* block level */
             inline-flex;                       /* inline level */

    /* main axis */
    flex-direction: row;                        /* default left->right */
                    row-reverse;                        /* right->left */
                    column;                             /* top->bottom */
                    column-reverse;                     /* bottom->top */

    /* additional rows or columns? */
    flex-wrap: nowrap;                          /* default */
               wrap;                            /* top->bottom|left->right */
               wrap-reverse;                    /* bottom->top|right->left */

    /* shorthand */
    flex-flow: <flex-direction> <flex-wrap>;    /* default: row nowrap */

    /* alignment and distribution of space along main axis */
    justify-content: flex-start;        /* default |[X][X][X]            | */
                     flex-end;                  /* |            [X][X][X]| */
                     center;                    /* |      [X][X][X]      | */
                     space-between;             /* |[X]      [X]      [X]| */
                     space-around;              /* |  [X]    [X]    [X]  | */
                     space-evenly;              /* |   [X]   [X]   [X]   | */

    /* alignment along cross axis; align-self on child overrides */
    align-items: flex-start;
                 flex-end;
                 center;
                 baseline;
                 stretch;                       /* default */

    /* multiple rows: alignment and distribution of space along cross axis */
    align-content: flex-start;                  /* |[X][X][X]            | */
                   flex-end;                    /* |            [X][X][X]| */
                   center;                      /* |      [X][X][X]      | */
                   space-between;               /* |[X]      [X]      [X]| */
                   space-around;                /* |  [X]    [X]    [X]  | */
                   stretch;             /* default |[XXXXX][XXXXX][XXXXX]| */
}
```

## Properties for the Flex Items (children)

```
.container > * {

    order: <integer>;                           /* default: 0 */

    /* proportion of available space to occupy */
    flex-grow: <non-negative-number>;           /* default: 0 */

    /* when size of all items is larger than flex container */
    flex-shrink: <non-negative-number>;         /* default: 1 */

    /* default size of an element before remaining space is distributed */
    flex-basis: <length>;
                auto;                           /* default */

    /* shorthand */
    flex: none;                                 /* => 0 0 auto */
          <basis>;
          <grow> <shrink>? <basis>?;
          0 1 auto;                             /* default */

    /* override parent's align-items property */
    align-self: <align-items>;                  /* default based on parent */
}
```
