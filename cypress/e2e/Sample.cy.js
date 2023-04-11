/// <reference types="Cypress" />
import LoginPage from './PageObjects/LoginPage.cy.js'
import RunLighthouse from './PageObjects/RunLighthouse.cy.js'

describe('Lighthouse', () => {
    
    it('should run performance audits', () => {
        const lp = new LoginPage()
        const rl = new RunLighthouse()
        
        //Going to BaseUrl and Resize with clearing cooking and storage
        lp.visit()
        
        //Login
        cy.fixture('Dataprovider.json').then(user => {
            lp.PerformLogin(user.username,user.password)
        })

        // Go to directory
        lp.VisitDirectory()

        //Running Lighthouse. More information on various audits below can be found on https://web.dev/learn/#lighthouse
        rl.runAudit()
    });
  });