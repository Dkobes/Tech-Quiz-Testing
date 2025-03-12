import React from "react";
import Quiz from '../../client/src/components/Quiz';

describe('<Quiz />', () => {
    beforeEach(() => {
        cy.intercept(
            {
                method: 'GET',
                url: '/api/questions/random'
            },
            {
                fixture: 'questions.json',
                statusCode: 200
            }
        ).as('getRandomQuestion');
    });

    it('should render the component', () => {
        cy.mount(<Quiz />);
    });

    it('should display the Start Quiz button', () => {
        cy.mount(<Quiz />);
        cy.contains('Start Quiz').should('be.visible');
    });

    it('should render the first question after starting the quiz', () => {
        cy.mount(<Quiz />);
        cy.contains('Start Quiz').click();
        cy.wait('@getRandomQuestion');
        cy.get('h2').should('be.visible');
    });

    it('should render the score when the quiz ends', () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        cy.wait('@getRandomQuestion');
        for(let i = 1; i <= 10; i++) {
            cy.get('button').contains('1').click();
        }
    });
});