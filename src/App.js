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

// DATA MOCK UPS

function generateFakeId() {
    return (1000000 + Math.floor(Math.random() * (10000000 - 1000000))).toString();
}

const setsModel = [
    { reps: 8, weight: 90 },
    { reps: 10, weight: 80 },
    { reps: 12, weight: 70 }
]

const exercisesModel = [
    {
        id: generateFakeId(),
        description: '3 sets, 8-12 reps',
        sets: setsModel,
        name: 'bench'
    },
    {
        id: generateFakeId(),
        description: '3 sets, 8-12 reps',
        sets: setsModel,
        name: 'pull-ups'
    },
    {
        id: generateFakeId(),
        sets: setsModel,
        description: '3 sets, 8-12 reps',
        name: 'squats'
    },
    {
        id: generateFakeId(),
        description: '3 sets, 8-12 reps',
        sets: setsModel,
        name: 'side raise'
    },
    {
        id: generateFakeId(),
        description: '3 sets, 8-12 reps',
        sets: setsModel,
        name: 'dumbell press'
    },
    {
        id: generateFakeId(),
        description: '3 sets, 8-12 reps',
        sets: setsModel,
        name: 'triceps pushdown'
    },
    {
        id: generateFakeId(),
        description: '3 sets, 8-12 reps',
        sets: setsModel,
        name: 'dumbbell curl'
    },
    {
        id: generateFakeId(),
        description: '3 sets, 8-12 reps',
        sets: setsModel,
        name: 'hanging knee raise'
    },
]

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            exercises: exercisesModel,
            exerciseId: '',
            reps: 0,
            weight: 0,
            currentSet: 1
        }
        this.updateReps = this.updateReps.bind(this);
        this.updateWeight = this.updateWeight.bind(this);
        this.postData = this.postData.bind(this);
        this.updateExerciseId = this.updateExerciseId.bind(this);
        this.updateSet = this.updateSet.bind(this);
    }

    findExercice(id) {
        //Given an id, find the corresponding exercise in the data model
        return exercisesModel.find(exercise => exercise.id === id);
    }

    updateExerciseId(id) {
        this.setState({ exerciseId: id });
    }

    updateSet(currentSet) {
        this.setState({ currentSet });
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
                        <Form
                            updateExercise={this.updateExerciseId}
                            updateSet={this.updateSet}
                            updateReps={this.updateReps}
                            updateWeight={this.updateWeight}
                            postData={this.postData}
                            exercises={exercisesModel}
                        />
                    </StyledSidebar>
                    <StyledContentContainer>
                        <Table exercises={exercisesModel} />
                    </ StyledContentContainer>
                </StyledContainer>
            </>
        );
    }
}

export { App };