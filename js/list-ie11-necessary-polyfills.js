/*jshint esversion: 8 */

const IE11_WIN10 = "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; .NET4.0C; .NET4.0E; Tablet PC 2.0; rv:11.0) like Gecko";

const polyfillLibrary = require('polyfill-library');

async function run() {
    const featureList = await polyfillLibrary.listAllPolyfills();
    const featuresObject = {};
    let featureName;
    for (featureName of featureList) {
        featuresObject[featureName] = {};
    }
    const options = polyfillLibrary.getOptions({
        minify: false,
        unknown: 'ignore',
        features: featuresObject,
        uaString: IE11_WIN10
    });

    const featureLengths = featureList.map(function (x) { return x.length; });
    const featureNameColumnWidth = Math.max.apply(Math, featureLengths);

    // const featureNameColumnSize = Math.max(featureList.map(function (x) { const length = x.length; return isNaN(length) ? 0 : length; }));
    // console.log(featureNameColumnSize);
    // console.log(JSON.stringify(options, null, 4));
    const polyfills = await polyfillLibrary.getPolyfills(options);
    for (featureName of featureList) {
        const ie11Supports = !polyfills.hasOwnProperty(featureName);
        const featureNameColumn = featureName.padEnd(featureNameColumnWidth);
        const featureStatusColumn = (ie11Supports ? 'Yes' : 'No').padEnd(3);
        console.log(`| ${featureNameColumn} | ${featureStatusColumn} |`);
    }
    // console.log(JSON.stringify(polyfills, null, 4));
}

run();
