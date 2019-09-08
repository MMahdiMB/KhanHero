import React from 'react';
import classes from './Tests.module.css';
import Test from "../Test/Test";
import porto1 from '../../assets/images/personalities/assetone.svg';
import porto2 from '../../assets/images/personalities/Asset 2.svg';
import porto3 from '../../assets/images/personalities/Asset 4.svg';
import porto4 from '../../assets/images/personalities/Asset 5.svg';
import porto5 from '../../assets/images/personalities/Asset 6.svg';
import porto6 from '../../assets/images/personalities/Asset 7.svg';
import porto7 from '../../assets/images/personalities/Asset 8.svg';
import porto8 from '../../assets/images/personalities/Asset 5.svg';

const Tests = () => {
    return (
        <div className={classes.main}>
                <Test porto={porto1} title="MWIII"/>
                <Test porto={porto2} title="COD"/>
                <Test porto={porto3} title="Price"/>
                <Test porto={porto4} title="McTavish"/>
                <Test porto={porto5} title="BattleField"/>
                <Test porto={porto6} title="MWIII"/>
                <Test porto={porto7} title="MWIII"/>
                <Test porto={porto2} title="MWIII"/>
                {/*<Test porto={porto6} title="Battle Field"/>*/}
        </div>
    );
}

export default Tests;


