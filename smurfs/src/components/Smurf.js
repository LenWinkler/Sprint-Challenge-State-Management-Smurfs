import React from "react";
import styled from "styled-components";

const SmurfDiv = styled.div`
    width: 30%;
    border: 1px solid white;
`

const Smurf = props => {
    return (
        <SmurfDiv>
            <p>{`Name: ${props.name}`}</p>
            <p>{`Age: ${props.age}`}</p>
            <p>{`Height: ${props.height}`}</p>
        </SmurfDiv>
    )
}

export default Smurf;