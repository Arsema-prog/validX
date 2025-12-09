"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_1 = require("../src/index");
(0, vitest_1.describe)("String Validators", () => {
    (0, vitest_1.it)("isString should return true for strings", () => {
        (0, vitest_1.expect)((0, index_1.isString)("hello")).toBe(true);
        (0, vitest_1.expect)((0, index_1.isString)(123)).toBe(false);
    });
    (0, vitest_1.it)("minLength should return correct boolean", () => {
        (0, vitest_1.expect)((0, index_1.minLength)("hello", 3)).toBe(true);
        (0, vitest_1.expect)((0, index_1.minLength)("hi", 3)).toBe(false);
    });
    (0, vitest_1.it)("maxLength should return correct boolean", () => {
        (0, vitest_1.expect)((0, index_1.maxLength)("hello", 10)).toBe(true);
        (0, vitest_1.expect)((0, index_1.maxLength)("hello world", 5)).toBe(false);
    });
});
