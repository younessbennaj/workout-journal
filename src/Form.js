import React, { useState, useEffect } from "react";
import styled from 'styled-components';

//Components
import { Input } from './Input.js';
import { SelectExercises } from './SelectExercise.js';
import { SelectSet } from './SelectSet.js';

//Import input style componenets 
import { StyledSubmitButton, StyledSelect, StyledInputGroup, StyledLabel } from './UI/Input.js';

const Form = ({ updateReps, updateWeight, updateSet, updateExercise, updateExercises, exercises }) => {
    function handleSubmit(e) {
        e.preventDefault();
        updateExercises();
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