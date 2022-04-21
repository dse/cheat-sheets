# Node.js

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

