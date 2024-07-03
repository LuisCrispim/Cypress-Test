const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1wvyc8",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: "mochawesome",
    reporterOptions: {
      reporDir: "cypress/results",
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyy_HHMMss",
    },
  },
});
