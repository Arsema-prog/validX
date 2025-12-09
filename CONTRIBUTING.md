# Contributing to ValidX

First off, thank you for considering contributing to **ValidX**!   
We welcome contributions from everyone in the community.

---

## How to Contribute

### 1. Fork the Repository
Click the **Fork** button on the top right of the GitHub page to create your own copy of the repository.

### 2. Clone Your Fork
```bash
git clone https://github.com/Arsema-prog/validX.git
cd validX
```

### 3. Create a Branch
Always create a new branch for your changes:
```bash
git checkout -b feature/my-new-validator
```
or for fixes:
```bash
git checkout -b fix/issue-description
```

### 4. Make Changes
- Add new validators under `src/validators/`  
- Update existing validators if needed  
- Add examples under `examples/`  
- Add tests under `tests/`  

### 5. Run Examples & Tests
Before submitting, make sure everything works:
```bash
npm run build
npm run example
npm run test
```

### 6. Commit Your Changes
Follow a clear commit message format:
```bash
git add .
git commit -m "Add isEven validator"
```

### 7. Push Your Branch
```bash
git push origin feature/my-new-validator
```

### 8. Open a Pull Request
- Go to your fork on GitHub  
- Click **Compare & pull request**  
- Describe your changes clearly  
- Submit the PR  

---

## Code Guidelines

- Use **TypeScript**  
- Follow the **existing folder structure**  
- Write **clear and readable code**  
- Include **tests** for new validators  
- Keep **function names descriptive**  

---

## Reporting Issues

- Use the **Issues tab** on GitHub  
- Include a **clear description**, steps to reproduce, and expected vs actual results  
- Tag appropriately (bug, enhancement, question)

---

## Code of Conduct

Please follow the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) when interacting with the community.

---

Thank you for helping make **ValidX** better! 
