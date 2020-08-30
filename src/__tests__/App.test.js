//UI integration test here
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

let form, exercisesSelect, setsSelect, repsInput, weightInput;

beforeEach(() => {
    console.log('before');

    render(<App />);

    form = screen.getByRole('form', { name: /form/i });

    //Get a reference of the select exercises input element
    exercisesSelect = screen.getByRole('combobox', { name: /exercise/i });

    //Get a reference of the select sets input element
    setsSelect = screen.getByRole('combobox', { name: /set/i })

    //Get a reference of the input reps element
    repsInput = screen.getByRole('spinbutton', { name: /repetitions/i });

    //Get a reference of the input weight element
    weightInput = screen.getByRole('spinbutton', { name: /weight/i });

})

describe('Test on the form', () => {
    test('The form contains the correct input elements', () => {
        screen.debug(repsInput);

        expect(form).toContainElement(exercisesSelect);
        expect(form).toContainElement(setsSelect);
        expect(form).toContainElement(repsInput);
        expect(form).toContainElement(weightInput);
    })
})