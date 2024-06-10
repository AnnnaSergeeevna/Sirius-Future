import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import avaA from './avatar.png';
import avaM from './avatar (1).png';
import exit from './exit.png';
import path from './Path.png';
import messageL from './Group.png';
import messageS from './GroupS.png';

const Header = () => {
    const [user, setUser] = useState('Михаил');
    const users = ['Михаил', 'Анна'];

    const handleUserChange = (newUser) => {
        setUser(newUser);
    };

    const avatars = {
        'Михаил': avaM,
        'Анна': avaA
    };

    return (
        <>
            <h1 className='headerH1'>Добро пожаловать, {user}</h1>
            <div className='header-right-part' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div className="message-image-container">
                    <img className="image24" src={messageL} alt="message area" />
                    <img className="image14" src={messageS} alt="message area" />
                </div>

                <div style={{ marginLeft: '10px' }}> { }
                    <Dropdown>
                        <Dropdown.Toggle
                            variant="light"
                            id="dropdown-custom-components"
                            className="custom-dropdown-toggle"
                            style={{ border: 'none', boxShadow: 'none', background: 'none' }}
                        >
                            <div className="avatar-icon-container" style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={avatars[user]} alt="User Avatar" className="avatar" />
                                <img src={path} alt="path Icon" className="path" style={{ marginLeft: '10px' }} />
                            </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="right">
                            <Dropdown.Header className='Regular16'>Смена пользователя</Dropdown.Header>
                            {users.map((username) => (
                                <Dropdown.Item
                                    key={username}
                                    className={user === username ? 'active-user' : ''}
                                    onClick={() => handleUserChange(username)}
                                >
                                    {username} {user === username && <span>(это вы)</span>}
                                </Dropdown.Item>
                            ))}
                            <Dropdown.Item onClick={() => window.location.href = '/login'} className='Regular16Blue'>
                                Выход <img className="exit" src={exit} alt="exit logo" />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </>
    );
};

export default Header;

