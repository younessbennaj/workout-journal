import React, { useState, useEffect } from "react";
import styled from 'styled-components';

// STYLE UTILS
import { sm } from '../style/mixins.js';

const StyledContainer = styled.main`
    height: 93vh;
`

const StyledSidebar = styled.div`
    box-sizing: border-box;
    width: 30%;
    height: 100%;
    background-color: aliceblue;
    display: inline-block;
    padding: 1em;
    overflow: auto;

    /* Small screen */
    ${sm(`
        display: block;
        width: 100%;
        height: max-content;
        `
    )};
`;

const StyledNavbar = styled.header`
    height: 7vh;
    width: 100vw;
    background-color: lightgrey;
`;

const StyledContentContainer = styled.section`
    width: 70%;
    height: 100%;
    padding: 1em;
    box-sizing: border-box;
    background-color: beige;
    display: inline-block;

    /* Small screen */
    ${sm(`
        display: block;
        width: 100%;
        height: max-content;
        `
    )};
`;

export { StyledContainer, StyledSidebar, StyledNavbar, StyledContentContainer };