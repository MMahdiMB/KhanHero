import React , { Component } from 'react';
import classes from './Fields.module.css';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import Store from "../../../Store/Store";
import Spinner from "./Spinner/Spinner";

class Fields extends Component {
    constructor(props) {
        super(props);
        this.Submit = this.Submit.bind(this);
        this.EmailInput = this.EmailInput.bind(this);
        this.PasswordInput = this.PasswordInput.bind(this);
        this.state = {
            Email: '',
            Password: '',
            isLoading: false
        }
    }

    componentDidMount() {
        // console.log(localStorage.getItem('JWT'));
    }

    Submit(event) {
        event.preventDefault();
        if (!event.target.checkValidity()) {
            // form is invalid! so we do nothing
            return;
        }
        const data = {
            email: this.state.Email,
            password: this.state.Password
        };

        const dataII = {
          user: localStorage.getItem('ID'),
          poll:1
        };

        // axios.get('https://mighty-shelf-24710.herokuapp.com/polling/poll/answer/9d1a83d284ab4a24b5c209956d124ee7')
        //     .then(function (response) {
        //         console.log(response);
        //
        //     });

        // axios.post('https://mighty-shelf-24710.herokuapp.com/polling/poll/link',dataII,{headers:{Authorization: 'Token '+localStorage.getItem('JWT')}})
        //     .then(function (response) {
        //         console.log(response);
        //
        //         // SetAuthorizationToken(token);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

        this.setState({...this.state,isLoading:true});
        axios.post('https://mighty-shelf-24710.herokuapp.com/accounts/login',data)
            .then((response) => {
                const token = response.data.token;
                console.log(response);
                localStorage.setItem('JWT',token);
                localStorage.setItem('ID',response.data.user.id);
                Store.dispatch({type:'isAuth', auth:true});
                this.props.history.push('/Profile');
            })
            .catch((error) => {
                console.log(error);
                this.setState({...this.state,isLoading:false});
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
                <form onSubmit={this.Submit} className={classes.Form}>
                    <input value={this.state.Email} onChange={this.EmailInput} className={classes.Email_Input} name="Email" required={true}/>
                    <label htmlFor="Email" className={classes.Email_Label}>E-mail</label>

                    <input value={this.state.Password} onChange={this.PasswordInput} className={classes.Pass_Input} name="Password" type="Password" required={true}/>
                    <label htmlFor="Password" className={classes.Pass_Label}>Password</label>

                    <button type="Submit" onClick={this.Submit} className={classes.Login_Btn}>

                        {this.state.isLoading ?  <i className={["fa fa-spinner fa-spin",classes.faa].join(' ')}/> : 'Login'}

                    </button>
                </form>
        );
    }
}

export default withRouter(Fields);
