# Cypress-Project

End-to-end web test automation project built with **Cypress** and **JavaScript**, structured using the Page Object Model (POM) and JSON test fixtures.

## Project Structure

- `cypress/e2e/` — End-to-end test specs (`ATMSimulator.cy.js`, `spec.cy.js`)
- `cypress/support/page/` — Page Object classes (`loginPage.js`)
- `cypress/support/` — Custom Cypress commands and global support configuration (`commands.js`, `e2e.js`)
- `cypress/fixtures/` — Test data and element locator files (`loginData.json`, `ElementLocator.json`)
- `cypress.config.js` — Cypress runner configuration

## Getting Started

```bash
npm install
npx cypress run
```

To open the interactive Cypress Test Runner:

```bash
npx cypress open
```