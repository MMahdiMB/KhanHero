import React, {Fragment} from 'react';
import TakeTest from "./TakeTest/TakeTest";
import classes from './TakeTests.module.css';
import axios from "axios";
import Store from "../../Store/Store";
import Spinner from "../Spinner/Spinner";

class TakeTests extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: 5,
            display: 'flex',
            firstdisplay:'none',
            Questions:[],
            isLoading: true
        };
    }

    GoNextPage() {
        this.setState({
            page: this.state.page + 5,
        });
    };

    FinishTest() {
        Store.dispatch({type:'FinishTest'});
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        window.scrollTo({  behavior: 'smooth',top:1});
    }

    componentDidMount() {
        axios.get('https://mighty-shelf-24710.herokuapp.com/polling/poll/answer/9d1a83d284ab4a24b5c209956d124ee7')
            .then((response) => {
                console.log(response.data);
                axios.get('https://mighty-shelf-24710.herokuapp.com/polling/poll/'.concat(response.data.poll))
                    .then((response) => {
                        console.log(response.data);
                        let questions = response.data.questions;
                        this.setState({Questions: this.state.Questions.concat(questions),isLoading: false});
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            });
    }

    render() {
        let Next_OR_Finish = this.state.isLoading===false ?
            this.state.page >= 6 ?
            <button onClick={this.FinishTest.bind(this)} className={classes.nextPagebtn}>Finish</button>
            : <button onClick={this.GoNextPage.bind(this)} className={classes.nextPagebtn}>Next</button>
            : null ;

        let Tests = this.state.Questions.map((Test,index) => {
            return <TakeTest key={index} col={index+1}  display={index+1<=this.state.page && this.state.page<=index+5 ? this.state.display : this.state.firstdisplay } text={Test.body}/>
        });

        if(this.state.isLoading) {
            Tests = <Spinner/>;
        }
        else {
            Tests = this.state.Questions.map((Test,index) => {
                return <TakeTest key={index} col={index+1}  display={index+1<=this.state.page && this.state.page<=index+5 ? this.state.display : this.state.firstdisplay } text={Test.body}/>
            });
        }


        return (
            <div>
                {Tests}
                {/*<TakeTest col={1} display={this.state.page===1 ? this.state.display : this.state.firstdisplay } text={"This is a Test.Take our Personality Test and get a “freakishly accurate”"}/>*/}
                {/*<TakeTest col={2} display={this.state.page===1 ? this.state.display : this.state.firstdisplay} text={" description of who you are and why you do things the way you do."}/>*/}
                {/*<TakeTest col={3} display={this.state.page===1 ? this.state.display : this.state.firstdisplay} text={"description of who you are and why you do things the way you do.Take our Personality Test and get a Take our Personality Test and get Take our Personality Test"}/>*/}
                {/*<TakeTest col={4} display={this.state.page===2 ? this.state.display : this.state.firstdisplay} text={"description of who you are and why you do things the way you do.Take our Personality Test and get a Take our Personality Test and get Take our Personality Test"} />*/}
                {/*<TakeTest col={5} display={this.state.page===2 ? this.state.display : this.state.firstdisplay} text={"Take our Personality Test and get a “freakishly accurate”"}/>*/}
                {/*<TakeTest col={6} display={this.state.page===2 ? this.state.display : this.state.firstdisplay} text={" Test and get a “freakishly accurate description of who you are and why you do things the way you do.Take our Personality Test and get"}/>*/}
                {/*<TakeTest col={7} display={this.state.page===3 ? this.state.display : this.state.firstdisplay } text={"This is a Test.Take our Personality Test and get a “freakishly accurate”"}/>*/}
                {/*<TakeTest col={8} display={this.state.page===3 ? this.state.display : this.state.firstdisplay} text={" description of who you are and why you do things the way you do."}/>*/}
                {/*<TakeTest col={9} display={this.state.page===3 ? this.state.display : this.state.firstdisplay} text={"description of who you are and why you do things the way you do.Take our Personality Test and get a Take our Personality Test and get Take our Personality Test"}/>*/}
                {Next_OR_Finish}
            </div>
        );
    };
}

export default TakeTests;

// Take our Personality Test and get a “freakishly accurate”
//                         description of who you are and why you do things the way you do.Take our Personality Test and get a Take our Personality Test and get Take our Personality Test




/*  <TakeTest col={1} display={this.state.page===1 ? this.state.display : this.state.firstdisplay } text={"This is a Test.Take our Personality Test and get a “freakishly accurate”"}/>
                <TakeTest col={2} display={this.state.page===1 ? this.state.display : this.state.firstdisplay} text={" description of who you are and why you do things the way you do."}/>
                <TakeTest col={3} display={this.state.page===1 ? this.state.display : this.state.firstdisplay} text={"description of who you are and why you do things the way you do.Take our Personality Test and get a Take our Personality Test and get Take our Personality Test"}/>
                <TakeTest col={4} display={this.state.page===2 ? this.state.display : this.state.firstdisplay} text={"description of who you are and why you do things the way you do.Take our Personality Test and get a Take our Personality Test and get Take our Personality Test"} />
                <TakeTest col={5} display={this.state.page===2 ? this.state.display : this.state.firstdisplay} text={"Take our Personality Test and get a “freakishly accurate”"}/>
                <TakeTest col={6} display={this.state.page===2 ? this.state.display : this.state.firstdisplay} text={" Test and get a “freakishly accurate description of who you are and why you do things the way you do.Take our Personality Test and get"}/>
                <TakeTest col={7} display={this.state.page===3 ? this.state.display : this.state.firstdisplay } text={"This is a Test.Take our Personality Test and get a “freakishly accurate”"}/>
                <TakeTest col={8} display={this.state.page===3 ? this.state.display : this.state.firstdisplay} text={" description of who you are and why you do things the way you do."}/>
                <TakeTest col={9} display={this.state.page===3 ? this.state.display : this.state.firstdisplay} text={"description of who you are and why you do things the way you do.Take our Personality Test and get a Take our Personality Test and get Take our Personality Test"}/>
    */
