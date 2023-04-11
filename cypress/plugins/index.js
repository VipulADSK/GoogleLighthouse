////// ***********************************************************
////// This example plugins/index.js can be used to load plugins
//////
////// You can change the location of this file or turn off loading
////// the plugins file with the 'pluginsFile' configuration option.
//////
////// You can read more here:
////// https://on.cypress.io/plugins-guide
////// ***********************************************************
////
////// This function is called when a project is opened or re-opened (e.g. due to
////// the project's config changing)
////
/////**
//// * @type {Cypress.PluginConfig}
//// */
////// eslint-disable-next-line no-unused-vars
////// module.exports = (on, config) => {
//////   // `on` is used to hook into various events Cypress emits
//////   // `config` is the resolved Cypress config
////// }
//
//const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
//const fs = require('fs');
//
//module.exports = (on, config) => {
//  on("before:browser:launch", (browser = {}, launchOptions) => {
//    prepareAudit(launchOptions);
//  });
//
//  on("task", {
//    lighthouse: lighthouse((lighthouseReport) => {
//      console.log('---- Writing lighthouse report to disk ----');
//
//            fs.writeFile(
//                'lighthouse.html',
//                lighthouseReport.report,
//                (error: any) => {
//                    error
//                        ? console.log(error)
//                        : console.log('Report created successfully');
//                },
//            );
//    }),
//  });
//};