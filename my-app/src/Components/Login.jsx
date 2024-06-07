import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import Logomark from './Logomark_1_.png';
import Eye from './eyeicon.png';
import '../../src/App.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <img className="logomark" src={Logomark} alt="Logomark" />
            <h1>Вход в Sirius Future</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false
                }}
                onSubmit={values => {
                    console.log(values);
                    navigate('/home');
                }}
            >
                {({ handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className='form-group'>
                        <div className="form-group">
                            <label htmlFor="email"></label>
                            <Field
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group password-group">
                            <label htmlFor="password"></label>
                            <Field
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Пароль"
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={toggleShowPassword}
                            >
                                {showPassword ? <img className="eyeImg" src={Eye} alt="Logomark" /> : "Показать"}
                            </button>
                        </div>
                        <div className="form-check">
                            <Field
                                type="checkbox"
                                className="form-check-input"
                                id="rememberMe"
                                name="rememberMe"
                            />
                            <label className="form-check-label" htmlFor="rememberMe">Запомнить меня</label>
                        </div>
                        <button type="submit" className="btnPrimary">Войти</button>
                    </Form>
                )}
            </Formik>
            <div className='btnFrame'><p><Link to="/home">Я забыл пароль</Link></p>
                <p><Link to="/home">Войти</Link></p>
            </div>
            <p>Нет аккаунта?</p>
            <div className='btnReg'><p><Link to="/registration">Зарегистрироваться</Link></p>
            </div>
        </div>
    );
};

export default Login;



