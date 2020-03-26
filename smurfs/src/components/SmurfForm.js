import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";
import styled from "styled-components";

const Input = styled.input`
    margin: 1rem;
    border: 1px solid black;
`

const Button = styled.button`
    width: 7rem;
    height: 2rem;
    border-radius: 5px;
    border: 1px solid black;
`

const SmurfForm = props => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const nameChangeHandler = e => {
        setName(e.target.value)
    };

    const ageChangeHandler = e => {
        setAge(e.target.value)
    };

    const heightChangeHandler = e => {
        setHeight(e.target.value)
    };

    const submitHandler = e => {
        let newSmurf = {
            name: name,
            age: age,
            height: height
        }
        props.addSmurf(newSmurf)
    };

    return (
        <form onSubmit={submitHandler}>
            <Input onChange={nameChangeHandler} type="text" value={name} placeholder="name"/>
            <Input onChange={ageChangeHandler} type="text" value={age} placeholder="age"/>
            <Input onChange={heightChangeHandler} type="text" value={height} placeholder="height"/>
            <Button type="submit">Add Smurf</Button>
        </form>
    )
}

export default connect(null, { addSmurf })(SmurfForm);