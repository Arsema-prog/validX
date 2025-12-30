import { isString } from "./string";

export function isURL(value: string): boolean {
  if (!isString(value)) return false;
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

export function isUUID(value: string): boolean {
  if (!isString(value)) return false;
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(value);
}

export function isJSON(value: string): boolean {
  if (!isString(value)) return false;
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}

export function isHexColor(value: string): boolean {
  if (!isString(value)) return false;
  const hexColorRegex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
  return hexColorRegex.test(value);
}

export function isBase64(value: string): boolean {
  if (!isString(value)) return false;
  // This regex checks for valid Base64 characters and padding
  const base64Regex =
    /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

  // Simple check for empty string or whitespace only, which might technically pass regex but usually aren't considered valid base64 data payloads in strict contexts, 
  // but standard base64 regex often allows empty strings. Let's stick to the regex.
  // Actually, to be safe and strictly adhere to "isBase64", empty string is technically base64 encoding of empty string.
  // However, often specific length checks are needed. The prompt just says "isBase64".

  // A robust base64 regex.
  const regex = /^[A-Za-z0-9+/]*={0,2}$/;

  if (value.length % 4 !== 0) return false;
  if (!regex.test(value)) return false;

  return true;
}
