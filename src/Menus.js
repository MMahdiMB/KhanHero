import React , {Component} from 'react';
import './Menus.css';
import Menu from "./components/Navbar/cancel.svg";
import Store from "./Store/Store";
import {connect} from "react-redux";
import {Link, NavLink} from "react-router-dom";

class Menus extends Component {
    constructor(props){
        super(props);
        this.state={
            menuOpen:false,
            sidenav:{
                width: '0px',
                height: '100%',
            },
        }
    }


    click = () => {
        Store.dispatch({type:'Add'});
        console.log('a');
    };

    render() {
        // console.log(this.props.menuWidth);
        return (
            <div>
                <div id="mySidenav" style={this.props.menuWidth} className="sidenav">

                    <span className="span" style={{fontSize:'30px',cursor:'pointer'}} onClick={() => { this.props.handler()}}>
                                       <img alt="A" src={Menu} className="MenuSVG" /> </span>
                    <NavLink to='/home' activeStyle={{color:'white'}} activeClassName="ActiveLink" onClick={this.click}>Home</NavLink>
                    <NavLink to='/login' activeStyle={{color:'white'}} activeClassName="ActiveLink" onClick={() => this.click()}>Login</NavLink>
                    <NavLink to='/SignUp' activeStyle={{color:'white'}} activeClassName="ActiveLink" onClick={() => this.click()}>SignUp</NavLink>
                    <NavLink to='/tests' activeStyle={{color:'white'}} activeClassName="ActiveLink" onClick={this.click}>Tests</NavLink>
                    <NavLink to='/languages' activeStyle={{color:'white'}} activeClassName="ActiveLink" onClick={this.click}>Language</NavLink>
                    <NavLink to='/profile' activeStyle={{color:'white'}} activeClassName="ActiveLink" onClick={this.click}>Profile</NavLink>
                    <NavLink to='/results' activeStyle={{color:'white'}} activeClassName="ActiveLink" onClick={this.click}>Results</NavLink>

                </div>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        includes: !state.reducers.backDropOpen ,
        menuWidth: state.reducers.openmenustyle
    };
};


export default connect(mapStateToProps)(Menus);


/*<span className="span" style={{fontSize:'30px',cursor:'pointer'}} onClick={() => { this.props.handler()}}>&#9776;</span>*/
/*<a href="#" className="closebtn" onClick={this.props.handler}>&times;</a>*/
/*<a href="#">About</a>*/
/*<a href="#">Services</a>*/
/*<a href="#">Clients</a>*/
/*<a href="#">Contact</a>*/
