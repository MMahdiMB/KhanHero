import React , { Component } from 'react';
import classes from './Spinner.module.css';

class Spinner extends Component {
    render() {
        return (
            <div>
                <div className={classes.loader}/>
            </div>
        );
    }
}
export default Spinner;
