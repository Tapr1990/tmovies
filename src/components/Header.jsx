import React from 'react';
import { Link } from 'react-router-dom';


import '../styles/Header.css';

export default function Header() {
  return (
    <div className="container-logo">

      <div className="logo-image">
          <Link to="/"><img src="images/logo3.jpg"/></Link>
      </div>
      <div className="logo-title">
        <Link to="/"><h1>rMovies</h1></Link>
      </div>
          
    </div>
  );
}
