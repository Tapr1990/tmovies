import React, { useEffect, useState } from 'react'
import Hero from './Hero';
import HorizontalScrollMovies from './HorizontalScrollMovies';
import Newsletter from './Newsletter';



export default function Home() {

  
  const API_URL = "https://api.themoviedb.org/3";

 
  const [popularityMovies, setPopularityMovies] = useState([]);
  const [averageMovies, setAverageMovies] = useState([]);
  const [slider, setSlider] = useState([]);
  const [revenue, setRevenue] = useState([]);

  
     
  useEffect( () => {
   
    //const data1 = fetch(API_URL + "/discover/movie?sort_by=popularity.desc&api_key=).then(response => response.json());
  
    //const data2 = fetch(API_URL + "/discover/movie?sort_by=vote_count.desc&api_key=).then(response => response.json());
  
    //const data3 = fetch(API_URL + "/discover/movie?sort_by=revenue.desc&api_key=").then(response => response.json());            
  
    Promise.all([data1, data2, data3])
    .then( data => {
  
      const movies1 = data[0];
      const movies2 = data[1];
      const movies3 = data[2];
      
  
      setPopularityMovies(movies1.results);
      setAverageMovies(movies2.results);
      setSlider(movies1.results.slice(0, 4));
      setRevenue(movies3.results);
     
    })
  
  },[]);


  return (
      <main className="main-home">
          <Hero slides={slider}/>
          <HorizontalScrollMovies popularMovies={popularityMovies} bestMovies={averageMovies} revenueMovies={revenue}/>
          <Newsletter />
      </main>
    );
}
        
        
       
      
       







   

        
