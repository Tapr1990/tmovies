import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import Header from './Header';

export default function Navbar() {
  return (
    <header className="header_container">
      <Header />
      <nav className="nav_container">
          <ul className="nav_list">
              <li className="nav_item"><NavLink className="nav_link" to="/">Home</NavLink></li>
              <li className="nav_item"><NavLink className="nav_link" to="/movies">Movies</NavLink></li>
              <li className="nav_item"><NavLink className="nav_link" to="/tvseries">Tvseries</NavLink></li>
          </ul>
      </nav>
    </header>

  );
}

