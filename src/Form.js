import React, { useState, useEffect } from 'https://cdn.skypack.dev/react@^16.13.1';
import styled from 'https://cdn.skypack.dev/styled-components@^5.1.1';
import { Input } from './Input.js';

const StyledSubmitButton = styled.input`
    font-size: 0.8em;
    padding: 1em 2em;
    background: transparent;
    border: 1px solid darkgray;
    border-radius: 2px;
    margin: 1em 0;
    text-transform: capitalize;
    cursor: pointer;
`;
const SelectExercises = ({ exercises, update }) => {

    function handleChange(e) {
        update(e.target.value);
    }

    return (
        <select onChange={handleChange} name="exercice" id="exercice">
            {exercises.map(exercise => {
                return <option value={exercise.id}>{exercise.name}</option>
            })}
        </select>
    )
}

const SelectSet = ({ update }) => {
    function handleChange(e) {
        update(e.target.value);
    }

    return (
        <select onChange={handleChange} name="sets" id="sets">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
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