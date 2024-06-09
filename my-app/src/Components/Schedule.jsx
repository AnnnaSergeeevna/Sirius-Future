import React from 'react';
import teacher from './teacher.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const ScheduleContainer = () => {
    return (
        <div>
            <div className="ScheduleContainer">
                <div className="row">
                    <div className="col-12">
                        Ближайшие уроки
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-1">1<br /><p className='scheduleMonth text-center'>мая</p></div>
                    <div className="col-4">Ментальная Арифметика</div>
                    <div className="col-2"><p className='scheduleTime'>14:00-14:25</p></div>
                    <div className="col-3"><img className="teacher" src={teacher} alt="Teachers avatar" />
                        <div className='teacherName'>Белкина Инна</div>
                    </div>
                    <div className="col-2">
                        <button className="btnScheduleW">Button</button>
                        <button className="btnScheduleV">Button</button>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-1">30<br /><p className='scheduleMonth text-center'>октября</p></div>
                    <div className="col-4">Программирование</div>
                    <div className="col-2"><p className='scheduleTime'>11:00-11:11</p></div>
                    <div className="col-3"><img className="teacher" src={teacher} alt="Teachers avatar" />
                        <div className='teacherName'>Животновская Оксана</div>
                    </div>
                    <div className="col-2">
                        <button className="btnScheduleW">Button</button>
                        <button className="btnScheduleV">Button</button>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-1">16<br /><p className='scheduleMonth text-center'>ноября</p></div>
                    <div className="col-4">Скорочтение</div>
                    <div className="col-2"><p className='scheduleTime'>09:00-09:45</p></div>
                    <div className="col-3"><img className="teacher" src={teacher} alt="Teachers avatar" />
                        <div className='teacherName'>Мин Елена</div>
                    </div>
                    <div className="col-2">
                        <button className="btnScheduleW">Button</button>
                        <button className="btnScheduleV">Button</button>
                    </div>
                </div>




                <div className="row">
                    <div className="col  text-center">
                        <button className="btnScheduleBig">Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleContainer;


