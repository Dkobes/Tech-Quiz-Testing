describe('Tech Quiz', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:3001/'); 
    });
  
    it('should start the quiz when the start button is clicked', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.get('h2');
    });
  
    it('should display a question when the quiz starts', () => {
        cy.contains('Start Quiz').should('be.visible');
    });
  
    it('should present another question after answering a question', () => {
        cy.contains('Start Quiz').click();

        cy.get('.btn').first().click();

        cy.get('h2', { timeout: 10000 }).should('be.visible');
    });
  
    it('should display the score when the quiz is over', () => {
        cy.contains('Start Quiz').click();
        for (let i = 0; i < 10; i++) {
            cy.get('.btn').first().should('be.visible').click();
        }

        cy.contains('Quiz Completed').should('be.visible');
        cy.contains(/Your score: \d+\/10/).should('be.visible');
    });
  
    it('should allow restarting the quiz', () => {
        cy.contains('Start Quiz').click();
        for (let i = 0; i < 10; i++) {
            cy.get('.btn').first().should('be.visible').click();
        }

        cy.contains('Take New Quiz').click();
    });
  });