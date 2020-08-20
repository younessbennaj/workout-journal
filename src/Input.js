import React, { useState, useEffect } from 'https://cdn.skypack.dev/react@^16.13.1';
import styled from 'https://cdn.skypack.dev/styled-components@^5.1.1';

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