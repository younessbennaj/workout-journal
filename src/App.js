import React, { useState, useEffect } from 'https://cdn.skypack.dev/react@^16.13.1';
import styled from 'https://cdn.skypack.dev/styled-components@^5.1.1';

import { Form } from './Form.js';

// STYLE UTILS
import { sm } from './style/mixins.js'

const StyledTable = styled.table`
    width: 100%;
    border: 1px solid darkgrey;
    border-collapse: collapse;

    th, td {
        border: 1px solid darkgrey;
    }
`;

const StyledSetDetails = styled.td`
    width: 25%;

    tr {
        display: block;
        width: 100%;
        padding: 0.5em;
        box-sizing: border-box;
    }

    td {
        padding: 0;
        display: inline-block;
        width: 50%;
        border: none;

        /* Small screen */
        ${sm(`
            text-align: center;
            display: block;
            width: 100%;
            padding: 0.3em 0;
            `
    )};

    }

    td:first-child {
        color: #585858;
        font-weight: bold;
        text-decoration: underline;

        /* Small screen */
        ${sm(`font-size: small;`)};
    }

    td:last-child {
        text-align: center;
    }
`

const setsModel = [
    { reps: 8, weight: 90 },
    { reps: 10, weight: 80 },
    { reps: 12, weight: 70 }
]

const exerciceModel = {
    name: 'Bench Press',
    description: '3 sets, 8-12 reps',
    sets: setsModel,
}

const exercicesModel = [
    exerciceModel,
    exerciceModel,
    exerciceModel,
    exerciceModel,
    exerciceModel
]

const SetDetails = ({ weight, reps }) => {
    return (
        <StyledSetDetails>
            <tr>
                <td>weight:</td>
                <td>{weight}</td>
            </tr>
            <tr>
                <td>reps:</td>
                <td>{reps}</td>
            </tr>
        </StyledSetDetails>
    )
}

const SetRow = ({ exercice: { name, sets, description } }) => {
    return (
        <tr>
            <StyledExerciceDetails>
                <p>{name}</p>
                <p>{description}</p>
            </StyledExerciceDetails>
            {sets.map(set => {
                return <SetDetails weight={set.weight} reps={set.reps} />
            })}
        </tr>
    )
}

const StyledExerciceDetails = styled.td`
    padding: 0.5em;

    p:first-child {
        font-weight: bold;
    }

    p:last-child {
        font-size: small;
    }
`

const Table = ({ exercice }) => {
    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>Exercice</th>
                    <th>Set 1</th>
                    <th>Set 2</th>
                    <th>Set 3</th>
                </tr>
            </thead>
            <tbody>
                {exercicesModel.map(exercice => {
                    return <SetRow exercice={exercice} />;
                })}
            </tbody>
        </StyledTable>
    )
}

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
                        <Table exercice={exerciceModel} />
                    </ StyledContentContainer>
                    {/* <Form updateReps={this.updateReps} updateWeight={this.updateWeight} postData={this.postData} /> */}
                </StyledContainer>
            </>
        );
    }
}

export { App };