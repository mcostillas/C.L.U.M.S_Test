describe('User routes', () => {
    it('GET Students', () => {
      cy.visit('http://127.0.0.1:8000/docs#/Users/get_students_api_student__get')
      cy.get('.btn').should('be.visible').click()
      cy.get('.execute-wrapper > .btn').should('be.visible').click()
      cy.request('http://127.0.0.1:8000/api/student/')
  
  })
  
  it('POST Login Students', () => {
    cy.visit('http://127.0.0.1:8000/docs#/Users/login_students_api_student_login__post')
    cy.get('.btn').should('be.visible').click()
    cy.get('.execute-wrapper > .btn').should('be.visible').click()
    cy.get('[data-property-name="username"] > .parameters-col_description > div > .invalid').type('admin')
    cy.get('[data-property-name="password"] > .parameters-col_description > div > .invalid').type('admin')
    cy.get('.execute-wrapper > .btn').should('be.visible').click()
    cy.request('http://127.0.0.1:8000/api/student/')
  
  })
  it('GET Enrollment', () => {
    cy.visit('http://127.0.0.1:8000/docs#/Users/get_enrollment_api_enrollment__get')
    cy.get('#operations-Users-get_enrollment_api_enrollment__get > .no-margin > .opblock-body > .opblock-section > .opblock-section-header').should('be.visible').click
    cy.get('.btn').should('be.visible').click()
    cy.get('.execute-wrapper > .btn').should('be.visible').click()
    
    cy.request('http://127.0.0.1:8000/api/enrollment/')
  })
  it('GET Subject', () => {
    cy.visit('http://127.0.0.1:8000/docs#/Users/get_subjects_api_subject__get')
    cy.get('#operations-Users-get_subjects_api_subject__get > .opblock-summary > .opblock-summary-control').should('be.visible').click
    cy.get('.btn').should('be.visible').click()
    cy.get('.execute-wrapper > .btn').should('be.visible').click()
    cy.request('http://127.0.0.1:8000/api/subject/')
  })
  it('GET Read User', () => {
    cy.visit('http://127.0.0.1:8000/docs#/Users/read_user_api_student__student_id__get')
    cy.get('#operations-Users-read_user_api_student__student_id__get > .no-margin > .opblock-body > .opblock-section > .opblock-section-header > .try-out > .btn').should('be.visible').click()
    cy.get('input').should('be.visible').type('22341');
    cy.get('.execute-wrapper > .btn').should('be.visible').click()
    cy.request('http://127.0.0.1:8000/api/student/22341')
  
  })
  it('Post Create Administrator', () => {
    cy.visit('http://127.0.0.1:8000/docs#/Users/create_administrator_api_users_create_post');
    cy.get('.btn').should('be.visible').click()
    cy.get('[data-property-name="username"] > .parameters-col_description > div > input').should('be.visible').type('Marc');
    cy.get('[data-property-name="password"] > .parameters-col_description > div > input').should('be.visible').type('Costillas123');
   cy.get('.execute-wrapper > .btn').should('be.visible').click();
  })
  
   it('Put Update Password', () => {
    cy.visit('http://127.0.0.1:8000/docs#/Users/update_password_api_change_password__user_id__put');
    cy.get('.btn').should('be.visible').click()
    cy.get('#operations-Users-update_password_api_change_password__user_id__put > .no-margin > .opblock-body > :nth-child(1) > .parameters-container > .table-container > .parameters > tbody > tr > .parameters-col_description > input').should('be.visible').type('22341');
    cy.get('[data-property-name="new_password"] > .parameters-col_description > div > input').should('be.visible').type('222');
    cy.get('[data-property-name="confirm_password"] > .parameters-col_description > div > input').should('be.visible').type('222');
    cy.get('.execute-wrapper > .btn').should('be.visible').click();
   })
    it('Delete users', () => {
        cy.visit('http://127.0.0.1:8000/docs#/Users/delete_user_api_users__user_id__delete');
        cy.get('.btn').should('be.visible').click()
        cy.get('input').should('be.visible').type('22001273');
       cy.get('.execute-wrapper > .btn').should('be.visible').click();
      })
    })