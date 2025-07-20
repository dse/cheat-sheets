'use strict';
/*jshint esversion: 11, node: true */

const assert = require('node:assert');
let counter = 0;
function ok(...args) {
    console.error(`[${++counter}]`);
    assert.ok(...args);
}

const isMergeableObject = require('is-mergeable-object');

class A { }
class B extends A { }

const fn = isMergeableObject;

ok(fn({}));
ok(fn(Object.create({})));
ok(fn(Object.create(null)));
ok(!fn(null));
ok(!fn(undefined));
ok(!fn(false));
ok(!fn(true));
ok(!fn(0));
ok(!fn(0n));
ok(!fn(1));
ok(!fn(1n));
ok(!fn(''));
ok(!fn('0'));
ok(!fn('1'));
ok(!fn(function () {}));
ok(!fn(() => {}));
ok(!fn(Symbol()));
ok(!fn(Symbol.for('x')));
ok(!fn(new Date()));
ok(!fn(/^\d+$/));
ok(!fn(new A()));
ok(!fn(new B()));               // fails isMergeableObject
ok(!fn(A));
ok(!fn(B));
