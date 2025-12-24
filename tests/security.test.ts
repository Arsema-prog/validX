import { describe, it, expect } from "vitest";
import { 
  isEmail, 
  isPhone, 
  isStrongPassword, 
  sanitizeHTML, 
  escapeHTML, 
  hasLowercase, 
  hasUppercase, 
  hasNumber, 
  hasSpecialChar 
} from "../src/index"; 

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

  // --- New Tests for your Contribution ---

  it("sanitizeHTML should remove HTML tags", () => {
    const input = "<div>Hello <script>alert('xss')</script></div>";
    const expected = "Hello alert('xss')";
    expect(sanitizeHTML(input)).toBe(expected);
  });

  it("escapeHTML should turn special characters into entities", () => {
    expect(escapeHTML("<script>")).toBe("&lt;script&gt;");
    expect(escapeHTML("Me & You")).toBe("Me &amp; You");
  });

  it("hasLowercase should detect small letters", () => {
    expect(hasLowercase("ABC")).toBe(false);
    expect(hasLowercase("ABCd")).toBe(true);
  });

  it("hasUppercase should detect capital letters", () => {
    expect(hasUppercase("abc")).toBe(false);
    expect(hasUppercase("abcD")).toBe(true);
  });

  it("hasNumber should detect digits", () => {
    expect(hasNumber("hello")).toBe(false);
    expect(hasNumber("hello5")).toBe(true);
  });

  it("hasSpecialChar should detect special symbols", () => {
    expect(hasSpecialChar("Pass123")).toBe(false);
    expect(hasSpecialChar("Pass@123")).toBe(true);
  });
});