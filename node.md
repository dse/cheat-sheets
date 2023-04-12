# Node.js

## Node Versions and ES Versions

The following chart is heavily simplified.  See https://node.green/

| Node         | ES                             |
|:-------------|:-------------------------------|
| 20 (nightly) | ES2023/ES14 + some ESNEXT      |
| 18           | ES2023/ES14                    |
| 16           | ES2020/ES11 + some ES2022/ES13 |
| 14           | ES2020/ES11                    |
| 12           | ES2019/ES10 + some ES2020/ES11 |
| 10           | ES2018/ES9                     |

## Certain ES Features of Import

### ES2015/ES6

The first and most pivotal and important of the current string of ES
releases.

-   default function parameters
-   rest parameters
-   spread syntax
-   for object literals:
    -   computed properties
    -   shorthand properties
    -   shorthand methods
-   `for...of` loops
-   octal `0x644` literals
-   binary `0b110100100` literals
-   template literals
-   regexp `/y` and `/u` flags
-   destructuring in declarations, assignment, and parameters
-   better Unicode string handling
    -   Unicode code point escapes `\u{1f4a9}`
    -   `String.fromCodePoint`
    -   `String.codePointAt`
    -   `String.normalize`
-   `new.target`
-   `const`
-   `let`
-   `arrow functions`
-   `super`
-   classes
-   generators
-   typed arrays
-   promises
-   `Map`
-   `Set`
-   `WeakMap`
-   `WeakSet`
-   `Proxy`
-   `Reflect`
-   `Symbol`
-   `Object.assign`, `.is`, `.getOwnPropertySymbols`, `.setPrototypeOf`
-   function `name` property
-   `String.raw`
-   `String.prototype.normalize`, `repeat`, `startsWith`, `endsWith`, `includes`, `[Symbol.iterator]`
-   `Regexp.prototype.flags`
-   `Array.from`, `Array.of`
-   `Array.prototype.copyWithin`, `find`, `findIndex`, `fill`, `keys`, `values`, `entries`, `splice`, ...
-   `Number.isFinite`, `isInteger`, `isSafeInteger`, `isNaN`, `parseFloat`, `parseInt`, `EPSILON`, `MIN_SAFE_INTEGER`, `MAX_SAFE_INTEGER`
-   Additional `Math.` methods
    -   clz32, imul, sign, log10, log2, log1p, expm1, cosh, sinh, tanh, acosh, asinh, atanh, trunc, fround, cbrt, hypot
-   Array, RegExp, Function, and Promise are subclassable
    -   as are Boolean, Number, String, Error, Map, and Set
-   Object.
    -   getPropertyOf, getOwnPropertyDescriptor, getOwnPropertyNames, seal, freeze, preventExtensions, isSealed, isFrozen,
        isExtensible
-   `Object.keys`
-   `String` HTML methods

### ES2016/ES7

-   exponentation operator `**`
-   `Array.prototype.includes`

### ES2017/ES8

-   `Object.values`
-   `Object.entries`
-   `Object.getOwnPropertyDescriptors`
-   `String.prototype.padStart`
-   `String.prototype.padEnd`
-   `async` functions
-   shared memory
-   atomics
-   `/u` flag
-   `arguments.caller` removed

### ES2018/ES9

-   object spread/rest properties
-   `Promise#finally`
-   `/s` flag
-   async generators
-   `for...await...of` loops

### ES2019/ES10

-   `String#trimLeft`
-   `String#trimRight`
-   `String#trimStart`
-   `String#trimEnd`
-   `Array#flat`
-   `Array#flatMap`
-   JSON superset: may contain U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR

### ES2020/ES11

-   `String#matchAll`
-   `BigInt`
-   `globalThis`
-   optional chaining operator `?.`

### ES2021/ES12

-   `String#replaceAll`
-   Numeric separators à la `4_294_967_296` `3.141_592_653_589_793_238`
-   assignment operators `||=` `&&=` `??=`

### ES2022/ES13

-   instance class fields
-   static class fields
-   private class fields
-   `Object.hasOwn`
-   `Error.cause`
-   regexp `/d` flag

### ES2023/ES14

-   `Array#findLast`
-   `Array#findLastIndex`
-   standardize hashbang `#!/wash/your/hands`

## Modules

-   color
    -   `@colors/colors`
    -   `chalk` (used by `console-stamp`)
-   logging
    -   `console-stamp`
-   formatting
    -   `strftime`
    -   `dayjs`, the formatting replacement for `moment`
    -   `sprintf-js`
-   objects
    -   `deepmerge`
    -   `json-stable-stringify`
-   HTTP
    -   `node-fetch`
    -   `http-link-header`
-   email
    -   `emailjs-addressparser`
    -   `emailjs-mime-codec`
-   CLI
    -   `posix-getopt`
-   YAML
    -   `yaml`
-   caching
    -   `node-file-cache`
-   performance
    -   `time-require`
-   strings
    -   `camelcase`
    -   `decamelize`
    -   `yn`
-   base64
    -   `btoa`
    -   `atob`
-   text
    -   `word-wrap`
-   files
    -   `glob` (already has a sync)
    -   `findup`
-   debugging
    -   `debug`
-   versioning
    -   `semver`
-   date parsing
    -   `chrono-node`
-   zip
    -   `jszip`
-   misc
    -   anymatch
-   HTML/CSS
    -   foundation-sites
    -   bootstrap
    -   normalize.css
    -   what-input
    -   bourbon
    -   bourbon-neat
    -   swiper
-   misc
    -   lodash



## Pure ESM

[https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c](why your favorite package is pure ESM now)

## Current Directory

    require('path').resolve('./')
    
    process.env.PWD

## Directory of Executing Script

    __dirname

## globs

-   [glob](https://www.npmjs.com/package/glob)
    -   you can only pass one glob string.
    -   uses minimatch
        -   which uses micromatch
            -   which uses picomatch

    ```
    glob(<one glob>, options, cb)
    ```
    
-   [glob-all](https://www.npmjs.com/package/glob-all)
    -   allows multiple patterns
    -   supports exclusions
    
-   [glob-watcher](https://www.npmjs.com/package/glob-watcher)
    -   uses [anymatch](https://www.npmjs.com/package/anymatch)
    
-   [anymatch](https://www.npmjs.com/package/anymatch)
    -   matches multiple strings, regexes, fns
    -   against a string

## getopt

-   posix-getopt - can you specify long option without short options?

    https://www.npmjs.com/package/posix-getopt
    
    https://github.com/joyent/node-getopt

