import React, { useContext, useState } from 'react'
import { ApiData } from '../contexts/ApiData';

import '../styles/Hero.css';

export default function Hero() {

    const IMG_API = "https://image.tmdb.org/t/p/w1280";
  
    const context = useContext(ApiData);

    const {imageSlider} = context;

    const images = imageSlider;

    
    const [activeIndex, setActiveIndex] = useState(0);    

    const prevslide = () =>{

        if(activeIndex < 1) {
            setActiveIndex(images.length-1)
        }
        else {
            setActiveIndex(activeIndex-1)
        }       
    }

    const nextslide = () => {

        if(activeIndex === images.length-1) {
            setActiveIndex(0)
        }
        else {
            setActiveIndex(activeIndex+1)
        }
    }

    return (
        
            <section>
                <div className='hero'>
                    {images.map((image, index) => (
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
                        <div>
                            <span className="prevslide" onClick={prevslide}>&#10094;</span>
                            <span className="nextslide" onClick={nextslide}>&#10095;</span>
                        </div>
                        <div className="hero-btn">
                            <span className="btn"><a href="">Play trailer</a></span>
                        </div>
                </div>    
            </section>

    
    
    );
  
}


