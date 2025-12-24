export function isDate(value: any): boolean {
    return value instanceof Date && !isNaN(value.getTime());
}

export function isFutureDate(value: Date): boolean {
    return isDate(value) && value.getTime() > Date.now();
}

export function isPastDate(value: Date): boolean {
    return isDate(value) && value.getTime() < Date.now();
}

export function isISODate(value: string): boolean {
    if (typeof value !== "string") return false;
    // ISO 8601 regex
    const isoDateRegex =
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/;

    if (!isoDateRegex.test(value)) return false;

    const date = new Date(value);
    return !isNaN(date.getTime());
}
