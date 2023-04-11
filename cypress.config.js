const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const { pa11y } = require("@cypress-audit/pa11y");
const fs = require('fs');

module.exports = {
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/", // this is your app
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task",
      {
          lighthouse: lighthouse((lighthouseReport) =>
          {
            console.log("---- Writing lighthouse report to disk ----");

            fs.writeFile("lighthouse.html", lighthouseReport.report, (error) =>
            {
              error ? console.log(error) : console.log("Report created successfully");
            });
          }),
        });
    },
  },
};