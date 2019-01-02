# CSS Flexbox

Details: <https://css-tricks.com/snippets/css/a-guide-to-flexbox/>

## Properties for the Flex Container (parent)

````
.container {
    display: flex;
             inline-flex;
    flex-direction: row;                /* default */
                    row-reverse;
                    column;
                    column-reverse;
    flex-wrap: nowrap;                  /* default */
               wrap;                    /* top to bottom */
               wrap-reverse;            /* bottom to top */
    flex-flow: <flex-direction> <flex-wrap>; /* SHORTHAND */
    justify-content: flex-start;        /* default */
                     flex-end;
                     center;
                     space-between;
                     space-around;
                     space-evenly;
    align-items: flex-start;
                 flex-end;
                 center;
                 baseline;
                 stretch;
    align-content: flex-start;          /* default */
                   flex-end;
                   center;
                   stretch;
                   space-between;
                   space-around;
}
````

## Properties for the Flex Items (children)

````
.item {
    order: <integer>;                   /* default is 0 */
    flex-grow: <non-negative-number>;   /* default is 0 */
    flex-shrink: <non-negative-number>; /* default is 1 */
    flex-basis: <length>;
                auto;                   /* default */
    flex: none;                         /* SHORTHAND: none => 0 0 auto */
          <grow>;                       /* 1 value: unitless number */
          <basis>;                      /* 1 value: length */
          <grow> <basis>;               /* 2 values: unitless number, length */
          <grow> <shrink>;              /* 2 values: two unitless numbers */
          <grow> <shrink> <basis>;      /* 3 values */
    align-self: <align-items>;          /* default based on parent */
}
````
