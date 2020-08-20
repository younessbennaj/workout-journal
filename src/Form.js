import React, { useState, useEffect } from 'https://cdn.skypack.dev/react@^16.13.1';
import styled from 'https://cdn.skypack.dev/styled-components@^5.1.1';

//Components
import { Input } from './Input.js';

//Import input style componenets 
import { StyledSubmitButton, StyledSelect, StyledInputGroup, StyledLabel } from './UI/Input.js';

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

const SelectSet = ({ update }) => {
    function handleChange(e) {
        update(e.target.value);
    }

    return (
        <StyledInputGroup>
            <StyledLabel>Set</StyledLabel>
            <StyledSelect onChange={handleChange} name="sets" id="sets">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </StyledSelect>
        </StyledInputGroup>
    )
}
const Form = ({ updateReps, updateWeight, updateSet, updateExercise, postData, exercises }) => {
    function handleSubmit(e) {
        e.preventDefault();
        postData();
    }

    return (
        <form onSubmit={handleSubmit}>
            <SelectExercises exercises={exercises} update={updateExercise} />
            <SelectSet update={updateSet} />
            <Input update={updateReps} type="number" label="repetitions" />
            <Input update={updateWeight} type="number" label="weight" />
            <StyledSubmitButton type="submit" value="add" />
        </form>
    )
}

export { Form };