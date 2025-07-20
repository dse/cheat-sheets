/*jshint esversion: 11, strict: global, node: true */
'use strict';

const { ok } = require('node:assert');

function isPlainObject0(value) {
    return !!value && typeof value === 'object';
}
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

let isPlainObject = isPlainObject0;

class A { }
class B extends A { }

ok(isPlainObject({}));
ok(isPlainObject(Object.create({})));   // [2]
ok(isPlainObject(Object.create(null))); // [3]
ok(!isPlainObject(null));
ok(!isPlainObject(undefined));
ok(!isPlainObject(false));
ok(!isPlainObject(true));
ok(!isPlainObject(0));
ok(!isPlainObject(0n));
ok(!isPlainObject(1));
ok(!isPlainObject(1n));
ok(!isPlainObject(''));
ok(!isPlainObject('0'));
ok(!isPlainObject('1'));
ok(!isPlainObject(function () {}));
ok(!isPlainObject(() => {}));
ok(!isPlainObject(Symbol()));
ok(!isPlainObject(Symbol.for('x')));
ok(isPlainObject(new Date()));
ok(isPlainObject(/^\d+$/));
ok(isPlainObject(new A())); // [21]
ok(isPlainObject(new B())); // [22]
ok(!isPlainObject(A));
ok(!isPlainObject(B));
