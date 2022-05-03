import React, { useContext } from 'react';
import { ApiData } from '../contexts/ApiData';
import '../styles/Scrollslide.css';


export default function Scrollslide() {

    const IMG_API = "https://image.tmdb.org/t/p/w500";

    const context = useContext(ApiData);

    const {movies} = context;

    const scrollMovies = movies;

    const ScrollLeft = () => {

        let slider = document.getElementById("slider");
     
        slider.scrollLeft = slider.scrollLeft - 500;

    }
    
    const ScrollRigth = () => {
      
        let slider = document.getElementById("slider");
      
        slider.scrollLeft = slider.scrollLeft + 500;

    } 
    
  
  return (
    <section className="scrollslide-container">
        <span className="scrollslide-left" onClick={ScrollLeft}>&#10094;</span>
        <div id="slider" className='scrollslide'>
            {scrollMovies.map(image => (
                <div className='scrollslide-images' key={image.id}>
                    <img src={IMG_API + image.poster_path} alt={image.title}/>
                </div>
            ))}    
        </div>
        <span className="scrollslide-right" onClick={ScrollRigth}>&#10095;</span>
    </section>
  );
}
