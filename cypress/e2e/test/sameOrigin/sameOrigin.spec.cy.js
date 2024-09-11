describe('template spec', () => {
  it('passes', () => {
    cy.fixture('selectors').then((data)=>{
      cy.get(data.iframeDemo).should('be.visible').click()
      cy.get(data.iFrame).should('be.visible')
      .its('0.contentDocument.body').then($element=>{
        cy.wrap($element).find(data.textField).clear().type('I feel good')

      })
    })
    
  })
})