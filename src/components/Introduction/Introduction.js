import React from 'react';
import classes from './Introduction.module.css';


const Introduction = () => {
    return (
        <div>
            <div className={classes.container}>
                <h1 className={classes.IntroductionText}>“It’s so incredible to finally be understood.”</h1>
                    <h2 className={classes.IntroductionSubText}>
                    Take our Personality Test and get a “freakishly accurate”<br/> description of who you are and why you do things the way you do.
                </h2>
                <button className={classes.Loginbtnii
                }>Login</button>
            </div>
        </div>
    );
}

export default Introduction;


// “It’s so incredible to finally be understood.”
//
// Take our Personality Test and get a “freakishly accurate” description of who you are and why you do things the way you do.
