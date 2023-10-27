describe('Login', () => {
  it('Login Success', () => {
    cy.visit('/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('div.product_label').should('contain', 'Products')
  })

  it('Failed Success', () => {
    cy.visit('/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauc')
    cy.get('#login-button').click()
    cy.get('h3[data-test="error"]').should('be.visible')

  })
})