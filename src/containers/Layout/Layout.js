import React,{Component} from 'react';
import AUX from "../hoc/auxa";
import TakeTests from "../../components/TakeTests/TakeTests";
import {Redirect, Route, Switch} from "react-router";
import Selection from "../../components/Language/Modal/Selection";
import Results from "../../components/Results/Results";
import Progress from "../../components/Progress/Progress";
import SignUp from "../../components/SignUp/SignUp";
import Profile from "../../components/Profile/Profile";
import Home from "../Home/Home";
import Login from "../../components/Login/Login";
import {connect} from "react-redux";

class Layout extends Component {
    render() {
        return (
                    <AUX>
                        {
                            this.props.isAuth ?
                                <Switch>
                                    <Route path="/languages" component={Selection}/>
                                    <Route path="/Home" component={Home}/>
                                    <Route path="/results" component={Results}/>
                                    <Route path="/progress" component={Progress}/>
                                    <Route path="/Profile" component={Profile}/>
                                    <Route path="/tests" component={TakeTests}/>
                                    <Route path="/SignUp" render={() => <Redirect to={'/profile'}/>}/>
                                    <Route path="/Login" render={() => <Redirect to={'/profile'}/>}/>
                                    <Route path="/" exact={ true } component={TakeTests}/>
                                </Switch>
                                :
                                <Switch>
                                    <Route path="/languages" component={Selection}/>
                                    <Route path="/Home" component={Home}/>
                                    <Route path="/SignUp" component={SignUp}/>
                                    <Route path="/Home" component={Home}/>
                                    <Route path="/Login" component={Login}/>
                                    <Route path="/Profile" render={() => <Redirect to={'/login'}/>}/>
                                    <Route path="/tests" component={TakeTests}/>
                                    <Route path="/" exact={ true } component={TakeTests}/>
                                </Switch>
                        }
                    </AUX>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.AuthReducer.isAuth
    };
};

export default connect(mapStateToProps)(Layout);
