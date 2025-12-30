import { describe, test, expect } from "vitest";
import {
    isDate,
    isFutureDate,
    isPastDate,
    isISODate
} from "../src/index";

describe("Date Validators", () => {
    test("isDate", () => {
        expect(isDate(new Date())).toBe(true);
        expect(isDate("2023-01-01" as any)).toBe(false);
        expect(isDate(new Date("invalid"))).toBe(false);
    });

    test("isFutureDate", () => {
        const future = new Date();
        future.setFullYear(future.getFullYear() + 1);
        expect(isFutureDate(future)).toBe(true);

        const past = new Date();
        past.setFullYear(past.getFullYear() - 1);
        expect(isFutureDate(past)).toBe(false);
    });

    test("isPastDate", () => {
        const past = new Date();
        past.setFullYear(past.getFullYear() - 1);
        expect(isPastDate(past)).toBe(true);

        const future = new Date();
        future.setFullYear(future.getFullYear() + 1);
        expect(isPastDate(future)).toBe(false);
    });

    test("isISODate", () => {
        expect(isISODate("2023-01-01T12:00:00Z")).toBe(true);
        expect(isISODate("2023-01-01")).toBe(false); // Strict ISO check expected usually includes T
        // My regex implementation was strict about T. Let's check if the standard ISO string from JS Date passes.
        expect(isISODate(new Date().toISOString())).toBe(true);
        expect(isISODate("invalid")).toBe(false);
    });
});
