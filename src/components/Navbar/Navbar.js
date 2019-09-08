import React , {Component} from 'react';
import './Navbar.css';
import Menus from "../../Menus";
import Menu from "./menu.svg";
import AUX from "../../containers/hoc/auxa";
import { connect } from 'react-redux';
import {withRouter, Link, Redirect, BrowserRouter} from 'react-router-dom';
import Store from "../../Store/Store";
import axios from "axios";
import {Switch} from "react-router";


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handler = this.handler.bind(this);
        this.listClick= this.listClick.bind(this);
        this.state = {
            hammenu: true,
            width: window.innerWidth,
            hamsize:{width:'50px',height:'50px',margin:'20px'},
            openmenustyle:{
                width:this.props.menuWidth,
                height:'100%',
            },
            isLogin: '',
        }
    }

    componentDidMount() {
        console.log(localStorage.getItem('JWT'));
        axios.get('https://mighty-shelf-24710.herokuapp.com/accounts/user',{headers:{Authorization: 'Token '+ localStorage.getItem('JWT')}})
            .then((response) => {
                Store.dispatch({type:'isAuth', auth:true});
                Store.dispatch({type:'isNavbarLoaded', isLoaded:true});
                this.setState({isLogin:this.props.isAuth});
                // console.log(response);
            })
            .catch((error) => {
                console.log(error);
                Store.dispatch({type:'isAuth', auth:false});
                Store.dispatch({type:'isNavbarLoaded', isLoaded:true});
                this.setState({isLogin:this.props.isAuth});
            });

            this.updateWindowDimensions();
            window.addEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth});
        if(this.state.width<=650){
            this.setState({
                hamsize:{width:'30px',height:'30px',margin:'10px'}
            });
        }
        else {
            this.setState({
                hamsize:{width:'0px',height:'0px',margin:'0px'}
            });
        }
    }

    handler() {
        Store.dispatch({type:'Add'});
        this.setState({
            hammenu:!this.state.hammenu,
        });
        if(this.state.hammenu) {
            this.setState(
                {
                    hammenu:!this.state.hammenu,
                    openmenustyle: {
                        width:'250px',
                        height:'100%',
                    }
                });
        }
        else {
            this.setState(
                {
                    hammenu:!this.state.hammenu,
                    openmenustyle: {
                        width:'0px',
                        height:'100%',
                    }
                });
        }
        // console.log('A');
        // this.props.action();
    };

    listClick(index) {
        // console.log(index);
        switch (index) {
            case 3:
                // Store.dispatch({type:'OpenModal'});
                // return <Route path="/Hello" component={Selection}/>;
                break;
            case 1:
                axios.get('https://mighty-shelf-24710.herokuapp.com/accounts/user',{headers:{Authorization: 'Token '+ localStorage.getItem('JWT')}})
                    .then((response) => {
                        Store.dispatch({type:'isAuth', auth:true});
                        this.setState({isLogin:this.props.isAuth});
                    })
                    .catch((error) => {
                        Store.dispatch({type:'isAuth', auth:false});
                        this.setState({isLogin:this.props.isAuth});
                    });
                break;
            default:
                break;
        }
    };

    Go_To_Login_Page() {
        // console.log('Alpha');
        this.props.history.push('/Login');
    };

    render() {

        // console.log(" A " + this.props.isAuth);
        let menus = [['Home','/home'],['Tests','/tests'],['Exercises','results'],['Languages','/languages'],['','/login']];

        const navs = menus.map((nav,index) => {
            return <li className="NavigationItem" key={index} onClick={() => this.listClick(index)}><Link to={menus[index][1]}>{nav[0]}</Link></li>;
        });

        let LoginOrProfile = null;
        let all= null;

        if(this.props.isAuth) {
            if(this.state.width<=650){
                this.NavFinal = <div className="SVGContainer">
                    <img alt={'Menu'} src={Menu} className="MenuSVG" onClick={() => { this.handler();}} style={this.state.hamsize}/>
                </div>;
            }
            else {
                this.NavFinal = (<ul className="Navbar">
                    {navs}
                </ul>);
            }
            LoginOrProfile =  <button className="Loginbtn" onClick={() => this.Go_To_Login_Page()}>Profile</button>;
            all = <AUX> {this.NavFinal} {LoginOrProfile} </AUX>;
        }

        if(this.props.isAuth===false) {
            if(this.state.width<=650){
                this.NavFinal = <div className="SVGContainer">
                    <img alt={'Menu'} src={Menu} className="MenuSVG" onClick={() => { this.handler();}} style={this.state.hamsize}/>
                </div>;
            }
            else {
                this.NavFinal = (<ul className="Navbar">
                    {navs}
                </ul>);
            }

            LoginOrProfile =
                <button className="Loginbtn" onClick={() => this.Go_To_Login_Page()}>Login</button>;
                all = <AUX>
                    {this.NavFinal}
                    {LoginOrProfile}
            </AUX>;
        }






        return (
            <AUX>
                <div>
                    <div className="horizdiv"/>
                    <nav className="Header">
                         {all}
                    </nav>
                    <Menus handler={this.handler}/>
                </div>
            </AUX>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        includes: !state.reducers.backDropOpen ,
        menuWidth: state.reducers.openmenustyle,
        modalOpen: state.ModalReducer.ModalOpen,
        isAuth: state.AuthReducer.isAuth,
    };
};


// const mapDispatchToProps = (dispatch) => {
//         return {
//             onIngredientAdded: dispatch({type: 'Add' , ingredientsName: true})
//         }
// };

export default connect(mapStateToProps)(withRouter(Navbar));
