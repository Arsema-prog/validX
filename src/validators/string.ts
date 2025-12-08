export function isString(value: any): boolean {
  return typeof value === "string";
}

export function minLength(value: string, length: number): boolean {
  return isString(value) && value.length >= length;
}

export function maxLength(value: string, length: number): boolean {
  return isString(value) && value.length <= length;
}
