import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";

//Components
import { Form } from './Form.js';
import { Table } from './Table.js';
// import { Input } from './Input.js';
// import { SelectExercises } from './SelectExercise.js';
// import { SelectSet } from './SelectSet.js';

//Layout Components 
import {
    StyledContainer,
    StyledContentContainer,
    StyledNavbar,
    StyledSidebar
} from './layout/index.js';

//Parent App Component
class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // axios.get('/records')
        //     .then(function (response) {
        //         console.log(response.data);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

        // axios.get('/record/2d6c4a0b-73a1-48a4-aabe-ffdcb09e8fe1')
        //     .then(data => {
        //         console.log(data);
        //     })

        // axios.get('/exercises')
        //     .then(data => {
        //         console.log(data);
        //     })

        // axios.get('/exercise/8d9377e5-fed7-418f-84f6-23fd7f29bc17')
        //     .then(data => {
        //         console.log(data);
        //     })
    }


    render() {

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
}

export default App;