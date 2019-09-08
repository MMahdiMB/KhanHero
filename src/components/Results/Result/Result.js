import React , { Component } from 'react';
import classes from './Result.module.css';
import Progress from "../../Progress/Progress";

class Result extends Component {
    render() {
        // console.log(this.props.percentage[0]);
        let percentages  = [Math.round(this.props.percentage)];
        let deg = ['really','really'];
        let progressbar = percentages.map((per,index) => {
                return per >= 0 ?
                    <div key={Math.random()}>
                        <p className={classes.Result_Text}>{per}% agree you are {deg[index]} {this.props.title.toString().toLowerCase()}</p>
                        <Progress Negative={true} percentage_of_progress_bar = {per + '%'}/>
                    </div>
                     :
                    <div key={Math.random()}>
                        <p className={classes.Result_Text}>{-per}% disagree you are {deg[index]} {this.props.title.toString().toLowerCase()}</p>
                        <Progress Negative={false} percentage_of_progress_bar = {-per+ '%'}/>
                    </div>
            });
        return (
            <div>
                <div className={classes.ResultContainer}>
                    <div className={classes.title}>
                        <hr className={classes.titlehrii} style={ this.props.a ? {opacity:0}:{} }/>
                        {/*<hr className={classes.titlehr} style={ this.props.a ? {opacity:0}:{} }/>*/}
                        <p className={classes.titletext}>{this.props.title}</p>
                    </div>
                    {
                        progressbar
                    }
                </div>
            </div>
        );
    }
}
export default Result;



{/*<Progress percentage_of_progress_bar={'6%'}/>*/}
{/*{*/}
{/*this.props.percentage >=0 ? <Progress borders={'0 55px 55px 0'} marginleftfornegatives={50} percentage_of_progress_bar={parseInt(this.props.percentage/2) + '%'}/>*/}
{/*: <Progress borders={'55px 0 0 55px'} marginleftfornegatives={parseInt(this.props.percentage/2)+50} percentage_of_progress_bar={-parseInt(this.props.percentage/2) + '%'}/>*/}
{/*}*/}
{/*<hr className={classes.divider}/>*/}

{/*<p className={classes.Result_Text}>{this.props.percentage[0]}% voted you are really kind</p>{progressbar}*/}
{/*<p className={classes.Result_Text}>{this.props.percentage[1]}% voted you are very kind</p>{progressbar}*/}
{/*<p className={classes.Result_Text}>{this.props.percentage[2]}% voted you are kind</p>{progressbar}*/}
{/*<p className={classes.Result_Text}>{this.props.percentage[3]}% voted you aren't kind</p>{progressbar}*/}
{/*<p className={classes.Result_Text}>{this.props.percentage[4]}% voted you aren't very kind</p>{progressbar}*/}
{/*<p className={classes.Result_Text}>{this.props.percentage[5]}% voted you aren't very kind</p>{progressbar}*/}
