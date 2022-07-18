import DisplayNumber from "../components/DisplayNumber";
import { connect } from "react-redux";

function mapReduxStateToReactprops (state){
    return {
        number: state.number
    }
}

export default connect(mapReduxStateToReactprops)(DisplayNumber);


// import { Component } from "react";
// import store from '../store';
// export default class extends Component{
//     state = {number: store.getState().number}
//     constructor(props){
//         super(props);
//         store.subscribe(function(){
//             this.setState({number: store.getState().number});
//         }.bind(this))
//     }
//     render(){
//         return <DisplayNumber number={this.state.number}></DisplayNumber>
//     }
// }