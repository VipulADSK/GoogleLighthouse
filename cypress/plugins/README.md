## Accessing the raw reports

In the cypress/plugins/index.js file:
```
const { lighthouse, pa11y, prepareAudit } = require("cypress-audit");

module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on("task", {
    lighthouse: lighthouse((lighthouseReport) => {
      console.log(lighthouseReport); // raw lighthouse reports
    }),
    pa11y: pa11y((pa11yReport) => {
      console.log(pa11yReport); // raw pa11y reports
    }),
  });
};
```

However, printing to the console isn't that helpful. Hence we have following options: -
* Save the Audits and Categories scores in seperate JSON files - The same logic is used by this plugin internally (cypress-audit/src/performances/helpers.js)
```
module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on("task", {
    lighthouse: lighthouse((lighthouseReport) => {
      const categories = lighthouseReport.lhr.categories;
      const audits = lighthouseReport.lhr.audits;
      const formattedAudit = Object.keys(audits).reduce(
        (metrics, curr) => ({
          ...metrics,
          [curr]: audits[curr].numericValue,
        }),
        {}
      );
      const formattedAuditsResults = {
        url: lighthouseReport.lhr.requestedUrl,
        ...formattedAudit,
      };
      const auditReportName =
        "./audit-" +
        lighthouseReport.lhr.requestedUrl.replace(
          /[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g,
          function (x) {
            return "";
          }
        ) +
        " - " +
        lighthouseReport.lhr.fetchTime.split("T")[0] +
        ".json";

      fs.writeFileSync(
        auditReportName,
        JSON.stringify(formattedAuditsResults, null, 2)
      );
      const formattedCategories = Object.keys(categories).reduce(
        (metrics, curr) => ({
          ...metrics,
          [curr]: categories[curr].score * 100,
        }),
        {}
      );

      const formattedCategoriesResults = {
        url: lighthouseReport.lhr.requestedUrl,
        ...formattedCategories,
      };

      const categoriesReportName =
        "./categories-" +
        lighthouseReport.lhr.requestedUrl.replace(
          /[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g,
          function (x) {
            return "";
          }
        ) +
        " - " +
        lighthouseReport.lhr.fetchTime.split("T")[0] +
        ".json";

      fs.writeFileSync(
        categoriesReportName,
        JSON.stringify(formattedCategoriesResults, null, 2)
      );
    }),
  });
};
```
* Save the whole report in a JSON file.

```
module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on('task', {
    lighthouse: lighthouse((lighthouseReport) => {
      const dirPath = './PerfReports'
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
      }
      const name = (lighthouseReport.lhr.requestedUrl).replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, function (x) { return '' }) + " - " + (lighthouseReport.lhr.fetchTime).split('T')[0]
      fs.writeFileSync(`${dirPath}/GLH-(${name}).json`, JSON.stringify(lighthouseReport, null, 2))
    }),
  });
};
```

Now, with the full JSON file, you can view the html report from [Lighthouse-Report-Viewer](https://googlechrome.github.io/lighthouse/viewer/).