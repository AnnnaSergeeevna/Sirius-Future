import React, { useState, useEffect } from 'react';

const CountdownBlock = () => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const targetDay = 3;
        const targetHour = 15;
        const targetMinute = 0;

        let nextWednesday = new Date(now);
        nextWednesday.setDate(now.getDate() + (targetDay + 7 - now.getDay()) % 7);
        nextWednesday.setHours(targetHour, targetMinute, 0);

        let difference = nextWednesday - now;
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((difference / 1000 / 60) % 60);

        return { days, hours, minutes };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (<>
        <div className='CountdownBlock'>
            <h4>Следующее занятие начнется через:</h4>
            <h3>{timeLeft.days} д {timeLeft.hours} ч {timeLeft.minutes} мин </h3>
            <button className='CountdownButton'>Button</button>
        </div>
    </>);
};

export default CountdownBlock;

