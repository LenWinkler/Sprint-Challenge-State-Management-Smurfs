import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf"

const SmurfList = props => {
    return (
        <div>
            {props.map(item => {
                <Smurf name={item.name} age={item.age} height={item.height}/>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {})(SmurfList);