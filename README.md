# **ValidX — Simple & Secure Input Validation Toolkit**

ValidX is a lightweight, modular, and developer-friendly **input validation library** built with **TypeScript**.  
It helps developers validate user input safely, consistently, and with clean, reusable functions.

---

## 🚀 Features

- ✔ **String validation** (min/max length, text checks, etc.)  
- ✔ **Security validation** (email, phone, strong password)  
- ✔ **Number validation** (range, integer check, etc.)  
- ✔ **Simple and intuitive API**  
- ✔ **Zero external dependencies**  
- ✔ **Fully written in TypeScript**  
- ✔ **Unit-tested** with Jest  
- ✔ **Lightweight and fast**  
- ✔ **Supports ESM + CommonJS**  

---

## Installation

```bash
npm install validx
```

Or for Yarn:

```bash
yarn add validx
```

---

## Project Structure

```
validx/
├── src/
│   ├── validators/
│   │   ├── string.ts
│   │   ├── numbers.ts
│   │   ├── security.ts
│   ├── index.ts
├── tests/
│   ├── string.test.ts
│   ├── number.test.ts
│   └── security.test.ts
├── examples/
│       └── index.ts
├── package.json
└── README.md
```

---

## Usage Examples

### **String Validators**

```ts
import { minLength, maxLength, isString } from "validx";

minLength("Hello", 3);   // true
maxLength("Hello", 10);  // true
isString(100);           // false
```

---

### **Security Validators**

```ts
import { isEmail, isPhone, isStrongPassword } from "validx";

isEmail("test@gmail.com");                // true
isPhone("+251912345678");                 // true
isStrongPassword("Aa@12345");             // true
```

---

### **Number Validators**

```ts
import { isNumber, inRange, isPositive } from "validx";

isNumber(12);             // true
inRange(5, 1, 10);        // true
isPositive(-1);          // false
```

---

## Example Project

Use the sample inside:

```
examples/basic-usage/index.ts
```

Example:

```ts
import { isEmail, minLength } from "validx";

console.log(isEmail("hello@example.com"));
console.log(minLength("World", 3));
```

Run:

```bash
ts-node examples/basic-usage/index.ts
```

---

## Running Tests

```bash
npm test
```

Tests are written using **Jest**, covering:

- Valid inputs  
- Invalid inputs  
- Edge cases  
- Null/undefined  
- Boundary values  

---

##  Roadmap

- [ ] Add date validators  
- [ ] Add URL validators  
- [ ] Add schema-based object validator  
- [ ] Add array validators  
- [ ] Add async validators  
- [ ] Add sanitizers (trim, escape, normalize)  

---

##  Contributing

Contributions are always welcome!

1. Fork the repository  
2. Create a feature branch  
3. Commit your changes  
4. Open a Pull Request  

---

## License

MIT License — free to use, modify, and distribute.

---

## Author

**Group 3**  
AASTU — Software Engineering Students  
