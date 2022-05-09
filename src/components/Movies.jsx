

//import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/Movies.css';





export default function Movies(props) {

  const IMG_POSTER = "https://image.tmdb.org/t/p/w500";



  return (
    <main>
      <section className="background-container">
        <div className='background-title'>
          <img className="background-image" src="images/254202.jpg" alt=""/>
          <h2>Movies</h2>
        </div>
       
        
      </section>
      <section>
        <form onSubmit={props.submit}>
          <input
            type="search"
            name="search"
            placeholder="Search Movies"
            value={props.searchValue}
            onChange={props.change}
          />
        </form>
        <div className="container-movies">
          <div className="container-movie-card">
              {props.filmes.length > 0 && props.filmes.map(movie => (
                <div className="movie-card" key={movie.id}>
                  <NavLink to={"/moviecard/" + movie.id}><img src={IMG_POSTER + movie.poster_path} alt={movie.title}/></NavLink>
                  <NavLink to={"/moviecard/" + movie.id}><h3>{movie.title}</h3></NavLink>
                </div>
              ))}
            </div>
        </div>       
      </section>
      
      
    </main>

  );
}
        
    

  


  


          
      
          
             
            
              


          

    
        




