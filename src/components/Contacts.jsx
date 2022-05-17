import React from 'react'
import '../styles/Contacts.css'

export default function Contacts() {
  return (
 
    <main>        
        <section>
            <div className="container-image">
                <img src="images/20532296.jpg" alt=""/>
                <h2>Contacts</h2>
            </div>
        </section>
            
        <section className="contacts-container">
            <form className="contacts-form">
                <div className="contacts-image">
                    <img src="images/star-wars.jpg" alt=""/>
                </div>
                <div className="contacts-info">
                    <h3>Contact Us</h3>
                    <input type="text" name="name" aria-label="name" placeholder="Your Name" required autoFocus/>
                    <input type="email" name="email" aria-label="email" placeholder="Your Email" required autoFocus/>
                    <input type="number" name="phone" aria-label="phone" placeholder="Your Phone" required autoFocus/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </div>
            </form>
        </section>
    </main>

        
  )
}
