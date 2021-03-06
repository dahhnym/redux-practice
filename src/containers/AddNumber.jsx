import AddNumber from "../components/AddNumber";
import { Component } from "react";
import { connect } from "react-redux";

function mapReduxDispatchToReactProps(dispatch){
    return {
        onClick: function(size){
            dispatch({type:'INCREMENT', size: size})
        }
    }
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);
