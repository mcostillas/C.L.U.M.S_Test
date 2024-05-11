describe('Report Routes', () => {
  it('GET Report', () => {
    cy.visit('http://127.0.0.1:8000/docs#/report/get_report_api_report__get')
    cy.get('.btn').should('be.visible').click()
    cy.get('.execute-wrapper').should('be.visible').click()
    cy.request('http://127.0.0.1:8000/api/report/')
    
})
it('Delete Report', () => {
    cy.visit('http://127.0.0.1:8000/docs#/report/delete_report_api_report__report_id__delete');
    cy.get('.btn').should('be.visible').click()
    cy.get('input').should('be.visible').type('5');
   cy.get('.execute-wrapper > .btn').should('be.visible').click();
  })
  it('Read Report', () => {
    cy.visit('http://127.0.0.1:8000/docs#/report/read_report_api_report__report_id__get')
    cy.get('#operations-report-read_report_api_report__report_id__get > .no-margin > .opblock-body > .opblock-section > .opblock-section-header > .try-out > .btn').should('be.visible').click()
    cy.get('.parameters-col_description > input').type('7');
    cy.get('.execute-wrapper > .btn').should('be.visible').click()
    cy.request('http://127.0.0.1:8000/api/report/7')
}) 

it('Post Create Report', () => {
    cy.visit('http://127.0.0.1:8000/docs#/report/create_report_api_report_create_post');
    cy.get('.btn').should('be.visible').click()
    cy.get('[data-property-name="issue"] > .parameters-col_description > div > input').should('be.visible').type('Encountered Monitor BLUE SCREEN');
    cy.get('[data-property-name="unit_number"] > .parameters-col_description > div > input').should('be.visible').type('10');
   cy.get('.execute-wrapper > .btn').should('be.visible').click();

  })
  it('PUT Update Report Issue', () => {
    cy.visit('http://127.0.0.1:8000/docs#/report/update_report_issue_api_change_report__user_id__put');
    cy.get('.btn').should('be.visible').click()
    cy.get('[data-property-name="report_id"] > .parameters-col_description > div > input').should('be.visible').type('9');
    cy.get('[data-property-name="issue"] > .parameters-col_description > div > input').should('be.visible').type('The Monitor is broken');
   cy.get('.execute-wrapper > .btn').should('be.visible').click();

  })
})