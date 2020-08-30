import React, { useState, useEffect } from "react";
import styled from 'styled-components';

//Components
import { Input } from './Input.js';
import { SelectExercises } from './SelectExercise.js';
import { SelectSet } from './SelectSet.js';

//Import input style componenets 
import { StyledSubmitButton, StyledSelect, StyledInputGroup, StyledLabel } from './UI/Input.js';

const Form = ({ children, updateExercises }) => {
    function handleSubmit(e) {
        e.preventDefault();
        updateExercises();
    }

    return (
        <form aria-label="form" onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export { Form };