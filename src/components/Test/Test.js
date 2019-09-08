import React from 'react';
import classes from './Test.module.css';
import Logo from '../../assets/images/personalities/Asset 4.svg';

const Test = (props) => {
    const porto = props.porto;
    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.illustration}><img className={classes.illustrationsvg} src={porto}/></div>
                <p className={classes.title}>{props.title}</p>
                <p className={classes.maintext}>Take our Personality Test and get a “freakishly accurate” description of who you are and why you do things the way you do.</p>
                <button className={classes.learnmore}>Learn More</button>
                <button className={classes.learnmore}>LEARN MORE</button>
            </div>
        </div>
    );
}

export default Test;


// “It’s so incredible to finally be understood.”
//
// Take our Personality Test and get a “freakishly accurate” description of who you are and why you do things the way you do.
