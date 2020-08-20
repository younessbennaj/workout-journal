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

    function handleChange() {

    }

    return (
        <form onSubmit={handleSubmit}>
            <select name="exercice" id="">
                <option value="bench">bench</option>
                <option value="pull-ups">pull-ups</option>
                <option value="squats">squats</option>
                <option value="side-raise">side raise</option>
                <option value="dumbell-press">dumbell press</option>
                <option value="triceps-pushdown">triceps pushdown</option>
                <option value="dumbbell-curl ">dumbbell curl </option>
                <option value="knee-raise">Hanging knee raise</option>
            </select>
            <select name="exercice" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <Input update={updateReps} type="number" label="repetitions" />
            <Input update={updateWeight} type="number" label="weight" />
            <StyledSubmitButton type="submit" value="add" />
        </form>
    )
}

export { Form };