/*jshint esversion: 8 */
const IE11_WIN10 = "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; .NET4.0C; .NET4.0E; Tablet PC 2.0; rv:11.0) like Gecko";
const polyfillLibrary = require('polyfill-library');
const polyfillBundle = polyfillLibrary.getPolyfillString({
    uaString: IE11_WIN10,
    minify: false,
    features: {
        'es6': { flags: ['gated'] }
    }
}).then(function(bundleString) {
    console.log(bundleString);
});
