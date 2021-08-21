/// <reference types="Cypress" />
class LoginPage 
{
    visit(){
        cy.visit('/')
        cy.viewport(1536, 960)
        cy.clearCookies()
        cy.clearLocalStorage()
    }

    PerformLogin(Email, Password){
        cy.get(cy.get('#login2').click())
        cy.get('#loginusername').should('be.visible')
        cy.wait(2000)
        cy.get('#loginusername').type(Email)
        cy.get('#loginpassword').type(Password)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(3000)
        return this
    }
}
export default LoginPage