import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";

//Components
import { Input } from './Input.js';
import { SelectExercises } from './SelectExercise.js';
import { SelectSet } from './SelectSet.js';


//Import input style componenets 
import { StyledSubmitButton, StyledSelect, StyledInputGroup, StyledLabel } from './UI/Input.js';

//Validation Form Message Component 

const StyledValidationMessage = styled.div`
    border: 1px solid green;
    background-color: lightgreen;
    padding: 0.5em;
    border-radius: 3px;
    margin: 0.5em 0;
`

const ValidationMessage = () => {
    return (
        <StyledValidationMessage>
            <p>Success</p>
        </StyledValidationMessage>
    )
}

const Form = ({ children, updateExercises }) => {
    // // Server State / Server Cache
    // const [exercises, setExercises] = useState([]);

    //UI State/Client State
    const [exerciseId, setExerciseId] = useState('');
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);
    const [currentSet, setCurrentSet] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    // useEffect(() => {
    //     axios.get('/exercises')
    //         .then(response => {
    //             setExercises(response.data)
    //         })
    // }, []);

    function updateExerciseId(id) {
        setExerciseId(id)
    };

    function updateSet(set) {
        setCurrentSet(set)
    };

    function updateReps(reps) {
        setReps(Number.parseInt(reps))
    };

    function updateWeight(weight) {
        setWeight(Number.parseInt(weight))
    };


    function updateExercises() {
        //post a set => Post on api/set
        setIsAdded(true);
    }


    function handleSubmit(e) {
        e.preventDefault();
        updateExercises();
    }

    return (
        <form aria-label="form" onSubmit={handleSubmit}>
            <SelectExercises update={updateExerciseId} />
            <SelectSet update={updateSet} />
            <Input id="reps" update={updateReps} type="number" label="repetitions" />
            <Input id="weight" update={updateWeight} type="number" label="weight" />
            <StyledSubmitButton type="submit" value="add" data-cy="submit" />
            {isAdded && (
                <ValidationMessage />
            )}
        </form>
    )
}

export { Form };