import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import Header from './Header';


export default function Navbar() {

  const menuHamburguer = () => {

    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".nav_container");

    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  }

  const [colorChange, setColorChange] = useState(false);

  const changeColor = () => {
    if(window.scrollY >= 90) {
        setColorChange(true);
    }
    else {
      setColorChange(false);
    }
  }
  
  window.addEventListener("scroll", changeColor)
  



  return (
    <header className={ colorChange ? "header_container header-shadow" : "header_container"}>
      <Header />
      <nav className="nav_container" onClick={menuHamburguer}>
          <ul className="nav_list">
              <li className="nav_item"><NavLink className="nav_link" to="/">Home</NavLink></li>
              <li className="nav_item"><NavLink className="nav_link" to="/movies">Movies</NavLink></li>
              <li className="nav_item"><NavLink className="nav_link" to="/favourites">Favourites</NavLink></li>
              <li className="nav_item"><NavLink className="nav_link" to="/contacts">Contacts</NavLink></li>
          </ul>
      </nav>
      <div className='container-log'>
        <span className="sign-in">Sign In</span>
        <span className="log-in">Log In</span>
      </div>
      <div className="bx bx-menu" id="menu-icon" onClick={menuHamburguer}/>
    </header>
      
  );
}
              



