import React, { useState, useEffect } from 'https://cdn.skypack.dev/react@^16.13.1';

const Input = ({ label, update }) => {

    function handleChange(e) {
        update(e.target.value)
    }

    return (
        <React.Fragment>
            <label>{label}</label>
            <input onChange={handleChange} type="text" />
        </React.Fragment>
    )
}

const Form = ({ updateReps, updateWeight }) => {
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input update={updateReps} label="repetition" />
            <Input update={updateWeight} label="weight" />
            <input type="submit" value="Add" />
        </form>
    )
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reps: 0,
            weight: 0
        }
        this.updateReps = this.updateReps.bind(this);
        this.updateWeight = this.updateWeight.bind(this);
    }

    updateReps(reps) {
        reps = Number.parseInt(reps);
        this.setState({ reps });
    }

    updateWeight(weight) {
        weight = Number.parseInt(weight);
        this.setState({ weight });
    }

    render() {

        return (
            <Form updateReps={this.updateReps} updateWeight={this.updateWeight} />
        );
    }
}

export { App };