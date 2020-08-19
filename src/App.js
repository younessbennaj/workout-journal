import React, { useState, useEffect } from 'https://cdn.skypack.dev/react@^16.13.1';
import styled from 'https://cdn.skypack.dev/styled-components@^5.1.1';

import { Form } from './Form.js';

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
    }

    td:first-child {
        color: #585858;
        font-weight: bold;
        text-decoration: underline;
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

const Table = () => {
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
                <tr>
                    <td>Exercice 1</td>
                    {setsModel.map(set => {
                        return <SetDetails weight={set.weight} reps={set.reps} />
                    })}
                </tr>
            </tbody>
        </StyledTable>
    )
}

const StyledContainer = styled.div`
    height: 100%;
    padding: 1em;
`

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
            <StyledContainer>
                <Table />
                {/* <Form updateReps={this.updateReps} updateWeight={this.updateWeight} postData={this.postData} /> */}
            </StyledContainer>
        );
    }
}

export { App };