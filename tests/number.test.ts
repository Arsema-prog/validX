import { describe, it, expect } from "vitest";
import {
  isNumber,
  isPositive,
  isInRange,
  isInteger,
  isFloat,
  isEven,
  isOdd,
  isNegative,
  isZero,
  isMultipleOf,
  isSafeInteger
} from "../src/index";


describe("Number Validators", () => {
  it("isNumber should return true for numbers", () => {
    expect(isNumber(10)).toBe(true);
    expect(isNumber("10")).toBe(false);
  });

  it("isPositive should return true for positive numbers", () => {
    expect(isPositive(10)).toBe(true);
    expect(isPositive(-1)).toBe(false);
  });

  it("isInRange should check the range correctly", () => {
    expect(isInRange(5, 1, 10)).toBe(true);
    expect(isInRange(0, 1, 10)).toBe(false);
  });

  it("isInteger should validate integers", () => {
    expect(isInteger(5)).toBe(true);
    expect(isInteger(5.5)).toBe(false);
  });

  it("isFloat should validate floating-point numbers", () => {
    expect(isFloat(5.5)).toBe(true);
    expect(isFloat(5)).toBe(false);
  });

  it("isEven should check even numbers", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(5)).toBe(false);
  });

  it("isOdd should check odd numbers", () => {
    expect(isOdd(5)).toBe(true);
    expect(isOdd(4)).toBe(false);
  });

  it("isNegative should validate negative numbers", () => {
    expect(isNegative(-3)).toBe(true);
    expect(isNegative(3)).toBe(false);
  });

  it("isZero should check for zero", () => {
    expect(isZero(0)).toBe(true);
    expect(isZero(1)).toBe(false);
  });

  it("isMultipleOf should check multiples correctly", () => {
    expect(isMultipleOf(10, 5)).toBe(true);
    expect(isMultipleOf(10, 3)).toBe(false);
  });

  it("isSafeInteger should validate safe integers", () => {
    expect(isSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
  });
});
