import React from 'react';
import Header from './Header';
import CarouselComponent from './Carousel';
import CountdownBlock from './CountdownBlock';
import HomeTasks from './HomeTasks.png'
import report from './report.png'
import BalanceScrollComponent from './BalanceScrollComponent';
import Schedule from './Schedule';
const Entry = () => {
    return (
        <>
            <div className="topRow">
                <CarouselComponent />
                <CountdownBlock />
                <div className="smallBlock">
                    <img className="homeTasks" src={HomeTasks} alt="Home Tasks" />
                    <img className="report" src={report} alt="report img" />
                </div>
            </div>
            <div className="bottomRow">
                <div className="largeBlock"><BalanceScrollComponent />
                </div>
                <div className="extraLargeBlock"><Schedule /></div>
            </div></>
    );
};

export default Entry;



