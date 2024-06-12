
import React from 'react';
import walletIcon from './redWallet.png';
import './Calendar.css';

const Lesson = ({ variant }) => {
    let lessonContent;

    switch (variant) {
        case 1:
            lessonContent = (
                <div className='bg-green'>
                    <h5>19:00-19:45</h5>
                    <p>Ментальная арифметика</p>
                    <img src={walletIcon} alt="wallet icon" />
                </div>
            );
            break;
        case 2:
            lessonContent = (
                <div className='bg-lily'>
                    <h5>19:00-19:45</h5>
                    <p>Программирование</p>
                    <img src={walletIcon} alt="wallet icon" />
                </div>
            );
            break;
        case 3:
            lessonContent = (
                <div className='bg-yellow'>
                    <h5>10:00-10:45</h5>
                    <p>Ментальная арифметика-2</p>
                </div>
            );
            break;
        case 4:
            lessonContent = (
                <div className='bg-purple'>
                    <h5>13:00-13:45</h5>
                    <p>Ментальная арифметика-3</p>
                </div>
            );
            break;
        case 5:
            lessonContent = (
                <div className='bg-light-blue'>
                    <h5>17:00-17:45</h5>
                    <p>Ментальная арифметика-4</p>
                </div>
            );
            break;
        default:
            lessonContent = <div>Урок</div>;
    }

    return lessonContent;
};

export default Lesson;

