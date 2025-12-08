import { describe, it, expect } from "vitest";
import { isEmail, isPhone, isStrongPassword } from "../src/index";

describe("Security Validators", () => {
  it("isEmail should validate emails", () => {
    expect(isEmail("test@gmail.com")).toBe(true);
    expect(isEmail("test@.com")).toBe(false);
  });

  it("isPhone should validate phone numbers", () => {
    expect(isPhone("+251912345678")).toBe(true);
    expect(isPhone("123abc")).toBe(false);
  });

  it("isStrongPassword should validate password strength", () => {
    expect(isStrongPassword("Password@1")).toBe(true);
    expect(isStrongPassword("weakpass")).toBe(false);
  });
});
