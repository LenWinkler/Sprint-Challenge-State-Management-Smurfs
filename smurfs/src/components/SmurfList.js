import React, { useEffect } from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import fetchSmurfs from "../actions/index";

const SmurfList = props => {
    useEffect(() => {
        props.fetchSmurfs();
    }, [])

    return (
        <div>
            {props.smurfs.map(item => (
                <Smurf key={item.id} name={item.name} age={item.age} height={item.height}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);