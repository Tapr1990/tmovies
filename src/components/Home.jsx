import React, { useEffect, useState } from 'react'
import Hero from './Hero';
import HorizontalScrollMovies from './HorizontalScrollMovies';
import Newsletter from './Newsletter';



export default function Home() {

  const IMG_API = "https://image.tmdb.org/t/p/w500";
  const API_URL = "https://api.themoviedb.org/3";
  //const SEARCH_API_MOVIES = "https://api.themoviedb.org/3/search/movie?api_key=41fe7d9a83e0d2366dcfea91830440fa&query=";
  //const SEARCH_API_TVSERIES = "https://api.themoviedb.org/3/search/tv?api_key=41fe7d9a83e0d2366dcfea91830440fa&query=";
 
  const [popularityMovies, setPopularityMovies] = useState([]);
  const [averageMovies, setAverageMovies] = useState([]);
  const [slider, setSlider] = useState([]);


  
     
  useEffect( () => {
   
    const data1 = fetch(API_URL + "/discover/movie?sort_by=popularity.desc&api_key=41fe7d9a83e0d2366dcfea91830440fa").then(response => response.json());
  
    const data2 = fetch(API_URL + "/discover/movie?sort_by=vote_average.desc&api_key=41fe7d9a83e0d2366dcfea91830440fa").then(response => response.json());
  
                
  
    Promise.all([data1, data2])
    .then( data => {
  
      const movies1 = data[0];
      const movies2 = data[1];
      
      
  
      setPopularityMovies(movies1.results);
      setAverageMovies(movies2.results);
      setSlider(movies1.results.slice(0, 4));
     
     
    })
  
  },[]);


  return (
      <main>
        <section>
          <Hero slides={slider}/>
          <HorizontalScrollMovies popularMovies={popularityMovies} bestMovies={averageMovies}/>
          <Newsletter />
        </section>
       
      
       
      </main>
  );
}







   
/*<section className="scrollslide-serie-container">
<span className="scrollslide-serie-left" onClick={3}>&#10094;</span>
<div id="slider-serie" className='scrollslide-series'>
    {dataTvSeries.map(image => (
        <div className='scrollslide-serie-images' key={image.id}>
            <img src={IMG_API + image.poster_path} alt={image.title}/>
        </div>
    ))}    
</div>
<span className="scrollslide-serie-right" onClick={1}>&#10095;</span>
</section>*/

        
