import React , { Component } from 'react';
import classes from './Fields.module.css';
import axios from "axios";

class Fields extends Component {
    constructor(props) {
        super(props);
        this.Submit = this.Submit.bind(this);
        this.EmailInput = this.EmailInput.bind(this);
        this.PasswordInput = this.PasswordInput.bind(this);
        this.state = {
            Email: '',
            Password: '',
        }
    }


    Submit(event) {
        event.preventDefault();
        if (!event.target.checkValidity()) {
            // form is invalid! so we do nothing
            return;
        }
        const data = {
            username:'adminsIIa',
            email: this.state.Email,
            password: this.state.Password
        };
        axios.post('https://mighty-shelf-24710.herokuapp.com/accounts/signup',data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    EmailInput(event) {
        this.setState(
            {
                ...this.state,
                Email: event.target.value
            }
        );
    }

    PasswordInput(event) {
        this.setState(
            {
                ...this.state,
                Password: event.target.value
            }
        );
    }
    render() {
        return (
                <form className={classes.Form}>
                    <input value={this.state.Email} onChange={this.EmailInput} className={classes.Email_Input} name="Email" required={true}/>
                    <label htmlFor="Email" className={classes.Email_Label}>E-mail</label>

                    <input value={this.state.Password} onChange={this.PasswordInput} className={classes.Pass_Input} name="Password" type="Password" required={true}/>
                    <label htmlFor="Password" className={classes.Pass_Label}>Password</label>

                    <button type="Submit" onClick={this.Submit} className={classes.Login_Btn}>Sign Up</button>
                </form>
        );
    }
}

export default Fields;
