# export and import

https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

https://github.com/mdn/js-examples/tree/master/modules

# exports

A module can have two types of exports:

-   named ones
-   a single default one

# what you can export

You can only export global items:

-   functions
-   variables declared using `let`, `const`, or `var`
-   classes

```
export const name = 'square';
export function draw(ctx, length, x, y, color) {
    /* ... */
    return { /* ... */ };
}
```

You can export everything in one statement at the end of your module:

```
export { name, draw, reportArea, reportPerimeter };
```

# imports

```
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
```

Native JavaScript modules require the `./` prefix, so use it.

Items are **live bindings**, meaning if they change in value, your
module sees the changes.

However you cannot change the value imported, but you can modify
properties similar to `const`.

# defaults

You can have a default function provided by a module.

[See this](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
regarding CommonJS and AMD module systems.

```
function randomSquare(ctx) {
    /* ... */
}

export default randomSquare;
```

```
export default function (ctx) {
    /* ... */
}
```

You import it as follows:

```
import randomSquare from './modules/square.js';

/* shorthand for: */
import { default as randomSquare } from './modules/square.js';
```

# renaming exports

```
function function1() {
}
function function2() {
}
export {
    function1 as newFunctionName,
    function2 as anotherNewFunctionName
};

import { newFunctionName, anotherNewFunctionName } from './modules/module.js';
```

# renaming imports

```
export { function1, function2 };

import { function1 as newFunctionName,
         function2 as anotherNewFunctionName } from './modules/module.js';
```

# importing a module object

To import all the things into an object called `Module`:

```
import * as Module from './modules/module.js';

Module.function1();
Module.function2();
```

# module aggregation

```
// in shapes.js
export { Square } from './shapes/square.js';
export { Triangle } from './shapes/triangle.js';
export { Circle } from './shapes/circle.js';

// in main.js
import { Square } from './modules/square.js';
import { Circle } from './modules/circle.js';
import { Triangle } from './modules/triangle.js';

// in main.js
import { Square, Circle, Triangle } from './modules/shapes.js';
```

# dynamic import

If you call `import` as a function, it will return a `Promise` that
fulfills with a module object similar to `import *` that provides
access to all of the module's exports.

```
import('./modules/my-module.js').then((Module) => {
    let square1 = new Module.Square(...);
    square1.draw();
});
```
