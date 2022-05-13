import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import Header from './Header';


export default function Navbar() {
  return (
    <header className="header_container shadow">
      <Header />
      <nav className="nav_container">
          <ul className="nav_list">
              <li className="nav_item"><NavLink className="nav_link" to="/">Home</NavLink></li>
              <li className="nav_item"><NavLink className="nav_link" to="/movies">Movies</NavLink></li>
              <li className="nav_item"><NavLink className="nav_link" to="/favourites">Favourites</NavLink></li>
              <li className="nav_item"><NavLink className="nav_link" to="/contacts">Contacts</NavLink></li>
          </ul>
          <div className='container-log'>
            <span className="sign-in">Sign In</span>
            <span className="log-in">Log In</span>
          </div>
      </nav>
    </header>
      
              


  );
}

