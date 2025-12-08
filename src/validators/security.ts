export function isEmail(value: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value);
}

export function isPhone(value: string): boolean {
  const regex = /^\+?[0-9]{7,15}$/;
  return regex.test(value);
}

export function isStrongPassword(value: string): boolean {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(value);
}
