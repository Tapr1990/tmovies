import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';



export default function Header() {
  return (
    <div className="container-logo">

      <div className="logo-image">
        <NavLink to="#"><i className='bx bxs-movie-play'></i></NavLink>

      </div>
      <div className="logo-title">
        <NavLink to="/"><h1>tMovies</h1></NavLink>
      </div>
          
    </div>
  );
}
