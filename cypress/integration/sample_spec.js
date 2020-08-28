describe('my first test', () => {
    //group related test together
    it('Visit the application', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
    })

    it('Find form element', () => {
        cy.visit('http://127.0.0.1:5500/index.html');

        cy.contains('exercise');
    })

})