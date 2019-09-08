import React from 'react';
import classes from './selection.module.css';
import {connect} from "react-redux";

class Selection extends React.Component {

    render() {
        return (
                <div className={classes.select}>
                    <div className={classes.LanguageContainer}>
                        <div className={classes.EachLanguage}>Persian</div>
                        <div className={classes.EachLanguage}>English</div>
                        <div className={classes.EachLanguage}>Dutch</div>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modalOpen: !state.ModalReducer.ModalOpen ,
    };
};

export default connect(mapStateToProps)(Selection);


// let drop = this.props.modalOpen ?
//     <div className={classes.select} style={{top:'0',opacity:'1.0'}}>
//         <div className={classes.LanguageContainer}>
//             <div className={classes.EachLanguage}>Persian</div>
//             <div className={classes.EachLanguage}>English</div>
//             <div className={classes.EachLanguage}>Dutch</div>
//         </div>;
//     </div> :
//     <div className={classes.select} style={{opacity:'0.5'}}/>;
