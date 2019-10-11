import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";

const SmurfForm = () => {
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
    };

    return (
        <form>
            <input />
            <input />
            <input />
        </form>
    )
}

export default connect(null, { addSmurf })(SmurfForm);