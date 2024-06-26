import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import avaA from './avatar.png';
import avaM from './avatar (1).png';
import exit from './exit.png';
import close from './G2r4oup.png';
import path from './Path.png';
import messageL from './Group.png';
import messageS from './GroupS.png';

const Header = () => {
    const [user, setUser] = useState('Михаил');
    const [menuOpen, setMenuOpen] = useState(false);
    const users = [
        { name: 'Михаил', messageCount: 2 },
        { name: 'Анна', messageCount: 7 }
    ];

    const handleUserChange = (newUser) => {
        setUser(newUser.name);
    };

    const avatars = {
        'Михаил': avaM,
        'Анна': avaA
    };
    const currentUser = users.find(u => u.name === user);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <h1 className='headerH1'>Добро пожаловать, <span className='title24'> {user}</span></h1>
            <div className='header-right-part' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div className="message-image-container">
                    <img className="image24" src={messageL} alt="message area" />
                    <img className="image14" src={messageS} alt="message area" />
                    <span className="badge badge-secondary">
                        {currentUser.messageCount}
                    </span>
                </div>

                <div>
                    <Dropdown show={menuOpen} onToggle={toggleMenu}>
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
                            <Dropdown.Header className='Regular16'>
                                <span className="close-icon" onClick={toggleMenu}>
                                    <img className="close" src={close} alt="close logo" />
                                </span>Смена пользователя
                            </Dropdown.Header>
                            {users.map((userObj) => (
                                <Dropdown.Item
                                    key={userObj.name}
                                    className={user === userObj.name ? 'active-user' : ''}
                                    onClick={() => handleUserChange(userObj)}
                                >
                                    <img src={avatars[userObj.name]} alt="User Avatar" className="avatar" style={{ width: '24px', height: '24px', borderRadius: '50%', marginRight: '10px' }} />
                                    {userObj.name} {user === userObj.name && <span>(это вы)</span>}
                                    <span style={{ marginLeft: 'auto', paddingLeft: '10px' }}></span>
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


