/*jshint esversion: 2020, node: true */

const IE11_WIN10 = "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko";
const IE11_WIN7  = "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko";

const polyfillLibrary = require('polyfill-library');
const UA = require('@financial-times/polyfill-useragent-normaliser');

const ua = new UA(IE11_WIN10);
const ua2 = new UA(IE11_WIN7);
console.log(ua);
console.log(ua2);

async function run() {
    const featureList = await polyfillLibrary.listAllPolyfills();
    const featuresObject = {};
    let featureName;
    for (featureName of featureList) {
        featuresObject[featureName] = {};
        // console.log(featureName);
        // console.log(await polyfillLibrary.describePolyfill(featureName));
    }
    const options = polyfillLibrary.getOptions({
        minify: false,
        unknown: 'ignore',
        features: featuresObject,
        uaString: IE11_WIN10
    });
    const options2 = polyfillLibrary.getOptions({
        minify: false,
        unknown: 'ignore',
        features: featuresObject,
        uaString: IE11_WIN7
    });

    const featureLengths = featureList.map(function (x) { return x.length; });
    const featureNameColumnWidth = Math.max.apply(Math, featureLengths);

    const polyfills = await polyfillLibrary.getPolyfills(options);
    const polyfills2 = await polyfillLibrary.getPolyfills(options2);
    for (featureName of featureList) {
        const ie11Supports = !polyfills.hasOwnProperty(featureName);
        const ie11Supports2 = !polyfills2.hasOwnProperty(featureName);
        const featureNameColumn = featureName.padEnd(featureNameColumnWidth);
        const featureStatusColumn = (ie11Supports ? 'Yes' : 'No').padEnd(3);
        const featureStatusColumn2 = (ie11Supports2 ? 'Yes' : 'No').padEnd(3);
        console.log(`| ${featureNameColumn} | ${featureStatusColumn} | ${featureStatusColumn2} |`);
    }
    // console.log(JSON.stringify(polyfills, null, 4));
}

run();
