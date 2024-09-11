const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.lambdatest.com/selenium-playground/',
    viewportWidth: 900,
    viewportHeight: 1680,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 50000,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
