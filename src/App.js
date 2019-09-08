import React,{Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import BackDrop from "./components/BackDrop/BackDrop";
import AUX from "./containers/hoc/auxa";
import { Provider } from 'react-redux';
import Store from "./Store/Store";
import TakeTests from "./components/TakeTests/TakeTests";
import { Switch } from 'react-router';
import Selection from "./components/Language/Modal/Selection";
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from "./containers/Layout/Layout";
import Results from "./components/Results/Results";
import Progress from "./components/Progress/Progress";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/Profile/Profile";
import Home from "./containers/Home/Home";



class App extends Component {
    render() {
    return (
        <BrowserRouter>
            <Provider store={Store}>
            <AUX>
<div>
                <BackDrop/>
                {/*<Selection/>*/}
                <div className="App">
                    <Navbar/>
                    {/*<TakeTests/>*/}
                    <Layout/>
                </div>

</div>

            </AUX>
            </Provider>
        </BrowserRouter>
    );
  }
}

export default App;
{/*<BackDrop backdroPhandler={this.action} hide={this.state.BackDropVisible}/>*/}
{/*<Tests/>*/}
{/*<Introduction/>*/}
{/*<Language/>*/}

// action() {
//     this.setState({
//         BackDropVisible : !this.state.BackDropVisible,
//     });
//     let obj = 'Jeeeeeeeea';
//     const abc = {q:'r',b:'t'};
//     obj = {...abc};
//     console.log(obj);
//     obj = {abc};
//     console.log(obj);
// }
