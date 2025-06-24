# 🧪 Cypress DemoQA Showcase
This is an automated testing project built with **Cypress** and **Gherkin (Cucumber-style)** syntax, designed to demonstrate modern QA practices using the [DemoQA](https://demoqa.com/) website.
---

## 🚀 Features
✅ Behavior-driven development (BDD) with `.feature` files  
✅ Modular **Page Object Model (POM)** structure  
✅ Realistic form automation with both valid and invalid inputs  
✅ File upload, modals, tooltips, dropdowns, and more  
✅ Beautiful, shareable test reports using **Mochawesome**  
✅ Clean, maintainable folder structure for scalability  
---

## 📁 Project Structure
```cypress/
├── data/ # Test data files
├── e2e/ # .feature files and scenarios
│   ├── homepage/
│   └── textBox/
│   └── and-so-on/
├── pages/ # Page Object files
├── support/
│   ├── step_definitions/ # Step definitions by feature
│   └── commands.js # (optional) custom Cypress commands
└── reports/ # Mochawesome test reports
```
---

## 🛠 Setup Instructions
```bash
git clone https://github.com/ediologi/cypress-demoqa.git
cd cypress-demoqa
npm install
```
## ✅ Run tests headlessly
```npm run test:full```
## OR open Cypress runner
```npx cypress open```

## 📊 View Test Report
```cypress/reports/mochawesome/mochawesome.html```

## 📌 Notes
- .env is excluded from Git tracking (holds the baseUrl)
