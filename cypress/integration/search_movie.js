/* global cy */
describe('Our app is live and finds movies based on query', () => {
  it('Opens the app', () => {
    cy.visit('http://localhost:5500')
  })

  it('Contains images', () => {
    cy.get('img')
  })

  it('Searched for results', () => {
    cy.get('input[type=search]')
      .type('Aveng')
      .should('have.value', 'Aveng')
    cy.get('.MovieCard figcaption')
      .first()
      .contains(/aveng/i)
  })
})
