import React, { useEffect } from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import fetchSmurfs from "../actions/index";
import styled from "styled-components";

const ListDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const SmurfList = props => {
    useEffect(() => {
        props.fetchSmurfs();
    }, [])

    return (
        <ListDiv>
            {props.smurfs.map(item => (
                <Smurf key={item.id} name={item.name} age={item.age} height={item.height}/>
            ))}
        </ListDiv>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);