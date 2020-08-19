import React, { useState, useEffect } from 'https://cdn.skypack.dev/react@^16.13.1';
import styled from 'https://cdn.skypack.dev/styled-components@^5.1.1';

const StyledLabel = styled.label`
    display: inline-block;
    padding: 0.5em 0;
    text-transform: capitalize;
`

const StyledInput = styled.input`
    font-size: medium;
    padding-left: 1em;
    display: block;
    height: 3em;
    width: 100%;
    box-sizing: border-box;
`

const StyledInputGroup = styled.div`
    margin: 1em 0;
`

const Input = ({ type, label, update }) => {

    function handleChange(e) {
        update(e.target.value)
    }

    return (
        <StyledInputGroup>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput onChange={handleChange} type={type} />
        </StyledInputGroup>
    )
}

const StyledSubmitButton = styled.input`
    font-size: 0.8em;
    padding: 1em 2em;
    background: transparent;
    border: 1px solid darkgray;
    border-radius: 2px;
    margin: 1em 0;
    text-transform: capitalize;
    cursor: pointer;
`;

const Form = ({ updateReps, updateWeight, postData }) => {
    function handleSubmit(e) {
        e.preventDefault();
        postData();
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input update={updateReps} type="number" label="repetition" />
            <Input update={updateWeight} type="number" label="weight" />
            <StyledSubmitButton type="submit" value="add" />
        </form>
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
                <Form updateReps={this.updateReps} updateWeight={this.updateWeight} postData={this.postData} />
            </StyledContainer>
        );
    }
}

export { App };