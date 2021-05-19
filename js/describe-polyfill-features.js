/*jshint esversion: 8 */

const polyfillLibrary = require('polyfill-library');

async function run() {
    const polyfillList = await polyfillLibrary.listAllPolyfills();
    const results = [];
    for (const featureName of polyfillList) {
        const result = await polyfillLibrary.describePolyfill(featureName);
        results.push(result);
    }
    console.log(JSON.stringify(results, null, 4));
}

run();
