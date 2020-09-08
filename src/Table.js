import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';

// STYLE UTILS
import { sm } from './style/mixins.js';

//Components style 

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

const StyledExerciseDetails = styled.td`
    padding: 0.5em;

    p:first-child {
        font-weight: bold;
    }

    p:last-child {
        font-size: small;
    }
`

//Details infomation about the set (weight and repetitions by set)

const SetDetails = ({ weight, reps }) => {

    return (
        <StyledSetDetails>
            <table>
                <tbody>
                    <tr>
                        <td>weight:</td>
                        <td>{weight}</td>
                    </tr>
                    <tr>
                        <td>reps:</td>
                        <td>{reps}</td>
                    </tr>
                </tbody>
            </table>
        </StyledSetDetails>
    )
}

//Row to represent an exercise in the table

const ExerciseRow = ({ exercise }) => {
    return (
        <tr>
            <StyledExerciseDetails>
                <p>Exercise name</p>
                <p>description here ...</p>
            </StyledExerciseDetails>
            {exercise.sets.map(set => {
                return <SetDetails key={set.id} weight={set.weight} reps={set.reps} />
            })}
        </tr>
    )
}

//Table that display our records by exercise (by sets)

const Table = ({ exercises }) => {

    const [record, setRecord] = useState();

    useEffect(() => {
        axios.get('/record/2d6c4a0b-73a1-48a4-aabe-ffdcb09e8fe1')
            .then(response => {
                setRecord(response.data);
            })
    }, []);

    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>exercise</th>
                    <th>Set 1</th>
                    <th>Set 2</th>
                    <th>Set 3</th>
                </tr>
            </thead>
            <tbody>
                {record && record.exercises.map(exercise => {
                    return <ExerciseRow key={exercise.id} exercise={exercise} />
                })}
            </tbody>
        </StyledTable>
    )
}

export { Table };