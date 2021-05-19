# asynchronous programming with await and async

`await` and `async` are syntactic sugar atop `Promise`s.

They make asynchronous code look more like synchronous code and less
like the callback hellscape that it actually is.

# asynchronous functions

You turn a function into an asynchronous function using the `async`
keyword:

```
async function hello() {
    return 'Hello';
}
```

Invoking the function now returns a promise.  To consume the value
returned when the promise fulfills, use a `.then()` block:

```
hello().then((value) => { console.log(value); });
```

# await

