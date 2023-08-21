const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/",
    defaultCommandTimeout: 20000 ,
    requestTimeout: 40000 ,
    testIsolation: false

  },
});
