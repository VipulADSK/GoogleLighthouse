/// <reference types="Cypress" />
class RunLighthouse
{
    runAudit(){
        const customThresholds = {
            performance: 50,
            accessibility: 50,
            "best-practices": 50,
            seo: 40,
            //pwa: 30,
            
            //Below are the scores which determines performance sccores (Refer https://web.dev/performance-scoring/)
            "first-contentful-paint": 5000,
            "largest-contentful-paint": 5000,
            "first-meaningful-paint": 50000,
            "speed-index": 6000,
            "cumulative-layout-shift": 0.1,
            "total-blocking-time": 100,
            "interactive": 5000,
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
  
        const DEVTOOLS_RTT_ADJUSTMENT_FACTOR = 5;
        const DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR = 0.8;
        const desktopConfig = {
            //extends: 'lighthouse:default',
            formFactor: 'desktop',
            
            throttlingMethod: 'devtools', //Method can be any of the following "devtools", "provided", "simulate"
            
        // Using a "broadband" connection type
        // Corresponds to "Dense 4G 25th percentile" in https://docs.google.com/document/d/1Ft1Bnq9-t4jK5egLSOc28IL4TvR-Tt0se_1faTA4KTY/edit#heading=h.bb7nfy2x9e5v
                throttling:{
                        rttMs: 40,
                        throughputKbps: 10 * 1024,
                        cpuSlowdownMultiplier: 1,
                        requestLatencyMs: 40 * DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
                        downloadThroughputKbps: 10 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
                        uploadThroughputKbps: 10 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
                },
            

        // These values align with WebPageTest's definition of "Fast 3G"
        // But offer similar charateristics to roughly the 75th percentile of 4G connections.
                // throttling:{
                //      rttMs: 150,
                //      throughputKbps: 1.6 * 1024,
                //      requestLatencyMs: 150 * DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
                //      downloadThroughputKbps: 1.6 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
                //      uploadThroughputKbps: 750 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
                //      cpuSlowdownMultiplier: 1,
                // },
            
            
        // These values partially align with WebPageTest's definition of "Regular 3G".
        // These values are meant to roughly align with Chrome UX report's 3G definition which are based
        // on HTTP RTT of 300-1400ms and downlink throughput of <700kbps.
                // throttling:{
                //      rttMs: 300,
                //      throughputKbps: 700,
                //      requestLatencyMs: 300 * DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
                //      downloadThroughputKbps: 700 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
                //      uploadThroughputKbps: 700 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
                //      cpuSlowdownMultiplier: 1,
                // },


            screenEmulation: { disabled: true },
        }
        
        cy.lighthouse(customThresholds, desktopConfig)
        return this
    }
}

export default RunLighthouse
