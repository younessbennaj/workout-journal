import React, { useState, useEffect } from "react";
import styled from 'styled-components';

//Import style input 
import { StyledLabel, StyledInput, StyledInputGroup } from './UI/Input.js';

const Input = ({ type, label, update }) => {

    function handleChange(e) {
        update(e.target.value)
    }

    return (
        <StyledInputGroup>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput onChange={handleChange} type={type} />
        </StyledInputGroup>
    )
}

export { Input };