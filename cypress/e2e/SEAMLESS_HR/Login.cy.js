/// <reference types="cypress" />

it('facebook', function (){

  //to visit  url
  cy.visit('https://the-internet.herokuapp.com/login')


//invalid login
  cy.get('#username').type ('tomsmitrrh')
  cy.get('#password').type ('SuperSecretPasswrrord!')
  cy.get('.fa').click()
 cy.contains('Your username is invalid!').should('be.visible');

//Valid login
  cy.get('#username').type ('tomsmith')
  cy.get('#password').type ('SuperSecretPassword!')
  cy.get('.fa').click()
  cy.contains('You logged into a secure area!').should('be.visible');


})