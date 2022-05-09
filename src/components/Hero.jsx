import React, { useState } from 'react'


import '../styles/Hero.css';




export default function Hero(props) {

    const IMG_API = "https://image.tmdb.org/t/p/w1280";
    
   
        
        
    
    const [activeIndex, setActiveIndex] = useState(0);    

    const prevslide = () =>{

        if(activeIndex < 1) {
            setActiveIndex(props.slides.length-1)
        }
        else {
            setActiveIndex(activeIndex-1)
        }       
    }

    const nextslide = () => {

        if(activeIndex === props.slides.length-1) {
            setActiveIndex(0)
        }
        else {
            setActiveIndex(activeIndex+1)
        }
    }
        

    



    return (
        
            <section>
                <div className='hero'>
                    {props.slides.map((image, index) => (
                        <div className={index === activeIndex ? "slides active" : "inactive"} key={image.id} >
                            <div className="hero-background" style={{backgroundImage: "url(" + IMG_API + image.backdrop_path+ ")"}}/>
                            <div className="hero-info">
                                <h2>{image.title}</h2>
                                <p>{image.overview}</p>
                            </div>
                            <div className="hero-poster">
                                <img src={"https://image.tmdb.org/t/p/w500" + image.poster_path} alt={image.title}/>
                            </div>
                        </div>
                    ))}
                        {}
                               

                        <div>
                            <span className="prevslide" onClick={prevslide}>&#10094;</span>
                            <span className="nextslide" onClick={nextslide}>&#10095;</span>
                        </div>
                       
                </div>    
            </section>

    
    
    );
  
}


//<button className='trailer' onClick={() => setModal(true)}><a>Trailer</a></button>