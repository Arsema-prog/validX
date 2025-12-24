import { describe, test, expect } from "vitest";
import {
    isURL,
    isUUID,
    isJSON,
    isHexColor,
    isBase64,
} from "../src/index";

describe("Format Validators", () => {
    test("isURL", () => {
        expect(isURL("https://google.com")).toBe(true);
        expect(isURL("invalid-url")).toBe(false);
        expect(isURL(123 as any)).toBe(false);
    });

    test("isUUID", () => {
        expect(isUUID("123e4567-e89b-12d3-a456-426614174000")).toBe(true);
        expect(isUUID("invalid-uuid")).toBe(false);
        expect(isUUID(null as any)).toBe(false);
    });

    test("isJSON", () => {
        expect(isJSON('{"key": "value"}')).toBe(true);
        expect(isJSON("invalid-json")).toBe(false);
        expect(isJSON(null as any)).toBe(false);
    });

    test("isHexColor", () => {
        expect(isHexColor("#ff0000")).toBe(true);
        expect(isHexColor("#f00")).toBe(true);
        expect(isHexColor("zzzzzz")).toBe(false);
        expect(isHexColor(123 as any)).toBe(false);
    });

    test("isBase64", () => {
        expect(isBase64("SGVsbG8gV29ybGQ=")).toBe(true);
        expect(isBase64("InvalidBase64!")).toBe(false);
        expect(isBase64(123 as any)).toBe(false);
    });
});
