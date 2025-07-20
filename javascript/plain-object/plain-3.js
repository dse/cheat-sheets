'use strict';

function isPlainObject(value) {
    return !!value && (value?.constructor === Object ||
                       value?.constructor === undefined);
}

module.exports = isPlainObject;
