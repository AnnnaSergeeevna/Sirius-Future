import React from 'react';
import Header from './Header';
import CarouselComponent from './Carousel';
import CountdownBlock from './CountdownBlock';
import HomeTasks from './HomeTasks.png'
import report from './report.png'
const Entry = () => {
    return (
        <div className="pageContainer">

            <div className="mainContainer">
                <div className="headerContainer">
                    <Header />
                </div>
                <div className="topRow">
                    <CarouselComponent />
                    <CountdownBlock />
                    <div className="smallBlock">
                        <img className="homeTasks" src={HomeTasks} alt="Home Tasks" />
                        <img className="report" src={report} alt="report img" />
                    </div>
                </div>
                <div className="bottomRow">
                    <div className="largeBlock"></div>
                    <div className="extraLargeBlock"></div>
                </div>
            </div>
        </div>
    );
};

export default Entry;



