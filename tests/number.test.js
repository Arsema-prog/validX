"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_1 = require("../src/index");
(0, vitest_1.describe)("Number Validators", () => {
    (0, vitest_1.it)("isNumber should return true for numbers", () => {
        (0, vitest_1.expect)((0, index_1.isNumber)(10)).toBe(true);
        (0, vitest_1.expect)((0, index_1.isNumber)("10")).toBe(false);
    });
    (0, vitest_1.it)("isPositive should return true for positive numbers", () => {
        (0, vitest_1.expect)((0, index_1.isPositive)(10)).toBe(true);
        (0, vitest_1.expect)((0, index_1.isPositive)(-1)).toBe(false);
    });
    (0, vitest_1.it)("isInRange should check the range correctly", () => {
        (0, vitest_1.expect)((0, index_1.isInRange)(5, 1, 10)).toBe(true);
        (0, vitest_1.expect)((0, index_1.isInRange)(0, 1, 10)).toBe(false);
    });
});
