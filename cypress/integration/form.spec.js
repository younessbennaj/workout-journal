describe('Test on the form', () => {
    it('User should successfuly fill the form', () => {

        cy.visit('http://127.0.0.1:5500/index.html');


        //Select an exercise
        cy
            .get('select#exercice')
            .select('squats')

        //Select a set
        cy
            .get('select#sets')
            .select('3')

        //Type a number of reps
        cy
            .get('input#reps')
            .type('8')

        //Type a weight
        cy
            .get('input#weight')
            .type('80')

        //Click the submit button
        cy.get('[data-cy=submit]').click()

        cy.contains('Success');
    })
})