<h5 align="center">
Run <a href="https://developers.google.com/web/tools/lighthouse">Lighthouse</a> and <a href="https://github.com/pa11y/pa11y">Pa11y</a> audits directly in <a href="https://cypress.io/">Cypress</a> test suites
</h5>

---

[![License: GNU General Public License](https://img.shields.io/badge/License-GNU%20--%20General%20Public%20License-yellow)](https://fsf.org/)

# Table of Content
- [Introduction](#Lighthouse-Cypress-Integration)
- [Usage](#How-to-use-the-repo)
- [Process and Working](#Process-and-Working-Just-for-information)
  - [Pre-Requisite](#Pre-Requisite)
  - [Adding dependencies and writing test](#Adding-dependencies-and-writing-test)
- [References](#References)

# Introduction

The first tool that most engineers probably associate with front end or client side performance testing is [Google Lighthouse](https://developers.google.com/web/tools/lighthouse). So when I stumbled upon a Cypress plugin which lets you run Lighthouse audits directly from your Cypress tests, I had to share this knowledge with the community.

The following tools and applications are used in doing the audit.

- [Cypress](https://cypress.io/) - The web has evolved. Finally, testing has too. Fast, easy and reliable testing for anything that runs in a browser.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - To perform Performance audit with various [parameters](https://web.dev/performance-scoring/)
- [Pa11y](https://pa11y.org/) - Tools to analyze and improve the accessibility status of applications

This is an example repository to showcase how you can use cypress-audit to easily integrate lighthouse commands into your Cypress tests.

# How to use the repo

- Clone the repository
- In the root folder run `npm install` to get all the dependencies required to run the test

# Process and Working (Just for information)

The following things are configured as part of creating this demo.

## Pre-Requisite

- [Node.js and npm](https://nodejs.org/) is installed in the system.
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) is installed in a folder in home directory.

## Adding dependencies and writing test

- Information on adding dependencies for importing `cypress-audit` library is added in [support folder](./cypress/support).
- Information on adding Lighthouse and Report Configuration is added in [plugin folder](./cypress/plugins/).
- Information on Test Case and Parameter for running the test is added in [integration folder](./cypress/integration/).
- [Cypress.json](./cypress.json) consist of BaseUrl and default timeouts which can be changed based on need.
- [package-lock.json](./package-lock.json) consist of all the npm dependencies required to run Cypress and Lighthouse.

# References
- [Cypress Installation](https://docs.cypress.io/guides/getting-started/installing-cypress)
- [Cypress-audit](https://github.com/mfrachet/cypress-audit)
- [pa11y](https://pa11y.org/)
