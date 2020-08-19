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

const Form = ({ updateReps, updateWeight, postData }) => {
    function handleSubmit(e) {
        e.preventDefault();
        postData();
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input update={updateReps} type="number" label="repetitions" />
            <Input update={updateWeight} type="number" label="weight" />
            <StyledSubmitButton type="submit" value="add" />
        </form>
    )
}

export { Form };