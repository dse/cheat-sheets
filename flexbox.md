# CSS Flexbox

Details: <https://css-tricks.com/snippets/css/a-guide-to-flexbox/>

## Properties for the Flex Container (parent)

````
.container {

    display: flex;
             inline-flex;

    /* main axis */
    flex-direction: row;                /* default */
                    row-reverse;
                    column;
                    column-reverse;

    flex-wrap: nowrap;                  /* default */
               wrap;                    /* top to bottom */
               wrap-reverse;            /* bottom to top */

    /* shorthand */
    flex-flow: <flex-direction> <flex-wrap>; /* default: row nowrap */

    /* alignment and distribution of space along main axis */
    justify-content: flex-start;        /* default */
                     flex-end;
                     center;
                     space-between;
                     space-around;
                     space-evenly;

    /* alignment along cross axis */
    align-items: flex-start;
                 flex-end;
                 center;
                 baseline;
                 stretch;

    /* alignment and distribution of space along cross axis,
       for multiple rows */
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

    order: <integer>;                   /* default: 0 */

    /* proportion of available space to occupy */
    flex-grow: <non-negative-number>;   /* default: 0 */

    flex-shrink: <non-negative-number>; /* default: 1 */

    /* default size of an element before remaining space is distributed */
    flex-basis: <length>;
                auto;                   /* default */

    /* shorthand */
    flex: none;                         /* => 0 0 auto */
          <basis>;
          <grow> <shrink>? <basis>?;
          1 1 auto;                     /* default */

    /* override parent's align-items property */
    align-self: <align-items>;          /* default based on parent */

}
````
