import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Team from './Team';

const About = () => {
  return (
    <div>
      <h1>Це сторінка About</h1>
      <nav>
        <NavLink to="/about/team" className="nav-link">
          Team
        </NavLink>
      </nav>
      <Routes>
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
};

export default About;

