import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import thumb from './scroll.png';

const BalanceScrollComponent = () => {
    const scrollContainerRef = useRef(null);
    const [thumbHeight, setThumbHeight] = useState(0);
    const [thumbPosition, setThumbPosition] = useState(0);

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
        const newThumbHeight = (clientHeight / scrollHeight) * 100;
        const newThumbPosition = (scrollTop / scrollHeight) * 100;
        setThumbHeight(newThumbHeight);
        setThumbPosition(newThumbPosition);
    };

    useEffect(() => {
        const { scrollHeight, clientHeight } = scrollContainerRef.current;
        const newThumbHeight = (clientHeight / scrollHeight) * 100;
        setThumbHeight(newThumbHeight);
    }, []);

    return (
        <div className="balance-scroll-container">
            <h4 className='balance-header-font'>Баланс занятий</h4>
            <div className="list-scroll-container">
                <ul className="balance-scroll-list" ref={scrollContainerRef} onScroll={handleScroll}>
                    <li className='li-balance'>
                        <p>Ментальная Арифметика</p>
                        <p className='balanceCount'>32</p>
                    </li>
                    <li className='li-balance'>
                        <p>Программирование</p>
                        <p className='balanceCount'>0</p>
                    </li>
                    <li className='li-balance'>
                        <p>Скорочтение</p>
                        <p className='balanceCount'>4</p>
                    </li>
                    <li className='li-balance'>
                        <p>etc</p>
                        <p className='balanceCount'>8</p>
                    </li>
                    <li className='li-balance'>
                        <p>etc</p>
                        <p className='balanceCount'>8</p>
                    </li>
                    <li className='li-balance'>
                        <p>etc</p>
                        <p className='balanceCount'>8</p>
                    </li>
                </ul>
                <div className="balance-scroll">
                    <img
                        src={thumb}
                        alt="scrollbar thumb"
                        className="balance-scroll-thumb-img"
                        style={{
                            top: `${thumbPosition}%`,
                            height: `${thumbHeight}%`,
                            transform: `translateY(${thumbPosition}%)`
                        }}
                    />
                </div>
            </div>
            <button onClick={() => window.location.href = '/payment'} className='btnBalance'>Button</button>
        </div>
    );
};

export default BalanceScrollComponent;

