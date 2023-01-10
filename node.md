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

|:------|:-------|


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

