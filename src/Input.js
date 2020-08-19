import React, { useState, useEffect } from 'https://cdn.skypack.dev/react@^16.13.1';
import styled from 'https://cdn.skypack.dev/styled-components@^5.1.1';

const StyledLabel = styled.label`
    display: inline-block;
    padding: 0.5em 0;
    text-transform: capitalize;
`

const StyledInput = styled.input`
    font-size: medium;
    padding-left: 1em;
    display: block;
    height: 3em;
    width: 100%;
    box-sizing: border-box;
`

const StyledInputGroup = styled.div`
    margin: 1em 0;
`

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