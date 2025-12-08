import { describe, it, expect } from "vitest";
import { isNumber, isPositive, isInRange } from "../src/index";

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
});
