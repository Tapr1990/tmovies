import React from 'react';
import { NavLink } from 'react-router-dom';


import '../styles/Header.css';

export default function Header() {
  return (
    <div className="container-logo">

      <div className="logo-image">
          <NavLink to="/"><box-icon className="logo" type='solid' name='movie-play' color="#ff2c1f" size="cssSize"></box-icon></NavLink>
      </div>
      <div className="logo-title">
        <NavLink to="/"><h1>tMovies</h1></NavLink>
      </div>
          
    </div>
  );
}
