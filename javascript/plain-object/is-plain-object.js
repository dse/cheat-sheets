'use strict';

globalThis.AggregateError = globalThis.AggregateError ?? require('aggregate-error');

const ok = require('./ok');

// fails [21], [22]
const isMergeableObject = require('is-mergeable-object');

function isPlainObject1(value) {
    // fails [21] and [22]
    return Object.prototype.toString.call(value) === '[object Object]';
}

function isPlainObject2(value) {
    // passes all
    return !!value && (value?.constructor === Object || value?.constructor === undefined);
}

function isPlainObject3(value) {
    // fails [2] only
    return !!value && (Object.getPrototypeOf(value) === Object.prototype ||
                       Object.getPrototypeOf(value) === null);
}

function isPlainObject4(value) {
    // sindresorhus
    // fails [2] only
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return ((prototype === null ||
             prototype === Object.prototype ||
             Object.getPrototypeOf(prototype) === null) &&
            !(Symbol.toStringTag in value) && !(Symbol.iterator in value));
}

// fails 21 and 22
function isMerjableObject(value) {
    // simplified version of is-mergeable-object
    return (!!value && typeof value === 'object') &&
        Object.prototype.toString.call(value) !== '[object RegExp]' &&
        Object.prototype.toString.call(value) !== '[object Date]';
}

let isPlainObject = isPlainObject4;

class A { }
class B extends A { }

console.log(new Date());

/*  [1] */ ok(isPlainObject({}),                  '{}');
/*  [2] */ ok(isPlainObject(Object.create({})),   'Object.create({})');
/*  [3] */ ok(isPlainObject(Object.create(null)), 'Object.create(null)');
/*  [4] */ ok(!isPlainObject(null),               'null');
/*  [5] */ ok(!isPlainObject(undefined),          'undefined');
/*  [6] */ ok(!isPlainObject(false),              'false');
/*  [7] */ ok(!isPlainObject(true),               'true');
/*  [8] */ ok(!isPlainObject(0),                  '0');
/*  [9] */ ok(!isPlainObject(0n),                 '0n');
/* [10] */ ok(!isPlainObject(1),                  '1');
/* [11] */ ok(!isPlainObject(1n),                 '1n');
/* [12] */ ok(!isPlainObject(""),                 '""');
/* [13] */ ok(!isPlainObject("0"),                '"0"');
/* [14] */ ok(!isPlainObject("1"),                '"1"');
/* [15] */ ok(!isPlainObject(function () {}),     'function () {}');
/* [16] */ ok(!isPlainObject(() => {}),           '() => {}');
/* [17] */ ok(!isPlainObject(Symbol()),           'Symbol()');
/* [18] */ ok(!isPlainObject(Symbol.for("x")),    'Symbol.for("x")');
/* [19] */ ok(!isPlainObject(new Date()),         'new Date()');
/* [20] */ ok(!isPlainObject(/^\d+$/),            '/^\d+$/');
/* [21] */ ok(!isPlainObject(new A()),            'new A()');
/* [22] */ ok(!isPlainObject(new B()),            'new B()');
/* [23] */ ok(!isPlainObject(A),                  'A');
/* [24] */ ok(!isPlainObject(B),                  'B');
/* [25] */ ok(!isPlainObject(async function () {}),     'async function () {}');

if (ok.errors.length) {
    throw new AggregateError(ok.errors);
}
