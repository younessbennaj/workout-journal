import React, { useState, useEffect } from 'https://cdn.skypack.dev/react@^16.13.1';
import styled from 'https://cdn.skypack.dev/styled-components@^5.1.1';

//Import input style componenets 
import { StyledSelect, StyledInputGroup, StyledLabel } from './UI/Input.js';

const SelectSet = ({ update }) => {
    function handleChange(e) {
        update(e.target.value);
    }

    return (
        <StyledInputGroup>
            <StyledLabel>Set</StyledLabel>
            <StyledSelect onChange={handleChange} name="sets" id="sets">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </StyledSelect>
        </StyledInputGroup>
    )
}

export { SelectSet };