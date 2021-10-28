# CSS Cheat Sheet

## Properties

### Layout

    align-tracks: start | end | center | baseline | first-baseline | last-baseline |
                  space-between | space-around | space-evenly |
                  stretch | normal;

    block-size:  <length> | <percentage> | max-content | min-content | fit-content(<length> | <percentage>) | auto;
    inline-size: <length> | <percentage> | max-content | min-content | fit-content(<length> | <percentage>) | auto;
    max-block-size:  <length> | <percentage> | max-content | min-content | fit-content(<length> | <percentage>) | auto;
    max-inline-size: <length> | <percentage> | max-content | min-content | fit-content(<length> | <percentage>) | auto;
    min-block-size:  <length> | <percentage> | max-content | min-content | fit-content(<length> | <percentage>);
    min-inline-size: <length> | <percentage> | max-content | min-content | fit-content(<length> | <percentage>);

    bottom: <length> | <percentage> | auto;
    left:   <length> | <percentage> | auto;
    right:  <length> | <percentage> | auto;
    top:    <length> | <percentage> | auto;

    box-sizing: border-box | content-box;

    clear: none | left | right | both | inline-start | inline-end;
    float: none | left | right | inline-start | inline-end;
           
    clip: auto | rect(<top>, <right>, <bottom>, <left>); /* each being a <length> or auto */

    display: block | inline | inline-block | flex | inline-flex | grid | inline-grid |
             flow-root |
             block flow | inline flow | block flex | inline flex |
             block grid | inline grid | block flow-root | inline flow-root |
             table | inline-table | 
             list-item | list-item <display-outside> | list-item flow | list-item flow-root |
             table-{row,header,footer}-group |
             table-row | table-cell | table-column-group | table-column |
             table-caption |
             contents | none;
    visibility: visible | hidden | collapse;

    height:     <length> | <percentage> | max-content | min-content | fit-content(<length> | <percentage>) | auto;
    width:      <length> | <percentage> | max-content | min-content | fit-content(<length> | <percentage>) | auto;
    max-height: <length> | <percentage> | max-content | min-content | fit-content(<length> | <percentage>) | none;
    max-width:  <length> | <percentage> | max-content | min-content | fit-content(<length> | <percentage>) | none;
    min-height: <length> | <percentage> | max-content | min-content | fit-content(<length> | <percentage>);
    min-width:  <length> | <percentage> | max-content | min-content | fit-content(<length> | <percentage>);

    margin:         <all sides> | <v> <h> | <t> <h> <b> | <t> <r> <b> <l>;
    margin-bottom:  <length> | <percentage> | auto;
    margin-top:     ";
    margin-left:    ";
    margin-right:   ";

    padding:        <all sides> | <v> <h> | <t> <h> <b> | <t> <r> <b> <l>;
    padding-bottom: <length> | <percentage>;
    padding-top:    ";
    padding-left:   ";
    padding-right:  ";

    order: <integer>;
    overflow: <overflow x and y> | <overflow-x> | <overflow-y>;
    overflow-x: visible | hidden | clip | scroll | auto;
    overflow-y: visible | hidden | clip | scroll | auto;
    position: static | relative | absolute | fixed | sticky;
    resize: none | both | horizontal | vertical;
    z-index: <integer> | auto;

### Text

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
    font-variant: ...;
    font-weight: normal | bold | lighter | bolder | 100 200 ... 900 | <number between 1 and 1000 inclusive>; /* 400 = normal; 700 = bold */
    line-height: normal | <unitless number (preferred)> | <length> | <percentage>;

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
    text-decoration-skip-ink: none | auto | all;
    text-underline-offset: auto | <length> | <percentage>;
    text-underline-position: auto | from-font | under | left | right | under left | under right;

    text-indent: <length> | <percentage of containing block width>;
    text-overflow: clip | ellipsis | <two values for start and end>; /* default is clip */
    text-shadow: <offset x> <offset y> <blur radius> <color>;        /* color and blur radius are optional */
                 <color> <offset x> <offset y> <blur radius>;
    text-size-adjust: none | auto | <percentage>;
    text-transform: none | capitalize | uppercase | lowercase | full-width | full-size-kana;
    vertical-align: baseline | sub | super | text-top | text-bottom | top | middle | bottom | <length> | <percentage>;
    white-space: normal | nowrap | pre | pre-wrap | pre-line | break-spaces;
    word-break: normal | break-all | keep-all; /* break-word is deprecated */
    
    font-feature-settings
    font-kerning
    font-optical-sizing
    font-variation-settings

    text-orientation: mixed | upright | sideways-right | sideways | use-glyph-orientation;
    text-rendering: auto | optimizeSpeed | optimizeLegibility | geometricPrecision;
    writing-mode: horizontal-tb | vertical-rl | vertical-lr;

### Appearance

    color: <color keyword> | <named color> | <hex color> | rgb() | hsl();

    background: ...;
    background-attachment: scroll | fixed | local;
    background-clip: border-box | padding-box | content-box | text;
    background-color: <named color> | <hex color> | rgb() | hsl() | currentcolor | transparent;
    background-image: <color> | url() | <multiple comma separated> | ...;
    background-origin: border-box | padding-box | content-box;

    background-position: ...;
    background-position-x: left | right | center | <length> | <percentage> | <side> <value> | <value>, ...;
    background-position-y: top | bottom | center | <length> | <percentage> | <side> <value> | <value>, ...;
    background-repeat: repeat-x | repeat-y | repeat | space | round | no-repeat | <h> <v>;
    background-size: cover | contain | <width> | <width> <height> | <value>, ...;
    
    border: ...;
    border-width: thin | medium | thick | <length> | <v> <h> | <t> <h> <b> | <t> <r> <b> <l>;
    border-style: none | hidden | dotted | dashed | solid |
                  double | groove | ridge | inset | outset | <v> <h> | <t> <h> <b> | <t> <r> <b> <l>;
    border-color: <color> | <v> <h> | <t> <h> <b> | <t> <r> <b> <l>;
    border-{bottom,top,left,right}-{color,style,width}: ...;

    border-radius: <length> | <percentage> | <tl-br> <tr-bl> | <tl> <tr-bl> <br> | <tl> <tr> <br> <bl> |
                   <horizontal border-radius> / <vertical border-radius>;
    border-bottom-left-radius:  <length> | <percentage> | <h> <v>;
    border-bottom-right-radius: "
    border-top-left-radius:     "
    border-top-right-radius:    "

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

    box-shadow: none | <offset x> <offset y> <color>? |
                       <offset x> <offset y> <blur radius> <color>? |
                       <offset x> <offset y> <blur radius> <spread radius> <color>? |
                       inset <box-shadow>;

    cursor: ...;

### Animation

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

### Grid

    /* container */
    display: grid | inline-grid | block grid | inline grid;
    grid-template-rows
    grid-template-columns
    grid-auto-rows
    grid-auto-columns
    grid-template-areas
    gap: <row- and column-gap> | <row-gap> <column-gap>;
    row-gap: normal | <length> | <percentage>;
    column-gap: normal | <length> | <percentage>;

    place-items: <align-items> / <justify-items> | <align-and-justify-items>;
    align-items: /* see flex */
    justify-items: /* any justify-self value */

    place-content: <align> <justify> | <align and justify>;
    align-content:
    justify-content:
    grid-auto-flow: row | column | row dense | column dense;

    /* items */
    grid-row-start
    grid-row-end
    grid-column-start
    grid-column-end
    grid-column
    grid-row
    grid-area
    align-self: ...;
    justify-self: auto | normal | stretch | center | start | end |
                  flex-start | flex-end | self-start | self-end | left | right |
                  baseline | first baseline | last baseline |
                  safe center | unsafe center |
                  legacy right | legacy left | legacy center;
    order: <integer>;

### Flex

    /* container */
    display:         flex | inline-flex | block flex | inline flex;
    flex-flow:       <flex-direction> <flex-wrap>;
    flex-direction:  row | row-reverse | column | column-reverse;
    flex-wrap:       nowrap | wrap | wrap-reverse;
    justify-content: normal | stretch | center | start | end | flex-start | flex-end | left | right |
                                        space-between | space-around | space-evenly |
                                        safe center | unsafe center;
    align-items:     normal | stretch | center | start | end | flex-start | flex-end |
                                        baseline | first-baseline | last-baseline |
                                        safe center | unsafe center;
    align-content:   normal | stretch | center | start | end | flex-start | flex-end |
                                        baseline | first baseline | last baseline |
                                        space-between | space-around | space-evenly |
                                        safe center | unsafe center;

    /* items */
    order:       <integer>;
    flex:        <-grow>;                      /* shrink = 1; basis = 0 */
    flex:        <-grow> <-shrink>;            /* basis = 0 */
    flex:        <-grow> <-shrink> <-basis>;
    flex-basis:  <length> | <percentage> | auto | fill | 
                 max-content | min-content | fit-content | content;
    flex-grow:   <number>;
    flex-shrink: <number>;
    align-self:  normal | stretch | auto | center | start | end |
                                           self-start | self-end | flex-start | flex-end |
                                           baseline | first-baseline | last-baseline;

### Table

    border-collapse: collapse | separate;
    caption-side:    top | bottom | block-{start,end} | inline-{start,end};
    empty-cells:     show | hide;
    table-layout:    auto | fixed;

### Generated Content

    content:           normal | none | <image> | <image> / <alt text string> | <string> | <counter> | attr() | open-quote | close-quote | no-open-quote | no-close-quote |
                       open-quote counter();
    counter-increment: <custom-indent> <integer>? |
                       <custom-indent> <integer>? <custom-indent> <integer>? ...;
    counter-reset:     none | <custom-indent> <integer>? |
                              <custom-indent> <integer>? <custom-indent> <integer>? ...;
    counter-set:       none | <custom-indent> <integer>? |
                              <custom-indent> <integer>? <custom-indent> <integer>? ...;

    quotes: none | auto | <string open> <string close> | 
                          <string open1> <string close1> <string open2> <string close2> ...;

### Lists

    list-style:          <-type> || <-image> || <-position>;
    list-style-image:    <image>;
    list-style-position: inside | outside;
    list-style-type:     disc | circle | square | decimal | gregorian | trad-chinese-informal | kannada | <string> | custom-counter-style | none;

### Paragraphs

    hyphens: none | manual | auto;
    widows: <integer>;
    orphans: <integer>;

### Printing

    break-after
    break-before
    break-inside

### Other

    all: initial | inherit | revert | unset;

    alignment-baseline

    appearance: none | auto | menulist-button | textfield |
                button | searchfield | textarea | push-button | slider-horizontal | checkbox | radio | square-button | menulist | listbox | meter | progress-bar;

    aspect-ratio: <width positive number> / <height positive number>;

    backdrop-filter
    backface-visibility
    background-blend-mode
    baseline-shift
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
    column-rule-color
    column-rule-style
    column-rule-width
    column-span
    column-width
    contain
    contain-intrinsic-size
    content-visibility
    dominant-baseline

    /* SVG */
    fill
    fill-opacity
    fill-rule

    filter
    flood-color
    flood-opacity
    forced-color-adjust: auto | none;
    image-orientation
    image-rendering

    inset-block-end
    inset-block-start
    inset-inline-end
    inset-inline-start

    isolation
    lighting-color
    line-break /* CJK */

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

    opacity: <number [0, 1]> | <percentage [0%, 100%]>;

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

    paint-order /* SVG */
    perspective
    perspective-origin
    pointer-events: auto | none;
    ruby-position
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

    /* SVG */
    stroke
    stroke-dasharray
    stroke-dashoffset
    stroke-linecap
    stroke-linejoin
    stroke-miterlimit
    stroke-opacity
    stroke-width
    text-anchor /* SVG */

    text-combine-upright /* CJK */

    touch-action

    transform
    transform-box
    transform-origin
    transform-style

    unicode-bidi
    user-select
    vector-effect
    will-change

### Value Definition Syntax

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
