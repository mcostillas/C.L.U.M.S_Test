describe('login page', () => {
    it('should login with admin credentials', () => {
      cy.visit('http://localhost:5173/').viewport("macbook-16");
      cy.get('[type="text"]').should('be.visible').type('admin');
      cy.get('[type="password"]').should('be.visible').type('admin');
     cy.get('button').should('be.visible').click();
     
    })
     it(' should log out', () => {
      cy.visit('http://localhost:5173/account').viewport("macbook-16");
     cy.get('.logout').click()
  
    })
    it('should login with teacher credentials', () => {
      cy.visit('http://localhost:5173/').viewport("macbook-16");
      cy.get('[type="text"]').should('be.visible').type('test1');
      cy.get('[type="password"]').should('be.visible').type('1');
     cy.get('button').should('be.visible').click();
  
})
})
 