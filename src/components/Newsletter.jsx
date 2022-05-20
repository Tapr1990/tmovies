import React from 'react'
import '../styles/Newsletter.css'


export default function Newsletter() {

  return (
    <section className="newsletter-container">
      <div className="newsletter">
          <h5>Subscribe To Get Newsletter</h5>
          <form className="newsletter-form">
              <input className="email" type="email" name="email" placeholder="Enter Email..." required/>
              <input type="submit" value="Subscribe" className="btn"/>
          </form>
      </div>
    </section>

  );
}
