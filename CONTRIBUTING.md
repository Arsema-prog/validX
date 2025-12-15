<div align="center">

# <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/git.svg" width="40" height="40" alt="Contributing"/> Contributing to ValidX

![Contributing](https://img.shields.io/badge/Contributions-Welcome-success?style=for-the-badge&logo=github&logoColor=white)
![PRs](https://img.shields.io/badge/PRs-Open-blue?style=for-the-badge&logo=git&logoColor=white)

<p align="center">
<strong>Thank you for considering contributing to ValidX!</strong><br/>
We welcome contributions from everyone in the community.
</p>

</div>

---

## <img src="https://cdn.simpleicons.org/rocket/FF6B6B" width="24" height="24" align="center"/> Quick Navigation

<table>
<tr>
<td align="center" width="25%">
<a href="#-contribution-workflow"><strong><img src="https://cdn.simpleicons.org/checkmarx/54B848" width="18" height="18"/> Workflow</strong></a><br/>
Step-by-step guide
</td>
<td align="center" width="25%">
<a href="#-code-guidelines"><strong><img src="https://cdn.simpleicons.org/markdown/000000" width="18" height="18"/> Guidelines</strong></a><br/>
Coding standards
</td>
<td align="center" width="25%">
<a href="#-reporting-issues"><strong><img src="https://cdn.simpleicons.org/bugcrowd/F26822" width="18" height="18"/> Report Issues</strong></a><br/>
Bug reporting
</td>
<td align="center" width="25%">
<a href="#-code-of-conduct"><strong><img src="https://cdn.simpleicons.org/handshake/00A0DC" width="18" height="18"/> Conduct</strong></a><br/>
Community rules
</td>
</tr>
</table>

---

## <img src="https://cdn.simpleicons.org/checkmarx/54B848" width="24" height="24" align="center"/> Contribution Workflow

### <img src="https://cdn.simpleicons.org/circled1/1877F2" width="20" height="20" align="center"/> Fork the Repository

Click the **Fork** button on the top right of the GitHub page to create your own copy of the repository.

<div align="center">

![Fork](https://img.shields.io/badge/Step_1-Fork_Repository-181717?style=flat-square&logo=github)

</div>

---

### <img src="https://cdn.simpleicons.org/circled2/1877F2" width="20" height="20" align="center"/> Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/validX.git
cd validX
```

<div align="center">

![Clone](https://img.shields.io/badge/Step_2-Clone_Fork-FF6B6B?style=flat-square&logo=git)

</div>

---

### <img src="https://cdn.simpleicons.org/circled3/1877F2" width="20" height="20" align="center"/> Create a Branch

Always create a new branch for your changes:

```bash
# For new features
git checkout -b feature/my-new-validator

# For bug fixes
git checkout -b fix/issue-description

# For documentation
git checkout -b docs/update-readme
```

> [!TIP]
> Use descriptive branch names that clearly indicate the purpose of your changes.

<div align="center">

![Branch](https://img.shields.io/badge/Step_3-Create_Branch-4ECDC4?style=flat-square&logo=git)

</div>

---

### <img src="https://cdn.simpleicons.org/circled4/1877F2" width="20" height="20" align="center"/> Make Changes

<table>
<thead>
  <tr>
    <th>Directory</th>
    <th>Purpose</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>src/validators/</code></td>
    <td>Add or update validators</td>
    <td><code>isURL.ts</code></td>
  </tr>
  <tr>
    <td><code>tests/</code></td>
    <td>Add unit tests</td>
    <td><code>isURL.test.ts</code></td>
  </tr>
  <tr>
    <td><code>examples/</code></td>
    <td>Add usage examples</td>
    <td><code>url-validation.ts</code></td>
  </tr>
  <tr>
    <td><code>docs/</code></td>
    <td>Update documentation</td>
    <td><code>api-reference.md</code></td>
  </tr>
</tbody>
</table>

<div align="center">

![Code](https://img.shields.io/badge/Step_4-Make_Changes-95E1D3?style=flat-square&logo=visualstudiocode)

</div>

---

### <img src="https://cdn.simpleicons.org/circled5/1877F2" width="20" height="20" align="center"/> Run Examples & Tests

Before submitting, make sure everything works correctly:

```bash
# Build the project
npm run build

# Run examples to verify functionality
npm run example

# Run test suite (ensure 100% pass rate)
npm run test

# Check test coverage
npm run coverage
```

> [!IMPORTANT]
> All tests must pass before submitting a pull request. We maintain 100% test coverage.

<div align="center">

![Test](https://img.shields.io/badge/Step_5-Run_Tests-F38181?style=flat-square&logo=vitest)

</div>

---

### <img src="https://cdn.simpleicons.org/circled6/1877F2" width="20" height="20" align="center"/> Commit Your Changes

Follow a clear and consistent commit message format:

```bash
git add .

# Use conventional commits format
git commit -m "feat: add isURL validator"
git commit -m "fix: handle edge case in isEmail"
git commit -m "docs: update API documentation"
git commit -m "test: add tests for isPhone"
```

#### Commit Message Format

| Prefix | Purpose | Example |
|--------|---------|---------|
| `feat:` | New feature | `feat: add isURL validator` |
| `fix:` | Bug fix | `fix: handle null values in isString` |
| `docs:` | Documentation | `docs: update README examples` |
| `test:` | Tests | `test: add edge cases for isEmail` |
| `refactor:` | Code refactoring | `refactor: simplify isStrongPassword logic` |
| `style:` | Code style | `style: format code with prettier` |

<div align="center">

![Commit](https://img.shields.io/badge/Step_6-Commit_Changes-AA96DA?style=flat-square&logo=git)

</div>

---

### <img src="https://cdn.simpleicons.org/circled7/1877F2" width="20" height="20" align="center"/> Push Your Branch

```bash
git push origin feature/my-new-validator
```

<div align="center">

![Push](https://img.shields.io/badge/Step_7-Push_Branch-FCBAD3?style=flat-square&logo=github)

</div>

---

### <img src="https://cdn.simpleicons.org/circled8/1877F2" width="20" height="20" align="center"/> Open a Pull Request

1. Go to your fork on GitHub
2. Click **Compare & pull request**
3. Fill out the PR template with:
   - Clear description of changes
   - Related issue numbers (if applicable)
   - Screenshots (for UI changes)
   - Testing performed
4. Submit the PR

> [!NOTE]
> Our maintainers will review your PR and may request changes. Please be responsive to feedback.

<div align="center">

![PR](https://img.shields.io/badge/Step_8-Open_PR-FFFFD2?style=flat-square&logo=github)

</div>

---

## <img src="https://cdn.simpleicons.org/markdown/000000" width="24" height="24" align="center"/> Code Guidelines

<table>
<thead>
  <tr>
    <th width="30%">Guideline</th>
    <th width="70%">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong><img src="https://cdn.simpleicons.org/checkbox/4CAF50" width="16" height="16" align="center"/> Use TypeScript</strong></td>
    <td>All code must be written in TypeScript with proper type annotations</td>
  </tr>
  <tr>
    <td><strong><img src="https://cdn.simpleicons.org/checkbox/4CAF50" width="16" height="16" align="center"/> Follow Structure</strong></td>
    <td>Maintain the existing folder and file organization</td>
  </tr>
  <tr>
    <td><strong><img src="https://cdn.simpleicons.org/checkbox/4CAF50" width="16" height="16" align="center"/> Write Clear Code</strong></td>
    <td>Code should be self-documenting with descriptive variable and function names</td>
  </tr>
  <tr>
    <td><strong><img src="https://cdn.simpleicons.org/checkbox/4CAF50" width="16" height="16" align="center"/> Include Tests</strong></td>
    <td>Every new validator must have comprehensive unit tests</td>
  </tr>
  <tr>
    <td><strong><img src="https://cdn.simpleicons.org/checkbox/4CAF50" width="16" height="16" align="center"/> Document Everything</strong></td>
    <td>Add JSDoc comments for all public functions and types</td>
  </tr>
  <tr>
    <td><strong><img src="https://cdn.simpleicons.org/checkbox/4CAF50" width="16" height="16" align="center"/> Keep It Simple</strong></td>
    <td>Favor simplicity over complexity; avoid over-engineering</td>
  </tr>
  <tr>
    <td><strong><img src="https://cdn.simpleicons.org/checkbox/4CAF50" width="16" height="16" align="center"/> Zero Dependencies</strong></td>
    <td>Do not add external dependencies; keep the library lean</td>
  </tr>
</tbody>
</table>

---

## <img src="https://cdn.simpleicons.org/bugcrowd/F26822" width="24" height="24" align="center"/> Reporting Issues

### Before Creating an Issue

◆ Search existing issues to avoid duplicates  
◆ Check if the issue is already fixed in the latest version  
◆ Gather all relevant information

### Creating a Good Issue Report

Use the **Issues tab** on GitHub and include:

| Field | Description |
|-------|-------------|
| **Clear Title** | Concise summary of the issue |
| **Description** | Detailed explanation of the problem |
| **Steps to Reproduce** | Numbered list of exact steps |
| **Expected Behavior** | What should happen |
| **Actual Behavior** | What actually happens |
| **Environment** | OS, Node version, package version |
| **Code Sample** | Minimal reproducible example |

### Issue Labels

Tag your issue appropriately:

![Bug](https://img.shields.io/badge/bug-Something_isn't_working-d73a4a?style=flat-square)
![Enhancement](https://img.shields.io/badge/enhancement-New_feature_request-a2eeef?style=flat-square)
![Question](https://img.shields.io/badge/question-Further_information_needed-d876e3?style=flat-square)
![Documentation](https://img.shields.io/badge/documentation-Improvements_needed-0075ca?style=flat-square)

---

## <img src="https://cdn.simpleicons.org/handshake/00A0DC" width="24" height="24" align="center"/> Code of Conduct

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md) when interacting with the community.

### Quick Summary

◆ Be respectful and inclusive  
◆ Accept constructive criticism gracefully  
◆ Focus on what's best for the community  
◆ Show empathy towards others

> [!CAUTION]
> Violations of the Code of Conduct may result in being banned from the project.

---

## <img src="https://cdn.simpleicons.org/lightbulb/FFEB3B" width="24" height="24" align="center"/> What to Contribute

Looking for ideas? Here are some ways you can contribute:

<table>
<tr>
<td width="50%">

### <img src="https://cdn.simpleicons.org/target/FF6B6B" width="20" height="20" align="center"/> High Priority

◆ Writing new validators  
◆ Adding comprehensive tests  
◆ Improving documentation  
◆ Fixing reported bugs

</td>
<td width="50%">

### <img src="https://cdn.simpleicons.org/starship/DD0B78" width="20" height="20" align="center"/> Also Helpful

◆ Improving error messages  
◆ Adding usage examples  
◆ Performance optimizations  
◆ TypeScript type improvements

</td>
</tr>
</table>

---

## <img src="https://cdn.simpleicons.org/trophy/FFD700" width="24" height="24" align="center"/> Recognition

Contributors will be:

▸ Listed in our [Contributors](https://github.com/Arsema-prog/validX/graphs/contributors) page  
▸ Mentioned in release notes  
▸ Recognized in our community

---

<div align="center">

## <img src="https://cdn.simpleicons.org/heart/FF006E" width="24" height="24" align="center"/> Thank You!

**Thank you for helping make ValidX better!**

Your contributions make a difference in the TypeScript ecosystem.

---

![Contributors](https://img.shields.io/badge/Contributors-Welcome-success?style=for-the-badge&logo=github)
![Community](https://img.shields.io/badge/Community-Driven-blue?style=for-the-badge&logo=opensourceinitiative)

**Questions?** Reach out to the maintainers or open a discussion!

[<img src="https://cdn.simpleicons.org/circuitverse/FF6B6B" width="16" height="16"/> Back to Top](#-contributing-to-validx)

</div>
