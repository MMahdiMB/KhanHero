import React , { Component } from 'react';
import classes from './Progress.module.css';

class Progress extends Component {
    render() {
        return <div className={classes.Container}>
            <div className={classes.Progress_Bar}>
                {
                    this.props.Negative ?
                        <div className={classes.filler}
                             style={{
                                 width: this.props.percentage_of_progress_bar,
                                 backgroundImage: 'linear-gradient(to right, #6ec0ff, #2ba1ff)'
                             }}/> :
                        <div className={classes.filler} style={{
                            width: this.props.percentage_of_progress_bar,
                            backgroundImage: 'linear-gradient(to right, #ff8932, #ff5b19)'
                        }}/>
                }
            </div>
        </div>;
    }
}

export default Progress;
{/*<div className={classes.filler} style={{width:this.props.percentage_of_progress_bar,*/}
{/*marginLeft:this.props.marginleftfornegatives+'%',borderRadius:this.props.borders}}/>*/}
