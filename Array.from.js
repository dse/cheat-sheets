// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#polyfill
// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
    Array.from = (function () {
        var symbolIterator;
        try {
            symbolIterator = Symbol.iterator ? Symbol.iterator : 'Symbol(Symbol.iterator)';
        } catch (e) {
            symbolIterator = 'Symbol(Symbol.iterator)';
        }
        var toStr = Object.prototype.toString;
        var isCallable = function (fn) {
            return (typeof fn === 'function' || toStr.call(fn) === '[object Function]');
        };
        var toInteger = function (value) {
            var number = Number(value);
            if (isNaN(number)) {
                return 0;
            }
            if (number === 0 || !isFinite(number)) {
                return number;
            }
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function (value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        };
        var setGetItemHandler = function setGetItemHandler(isIterator, items) {
            var iterator = isIterator && items[symbolIterator]();
            return function getItem(k) {
                return isIterator ? iterator.next() : items[k];
            };
        };
        var getArray = function getArray(T, A, len, getItem, isIterator, mapFn) {
            var k = 0;
            while (k < len || isIterator) {
                var item = getItem(k);
                var kValue = isIterator ? item.value : item;
                if (isIterator && item.done) {
                    return A;
                } else {
                    if (mapFn) {
                        A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                    } else {
                        A[k] = kValue;
                    }
                }
                k += 1;
            }
            if (isIterator) {
                throw new TypeError('Array.from: provided arrayLike or iterator has length more then 2 ** 52 - 1');
            } else {
                A.length = len;
            }
            return A;
        };
        return function from(arrayLikeOrIterator /*, mapFn, thisArg */) {
            var C = this;
            var items = Object(arrayLikeOrIterator);
            var isIterator = isCallable(items[symbolIterator]);
            if (arrayLikeOrIterator == null && !isIterator) {
                throw new TypeError(
                    'Array.from requires an array-like object or iterator - not null or undefined'
                );
            }
            var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
            var T;
            if (typeof mapFn !== 'undefined') {
                if (!isCallable(mapFn)) {
                    throw new TypeError(
                        'Array.from: when provided, the second argument must be a function'
                    );
                }
                if (arguments.length > 2) {
                    T = arguments[2];
                }
            }
            var len = toLength(items.length);
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);
            return getArray(T, A, len, setGetItemHandler(isIterator, items), isIterator, mapFn);
        };
    })();
}
