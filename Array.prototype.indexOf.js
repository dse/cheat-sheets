// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: https://es5.github.io/#x15.4.4.14
// NOT NEEDED FOR IE11.
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(searchElement, fromIndex) {
        "use strict";
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = fromIndex | 0;
        if (n >= len) {
            return -1;
        }
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in o && o[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}
