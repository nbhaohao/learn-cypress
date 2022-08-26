const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'boiqdh',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    url: "https://rahulshettyacademy.com/angularpractice/",
  },
});
