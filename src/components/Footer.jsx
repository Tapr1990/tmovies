import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Footer.css';

export default function Footer() {
  return (
    <>
        <section className="footer">
            <div className="footer-logo">
                <div className="logo-image">
                    <NavLink to="/"><i className='bx bxs-movie-play'></i></NavLink>
                </div>
                <div className="logo-title">
                    <NavLink to="/"><h1>tMovies</h1></NavLink>
                </div>

          
            </div>
            <div className="footer-social">
                <NavLink to="#"><i className='bx bxl-facebook'></i></NavLink>
                <NavLink to="#"><i className='bx bxl-twitter'></i></NavLink>
                <NavLink to="#"><i className='bx bxl-instagram'></i></NavLink>
                <NavLink to="#"><i className='bx bxl-tiktok'></i></NavLink>
            </div>
        </section>
        <section>
            <div className="copyright">
                <p>&#169; tmovies All Right Reserved.</p>
            </div>
        </section>   
    </>  
      
    
  )
}
