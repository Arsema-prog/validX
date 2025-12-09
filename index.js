"use strict";
/**
 * Example Usage of ValidX Validation Toolkit
 * ------------------------------------------
 * This file demonstrates how to use the main validators from ValidX.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const security_1 = require("../../src/validators/security");
const string_1 = require("../../src/validators/string");
const number_1 = require("../../src/validators/number");
console.log("=== String Validators ===");
console.log("isString('hello'): ", (0, string_1.isString)("hello"));
console.log("minLength('abc', 2): ", (0, string_1.minLength)("abc", 2));
console.log("maxLength('abcdef', 10): ", (0, string_1.maxLength)("abcdef", 10));
console.log("\n=== Security Validators ===");
console.log("isEmail('test@gmail.com'): ", (0, security_1.isEmail)("test@gmail.com"));
console.log("isPhone('+251912345678'): ", (0, security_1.isPhone)("+251912345678"));
console.log("isStrongPassword('Aa@12345'): ", (0, security_1.isStrongPassword)("Aa@12345"));
console.log("\n=== Number Validators ===");
console.log("isNumber(10): ", (0, number_1.isNumber)(10));
console.log("isPositive(5): ", (0, number_1.isPositive)(5));
console.log("inRange(7, 1, 10): ", (0, number_1.isInRange)(7, 1, 10));
