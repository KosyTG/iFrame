const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'iFrame-report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'https://www.lambdatest.com/selenium-playground/',
    viewportWidth: 900,
    viewportHeight: 1680,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 50000,
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
