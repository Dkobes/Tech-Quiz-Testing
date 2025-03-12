describe('Tech Quiz', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:3001/'); 
    });
  
    it('should start the quiz when the start button is clicked', () => {
      cy.get('#start-button').click();
      cy.get('#question-container').should('not.have.class', 'hide');
    });
  
    it('should display a question when the quiz starts', () => {
      cy.get('#start-button').click();
      cy.get('#question').should('be.visible');
    });
  
    it('should present another question after answering a question', () => {
      cy.get('#start-button').click();
      cy.get('.btn').first().click();
      cy.get('#question').should('be.visible');
    });
  
    it('should display the score when the quiz is over', () => {
      cy.get('#start-button').click();
      cy.get('.btn').each((btn) => {
        cy.wrap(btn).click();
      });
      cy.get('#score-container').should('not.have.class', 'hide');
      cy.get('#score').should('be.visible');
    });
  
    it('should allow restarting the quiz', () => {
      cy.get('#start-button').click();
      cy.get('.btn').each((btn) => {
        cy.wrap(btn).click();
      });
      cy.get('#restart-button').click();
      cy.get('#start-button').should('not.have.class', 'hide');
      cy.get('#question-container').should('have.class', 'hide');
    });
  });