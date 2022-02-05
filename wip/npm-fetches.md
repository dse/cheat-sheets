# fetches

## whatwg-fetch

https://www.npmjs.com/package/whatwg-fetch

-   Doesn't work in Node.js.

## node-fetch

https://www.npmjs.com/package/node-fetch

-   Current version, 3, is an ES module.  You cannot import it in the
    usual manner into a CommonJS project.  The following is something
    you should be able to do:
    
        const fetch = (...args) => {
            return import('node-fetch')
                .then(({ 'default': fetch }) => fetch(...args));
        };
