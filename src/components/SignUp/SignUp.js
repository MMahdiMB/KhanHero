import React , { Component } from 'react';
import classes from './SignUp.module.css';
import Fields from "./Fields/Fields";
import Logo from '../../logo.svg';
import axios from 'axios';
import Khan from '../../assets/images/Login/slider.jpg';

class SignUp extends Component {
    Post() {
        const data = {
            username:'adminsIIa',
            email:'Khans@Gmail.com',
            password:'8118'
        };

        console.log('a');
        // axios.post('https://mighty-shelf-24710.herokuapp.com/accounts/login',data)
        //     .then(response => {
        //     console.log(response);
        // });

        axios.get('https://mighty-shelf-24710.herokuapp.com/polling/poll/2')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        // fetch("https://mighty-shelf-24710.herokuapp.com/accounts/login")
        //     .then(function() {
        //         console.log("ok");
        //     }).catch(function(error) {
        //     console.log(error);
        // });
    }

    render() {
        return (
            <div className={classes.Sign_Up_Container}>
                <div className={classes.Log_In_Container}>
                    <img src={Logo} className={classes.Logo} style={{opacity:1,marginTop:'10px'}}/>
                    <h2 className={classes.Welcome_Text}>Welcome To Hero Test!</h2>
                    <Fields/>
                    {/*<button onClick={() => this.Post()} className={classes.Login_Btn}>Login</button>*/}
                </div>
                <div className={classes.Left_Menu}>
                    <div className={classes.left_menu_back_drop}>
                        <div className={classes.a}/>
                        <img className={classes.khan_in_login} src={Khan}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
