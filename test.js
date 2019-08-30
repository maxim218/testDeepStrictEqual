"use strict";

const assert = require('assert');

const getSum = require("./scripts/getSum");
const doubleAllFields = require("./scripts/doubleAllFields");
const filterArr = require("./scripts/filterArr");
const moveAllPoints = require("./scripts/moveAllPoints");
const mulToTen = require("./scripts/mulToTen");

assert.deepStrictEqual(getSum(5, 3), 8);
assert.deepStrictEqual(getSum("5", "3"), "53");
assert.deepStrictEqual(getSum(12, 45), 57);
assert.deepStrictEqual(getSum("12", "45"), "1245");

assert.deepStrictEqual(doubleAllFields({x: 4}), {x: 8});
assert.deepStrictEqual(doubleAllFields({x: "4"}), {x: "44"});
assert.deepStrictEqual(doubleAllFields({x: 4, y: 3}), {x: 8, y: 6});
assert.deepStrictEqual(doubleAllFields({x: 4, y: 3}), {y: 6, x: 8});

assert.deepStrictEqual(filterArr([]), []);
assert.deepStrictEqual(filterArr([10, 20, 30, 40]), [10, 20, 30, 40]);
assert.deepStrictEqual(filterArr([10, 7, 9, 40]), [10, 40]);
assert.deepStrictEqual(filterArr([7, 20, 30, 9]), [20, 30]);
assert.deepStrictEqual(filterArr([7, 3, 5]), []);

assert.deepStrictEqual(moveAllPoints([]), []);
assert.deepStrictEqual(moveAllPoints([
    {x: 2, y: 3},
    {x: 24, y: 8},
    {x: 6, y: 52},
]), [
    {x: 12, y: 13},
    {y: 18, x: 34},
    {y: 62, x: 16},
]);
assert.deepStrictEqual(moveAllPoints([
    {x: -25, y: 17}
]), [
    {x: -15, y: 27}
]);

assert.deepStrictEqual(mulToTen({
    arr: [
        {value: 5},
        {value: -3},
        {value: 12},
    ],
}), {
    arr: [
        {value: 50},
        {value: -30},
        {value: 120},
    ],
});
