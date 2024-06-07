import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Entry from './Components/Entry';
import NavMenu from './Components/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <div className="main-container">
                <NavMenu />
                <div className="content-container">
                  <Routes>
                    <Route path="/home" element={<Entry />} />
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




