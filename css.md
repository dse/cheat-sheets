# CSS Cheat Sheet

## Layout

    align-content: center | start | end | flex-start | flex-end |
                   baseline | first baseline | last baseline |
                   space-between | space-around | space-evenly | stretch |
                   safe center | unsafe center |
                   normal;
    align-items: stretch |
                 center | start | end | flex-start | flex-end |
                 baseline | first-baseline | last-baseline |
                 safe center | unsafe center |
                 normal;
    align-self: center | start | end | self-start | self-end | flex-start | flex-end |
                baseline | first-baseline | last-baseline |
                stretch |
                auto | normal;
    align-tracks: start | end | center | baseline | first-baseline | last-baseline |
                  space-between | space-around | space-evenly |
                  stretch |
                  normal;

    block-size:  <length> | <percentage> | max-content | min-content | fit-content(<length> | <percentage>) | auto;
    inline-size: <length> | <percentage> | max-content | min-content | fit-content(<length> | <percentage>) | auto;
    max-block-size: 
    min-block-size:
    max-inline-size: 
    min-inline-size:

    bottom: <length> | <percentage> | auto;
    left:   <length> | <percentage> | auto;
    right:  <length> | <percentage> | auto;
    top:    <length> | <percentage> | auto;

    box-sizing: border-box | content-box;

    clear: none | left | right | both | inline-start | inline-end;
    float: none | left | right | inline-start | inline-end;
           
    clip: auto | rect(<top>, <right>, <bottom>, <left>);
        /* each being a <length> or auto */

    display: block | inline | inline-block |
             flex | inline-flex |
             grid | inline-grid |
             flow-root |
             block flow | inline flow |
             block flex | inline flex |
             block grid | inline grid |
             block flow-root | inline flow-root |
             table | inline-table | 
             list-item | list-item <display-outside> | list-item flow | list-item flow-root |
             table-{row,header,footer}-group |
             table-row | table-cell | table-column-group | table-column |
             table-caption |
             contents | none;
    visibility: visible | hidden | collapse;

    flex-basis
        -direction
        -grow
        -shrink
        -wrap

    height: <length> | <percentage> | max-content | min-content | fit-content(<length> | <percentage>) | auto;
    width:  <length> | <percentage> | max-content | min-content | fit-content(<length> | <percentage>) | auto;
    max-height:
    max-width:
    min-height:
    min-width:
    
    justify-content: center | start | end | flex-start | flex-end | left | right |
                     space-between | space-around | space-evenly | stretch |
                     safe center | unsafe center |
                     normal;

    margin: <all four sides>;
    margin: <vertical margin> <horizontal margin>;
    margin: <top> <horizontal> <bottom>;
    margin: <top> <right> <bottom> <left>;
    margin-bottom: <length> | <percentage> | auto;
    margin-top:    <length> | <percentage> | auto;
    margin-left:   <length> | <percentage> | auto;
    margin-right:  <length> | <percentage> | auto;

    order: <integer>;

    overflow: <overflow x and y> | <overflow-x> | <overflow-y>;
    overflow-x: visible | hidden | clip | scroll | auto;
    overflow-y: visible | hidden | clip | scroll | auto;

    padding: <all four sides>;
    padding: <vertical padding> <horizontal padding>;
    padding: <top> <horizontal> <bottom>;
    padding: <top> <right> <bottom> <left>;
    padding-bottom: <length> | <percentage>;
    padding-top:    <length> | <percentage>;
    padding-left:   <length> | <percentage>;
    padding-right:  <length> | <percentage>;
    
    position: static | relative | absolute | fixed | sticky;
    resize: none | both | horizontal | vertical;
    z-index: <integer> | auto;

## Text

    direction: ltr | rtl;
    
    font: <font-style> <font-variant> <font-stretch> <font-size> / <line-height> <font-family> |
          caption | icon | menu | message-box | small-caption | status-bar;
    font-family: <font-family>, <font-family>, ... |
                 "<font name>" | 
                 serif | sans-serif | monospace | cursive | fantasy |
                 system-ui | ui-serif | ui-sans-serif | ui-monospace | ui-rounded |
                 emoji | math | fangsong;
    font-size: xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large |
               smaller | larger | <length> | <percentage>;
    font-stretch: ultra-condensed | extra-condensed | condensed | semi-condensed | normal |
                  semi-expanded | expanded | extra-expanded | ultra-expanded | <percentage>;
    font-style: normal | italic | oblique | oblique <angle>;
    font-variant: /* see below */;
    font-weight: normal | bold | lighter | bolder | 100 200 ... 900 | <number between 1 and 1000 inclusive>; /* 400 = normal; 700 = bold */
                 https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#fallback_weights
    line-height: normal | <unitless number (float)> | <length> | <percentage>;
                 /* unitless numbers are preferred */

    letter-spacing: normal | <length>;
    word-spacing: normal | <length> | <percentage>;

    tab-size: <integer number of U+0020 spaces> | <length>;

    text-align: start | end | left | right | center | justify | justify-all | match-parent | "." | "." center;
    text-align-last: auto | start | end | left | right | center | justify;

    text-decoration: <-line> <-color> <-style> <-thickness>;                       /* all optional */
    text-decoration-line: none | underline || overline || line-through || blink;   /* multiple */
    text-decoration-color: <color>;
    text-decoration-style: solid | double | dotted | dashed | wavy;
    text-decoration-thickness: auto | from-font | <length> | <percentage>;

    text-indent: <length> | <percentage of containing block width>;
    text-overflow: clip | ellipsis | <two values for start and end>; /* default is clip */
    text-shadow: <offset x> <offset y> <blur radius> <color>;        /* color and blur radius are optional */
                 <color> <offset x> <offset y> <blur radius>;
    text-size-adjust: none | auto | <percentage>;
    text-transform: none | capitalize | uppercase | lowercase | full-width | full-size-kana;
    vertical-align: baseline | sub | super | text-top | text-bottom | top | middle | bottom | <length> | <percentage>;
    white-space: normal | nowrap | pre | pre-wrap | pre-line | break-spaces;
    word-break: normal | break-all | keep-all; /* break-word is deprecated */
    
## Appearance

    color: <color keyword> | <named color> | <hex color> | rgb() | hsl();

    background:
    background-attachment: scroll | fixed | local;
    background-clip: border-box | padding-box | content-box | text;
    background-color: <named color> | <hex color> | rgb() | hsl() | currentcolor | transparent;
    background-image: <color> | url() | <multiple comma separated>;
        /* there's more options */
    background-origin: border-box | padding-box | content-box;
    background-position:   <shorthand>;
    background-position-x: left | right | center | <length> | <percentage> | <side> <value> | <value>, ...;
    background-position-y: top | bottom | center | <length> | <percentage> | <side> <value> | <value>, ...;
    background-repeat: repeat-x | repeat-y | repeat | space | round | no-repeat | <h> <v>;
    background-size: cover | contain | <width> | <width> <height> | <value>, ...;
    
    border: <-width> <-style> <-color>;
    border-width: thin | medium | thick | <length> |
                  <v> <h> | <t> <h> <b> | <t> <r> <b> <l>;
    border-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset |
                  <v> <h> | <t> <h> <b> | <t> <r> <b> <l>;
    border-color: <color> |
                  <v> <h> | <t> <h> <b> | <t> <r> <b> <l>;

    border-{bottom,top,left,right}-{color,style,width};

    FIXME
    border-radius: <all> | <v> <h> | <t> <h> <b> | <t> <r> <b> <l>;
    border-<side>-radius: ...;

    outline: <color> || <style> || <width>;
    outline-color: <color> | invert;
    outline-style: auto | none | dotted | dashed | solid | double | groove | ridge | inset | outset;
    outline-width: thin | medium | thick | <length>;

    border-image: <-source> || <-slice> [ / <-width> | / <-width>? / <-outset> ]? || <-repeat>
    border-image-outset: <length> | <number> | <v> <h> | <t> <h> <b> | <t> <r> <b> <l>;
    border-image-repeat: stretch | repeat | round | space | <v> <h>;
    border-image-slice: <number or percentage>{1,4} && fill?
    border-image-source: none | url() | <gradient>;
    border-image-width: auto | <length> | <percentage> | <number> | <v> <h> | <t> <h> <b> | <t> <r> <b> <l>;

    box-shadow: none |
                <offset x> <offset y> <color>? |
                <offset x> <offset y> <blur radius> <color>? |
                <offset x> <offset y> <blur radius> <spread radius> <color>? |
                inset <box-shadow>;

    cursor: [ [ <url> [ <x> <y> ]? , ]* [ auto | default | none |
                                          context-menu | help | pointer | progress | wait | cell | crosshair |
                                          text | vertical-text | alias | copy | move | no-drop | not-allowed |
                                          e-resize | n-resize | w-resize | s-resize |
                                          ne-resize | nw-resize | se-resize | sw-resize |
                                          ew-resize | ns-resize |
                                          nesw-resize | nwse-resize |
                                          col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ];

## Animation

    animation-delay
    animation-direction
    animation-duration
    animation-fill-mode
    animation-iteration-count
    animation-name
    animation-play-state
    animation-timing-function
    transition-delay
    transition-duration
    transition-property
    transition-timing-function

## Grid

    grid-auto-columns
    grid-auto-flow
    grid-auto-rows
    grid-column-end
    grid-column-start
    grid-row-end
    grid-row-start
    grid-template-areas
    grid-template-columns
    grid-template-rows
    justify-items
    justify-self
    order

## Flex

    justify-items
    justify-self
    order

## Table

    border-collapse
    caption-side
    empty-cells
    table-layout

## Generated Content

    content
    counter-increment
    counter-reset
    quotes

## Other

    all: initial | inherit | revert | unset;

    font-feature-settings
    font-kerning
    font-optical-sizing
    font-variation-settings

    forced-color-adjust

    text-orientation
    text-rendering

    writing-mode
    zoom
    alignment-baseline
    appearance
    aspect-ratio
    backdrop-filter
    backface-visibility
    background-blend-mode
    baseline-shift
    border-block-end-color
    border-block-end-style
    border-block-end-width
    border-block-start-color
    border-block-start-style
    border-block-start-width
    border-bottom-left-radius
    border-bottom-right-radius
    border-end-end-radius
    border-end-start-radius
    border-inline-end-color
    border-inline-end-style
    border-inline-end-width
    border-inline-start-color
    border-inline-start-style
    border-inline-start-width
    border-start-end-radius
    border-start-start-radius
    border-top-left-radius
    border-top-right-radius
    break-after
    break-before
    break-inside
    buffered-rendering
    caret-color
    clip-path
    clip-rule
    color-interpolation
    color-interpolation-filters
    color-rendering
    color-scheme
    column-count
    column-fill
    column-gap
    column-rule-color
    column-rule-style
    column-rule-width
    column-span
    column-width
    contain
    contain-intrinsic-size
    content-visibility
    counter-set
    cx
    cy
    d
    dominant-baseline
    fill
    fill-opacity
    fill-rule
    filter
    flood-color
    flood-opacity
    hyphens
    image-orientation
    image-rendering
    inset-block-end
    inset-block-start
    inset-inline-end
    inset-inline-start
    isolation
    lighting-color
    line-break
    list-style-image
    list-style-position
    list-style-type
    margin-block-end
    margin-block-start
    margin-inline-end
    margin-inline-start
    marker-end
    marker-mid
    marker-start
    mask
    mask-type
    mix-blend-mode
    object-fit
    object-position
    offset-distance
    offset-path
    offset-rotate
    opacity
    orphans
    overflow-anchor
    overflow-clip-margin
    overflow-wrap
    overscroll-behavior-block
    overscroll-behavior-inline
    overscroll-behavior-x
    overscroll-behavior-y
    padding-block-end
    padding-block-start
    padding-inline-end
    padding-inline-start
    page
    page-orientation
    paint-order
    perspective
    perspective-origin
    pointer-events
    r
    row-gap
    ruby-position
    rx
    ry
    scroll-behavior
    scroll-margin-block-end
    scroll-margin-block-start
    scroll-margin-bottom
    scroll-margin-inline-end
    scroll-margin-inline-start
    scroll-margin-left
    scroll-margin-right
    scroll-margin-top
    scroll-padding-block-end
    scroll-padding-block-start
    scroll-padding-bottom
    scroll-padding-inline-end
    scroll-padding-inline-start
    scroll-padding-left
    scroll-padding-right
    scroll-padding-top
    scroll-snap-align
    scroll-snap-stop
    scroll-snap-type
    shape-image-threshold
    shape-margin
    shape-outside
    shape-rendering
    size
    speak
    stop-color
    stop-opacity
    stroke
    stroke-dasharray
    stroke-dashoffset
    stroke-linecap
    stroke-linejoin
    stroke-miterlimit
    stroke-opacity
    stroke-width
    text-anchor
    text-combine-upright
    text-decoration-skip-ink
    text-underline-offset
    text-underline-position
    touch-action
    transform
    transform-box
    transform-origin
    transform-style
    unicode-bidi
    user-select
    vector-effect
    widows
    will-change
    x
    y




## font-variant

    normal | none | [ <common-lig-values> ||
                      <discretionary-lig-values> ||
                      <historical-lig-values> ||
                      <contextual-alt-values> ||
                      stylistic( <feature-value-name> ) ||
                      historical-forms ||
                      styleset( <feature-value-name># ) ||
                      character-variant( <feature-value-name># ) ||
                      swash( <feature-value-name> ) ||
                      ornaments( <feature-value-name> ) ||
                      annotation( <feature-value-name> ) ||
                      [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] ||
                      <numeric-figure-values> ||
                      <numeric-spacing-values> ||
                      <numeric-fraction-values> ||
                      ordinal ||
                      slashed-zero ||
                      <east-asian-variant-values> ||
                      <east-asian-width-values> ||
                      ruby ]

    <common-lig-values> = [ common-ligatures | no-common-ligatures ]
    <discretionary-lig-values> = [ discretionary-ligatures | no-discretionary-ligatures ]
    <historical-lig-values> = [ historical-ligatures | no-historical-ligatures ]
    <contextual-alt-values> = [ contextual | no-contextual ]
    <feature-value-name> = <custom-ident>
    <numeric-figure-values> = [ lining-nums | oldstyle-nums ]
    <numeric-spacing-values> = [ proportional-nums | tabular-nums ]
    <numeric-fraction-values> = [ diagonal-fractions | stacked-fractions ]
    <east-asian-variant-values> = [ jis78 | jis83 | jis90 | jis04 | simplified | traditional ]
    <east-asian-width-values> = [ full-width | proportional-width ]

    font-variant-alternates:
        normal | [ stylistic( <feature-value-name> ) ||
                   historical-forms ||
                   styleset( <feature-value-name># ) ||
                   character-variant( <feature-value-name># ) ||
                   swash( <feature-value-name> ) ||
                   ornaments( <feature-value-name> ) ||
                   annotation( <feature-value-name> ) ]
    font-variant-caps: 
        normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]
    font-variant-east-asian:
        normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]
    font-variant-ligatures:
        normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]
    font-variant-numeric:
        normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]

## Value Definition Syntax

https://developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax

    |       exactly one present
    ||      one or more present, in any order
    &&      mandatory, in any order
    [ ]     single component
    *       zero or more
    +       one or more
    ?       zero or one
    {1,3}   between 1 and 3, inclusive
    #       one or more, comma-separated
    [ ]!    must produce at least one value, e.g., [ bold? smaller? ]!
