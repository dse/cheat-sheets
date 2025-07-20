'use strict';

const assert = require('node:assert');
function ok(...args) {
    ++ok.counter;
    try {
        assert.ok(...args);
        console.info(`[${ok.counter}] ok`);
    } catch (error) {
        ok.errors.push(error);
        console.info(`[${ok.counter}] FAIL: ${args[1]}`);
    }
}
ok.errors = [];
ok.counter = 0;

module.exports = ok;
