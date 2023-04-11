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
            const dirPath = './PerfReports'
                  if (!fs.existsSync(dirPath)) {
                    fs.mkdirSync(dirPath)
                  }
            const name = (lighthouseReport.lhr.requestedUrl).replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, function (x) { return '' }) + " - " + (lighthouseReport.lhr.fetchTime).split('T')[0]
            fs.writeFile(`${dirPath}/GLH-(${name}).html`, lighthouseReport.report, (error) =>
            {
              error ? console.log(error) : console.log("Report created successfully");
            });
          }),
        });
    },
  },
};