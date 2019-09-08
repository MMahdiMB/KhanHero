import React from 'react';
import classes from './Spinner.module.css';

class Spinner extends React.Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.loader}/>
                <p>Please wait a while ...</p>
            </div>
        );
    }
}

export default Spinner;
