/// <reference types="cypress" />


describe('Testing elements in the homepage', () => {
  beforeEach('Navigate to homepage', () => {
    cy.visit('http://localhost:3000/')
  })
  it('check if the shop button links to correct url', () => {
	cy.get('.shop-btn1').eq(0).click()
	cy.location("pathname").should(
		"eq",
		"/shop"
	)
  })
  it('check if the shop button links to correct url', () => {
	cy.get('.test-footer').eq(0).click()
	cy.location("pathname").should(
		"eq",
		"/contact"
	)
  })
  it('check if the title is correct', () => {
	cy.get('.hero1-h2')
	.should('have.text', "HomeXGrown")
  })
  it('check if slogan is correct', () => {
	cy.get('.hero1-p1')
	.should('have.text', '"Rooted in faith, true to who we are"')
  })
})