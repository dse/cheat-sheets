# ES6 modules vs. CommonJS modules

## Importing

```
import fleepflorp from 'gleepglorp';
import { default as fleepflorp } from 'gleepglorp';

const fleepflorp = require('gleepglorp');
```

```
import { flipflop } from 'glipglop';

const { flipflop } = require('glipglop');
const flipflop = require('glipglop').flipflop;
```

```
import { blarp as flarp } from 'blarp'; // ???

const { flarp: blarp } = require('blarp'); // ???
```

```
import * as cows from 'moo';
const cows = require('moo'); // ???
```

## Exporting

```
export default fleeb;
export { fleeb as default };

module.exports = fleeb;
```

```
export fleeb;
export gleez;
# or #
export { fleeb, gleez };

module.exports.fleeb = fleeb;
module.exports.gleez = gleez;
# or #
module.exports = {
    fleeb,
    gleez,
};
```

```
export pleem as pleempleem; // ???

module.exports = {
    pleempleem: pleem, // ???
};
```

## Notes

ES6 `import` and `export` statements must be at the top level.
They are not runtime.

