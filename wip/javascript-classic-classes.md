# Classic Classes in JavaScript

Back in my day, we used JavaScript's prototypal object system to
create class-like objects.

## Prototypes

Almost every JavaScript object has associated with it an object known
as a **prototype**.

Each object inherits methods from its prototype.

Object literals have as their prototype `Object.prototype`.

`Object.prototype` has no prototype.

## `new`

An object created using the `new` keyword and a constructor invocation
uses the value of the constructor function's `prototype` property as
the object's prototype.

### `prototype` Properties vs. Prototypes

-   `Object` itself has a `prototype` **property**.
-   `{}` has a prototype, but not a `prototype` property.

## Prototype Chain

An object returned by `new Date()` has as its prototype
`Date.prototype`.  It inherits from `Object.prototype`.

## Object.create()

`Object.create()` creates a new object using its first argument as the
new object's prototype.

The return value of `Object.create(Object.prototype)` is an ordinary
object.

The return value of `Object.create(null)` has no prototype.

If you create an object using `Object.create(o)` and you modify that,
you do not change the properties of `o`.

## `toString()`

JavaScript invokes `toString()` when it needs to convert something to
a string.

If you need a localized representation, write a `toLocaleString()`
method.  `Array` defines one that calls the same on its members.

JavaScript invokes `toValue()` when it needs to convert something to a
primitive other than a string.

`JSON.stringify()` calls `toJSON()` if it's asked to serialize
something that implements `toJSON`.

## `instanceof`

Returns whether its left operand inherits from it's right operand's
`.prototype`.  To determine if `a` inherits from `Range.prototype`,
for example:

```
a instanceof Range
```

# Example 1, using a constructor

```
function range(from, to) {
    this.from = from;
    this.to = to;
}
Range.prototype.includes = function (x) {
        return this.from <= x <= this.to;
};
Range.prototype.toString = function () {
        return '(' + this.from + '...' + this.to + ')';
};

// without inheritance
Range.prototype = {
    includes: function (x) {
        return this.from <= x <= this.to;
    },
    toString: function () {
        return '(' + this.from + '...' + this.to + ')';
    }
};
```

# Example 2, using a factory function and `Object.create()`

```
function range(from, to) {
    var r = Object.create(range.methods);
    r.from = from;
    r.to   = to;
    return r;
}
range.methods = {
    includes: function (x) {
        return this.from <= x <= this.to;
    },
    toString: function () {
        return '(' + this.from + '...' + this.to + ')';
    }
};
```
