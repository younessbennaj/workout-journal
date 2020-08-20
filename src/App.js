import React, { useState, useEffect } from 'https://cdn.skypack.dev/react@^16.13.1';
import styled from 'https://cdn.skypack.dev/styled-components@^5.1.1';

import { Form } from './Form.js';
import { Table } from './Table.js';

//Layout Components 
import {
    StyledContainer,
    StyledContentContainer,
    StyledNavbar,
    StyledSidebar
} from './layout/index.js';

// STYLE UTILS
import { sm } from './style/mixins.js'

// const StyledTable = styled.table`
//     width: 100%;
//     border: 1px solid darkgrey;
//     border-collapse: collapse;

//     th, td {
//         border: 1px solid darkgrey;
//     }
// `;

// const StyledSetDetails = styled.td`
//     width: 25%;

//     tr {
//         display: block;
//         width: 100%;
//         padding: 0.5em;
//         box-sizing: border-box;
//     }

//     td {
//         padding: 0;
//         display: inline-block;
//         width: 50%;
//         border: none;

//         /* Small screen */
//         ${sm(`
//             text-align: center;
//             display: block;
//             width: 100%;
//             padding: 0.3em 0;
//             `
//     )};

//     }

//     td:first-child {
//         color: #585858;
//         font-weight: bold;
//         text-decoration: underline;

//         /* Small screen */
//         ${sm(`font-size: small;`)};
//     }

//     td:last-child {
//         text-align: center;
//     }
// `

const setsModel = [
    { reps: 8, weight: 90 },
    { reps: 10, weight: 80 },
    { reps: 12, weight: 70 }
]

const exerciseModel = {
    name: 'Bench Press',
    description: '3 sets, 8-12 reps',
    sets: setsModel,
}

const exercisesModel = [
    exerciseModel,
    exerciseModel,
    exerciseModel,
    exerciseModel,
    exerciseModel
]

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reps: 0,
            weight: 0
        }
        this.updateReps = this.updateReps.bind(this);
        this.updateWeight = this.updateWeight.bind(this);
        this.postData = this.postData.bind(this);
    }

    updateReps(reps) {
        reps = Number.parseInt(reps);
        this.setState({ reps });
    }

    updateWeight(weight) {
        weight = Number.parseInt(weight);
        this.setState({ weight });
    }

    postData() {
        //Here some code to send data to the server
        console.log(this.state.reps, this.state.weight);
    }

    render() {

        return (
            <>
                <StyledNavbar />
                <StyledContainer>
                    <StyledSidebar>
                        <Form updateReps={this.updateReps} updateWeight={this.updateWeight} postData={this.postData} />
                    </StyledSidebar>
                    <StyledContentContainer>
                        <Table exercises={exercisesModel} />
                    </ StyledContentContainer>
                    {/* <Form updateReps={this.updateReps} updateWeight={this.updateWeight} postData={this.postData} /> */}
                </StyledContainer>
            </>
        );
    }
}

export { App };