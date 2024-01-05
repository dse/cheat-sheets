# Determining if an object is a "plain object"

```
function isPlainObject(value) {
    return !!value && (value?.constructor === Object ||
                       value?.constructor === undefined);
}
```

Satisfies all of the following assertions:

```
class A { }
class B extends A { }

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
```

## Various Other Means of Detecting Plain Objects

### `is-plain-object`

Passes all tests.

    npm install --save is-plain-object
    
    const { isPlainObject } = require('is-plain-object');

### `is-mergeable-object` (TODO)

Fails tests 21 and 22.

    npm install --save is-mergeable-object
    
    const isMergeableObject = require('is-mergeable-object');
