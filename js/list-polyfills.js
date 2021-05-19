/*jshint esversion: 8 */

const polyfillLibrary = require('polyfill-library');

async function run() {
    const polyfillList = await polyfillLibrary.listAllPolyfills();
    console.log(JSON.stringify(polyfillList, null, 4));
}

run();
