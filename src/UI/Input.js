import React, { useState, useEffect } from "react";
import styled from 'styled-components';

//Here, the style for our input of form elements

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

const StyledSelect = styled.select`
    font-size: medium;
    padding-left: 1em;
    padding-right: 1em;
    display: block;
    height: 3em;
    width: 100%;
    box-sizing: border-box;
    border-radius: 2px;
    border: 1px solid lightgray;
    -moz-appearance: none;
    -webkit-appearance: none;   
`

export { StyledInput, StyledInputGroup, StyledLabel, StyledSelect, StyledSubmitButton };