/**
 * Example Usage of ValidX Validation Toolkit
 * ------------------------------------------
 * This file demonstrates how to use the main validators from ValidX.
 */

import { isEmail, isPhone, isStrongPassword } from "../src/validators/security";
import { minLength, maxLength, isString } from "../src/validators/string";
import { isPositive, isInRange, isNumber } from "../src/validators/number";

console.log("=== String Validators ===");
console.log("isString('hello'): ", isString("hello"));
console.log("minLength('abc', 2): ", minLength("abc", 2));
console.log("maxLength('abcdef', 10): ", maxLength("abcdef", 10));

console.log("\n=== Security Validators ===");
console.log("isEmail('test@gmail.com'): ", isEmail("test@gmail.com"));
console.log("isPhone('+251912345678'): ", isPhone("+251912345678"));
console.log("isStrongPassword('Aa@12345'): ", isStrongPassword("Aa@12345"));

console.log("\n=== Number Validators ===");
console.log("isNumber(10): ", isNumber(10));
console.log("isPositive(5): ", isPositive(5));
console.log("inRange(7, 1, 10): ", isInRange(7, 1, 10));
