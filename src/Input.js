import React, { useState, useEffect } from "react";
import styled from 'styled-components';

//Import style input 
import { StyledLabel, StyledInput, StyledInputGroup } from './UI/Input.js';

const Input = ({ type, label, update, id }) => {

    function handleChange(e) {
        update(e.target.value)
    }

    return (
        <StyledInputGroup>
            <StyledLabel htmlFor={id}>{label}</StyledLabel>
            <StyledInput id={id} onChange={handleChange} type={type} />
        </StyledInputGroup>
    )
}

export { Input };