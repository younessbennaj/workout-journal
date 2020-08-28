import React, { useState, useEffect } from "react";
import styled from 'styled-components';

//Import input style componenets 
import { StyledSelect, StyledInputGroup, StyledLabel } from './UI/Input.js';

const SelectExercises = ({ exercises, update }) => {

    function handleChange(e) {
        update(e.target.value);
    }

    return (
        <StyledInputGroup>
            <StyledLabel>exercise</StyledLabel>
            <StyledSelect onChange={handleChange} name="exercice" id="exercice">
                {exercises.map(exercise => {
                    return <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
                })}
            </StyledSelect>
        </StyledInputGroup>
    )
}

export { SelectExercises };