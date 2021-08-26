class RunLighthouse
{
    runAudit(){
        const customThresholds = {
            performance: 70,
            accessibility: 50,
            "best-practices": 50,
            seo: 40,
            pwa: 30,
            
            //Below are the scores which determines performance sccores (Refer https://web.dev/performance-scoring/)
            "first-contentful-paint": 4000,
            "largest-contentful-paint": 4000,
            "first-meaningful-paint": 4000,
            "speed-index": 4000,
            "cumulative-layout-shift": 1,
            "total-blocking-time": 100,
            "interactive": 4000,
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
  
  
        // For more details on network and CPU throttling and choosing the value refer https://github.com/GoogleChrome/lighthouse/blob/master/docs/throttling.md#devtools-lighthouse-panel-throttling
        const desktopConfig = {
            extends: 'lighthouse:default',
            formFactor: 'desktop',
            
            //1. ThrottlingMethod set to provided will run the lighthouse audit on environment variables with no throttling
            throttlingMethod: 'provided',


            //2. Throttling Set to Broadband with Latency 40ms and Throughput 10 Mbps over desktop
                // throttling:{
                //     cpuSlowdownMultiplier: 1,
                //     rttMs: 40,
                //     throughputKbps: 10 * 1024,
                // },
            

            //3. Throttling Set to mobile 4G with Latency 150ms and Throughput 1.6 Mbps
                // throttling:{
                //     cpuSlowdownMultiplier: 4,
                //     rttMs: 150,
                //     throughputKbps: 1.6 * 1024,
                // },
            
            
            //4.  Throttling Set to mobile 3G with Latency 300ms and Throughput 700 Kbps
                // throttling:{
                //     cpuSlowdownMultiplier: 4,
                //     rttMs: 300,
                //     throughputKbps: 700,
                // },


            screenEmulation: { disabled: true },
        }

        cy.lighthouse(customThresholds, desktopConfig)
        return this
    }
}

export default RunLighthouse
