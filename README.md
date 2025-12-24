<div align="center">

# <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/checkmarx.svg" width="32" height="32" alt="ValidX"/> ValidX

<p align="center">
  <strong>The Professional Input Validation Toolkit for TypeScript</strong><br/>
  <em>Industrial-grade • Zero Dependencies • Type-Safe • Tree-Shakeable</em>
</p>

<!-- BADGES -->
<p align="center">
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5.0+"/>
  </a>
  <a href="https://vitest.dev/">
    <img src="https://img.shields.io/badge/Tests-Vitest-729B1B?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest"/>
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-black?style=for-the-badge&logo=opensourceinitiative&logoColor=white" alt="MIT License"/>
  </a>
  <a href="https://www.npmjs.com/">
    <img src="https://img.shields.io/badge/Dependencies-Zero-FF3E00?style=for-the-badge&logo=npm&logoColor=white" alt="Zero Dependencies"/>
  </a>
</p>

<!-- QUICK NAVIGATION -->
<p align="center">
  <a href="#-installation"><img src="https://cdn.simpleicons.org/npm/CB3837" width="16" height="16"/> Install</a> •
  <a href="#-quick-start"><img src="https://cdn.simpleicons.org/lightning/F7DF1E" width="16" height="16"/> Quick Start</a> •
  <a href="#-features"><img src="https://cdn.simpleicons.org/sparkles/DD0B78" width="16" height="16"/> Features</a> •
  <a href="#-api-reference"><img src="https://cdn.simpleicons.org/readme/018EF5" width="16" height="16"/> API</a> •
  <a href="#-roadmap"><img src="https://cdn.simpleicons.org/googleearth/4285F4" width="16" height="16"/> Roadmap</a> •
  <a href="#-contributing"><img src="https://cdn.simpleicons.org/github/00A0DC" width="16" height="16"/> Contribute</a>
</p>

![ValidX Logo](./logo.jpeg)

</div>

---

## <img src="https://cdn.simpleicons.org/bookbub/0288D1" width="24" height="24" align="center"/> About ValidX

> **ValidX** is a lightweight, modular, and developer-friendly input validation library built with TypeScript. It helps developers validate user input safely, consistently, and with clean, reusable functions.

<table>
<tr>
<td width="50%">

**Why ValidX?**

▸ **Simple & Intuitive**: Clean API that reads like natural language  
▸ **Type-Safe**: Written in TypeScript with full type definitions  
▸ **Zero Dependencies**: No bloat, extremely fast execution  
▸ **Battle-Tested**: 100% test coverage with edge case validation  
▸ **Bundle-Conscious**: Tree-shakeable design means you only import what you use

</td>
<td width="50%">

**Key Features**

◆ String validation (min/max length, text checks)  
◆ Security validation (email, phone, strong password)  
◆ Number validation (range, integer check)  
◆ Fully unit-tested with Vitest  
◆ Lightweight and fast  
◆ Supports ESM + CommonJS

</td>
</tr>
</table>

---

## <img src="https://cdn.simpleicons.org/npm/CB3837" width="24" height="24" align="center"/> Installation

```bash
# npm
npm install @arsema_tesfaye/validx

# yarn
yarn add @arsema_tesfaye/validx

# pnpm
pnpm add @arsema_tesfaye/validx
```

---

## <img src="https://cdn.simpleicons.org/files/FFA116" width="24" height="24" align="center"/> Project Structure

```
validx/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── PULL_REQUEST_TEMPLATE.md   # Template for pull requests to standardize contributions
│   │   ├── bug_report.md              # Template to submit bugs and issues
│   │   └── feature_request.md         # Template to propose new features
│   ├── workflows/
│   │   └── test.yml                   # CI workflow configuration for automated testing
├── examples/
│   └── index.ts                        # Demonstrates how to import and use validators in real scenarios
├── src/
│   ├── validators/
│   │   ├── numbers.ts                  # Functions to validate numeric inputs (positivity, ranges, advanced number rules)
│   │   ├── object.ts                   # Functions to validate objects and their structure
│   │   ├── security.ts                 # Security-focused validators (email, phone, strong passwords, sanitization)
│   │   └── string.ts                   # String validators (type checks, min/max length)
│   └── index.ts                        # Main export file to bundle all validators for easy import
├── tests/
│   ├── number.test.ts                  # Unit tests for numeric validators
│   ├── object.test.ts                  # Unit tests for object validators
│   ├── security.test.ts                # Unit tests for security validators
│   └── string.test.ts                  # Unit tests for string validators
├── CHANGELOG.md                         # Records all changes and version updates
├── CODE_OF_CONDUCT.md                   # Guidelines for community behavior
├── CONTRIBUTING.md                      # Guidelines for contributing to the project
├── LICENSE.md                            # MIT License text allowing free use and modification
├── README.md                             # Project overview, installation, and usage
├── index.js                              # Compiled entry point for npm package usage
├── logo.jpeg                             # Project logo used in documentation and promotion
├── package-lock.json                     # Locks exact package versions
├── package.json                          # Project metadata, dependencies, and scripts
└── tsconfig.json                         # TypeScript compiler configuration
```

---

## <img src="https://cdn.simpleicons.org/lightning/F7DF1E" width="24" height="24" align="center"/> Quick Start

ValidX is designed to be **readable**. Your validation logic should read like a sentence.

```typescript
import { isEmail, isStrongPassword, isInRange } from "validx";

// ① Define user inputs
const userEmail = "dev@aastu.edu.et";
const userPassword = "StrongP@ssw0rd!";
const userAge = 22;

// ② Validate inputs
const isValidUser = 
  isEmail(userEmail) && 
  isStrongPassword(userPassword) && 
  isInRange(userAge, 18, 99);

// ③ Handle result
if (isValidUser) {
  console.log("✓ Validation Passed: Access Granted");
} else {
  console.error("✗ Validation Failed: Check inputs");
}
```

---

## <img src="https://cdn.simpleicons.org/readme/4FC08D" width="24" height="24" align="center"/> Usage Examples

### <img src="https://cdn.simpleicons.org/textpattern/000000" width="18" height="18" align="center"/> String Validators

```typescript
import { minLength, maxLength, isString } from '@arsema_tesfaye/validx';

minLength("Hello", 3);   // true
maxLength("Hello", 10);  // true
isString(100);           // false

// Practical example
const username = "john_doe";
const isValid = isString(username) && 
                minLength(username, 3) && 
                maxLength(username, 20);

console.log(isValid); // true
```

### <img src="https://cdn.simpleicons.org/letsencrypt/0078D4" width="18" height="18" align="center"/> Security Validators

```typescript
import { isEmail, isPhone, isStrongPassword } from "validx";

isEmail("test@gmail.com");                // true
isPhone("+251912345678");                 // true
isStrongPassword("Aa@12345");             // true

// Form validation example
const userEmail = "dev@aastu.edu.et";
const userPass = "SecureP@ss123";

if (isEmail(userEmail) && isStrongPassword(userPass)) {
  console.log("✓ Valid credentials");
}
```

### <img src="https://cdn.simpleicons.org/numbersstation/00A3E0" width="18" height="18" align="center"/> Number Validators

```typescript
import { isNumber, isInRange, isPositive } from '@arsema_tesfaye/validx';

isNumber(12);             // true
isInRange(5, 1, 10);      // true
isPositive(-1);           // false

// Age validation example
const age = 25;
const quantity = 5;

const isValidOrder = isNumber(age) && 
                     isPositive(quantity) && 
                     isInRange(age, 18, 65);

console.log(isValidOrder); // true
```

---

## <img src="https://cdn.simpleicons.org/sparkles/DD0B78" width="24" height="24" align="center"/> Features

<table>
<thead>
  <tr>
    <th width="33%"><img src="https://cdn.simpleicons.org/target/FF6B6B" width="20" height="20"/> Tree-Shakeable</th>
    <th width="33%"><img src="https://cdn.simpleicons.org/letsencrypt/003A70" width="20" height="20"/> Type-Safe</th>
    <th width="33%"><img src="https://cdn.simpleicons.org/lightning/F7DF1E" width="20" height="20"/> Zero Dependencies</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td align="center">Import only what you need.<br/>Keep your bundle lightweight.</td>
    <td align="center">Written in TypeScript with<br/>full definitions included.</td>
    <td align="center">No bloat. Extremely fast<br/>execution times.</td>
  </tr>
</tbody>
</table>

<table>
<thead>
  <tr>
    <th width="33%"><img src="https://cdn.simpleicons.org/letsencrypt/0078D4" width="20" height="20"/> Secure</th>
    <th width="33%"><img src="https://cdn.simpleicons.org/codecov/F01F7A" width="20" height="20"/> 100% Coverage</th>
    <th width="33%"><img src="https://cdn.simpleicons.org/atom/FA7343" width="20" height="20"/> Intuitive API</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td align="center">Regex patterns tested against<br/>common vulnerabilities.</td>
    <td align="center">Every function is unit tested<br/>for edge cases.</td>
    <td align="center">Descriptive function names<br/>that explain themselves.</td>
  </tr>
</tbody>
</table>

---

## <img src="https://cdn.simpleicons.org/codesandbox/000000" width="24" height="24" align="center"/> Example Project

Try the included example to see ValidX in action:

```bash
# Navigate to example directory
cd examples/basic-usage

# Run the example
ts-node index.ts
```

**Example Code** (`examples/basic-usage/index.ts`):

```typescript
import { isEmail, minLength, isStrongPassword } from '@arsema_tesfaye/validx';

// Email validation
console.log("Email validation:");
console.log(isEmail("hello@example.com"));  // true
console.log(isEmail("invalid-email"));      // false

// String length validation
console.log("\nString validation:");
console.log(minLength("World", 3));         // true
console.log(minLength("Hi", 5));            // false

// Password strength
console.log("\nPassword validation:");
console.log(isStrongPassword("Weak123"));    // false
console.log(isStrongPassword("Strong@Pass1")); // true
```

---

## <img src="https://cdn.simpleicons.org/readme/018EF5" width="24" height="24" align="center"/> API Reference

> Detailed reference for all available methods in version **1.0.0**

### <img src="https://cdn.simpleicons.org/letsencrypt/0078D4" width="20" height="20" align="center"/> Security Validators

<table>
<thead>
  <tr>
    <th align="left">Method</th>
    <th align="left">Signature</th>
    <th align="center">Returns</th>
    <th align="left">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>isEmail</code></td>
    <td><code>(value: string)</code></td>
    <td align="center"><code>boolean</code></td>
    <td>Validates standard email formats. Checks for <code>@</code> symbol and valid domain extension structure.</td>
  </tr>
  <tr>
    <td><code>isPhone</code></td>
    <td><code>(value: string)</code></td>
    <td align="center"><code>boolean</code></td>
    <td>Validates international phone numbers. Supports optional <code>+</code> prefix and lengths between 7-15 digits.</td>
  </tr>
  <tr>
    <td><code>isStrongPassword</code></td>
    <td><code>(value: string)</code></td>
    <td align="center"><code>boolean</code></td>
    <td>Enforces strong security policies:<br/>• Min 8 characters<br/>• 1 Uppercase letter<br/>• 1 Lowercase letter<br/>• 1 Number<br/>• 1 Special character</td>
  </tr>
</tbody>
</table>

### <img src="https://cdn.simpleicons.org/textpattern/000000" width="20" height="20" align="center"/> String Validators

<table>
<thead>
  <tr>
    <th align="left">Method</th>
    <th align="left">Signature</th>
    <th align="center">Returns</th>
    <th align="left">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>isString</code></td>
    <td><code>(value: any)</code></td>
    <td align="center"><code>boolean</code></td>
    <td>Fundamental check to ensure the variable is of type <code>string</code>.</td>
  </tr>
  <tr>
    <td><code>minLength</code></td>
    <td><code>(val: string, min: number)</code></td>
    <td align="center"><code>boolean</code></td>
    <td>Returns <code>true</code> if string length is <strong>greater than or equal</strong> to <code>min</code>.</td>
  </tr>
  <tr>
    <td><code>maxLength</code></td>
    <td><code>(val: string, max: number)</code></td>
    <td align="center"><code>boolean</code></td>
    <td>Returns <code>true</code> if string length is <strong>less than or equal</strong> to <code>max</code>.</td>
  </tr>
</tbody>
</table>

### <img src="https://cdn.simpleicons.org/numbersstation/00A3E0" width="20" height="20" align="center"/> Number Validators

<table>
<thead>
  <tr>
    <th align="left">Method</th>
    <th align="left">Signature</th>
    <th align="center">Returns</th>
    <th align="left">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>isNumber</code></td>
    <td><code>(value: any)</code></td>
    <td align="center"><code>boolean</code></td>
    <td>Checks if value is a number. <strong>Excludes</strong> <code>NaN</code> (Not a Number) for safety.</td>
  </tr>
  <tr>
    <td><code>isPositive</code></td>
    <td><code>(value: number)</code></td>
    <td align="center"><code>boolean</code></td>
    <td>Checks if a number is strictly greater than <code>0</code>.</td>
  </tr>
  <tr>
    <td><code>isInRange</code></td>
    <td><code>(val: number, min: number, max: number)</code></td>
    <td align="center"><code>boolean</code></td>
    <td>Checks if <code>val</code> is inclusively between <code>min</code> and <code>max</code>.</td>
  </tr>
</tbody>
</table>

---

## <img src="https://cdn.simpleicons.org/testinglibrary/E33332" width="24" height="24" align="center"/> Running Tests

ValidX uses **Vitest** for comprehensive testing:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run coverage
```

**Test Coverage Includes:**

<table>
<tr>
<td width="50%">

▸ Valid inputs  
▸ Invalid inputs  
▸ Edge cases

</td>
<td width="50%">

▸ Null/undefined handling  
▸ Boundary values  
▸ Type checking

</td>
</tr>
</table>

**Example Test:**

```typescript
import { describe, it, expect } from 'vitest';
import { isEmail } from '../src/validators/security';

describe('isEmail', () => {
  it('should validate correct email', () => {
    expect(isEmail('test@example.com')).toBe(true);
  });

  it('should reject invalid email', () => {
    expect(isEmail('invalid')).toBe(false);
  });
});
```

---

## <img src="https://cdn.simpleicons.org/googleearth/4285F4" width="24" height="24" align="center"/> Roadmap

Our team is actively developing the next version. Below is the status of upcoming modules.

| Module | Status | Description |
|--------|--------|-------------|
| **Date Validation** | ![In Progress](https://img.shields.io/badge/●-In_Progress-yellow?style=flat-square) | `isDate`, `isFuture`, `isPast` |
| **Sanitizers** | ![Planned](https://img.shields.io/badge/●-Planned-red?style=flat-square) | `trim`, `escapeHTML`, `normalize` |
| **URL Validation** | ![Planned](https://img.shields.io/badge/●-Planned-red?style=flat-square) | Protocol and domain verification |
| **Object Schema** | ![Planned](https://img.shields.io/badge/●-Planned-red?style=flat-square) | Validating full JSON objects |
| **Async Support** | ![Planned](https://img.shields.io/badge/●-Planned-red?style=flat-square) | Database lookups and async checks |

---

## <img src="https://cdn.simpleicons.org/git/00A0DC" width="24" height="24" align="center"/> Contributing

<div align="center">

**We welcome contributions from the community!**

Please ensure you follow our [Code of Conduct](CODE_OF_CONDUCT.md)

</div>

### Contribution Workflow

```bash
# 1. Fork the repository
# 2. Clone your fork
git clone https://github.com/Arsema-prog/validX.git

# 3. Create a feature branch
git checkout -b feature/new-validator

# 4. Make your changes
# Add validators in src/validators/
# Add tests in tests/

# 5. Run tests before submitting
npm run build
npm run test

# 6. Commit your changes
git commit -m "feat: add isURL validator"

# 7. Push to your fork
git push origin feature/new-validator

# 8. Open a Pull Request
```

📖 For detailed guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md)

---

<div align="center">

### <img src="https://cdn.simpleicons.org/trophy/FFD700" width="20" height="20" align="center"/> Built by Group 3

**AASTU Software Engineering Department**

<img src="https://img.shields.io/badge/Made_with-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
<img src="https://img.shields.io/badge/Tested_with-Vitest-729B1B?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest"/>
<img src="https://img.shields.io/badge/License-MIT-black?style=for-the-badge&logo=opensourceinitiative&logoColor=white" alt="MIT"/>

**© 2025 ValidX Project • Distributed under the MIT License**

[<img src="https://cdn.simpleicons.org/go/FF6B6B" width="16" height="16"/> Back to Top](#-validx)

</div>
