import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import ArrowL from './ArrowL.png';
import Question from './question.png';
import Lesson from './Lesson';
import './Calendar.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const handleDateClick = (arg) => {
        alert(arg.dateStr);
    };

    const handleMonthChange = (monthsToAdd) => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() + monthsToAdd);
            return newDate;
        });
    };

    const renderEventContent = (eventInfo) => {
        const day = format(eventInfo.event.start, 'd');
        let variant;
        if (["1", "4", "9", "15", "27", "7", "20", "25"].includes(day)) {
            variant = 1;
        } else if (["3", "5", "10", "30"].includes(day)) {
            variant = 2;
        } else if (["25"].includes(day)) {
            variant = 3;
        }
        return variant ? <Lesson variant={variant} /> : null;
    };

    return (
        <>
            <div className='calendar-header'>
                <div className='arrow-header'>
                    <button className='arrow' onClick={() => handleMonthChange(-1)}>
                        <img src={ArrowL} alt="button to the left" />
                    </button>
                    <p className='bold16'>{format(currentDate, 'MMMM yyyy', { locale: ru })}</p>
                    <button className='arrow' onClick={() => handleMonthChange(1)}>
                        <img src={ArrowL} alt="button to the right" className='arrow' style={{ transform: 'rotate(180deg)' }} />
                    </button>
                </div>
                <div className='today-header'>
                    <button className='today-button' onClick={() => setCurrentDate(new Date())}>Сегодня</button>
                    <img className='question' src={Question} alt="Question mark" />
                </div>
            </div>
            <FullCalendar
                key={currentDate} // Force re-render when currentDate changes
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                locale='ru'
                events={[]}
                dateClick={handleDateClick}
                headerToolbar={false}
                contentHeight="auto"
                eventContent={renderEventContent}
                initialDate={currentDate}
            />
        </>
    );
};

export default Calendar;

