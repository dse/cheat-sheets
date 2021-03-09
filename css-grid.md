# CSS Grid

-   [Details](https://css-tricks.com/snippets/css/complete-guide-grid/)
-   [MDN: Basic Concepts of grid layout]<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout>
-   [MDN: Relationship of grid layout to other layout methods]<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout>

```
.container {
    display: grid;                              /* block level */
             inline-grid;                       /* inline level */

    /* Specify each row and column track's size: (length, %, or <number>fr) */
    grid-template-rows:    <track-size> <track-size> ...;
    grid-template-columns: <track-size> <track-size> ...;
        
    grid-auto-columns: <track-size> ...;    /* IMPLICIT GRID TRACKS (auto- */
    grid-auto-rows:    <track-size> ...;    /*   gen'd after explicit ones) */
    
    /* Name the grid lines between the tracks, specifying them in brackets: */
    grid-template-rows:    [<name>] <track> [<name>] <track> ... [<name>];
    grid-template-columns: [<name>] <track> [<name>] <track> ... [<name>];
        /* each grid line can have more than one name in brackets:
         *     [<name1> <name2> ...]
         * grid lines are also named numerically:
         *     [1] to [n+1]                         (with n tracks)
         *     [-(n+1)] to [-1] */
     
    /* REPETITION:
     *     repeat(3, 1fr)        => 1fr 1fr 1fr
     *     repeat(3, 1fr [fart]) => 1fr [fart] 1fr [fart] 1fr [fart]
     * repeated named grid lines are referred to by:
     *     fart 1, fart 2, fart 3 */

    /* Assign names to rectangular grid areas: */
    grid-template-areas: "header header header header"
                         "main   main   .      sidebar"
                         "footer footer footer footer";
    grid-template-areas: none; /* undo above */
    
    column-gap: <length>;       /* specify size of gaps between columns */
    row-gap:    <length>;       /* or between rows */
    gap: <row-gap> <column-gap>;                                /* SHORTHAND */
         <row-and-column-gap>;                                  /* SHORTHAND */
    
    /* Alignment of each item in its grid cell, along the inline (row) axis: */
    justify-items: start;
                   end;
                   center;
                   stretch;     /* DEFAULT */
    /* and along the block (column) axis: */
    align-items: start;
                 end;
                 center;
                 stretch;       /* DEFAULT */

    place-items: <align-items> / <justify-items>;               /* SHORTHAND */
                 <align-and-justify-items>;                     /* SHORTHAND */
                 
    /* When the total size of the grid is less than the container (e.g., px) */
    /* Alignment of grid within its container, along the inline (row) axis: */
    justify-content: start;
                     end;
                     center;
                     stretch;
                     space-around;
                     space-between;
                     space-evenly;
    /* and along the block (row) axis: */
    align-content: start;
                   end;
                   center;
                   stretch;
                   space-around;
                   space-between;
                   space-evenly;

    place-content: <align-content> / <justify-content>;         /* SHORTHAND */
                   <align-and-justify-content>;                 /* SHORTHAND */
                   
    /* AUTO-PLACEMENT ALGORITHM, for when items' places are not specified: */
    grid-auto-flow: row;          /* fill in each row in turn */
                    column;       /* fill in each column in turn */
                    row dense;    /* dense - fill holes earlier in the grid */
                    column dense; /*         if smaller items come up later */
}

.container > .item {
    /* display: inline-block and table-cell have no effect */
    /* float:, vertical-align:, and column-*: have no effect */

    /* To specify where each item starts and ends on each axis: */
    grid-row-start:    <line-number>;
                       <line-name>;
                       <line-name> <index>; /* for when <name> is repeated */
                       span <line-number>;  /* spans to numbered line */
                       span <line-name>;    /* spans to next named line */
                       auto;
    grid-row-end:      <same as above>;
    grid-column-start: <same as above>;
    grid-column-end:   <same as above>;
        /* NOTE: either start or end can specify `span`, but not both. */
    
    grid-column: <grid-column-start> / <grid-column-end>;       /* SHORTHAND */
    grid-row:    <grid-row-start> / <grid-row-end>;             /* SHORTHAND */
    grid-area:   <row-start> / <column-start> / <row-end> / <column-end>;

    /* Use grid area names: */
    grid-area: <grid-area-name>;

    /* Specify `align-content` and `justify-content` for individual items: */
    align-self:   <align-content>;
    justify-self: <justify-content>;

    place-self:   <align-self> / <justify-self>;                /* SHORTHAND */
                  <align-and-justify-self>;                     /* SHORTHAND */
}
```
