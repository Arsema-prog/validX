import { describe, test, expect } from "vitest";
import {
  isObject,
  isEmptyObject,
  hasKey,
  hasKeys,
} from "../src/validators/object";

describe("Object Validators", () => {
  test("isObject", () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject(null)).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject("test")).toBe(false);
  });

  test("isEmptyObject", () => {
    expect(isEmptyObject({})).toBe(true);
    expect(isEmptyObject({ a: 1 })).toBe(false);
    expect(isEmptyObject(null)).toBe(false);
  });

  test("hasKey", () => {
    expect(hasKey({ a: 1 }, "a")).toBe(true);
    expect(hasKey({ a: 1 }, "b")).toBe(false);
    expect(hasKey(null, "a")).toBe(false);
  });

  test("hasKeys", () => {
    expect(hasKeys({ a: 1, b: 2 }, ["a", "b"])).toBe(true);
    expect(hasKeys({ a: 1 }, ["a", "b"])).toBe(false);
    expect(hasKeys(null, ["a"])).toBe(false);
  });
});
