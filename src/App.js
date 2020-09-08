import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";

//Components
import { Form } from './Form.js';
import { Table } from './Table.js';
import { Input } from './Input.js';
import { SelectExercises } from './SelectExercise.js';
import { SelectSet } from './SelectSet.js';

//Layout Components 
import {
    StyledContainer,
    StyledContentContainer,
    StyledNavbar,
    StyledSidebar
} from './layout/index.js';

//Import input style componenets 
import { StyledSubmitButton } from './UI/Input.js';

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

//Validation Form Message Component 

const StyledValidationMessage = styled.div`
    border: 1px solid green;
    background-color: lightgreen;
    padding: 0.5em;
    border-radius: 3px;
    margin: 0.5em 0;
`

const ValidationMessage = () => {
    return (
        <StyledValidationMessage>
            <p>Success</p>
        </StyledValidationMessage>
    )
}

//Parent App Component

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            exercises: exercisesModel,
            exerciseId: '',
            reps: 0,
            weight: 0,
            currentSet: 1,
            //mock success on POST data to API
            isAdded: false,
        }
        //Bind the keyword this to the component instance object inside the event handlers 
        this.updateReps = this.updateReps.bind(this);
        this.updateWeight = this.updateWeight.bind(this);
        this.updateExerciseId = this.updateExerciseId.bind(this);
        this.updateSet = this.updateSet.bind(this);
        this.updateExercises = this.updateExercises.bind(this);
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

        axios.get('/exercises')
            .then(data => {
                console.log(data);
            })

        axios.get('/exercise/8d9377e5-fed7-418f-84f6-23fd7f29bc17')
            .then(data => {
                console.log(data);
            })
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

    clearAll() {
        this.setState({
            exerciseId: '',
            weight: 0,
            reps: 0,
            currentSet: 1
        });
    }

    updateExercises() {
        console.log(this.findExercice(this.state.exerciseId));
        //post a set => Post on api/set
        console.log({
            id: this.state.exerciseId,
            set: this.state.currentSet,
            reps: this.state.reps,
            weight: this.state.weight
        });
        this.setState({ isAdded: true });
        //reset local state 
        this.clearAll();
    }

    render() {

        return (
            <>
                <StyledNavbar />
                <StyledContainer>
                    <StyledSidebar>
                        <Form updateExercises={this.updateExercises}>
                            <SelectExercises exercises={this.state.exercises} update={this.updateExerciseId} />
                            <SelectSet update={this.updateSet} />
                            <Input id="reps" update={this.updateReps} type="number" label="repetitions" />
                            <Input id="weight" update={this.updateWeight} type="number" label="weight" />
                            <StyledSubmitButton type="submit" value="add" data-cy="submit" />
                            {this.state.isAdded && (
                                <ValidationMessage />
                            )}
                        </Form>
                    </StyledSidebar>
                    <StyledContentContainer>
                        <Table exercises={exercisesModel} />
                    </ StyledContentContainer>
                </StyledContainer>
            </>
        );
    }
}

export default App;