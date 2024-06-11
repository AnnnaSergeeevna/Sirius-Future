import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import mainPic from './NavPics/left menu icon.png'
import schedPic from './NavPics/left menu icon (1).png'
import cupPic from './NavPics/left menu icon (2).png'
import trainPic from './NavPics/left menu icon (3).png'
import libPic from './NavPics/left menu icon (4).png'
import callPic from './NavPics/left menu icon (5).png'
import settPic from './NavPics/left menu icon (6).png'
import quesPic from './NavPics/left menu icon (7).png'
import wallPic from './NavPics/Group.png'
import Logo from './NavPics/Full_Logo_1_.png'
import RefBanner from './NavPics/Referral.png'


const NavMenu = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className="navContainer">
                <img className="logo" src={Logo} alt="Logo" />
                <ul className="flex-column">
                    <li className="nav-item">
                        <button type="button" className={`btnPrimary ${isActive('/home') ? 'active' : 'navbtnPrimary'}`}>
                            <Link to="/home" className="nav-link">
                                <img className="eyeImg" src={mainPic} alt="Home pic" />
                                Главная
                            </Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className={`btnPrimary ${isActive('/schedule') ? 'active' : 'navbtnPrimary'}`}>
                            <Link to="/calendar" className="nav-link">
                                <img className="eyeImg" src={schedPic} alt="Schedule pic" />
                                Расписание
                            </Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className={`btnPrimary ${isActive('/payment') ? 'active' : 'navbtnPrimary'}`}>
                            <Link to="/payment" className="nav-link">
                                <img className="eyeImg" src={wallPic} alt="Wallet pic" />
                                Оплата
                            </Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className={`btnPrimary ${isActive('/achievements') ? 'active' : 'navbtnPrimary'}`}>
                            <Link to="/achievements" className="nav-link">
                                <img className="eyeImg" src={cupPic} alt="Cup pic" />
                                Достижения
                            </Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className={`btnPrimary ${isActive('/trainings') ? 'active' : 'navbtnPrimary'}`}>
                            <Link to="/trainings" className="nav-link">
                                <img className="eyeImg" src={trainPic} alt="Trainings pic" />
                                Тренажеры
                            </Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className={`btnPrimary ${isActive('/library') ? 'active' : 'navbtnPrimary'}`}>
                            <Link to="/library" className="nav-link">
                                <img className="eyeImg" src={libPic} alt="Library pic" />
                                Библиотека
                            </Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className={`btnPrimary ${isActive('/connection-check') ? 'active' : 'navbtnPrimary'}`}>
                            <Link to="/connection-check" className="nav-link">
                                <img className="eyeImg" src={callPic} alt="The headset pic" />
                                Проверка связи
                            </Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className={`btnPrimary ${isActive('/settings') ? 'active' : 'navbtnPrimary'}`}>
                            <Link to="/settings" className="nav-link">
                                <img className="eyeImg" src={settPic} alt="Settings pic" />
                                Настройки
                            </Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className={`btnPrimary ${isActive('/questions') ? 'active' : 'navbtnPrimary'}`}>
                            <Link to="/questions" className="nav-link">
                                <img className="eyeImg" src={quesPic} alt="Question pic" />
                                Вопросы
                            </Link>
                        </button>
                    </li>
                </ul>
                <img className="RefBanner" src={RefBanner} alt="Referral banner" />
            </div>
        </>
    );
};

export default NavMenu;