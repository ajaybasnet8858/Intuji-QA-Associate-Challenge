const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com",
    testIsolation: false, 
    specPattern: "cypress/e2e/**/*.cy.js",
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
    },
    supportFile: "cypress/support/e2e.js",
    video: true,
    screenshotOnRunFailure: true,
    watchForFileChanges: false,
  }
});
