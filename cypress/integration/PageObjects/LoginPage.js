/// <reference types="Cypress" />
class LoginPage 
{
    visit(){
        cy.visit('/')
        cy.viewport(1536, 960)
    }

    PerformLogin(Email, Password){
        cy.get('#txtUsername').should('be.visible')
        cy.wait(200)
        cy.get('#txtUsername').type(Email)
        cy.get('#txtPassword').type(Password)
        cy.get('#btnLogin').click()
        cy.get('h1').should('be.visible')
        return this
    }

    VisitDirectory(){
        cy.get('#menu_directory_viewDirectory').click()
    }
}
export default LoginPage