import React, { useState, useEffect } from 'https://cdn.skypack.dev/react@^16.13.1';
import styled from 'https://cdn.skypack.dev/styled-components@^5.1.1';

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

const StyledExerciceDetails = styled.td`
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

//Row to represent an exercice in the table

const ExerciceRow = ({ exercice: { name, sets, description } }) => {
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

//Table that display our records by exercice (by sets)

const Table = ({ exercices }) => {
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
                {exercices.map(exercice => {
                    return <ExerciceRow exercice={exercice} />;
                })}
            </tbody>
        </StyledTable>
    )
}

export { Table };