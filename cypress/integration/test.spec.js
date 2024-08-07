// cypress/integration/tests/test.spec.js
describe('sharable-url', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('checks if text first name field exists', () => {
        cy.get('[data-testid="input1"]').should('exist');
    });

    it('checks if text second name field exists', () => {
        cy.get('[data-testid="input2"]').should('exist');
    });

    it('checks if calculate relationship future button exists', () => {
        cy.get('[data-testid="calculate_relationship"]').should('exist');
    });

    it('checks if clear button exists', () => {
        cy.get('[data-testid="clear"]').should('exist');
    });

    it('checks if h3 element exists', () => {
        cy.get('[data-testid="answer"]').should('exist');
    });

    it('checks that the app works correctly', () => {
        cy.get('[data-testid="input1"]').type('Alice');
        cy.get('[data-testid="input2"]').type('Bob');
        cy.get('[data-testid="calculate_relationship"]').click();
        cy.get('[data-testid="answer"]').should('not.be.empty');
        cy.get('[data-testid="clear"]').click();
        cy.get('[data-testid="input1"]').should('have.value', '');
        cy.get('[data-testid="input2"]').should('have.value', '');
        cy.get('[data-testid="answer"]').should('be.empty');
    });
});
