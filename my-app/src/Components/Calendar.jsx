import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import ArrowL from './ArrowL.png';
import Question from './question.png';
import Lesson from './Lesson';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calendar.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedSubject, setSelectedSubject] = useState('Выбрать предмет');
    const [events, setEvents] = useState([]);
    const [newEventTitle, setNewEventTitle] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min')
            .then(bootstrap => {
                window.bootstrap = bootstrap;
            })
            .catch(err => console.error('Error loading Bootstrap:', err));
    }, []);

    const handleDateClick = (arg) => {
        setSelectedDate(new Date(arg.dateStr));
        openModal();
    };

    const handleMonthChange = (monthsToAdd) => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() + monthsToAdd);
            return newDate;
        });
    };

    const renderEventContent = (eventInfo) => {
        const dayOfWeek = eventInfo.event.start.getDay();
        let variant;
        switch (dayOfWeek) {
            case 1: // Понедельник
                variant = 1;
                break;
            case 2: // Вторник
                variant = 2;
                break;
            case 3: // Среда
                variant = 3;
                break;
            case 4: // Четверг
                variant = 4;
                break;
            case 5: // Пятница
                variant = 5;
                break;
            default:
                variant = null;
        }
        return variant ? <Lesson variant={variant} /> : null;
    };

    const handleSubjectChange = (event) => {
        setSelectedSubject(event.target.value);
    };

    const handleScheduleChange = () => {
        alert(`Изменить расписание для: ${selectedSubject}`);
    };

    const closeModal = () => {
        const modalElement = document.getElementById('exampleModal');
        const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
            modalInstance.hide();
        }
        setNewEventTitle('');
    };

    const handleAddEvent = () => {
        const newEvent = {
            title: `${newEventTitle} - ${selectedSubject}`,
            start: new Date(selectedDate.setHours(selectedTime.getHours(), selectedTime.getMinutes())),
        };
        setEvents([...events, newEvent]);
        closeModal();
    };

    const openModal = () => {
        const modalElement = document.getElementById('exampleModal');
        const modalInstance = new window.bootstrap.Modal(modalElement);
        modalInstance.show();
    };

    return (
        <>
            <div className='subject-header'>
                <select value={selectedSubject} onChange={handleSubjectChange}>
                    <option value="Выбрать предмет">Выбрать предмет</option>
                    <option value="Ментальная арифметика">Ментальная арифметика</option>
                    <option value="Программирование">Программирование</option>
                </select>
                <button className='subject-btn' onClick={handleScheduleChange}>Изменить расписание</button>
            </div>
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
                key={currentDate}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                locale='ru'
                events={events}
                dateClick={handleDateClick}
                headerToolbar={false}
                contentHeight="auto"
                eventContent={renderEventContent}
                initialDate={currentDate}
                firstDay={1}
            />

            <div className="modal" id="exampleModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Добавить новое занятие</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                placeholder="Название события"
                                value={newEventTitle}
                                onChange={(e) => setNewEventTitle(e.target.value)}
                                className="modal-element"
                            />
                            <DatePicker
                                className="modal-element"
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy"
                                locale={ru}
                            />
                            <DatePicker
                                className="modal-element"
                                selected={selectedTime}
                                onChange={(time) => setSelectedTime(time)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Время"
                                dateFormat="HH:mm"
                                locale={ru}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={handleAddEvent}>Добавить</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Отмена</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Calendar;



