
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

export const sanitizeHTML = (value: string): string => {
  return value.replace(/<[^>]*>?/gm, '');
};


export const escapeHTML = (value: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return value.replace(/[&<>"']/g, (m) => map[m]);
};

export const hasLowercase = (value: string): boolean => /[a-z]/.test(value);

export const hasUppercase = (value: string): boolean => /[A-Z]/.test(value);

export const hasNumber = (value: string): boolean => /[0-9]/.test(value);

export const hasSpecialChar = (value: string): boolean => 
  /[!@#$%^&*(),.?":{}|<> ]/.test(value);