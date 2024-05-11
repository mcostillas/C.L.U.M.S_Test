describe('Laboratory Routes', () => {
  it('LAB GET Labincharge', () => {
    cy.visit('http://127.0.0.1:8000/docs#/Lab/get_labincharge_api_labincharge__get')
    cy.get('#operations-Lab-get_labincharge_api_labincharge__get > .no-margin > .opblock-body > .opblock-section > .opblock-section-header > .try-out > .btn').should('be.visible').click()
    cy.get('.execute-wrapper > .btn').should('be.visible').click()
    cy.request('http://127.0.0.1:8000/api/labincharge/')
  })
 

 
    it('GET Labpc', () => {
      cy.visit('http://127.0.0.1:8000/docs#/Lab/get_labpc_api_labpc__get')
      cy.get('#operations-Lab-get_labpc_api_labpc__get > .no-margin > .opblock-body > .opblock-section > .opblock-section-header > .try-out > .btn').click()
      cy.get('.execute-wrapper > .btn').should('be.visible').click()
      cy.request('http://127.0.0.1:8000/api/labpc/')

    })
})