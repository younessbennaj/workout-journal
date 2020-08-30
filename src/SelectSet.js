import React, { useState, useEffect } from "react";
import styled from 'styled-components';

//Import input style componenets 
import { StyledSelect, StyledInputGroup, StyledLabel } from './UI/Input.js';

const SelectSet = ({ update }) => {
    function handleChange(e) {
        update(e.target.value);
    }

    return (
        <StyledInputGroup>
            <StyledLabel htmlFor="sets">Set</StyledLabel>
            <StyledSelect onChange={handleChange} name="sets" id="sets">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </StyledSelect>
        </StyledInputGroup>
    )
}

export { SelectSet };