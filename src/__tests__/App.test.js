//UI integration test here
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

let form, repsInput, weightInput;

beforeEach(() => {
    console.log('before');

    render(<App />);

    form = screen.getByRole('form', { name: /form/i });
    repsInput = screen.getByRole('spinbutton', { name: /repetitions/i });
    weightInput = screen.getByRole('spinbutton', { name: /weight/i });

})

describe('Test on the form', () => {
    test('The form contains the correct input elements', () => {
        screen.debug(repsInput);

        expect(form).toContainElement(repsInput);
        expect(form).toContainElement(weightInput);
    })
})