import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";

//Components
import { Form } from './Form.js';
import { Table } from './Table.js';

//Layout Components 
import {
    StyledContainer,
    StyledContentContainer,
    StyledNavbar,
    StyledSidebar
} from './layout/index.js';

const App = () => {
    return (
        <>
            <StyledNavbar />
            <StyledContainer>
                <StyledSidebar>
                    <Form />
                </StyledSidebar>
                <StyledContentContainer>
                    <Table />
                </ StyledContentContainer>
            </StyledContainer>
        </>
    );
}

export default App;