import React,{Component} from 'react';
import './BackDrop.css';
import {connect} from "react-redux";
import Store from "../../Store/Store";


class BackDrop extends Component {
    // constructor(props, context) {
    //     super(props, context);
    //     this.state = {
    //         inOpen:this.props.hide,
    //     }
    // }

    click = () => {
        Store.dispatch({type:'Add'});
    };

    render() {
        let drop = this.props.includes ? <div onClick={this.click} className="Overlay" /> : <div className="Overlay" style={{display: 'none'}}/>;
        return (
            <div>
                {drop}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        includes: !state.reducers.backDropOpen ,
    };
};


export default connect(mapStateToProps)(BackDrop);
