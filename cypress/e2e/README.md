## Writing the Test
```
describe('Lighthouse', () => {
  it('should run performance audits', () => {
    cy.visit('/');
    cy.lighthouse();
  });
});
```

By default, cypress-audit will run the test based on a score of 100 for every metric. Kindly also note that this plugin only supports the following browsers at the moment: -
```
const defaultThresholds = {
  performance: 100,
  accessibility: 100,
  "best-practices": 100,
  seo: 100,
  pwa: 100,
};

const VALID_BROWSERS = {
  Chrome: true,
  Chromium: true,
  Canary: true,
};
```

This code is taken from cypress-audit/src/performances/command-handler.js file.

The thresholds can be modified and you are free to customise which metrics you want to track. You can also pass in a custom configuration to update the metric scores. Here is a code snippet on how you can pass custom configurations in cypress-audit.

```
describe('Lighthouse', () => {
  it('should run performance audits using custom thresholds', () => {
      cy.visit('/');

      const customThresholds = {
        performance: 50,
        accessibility: 50,
        seo: 70,
        'first-contentful-paint': 2000,
        'largest-contentful-paint': 3000,
        'cumulative-layout-shift': 0.1,
        'total-blocking-time': 500,
        "max-potential-fid": 1000,
        "server-response-time": 3000,
        "mainthread-work-breakdown": 1000,
        "bootup-time": 500,
        "network-server-latency": 1000,
        "metrics": 1500,
        "uses-long-cache-ttl": 1700000,
        "total-byte-weight": 3000000,
        "dom-size": 1000
      };

      const desktopConfig = {
        formFactor: 'desktop',
        throttling:{
                    cpuSlowdownMultiplier: 0,
                    rttMs: 0,
                    throughputKbps: 0,
                },
        screenEmulation: { disabled: true },
      };

      cy.lighthouse(customThresholds, desktopConfig);
    });
});
```