import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>{' '}|{' '}
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>{' '}|{' '}
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
