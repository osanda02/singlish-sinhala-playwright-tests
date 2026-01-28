# Singlish → Sinhala Translator Testing (Playwright)

This repository contains automated functional and UI tests for the Singlish-to-Sinhala transliteration system available at:

https://www.swifttranslator.com/

The objective of this project is to assess:
- Accuracy of Singlish to Sinhala conversion
- Robustness under different input conditions
- UI behavior such as real-time output updating and input handling

This project was developed as part of an academic testing assignment using Playwright.

---

## Tools & Technologies
- Node.js
- Playwright Test
- Visual Studio Code
- GitHub

---

## Project Structure (File Separation)

singlish-sinhala-playwright-tests/
├─ tests/
│  ├─ positive-functional.spec.js   # Positive functional test cases (24 tests)
│  ├─ negative-functional.spec.js   # Negative / robustness test cases
│  └─ ui.spec.js                    # UI-related test scenario(s)
├─ playwright.config.js             # Playwright configuration file
├─ package.json                     # Project dependencies
├─ reports/
│  └─ screenshots/                  # HTML report screenshots (positive & negative tests only)
└─ README.md                        # Project documentation

==============================================================================================================================

## Prerequisites
- Node.js (latest LTS recommended)
- npm (included with Node.js)

git clone ----> <https://github.com/osanda02/singlish-sinhala-playwright-tests.git>

=============================================================================================================================

## Run tests separately (Positive, Negative & UI)
-> npx playwright test tests/positive-functional.spec.js
-> npx playwright test tests/negative-functional.spec.js
-> npx playwright test tests/ui.spec.js

Run tests on Chromium only -> npx playwright test --project=chromium

View HTML Report
- npx playwright show-report

===========================================================================================================================

## Test Execution Evidence (Screenshots)

Screenshots are stored here:
`reports/screenshots/`

### View screenshots
- [Positive Functional Report](reports/screenshots/positive-functional-report.png)
- [Negative Functional Report](reports/screenshots/negative-functional-report.png)
