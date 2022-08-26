const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  projectId: "boiqdh",
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents: async (on, config) => {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        webpack({
          webpackOptions: {
            resolve: {
              extensions: [".ts", ".js"],
            },
            module: {
              rules: [
                {
                  test: /\.feature$/,
                  use: [
                    {
                      loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                      options: config,
                    },
                  ],
                },
              ],
            },
          },
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
  env: {
    url: "https://rahulshettyacademy.com/angularpractice/",
  },
});
