import React from 'react'
import '../styles/Favourites.css';

export default function Favourites(props) {

    const IMG_POSTER = "https://image.tmdb.org/t/p/w500";

  return (
    <div className='container-movie'>
        {props.favouritesMovies.length > 0 && props.favouritesMovies.map( movie => (
            <div className='movie-card' key={movie.id}>
                <img src={IMG_POSTER + movie.poster_path} alt={movie.title}/>
                <div className='remove-favourites' onClick={()=> props.handleRemove(movie)}>
                    <span>Remove from favourites</span>
                </div>
            </div>
        ))}
    </div> 
    );
}


