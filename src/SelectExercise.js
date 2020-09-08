import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';

//Import input style componenets 
import { StyledSelect, StyledInputGroup, StyledLabel } from './UI/Input.js';

const SelectExercises = ({ update }) => {

    // Server State / Server Cache
    const [exercises, setExercises] = useState([]);

    // Fetch exercises data model from api
    useEffect(() => {
        axios.get('/exercises')
            .then(response => {
                setExercises(response.data)
            })
    }, []);

    function handleChange(e) {
        update(e.target.value);
    }

    return (
        <StyledInputGroup>
            <StyledLabel htmlFor="exercice">exercise</StyledLabel>
            <StyledSelect onChange={handleChange} name="exercice" id="exercice">
                {exercises.map(exercise => {
                    return <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
                })}
            </StyledSelect>
        </StyledInputGroup>
    )
}

export { SelectExercises };