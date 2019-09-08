import React , {Component} from 'react';
import classes from './Profile.module.css';
import AUX from "../../containers/hoc/auxa";
import Spinner from "../Spinner/Spinner";
import {withRouter} from "react-router";

class Profile extends Component {

    LogOut() {
        localStorage.clear();
        window.location.href = '/login';
    }

    Go_To_Result_Page() {
        this.setState({isLoading:true});
        this.props.history.push('/Results');
    }

    render() {
        return (
            <AUX>
                <div className={classes.container}>
                    <div className={classes.link_include}>
                        <h3 className={classes.link_text}>Your Link Is:</h3>
                        <div>
                            <a className={classes.link_link} href={'#'}>https://mighty-shelf-24710.herokuapp.com/admin/panel/profile/nfnk1fn3if89f8328f982</a>
                        </div>
                        <button className={classes.copy_link}>Copy Link!</button>
                    </div>
                    <div className={classes.results_page}>
                        <h3 className={classes.results_text}>You can consider the results on this page!</h3>
                        <button className={classes.results_action} onClick={this.Go_To_Result_Page.bind(this)}>Results</button>
                    </div>
                    <div className={classes.logout_include}>
                        <h3 className={classes.results_text}>If you want to log out from your account you can use this?</h3>
                        <button className={classes.logout_action} onClick={this.LogOut.bind(this)}>Log Out</button>
                    </div>
                </div>            </AUX>
        );
    }
}

export default withRouter(Profile);
