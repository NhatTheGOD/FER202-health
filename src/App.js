import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css'
import React from 'react';
import VerticalNavbar from './components/Navbar/NavbarVertical';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Workouts from './pages/WorkOut';


const App = () => {
  return (
    <div className='App'>
      <VerticalNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workout" element={<Workouts />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
