/// <reference types="Cypress" />
describe('Lighthouse', () => {
    it('should run performance audits', () => {
        //Clear Storage and Cookies to fresh start Cypress and not to have impact of Cookies and Storage on Lighthouse Score
        //Going to BaseUrl and Resize
        cy.visit('/')
        cy.viewport(1536, 960)
        
        //Login
        cy.get('#login2').click()
        cy.wait(2000)
        cy.get('#loginusername').should('be.visible')
        cy.get('#loginusername').type('adsktest2020')
        cy.get('#loginpassword').type('pa3$WORD')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(5000)
       
        //Running Lighthouse. More information on various audits below can be found on https://web.dev/learn/#lighthouse
        const customThresholds = {
            performance: 70,
            accessibility: 50,
            "best-practices": 50,
            seo: 40,
            pwa: 30,
            
            //Below are the scores which determines performance sccores (Refer https://web.dev/performance-scoring/)
            "first-contentful-paint": 3000,
            "largest-contentful-paint": 3000,
            "first-meaningful-paint": 3000,
            "speed-index": 3000,
            "cumulative-layout-shift": 1,
            "total-blocking-time": 2,
            "interactive": 3000,
            // "max-potential-fid": 1000,
            // "server-response-time": 3000,
            // "mainthread-work-breakdown": 1000,
            // "bootup-time": 500,
            // "network-server-latency": 1000,
            // "metrics": 1500,
            // "uses-long-cache-ttl": 1700000,
            // "total-byte-weight": 3000000,
            // "dom-size": 1000
        };
        const DEVTOOLS_RTT_ADJUSTMENT_FACTOR = 3.75;
        const DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR = 0.9;
        
        // For more details on network and CPU throttling and choosing the value refer https://github.com/GoogleChrome/lighthouse/blob/master/docs/throttling.md#devtools-lighthouse-panel-throttling
        const desktopConfig = {
            extends: 'lighthouse:default',
            formFactor: 'desktop',
         
            
            //1. No throttling and CPU slowdown (This will test performance with full CPU and Network Connection Spec of the device)
                throttling:{
                    cpuSlowdownMultiplier: 0,
                    rttMs: 0,
                    throughputKbps: 0,
                },


            //2. Throttling Set to Broadband with Latency 40ms and Throughput 10 Mbps
                // throttling:{
                //     cpuSlowdownMultiplier: 1,
                //     rttMs: 40,
                //     throughputKbps: 10 * 1024,
                // },
            

            //3. Throttling Set to mobile 4G with Latency 150ms and Throughput 1.6 Mbps
                // throttling:{
                //     cpuSlowdownMultiplier: 1,
                //     rttMs: 150,
                //     throughputKbps: 1.6 * 1024,
                //     requestLatencyMs: 150 * DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
                // },
            
            
            //4.  Throttling Set to mobile 3G with Latency 300ms and Throughput 700 Kbps
                // throttling:{
                //     cpuSlowdownMultiplier: 1,
                //     rttMs: 300,
                //     throughputKbps: 700,
                // },


            screenEmulation: { disabled: true },
        };

        cy.lighthouse(customThresholds, desktopConfig)
    });
  });