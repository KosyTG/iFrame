describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/')
    cy.get('#__next > div > section.mb-50 > div > ul > li:nth-child(19) > a').should('be.visible').click()
    cy.get('#iFrame1').should('be.visible')
    .its('0.contentDocument.body').then($element=>{
      cy.wrap($element).find('.rsw-ce').clear().type('I feel good')
    })
    
  })
})