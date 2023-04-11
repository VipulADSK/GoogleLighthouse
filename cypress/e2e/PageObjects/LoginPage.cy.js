/// <reference types="Cypress" />
class LoginPage 
{
    visit(){
        cy.visit('/')
        cy.viewport(1536, 960)
    }

    PerformLogin(Email, Password){
        cy.get('input[name="username"]').should('be.visible')
        cy.wait(200)
        cy.get('input[name="username"]').type(Email)
        cy.get('input[name="password"]').type(Password)
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-userdropdown').should('be.visible')
        return this
    }

    VisitDirectory(){
        cy.get(':nth-child(9) > .oxd-main-menu-item').click()
    }
}
export default LoginPage