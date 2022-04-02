# Gulp

## Tasks

A gulp task is either:

-   a function that returns a Stream

-   a function that returns a Promise

    -   this includes `async` functions.

-   a function that returns an EventEmitter

-   a function that returns a `child_process`

-   a function that returns an Observable

-   a task composed with `gulp.series()`

-   a task composed with `gulp.parallel()`

-   a function that uses an error-first callback

    -   The task function takes the callback as its sole argument.
    -   The task function returns `undefined` (or nothing).
    -   The task function calls the callback on completion or error.

    -   The callback is conventionally known as `cb`.
    -   The callback takes one optional argument, an error.
        -   To signal task completion, the task function calls the callback with no arguments.
        -   To signal an error, the task function calls the callback with an error as its only argument.

## async-done

    const asyncDone = require('async-done');
    
    asyncDone(fn, cb);
    function fn(done) {
        ...
        done();
        done(new Error('...'));
    }
    function cb(error, result) {
        ...
    }
    
-   `fn` is a function that returns a Stream, Promise, EventEmitter,
    child process, Observable, or uses an error-first callback.
    
    `fn` in other words is a Gulp task.

-   `cb` is an error-first callback taking the result as the second
    argument.


