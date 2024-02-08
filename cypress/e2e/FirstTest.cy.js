/// <reference types = "cypress"/>

describe('Suite 1', () => {
    it.only('1- Google Search', function () {
        cy.visit("https://google.com")
        cy.get('#W0wltc > .QS5gu').click();
        cy.xpath('//*[@class="gLFyf"]').type("Cypress{enter}")
    })

 
    

})