# CSS Transitions

A transition is invoked after a property change or JavaScript change.

    /* full shorthand */
    transition: <property> <duration> <timing-function> <delay>;

    /* other shorthands */
    transition: <property> <duration>;
    transition: <property> <duration> <timing-function>;
    transition: <property> <duration> <delay>;

    /* multiple transitions */
    transition: <single-transition>, <single-transition>, ...;

    /* defaults */
    transition-property:        all;
    transition-duration:        0s;
    transition-timing-function: ease;
    transition-delay:           0s;

    transition-property: all;                   /* default */
                         none;
                         <property>;

    transition-duration: <time>;                /* default is 0s */

    transition-timing-function: ease;           /* default */
                                ease-in;
                                ease-out;
                                ease-in-out;
                                linear;
                                step-start;
                                step-end;
                                cubic-bezier(<x1>, <y1>, <x2>, <y2>);
                                steps(<n>, <direction>);
                                    steps(<n>, jump-start);     steps(<n>, start);
                                    steps(<n>, jump-end);       steps(<n>, end);
                                    steps(<n>, jump-none);
                                    steps(<n>, jump-both);

    transition-delay: <time>;                   /* default is 0s */

# CSS Animations

    @keyframes <name> {
        <percentage> {
            <property>: <value>;
            /* ... */
        }
        /* ... */
    }

    <percentage> can also be:
        from    =>  0%
        to      =>  100%

    /* full shorthand */
    animation: <duration> <timing-function> <delay> <iteration-count>
               <direction> <fill-mode> <play-state> <name>;

    /* some other shorthands */
    animation: <duration> <timing-function> <delay> <name>;
    animation: <duration> <name>;

    /* multiple transitions */
    animation: <single-animation>, <single-animation>, ...;

    /* defaults */
    animation-name:            none;
    animation-duration:        0s;
    animation-timing-function: ease;
    animation-delay:           0s;
    animation-iteration-count: 1;
    animation-direction:       normal;
    animation-fill-mode:       none;
    animation-play-state:      running;

    animation-name: none;                       /* default */
                    <name>;

    animation-duration: <time>;                 /* default is 0s */

    animation-timing-function: linear;
                               ease;            /* default */
                               ease-in;
                               ease-out;
                               ease-in-out;
                               cubic-bezier(<x1>, <x2>, <y1>, <y2>);
                               step-start;
                               step-end;
                               steps(<n>, <direction>);
                                   steps(<n>, jump-start);      steps(<n>, start);
                                   steps(<n>, jump-end);        steps(<n>, end);
                                   steps(<n>, jump-none);
                                   steps(<n>, jump-both);

    animation-delay: <time>;                    /* default is 0s */

    animation-iteration-count: <n>;             /* default is 1 */
                               infinite;

    animation-direction: normal;                /* default */
                         reverse;
                         alternate;
                         alternate-reverse;

    animation-fill-mode: none;                  /* default */
                         forwards;
                         backwards;
                         both;

    animation-play-state: running;              /* default */
                          paused;
