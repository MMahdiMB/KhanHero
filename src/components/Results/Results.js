import React , { Component } from 'react';
import Result from "./Result/Result";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import classes from './Results.module.css';
class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            Titles: [],
            isLoading:true
        }
    }

    componentDidMount() {
        axios.get('https://mighty-shelf-24710.herokuapp.com/polling/poll/result?poll=1',{headers:{Authorization: 'Token '+ localStorage.getItem('JWT')}})
            .then((response) => {
                this.setState({Data: response.data,isLoading:false});
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        let ResultSets = <Spinner/>;
        if(this.state.isLoading===false) {
            ResultSets = this.state.Data.map((ResultSet, index) => {
                return <Result key={index} title={ResultSet.question.body} percentage={ResultSet.avg} a={index===0?true:false}/>;
            });
            console.log(this.state.Data);
        }
        return (
            <div className={classes.Container}>
                {ResultSets}
            </div>
        );
    }
}

export default Results;


{/*<Result title={'Kind'} percentage={Percentages} a={true}/>*/}
{/*<Result title={'Angry'} percentage={[85,-22]}/>*/}
{/*<Result title={'Nervous'} percentage={[25,-62]}/>*/}
{/*<Result title={'Most talkingaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'} percentage={[55,-12]}/>*/}
{/*<Result title={'Insane'} percentage={[35,-92]}/>*/}
{/*<Result title={'Kind'} percentage={[15,-92]}/>*/}
{/*<Result title={'Kind'} percentage={[45,-12]}/>*/}
