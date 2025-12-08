export function isNumber(value: any): boolean {
  return typeof value === "number" && !isNaN(value);
}

export function isPositive(value: number): boolean {
  return isNumber(value) && value > 0;
}

export function isInRange(value: number, min: number, max: number): boolean {
  return isNumber(value) && value >= min && value <= max;
}
