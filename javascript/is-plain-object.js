'use strict';
/*jshint esversion: 11, node: true */

const { isPlainObject } = require('is-plain-object');
const isMergeableObject = require('is-mergeable-object');
const assert = require('node:assert');
const { AssertionError } = assert;

let testCounter = 0;

function ok(...args) {
    testCounter += 1;
    try {
        assert.ok(...args);
    } catch (error) {
        if (error instanceof AssertionError) {
            console.error(`[${testCounter}] ${error.message}`);
            return;
        }
        throw error;
    }
}

class A { }
class B extends A { }

function isObjectLiteral(value) {
    return !!value && (value?.constructor === Object ||
                       value?.constructor === undefined);
}

function testFunction(isPlainObject) {
    testCounter = 0;
    /* 1 */ ok(isPlainObject({}));
    ok(isPlainObject(Object.create({})));
    ok(isPlainObject(Object.create(null)));
    ok(!isPlainObject(null));
    ok(!isPlainObject(undefined));
    ok(!isPlainObject(false));
    ok(!isPlainObject(true));
    ok(!isPlainObject(0));
    ok(!isPlainObject(0n));
    ok(!isPlainObject(1));
    /* 11 */ ok(!isPlainObject(1n));
    ok(!isPlainObject(''));
    ok(!isPlainObject('0'));
    ok(!isPlainObject('1'));
    ok(!isPlainObject(function () {}));
    ok(!isPlainObject(() => {}));
    ok(!isPlainObject(Symbol()));
    ok(!isPlainObject(Symbol.for('x')));
    ok(!isPlainObject(new Date()));
    ok(!isPlainObject(/^\d+$/));
    /* 21 */ ok(!isPlainObject(new A()));
    ok(!isPlainObject(new B()));
    ok(!isPlainObject(A));
    ok(!isPlainObject(B));
}

testFunction(isMergeableObject);

// isObjectLiteral satisfies all tests.
// isPlainObject satisfies all tests.
// isMergeableObject fails `new A()` and `new B()`.
