describe('Admin Routes', () => {
    it('ADMIN Get Students', () => {
      cy.visit('http://127.0.0.1:8000/docs#/Admin/get_students_api_Admin__get')
      cy.get('#operations-Admin-get_students_api_Admin__get > .no-margin > .opblock-body > .opblock-section > .opblock-section-header').should('be.visible').click()
      cy.get('.btn').should('be.visible').click();
      cy.get('.execute-wrapper > .btn').should('be.visible').click();
      cy.request('http://127.0.0.1:8000/api/report/')
      })
      })