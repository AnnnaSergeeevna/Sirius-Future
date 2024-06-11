import React from 'react';
import walletIcon from './redWallet.png';
import './Calendar.css';


const Lesson = ({ variant }) => {
    let lessonContent;

    switch (variant) {
        case 1:
            lessonContent = (
                <div className='bg-green'>
                    <h5>13:00-13:45</h5>
                    <p>Ментальная арифметика</p>
                    <img src={walletIcon} alt="wallet icon" />
                </div>
            );
            break;
        case 2:
            lessonContent = (
                <div className='border-red'>
                    <h5>13:00-13:45</h5>
                    <p>Ментальная арифметика</p>
                    <img src={walletIcon} alt="wallet icon" />
                </div>
            );
            break;
        case 3:
            lessonContent = (
                <div className='bg-purple'>
                    <h5>13:00-13:45</h5>
                    <p>Ментальная арифметика</p>
                </div>
            );
            break;
        default:
            lessonContent = <div>Урок</div>;
    }

    return lessonContent;
};

export default Lesson;
