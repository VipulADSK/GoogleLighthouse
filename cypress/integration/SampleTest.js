/// <reference types="Cypress" />
import LoginPage from './PageObjects/LoginPage'
import RunLighthouse from './PageObjects/RunLighthouse'

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
        
        //Running Lighthouse. More information on various audits below can be found on https://web.dev/learn/#lighthouse
        rl.runAudit()
    });
  });