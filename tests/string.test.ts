import { describe, it, expect } from "vitest";
import { isString, minLength, maxLength } from "../src/index";

describe("String Validators", () => {
  it("isString should return true for strings", () => {
    expect(isString("hello")).toBe(true);
    expect(isString(123)).toBe(false);
  });

  it("minLength should return correct boolean", () => {
    expect(minLength("hello", 3)).toBe(true);
    expect(minLength("hi", 3)).toBe(false);
  });

  it("maxLength should return correct boolean", () => {
    expect(maxLength("hello", 10)).toBe(true);
    expect(maxLength("hello world", 5)).toBe(false);
  });
});
