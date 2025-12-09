"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_1 = require("../src/index");
(0, vitest_1.describe)("Security Validators", () => {
    (0, vitest_1.it)("isEmail should validate emails", () => {
        (0, vitest_1.expect)((0, index_1.isEmail)("test@gmail.com")).toBe(true);
        (0, vitest_1.expect)((0, index_1.isEmail)("test@.com")).toBe(false);
    });
    (0, vitest_1.it)("isPhone should validate phone numbers", () => {
        (0, vitest_1.expect)((0, index_1.isPhone)("+251912345678")).toBe(true);
        (0, vitest_1.expect)((0, index_1.isPhone)("123abc")).toBe(false);
    });
    (0, vitest_1.it)("isStrongPassword should validate password strength", () => {
        (0, vitest_1.expect)((0, index_1.isStrongPassword)("Password@1")).toBe(true);
        (0, vitest_1.expect)((0, index_1.isStrongPassword)("weakpass")).toBe(false);
    });
});
