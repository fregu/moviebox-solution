/* global cy */
describe('Clicking a movie or show should open a single page', () => {
  it('Opens the app', () => {
    cy.visit('http://localhost:5500')
  })
  it('Clicks a result', () => {
    cy.get('.MovieCard .Link')
      .first()
      .click()
  })

  it('Loads the movie page', () => {
    cy.url().should('include', /movie/)
  })

  it('Should have link back to start', () => {
    cy.contains('Tillbaka').click()
  })

  it('Start page should load again', () => {
    cy.url().should('match', /http:\/\/localhost:5500\/?$/)
  })
})
