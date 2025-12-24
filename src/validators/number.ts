export function isNumber(value: any): boolean {
  return typeof value === "number" && !isNaN(value);
}

export function isPositive(value: number): boolean {
  return isNumber(value) && value > 0;
}

export function isInRange(value: number, min: number, max: number): boolean {
  return isNumber(value) && value >= min && value <= max;
}


export function isInteger(value: any): boolean {
  return Number.isInteger(value);
}

export function isFloat(value: any): boolean {
  return isNumber(value) && !Number.isInteger(value);
}

export function isEven(value: number): boolean {
  return isInteger(value) && value % 2 === 0;
}

export function isOdd(value: number): boolean {
  return isInteger(value) && value % 2 !== 0;
}

export function isNegative(value: number): boolean {
  return isNumber(value) && value < 0;
}

export function isZero(value: number): boolean {
  return value === 0;
}

export function isMultipleOf(value: number, base: number): boolean {
  return isNumber(value) && isNumber(base) && value % base === 0;
}

export function isSafeInteger(value: any): boolean {
  return Number.isSafeInteger(value);
}
