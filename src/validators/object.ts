/**
 * Checks whether a value is a plain object.
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Checks whether an object has no own enumerable properties.
 */
export function isEmptyObject(value: unknown): boolean {
  if (!isObject(value)) return false;
  return Object.keys(value).length === 0;
}

/**
 * Checks whether an object has a specific key.
 */
export function hasKey(
  obj: unknown,
  key: string
): boolean {
  if (!isObject(obj)) return false;
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * Checks whether an object has all required keys.
 */
export function hasKeys(
  obj: unknown,
  keys: string[]
): boolean {
  if (!isObject(obj)) return false;
  return keys.every((key) =>
    Object.prototype.hasOwnProperty.call(obj, key)
  );
}
