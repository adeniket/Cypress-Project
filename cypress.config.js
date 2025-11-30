const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress\e2e\*.cy.js',
    retries:1,
  },
  env:{
    OrangeHrmbaseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth'
  }
});
