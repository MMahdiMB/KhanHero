import React , { Component } from 'react';
import classes from './Login.module.css';
import Fields from "./Fields/Fields";
import Logo from '../../logo.svg';
import axios from 'axios';
import Khan from '../../assets/images/Login/slider.jpg';
import { withRouter } from 'react-router-dom';
import AUX from "../../containers/hoc/auxa";
import { connect } from 'react-redux';
import Spinner from "../Spinner/Spinner";


class Login extends Component {

    componentDidMount() {

    }

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

    GoToSignUp() {
        this.props.history.push('/SignUp');
    }

    render() {

        let LOGIN = <Spinner/>;

        if(this.props.isnavbarLoaded) {
            LOGIN = (
                <div className={classes.Sign_Up_Container}>
                    <div className={classes.Left_Menu}>
                        <button onClick={this.GoToSignUp.bind(this)} className={classes.sing_up_on_login_page}>Sign Up Now!</button>
                        <p className={classes.text_in_left_menu}>By Singing Up You Can Get Your Specific Link!<br/><br/><br/>Click The Button And Sign Up Now !!</p>
                        <div className={classes.a}/>
                        <img className={classes.khan_in_login} src={Khan}/>
                    </div>
                    <div className={classes.Log_In_Container}>
                        <img src={Logo} className={classes.Logo} style={{opacity:1,marginTop:'10px'}}/>
                        <h2 className={classes.Welcome_Text}>Welcome To Hero Test!</h2>
                        <Fields/>
                    </div>
                </div>);
            console.log('navbar is not loaded!!');
        }

        console.log('navbar is not loaded!!' + this.props.isnavbarLoaded);


        return (
           <AUX>
               {LOGIN}
           </AUX>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isnavbarLoaded: state.IsNavBarLoaded.isnavbarLoaded,
    };
};

export default connect(mapStateToProps)(withRouter(Login));
