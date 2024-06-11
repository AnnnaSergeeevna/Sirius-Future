import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Entry from './Components/Entry';
import Header from './Components/Header';
import NavMenu from './Components/NavMenu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration';
import Calendar from './Components/Calendar';
import Style from './App.css';


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <div className="mainContainer">
                <div className="headerContainer">
                  <Header />
                </div>
                <NavMenu />
                <div>
                  <Routes>
                    <Route path="/home" element={<Entry />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                  </Routes>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;





