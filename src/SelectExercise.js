import React, { useState, useEffect } from 'https://cdn.skypack.dev/react@^16.13.1';
import styled from 'https://cdn.skypack.dev/styled-components@^5.1.1';

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
                    return <option value={exercise.id}>{exercise.name}</option>
                })}
            </StyledSelect>
        </StyledInputGroup>
    )
}

export { SelectExercises };