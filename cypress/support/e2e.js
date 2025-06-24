// Import commands.js (if you ever define custom commands)
// import "./commands";

// Optional: Handle uncaught exceptions to prevent test crashes
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false prevents Cypress from failing the test
  return false;
});
