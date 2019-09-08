import React,{Component} from 'react';
import classes from './TakeTest.module.css';
import RoundButton from './components/RoundButton';
import {connect} from "react-redux";
import Store from "../../../Store/Store";

class TakeTest extends Component {
    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.state = {
            col:this.props.col,
            checkeditem: 0,
            hoveritems: 0,
            tick:'./checkedgray.svg',
            bb:'0.0',
            type: 'middle',
            styles: {
                opacity: '1.0',
                border: '3px solid #44b37e',
                backgroundColor: 'white',
            },
            stylesnotcheck: {
                opacity: '1.0',
                border: '3px solid #44b37e',
                backgroundColor: 'white'
            },
            graystyle: {
                opacity: '1.0',
                border: '0px solid gray',
                backgroundColor: 'gray'
            },
            graystylenotchecked: {
                opacity: '1.0',
                border: '3px solid gray',
                backgroundColor: 'white'
            },
            width: window.innerWidth,
            height:window.innerHeight,
        }
    }


    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        if(this.state.width<=320)
        {
            this.setState({
                bb:'1.0',
                stylesnotcheck:{
                    opacity: '1.0',
                    border: '2px solid #44b37e',
                    backgroundColor: 'white',
                },
                graystylenotchecked: {
                    opacity: '1.0',
                    border: '2px solid gray',
                    backgroundColor: 'white'
                }
            });
        }
        else {
            if(this.state.width>=320&&this.state.width<=550)
            {
                this.setState({
                    bb:'1.0',
                    stylesnotcheck:{
                        opacity: '1.0',
                        border: '2px solid #44b37e',
                        backgroundColor: 'white',
                    },
                    graystylenotchecked: {
                        opacity: '1.0',
                        border: '2px solid gray',
                        backgroundColor: 'white'
                    }
                });
            }
            else {
                this.setState({
                    bb:'1.0',
                    stylesnotcheck:{
                        opacity: '1.0',
                        border: '3px solid #44b37e',
                        backgroundColor: 'white',
                    },
                    graystylenotchecked: {
                        opacity: '1.0',
                        border: '3px solid gray',
                        backgroundColor: 'white'
                    }
                });
            }

        }
    }

    MouseOver = (events) => {
        this.setState({
            hoveritems:events,
            styles:{
                opacity: '1.0',
                border: '0px solid #44b37e',
                backgroundColor: '#44b37e',
            }
        });
    };

    MouseExit= () => {
            this.setState({
                hoveritems:0,
            })
    };

    clicks = (events) => {

        this.setState({
            checkeditem: events,
            bb:'1.0',
            styles:{
                opacity: '1.0',
                border: '0px solid #44b37e',
                backgroundColor: '#44b37e',
            }
        });

        // console.log(this.state.width===320);
        if(this.state.width<=320)
        {
            this.setState({
                checkeditem: events,
                bb:'1.0',
                styles:{
                    opacity: '1.0',
                    border: '0px solid #44b37e',
                    backgroundColor: '#44b37e',
                },
                graystylenotchecked: {
                    opacity: '1.0',
                    border: '2px solid gray',
                    backgroundColor: 'white'
                },
            });
        }
        // console.log(Object({'A':this.state.col,'B':events}));
        Store.dispatch({type:'TestResult',ObjectOfTest:{'question':this.state.col,'answer':events}});
    };

    render() {
        return (
                <div style={{display:this.props.display}} className={classes.container}>{/*key={Math.random()}*/}
                    <div className={classes.questionpcontainer}>
                    <p lang={this.props.Language} className={classes.questionp}>{this.props.text}</p>
                    </div>
                    <div className={classes.main} onMouseEnter={()=>this.MouseOver(0)}>
                        <RoundButton number="1"
                                     over={() => this.MouseOver(1)}
                                     exit={() => this.MouseExit(1)}
                                     bb={this.state.checkeditem===1?this.state.bb:0}
                                     click={() => this.clicks(1)}
                                     styles={this.state.hoveritems===1||this.state.checkeditem===1?this.state.styles:this.state.stylesnotcheck}
                                     ischeck={this.state.checkeditem}
                                     tick={this.state.tick}   />
                        <RoundButton number="2"
                                     over={() => this.MouseOver(2)}
                                     exit={() => this.MouseExit(2)}
                                     bb={this.state.checkeditem===2?this.state.bb:0}
                                     click={() => this.clicks(2)}
                                     styles={this.state.hoveritems===2||this.state.checkeditem===2?this.state.styles:this.state.stylesnotcheck}
                                     ischeck={this.state.checkeditem}
                                     tick={this.state.tick}/>
                        <RoundButton number="3"
                                     over={() => this.MouseOver(3)}
                                     exit={() => this.MouseExit(3)}
                                     bb={this.state.checkeditem===3?this.state.bb:0}
                                     click={() => this.clicks(3)}
                                     styles={this.state.hoveritems===3||this.state.checkeditem===3?this.state.styles:this.state.stylesnotcheck}
                                     ischeck={this.state.checkeditem}
                                     tick={this.state.tick}/>
                        <RoundButton number="4"
                                     over={() => this.MouseOver(4)}
                                     exit={() => this.MouseExit(4)}
                                     bb={this.state.checkeditem===4?this.state.bb:0}
                                     click={() => this.clicks(4)}
                                     type='middle'
                                     styles={this.state.hoveritems===4||this.state.checkeditem===4?this.state.graystyle:this.state.graystylenotchecked}
                                     ischeck={this.state.checkeditem}
                                     tick={this.state.tick}/>
                        <RoundButton number="5"
                                     over={() => this.MouseOver(5)}
                                     exit={() => this.MouseExit(5)}
                                     bb={this.state.checkeditem===5?this.state.bb:0}
                                     click={() => this.clicks(5)}
                                     styles={this.state.hoveritems===5||this.state.checkeditem===5?this.state.styles:this.state.stylesnotcheck}
                                     ischeck={this.state.checkeditem}
                                     tick={this.state.tick}/>
                        <RoundButton number="6"
                                     over={() => this.MouseOver(6)}
                                     exit={() => this.MouseExit(6)}
                                     bb={this.state.checkeditem===6?this.state.bb:0}
                                     click={() => this.clicks(6)}
                                     styles={this.state.hoveritems===6||this.state.checkeditem===6?this.state.styles:this.state.stylesnotcheck}
                                     ischeck={this.state.checkeditem}
                                     tick={this.state.tick}/>
                        <RoundButton number="7"
                                     over={() => this.MouseOver(7)}
                                     exit={() => this.MouseExit(7)}
                                     bb={this.state.checkeditem===7?this.state.bb:0}
                                     click={() => this.clicks(7)}
                                     styles={this.state.hoveritems===7||this.state.checkeditem===7?this.state.styles:this.state.stylesnotcheck}
                                     ischeck={this.state.checkeditem}
                                     tick={this.state.tick}/>

                        {/*<RoundButton number="4" type="middle" click={(event=4) => this.clicks(event)} ischeck={this.state.checkeditem}/>*/}
                        {/*<RoundButton number="5" click={(event=5) => this.clicks(event)} ischeck={this.state.checkeditem}/>*/}
                        {/*<RoundButton number="6" click={(event=6) => this.clicks(event)} ischeck={this.state.checkeditem}/>*/}
                        {/*<RoundButton number="7" click={(event=7) => this.clicks(event)} ischeck={this.state.checkeditem}/>*/}
                    </div>
                    <hr/>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Results: state.TestResultReducer.Results,
        Language: state.LanguageReducer.Language,
    };
};

export default connect(mapStateToProps)(TakeTest);






