import React from 'react'
import '../styles/Favourites.css';

export default function Favourites(props) {

    const IMG_POSTER = "https://image.tmdb.org/t/p/w500";

  return (
        <main className="main-favourites">
            <section className="favourites">
                <div className='background-favourites-container'>
                    <div className='background-favourites'>
                        <img src="images/Batman-Wallpaper.jpg" alt=""/>
                        <h2>Favourites</h2>
                    </div>
                </div>
                <div className='container-movie'>
                    {props.favouritesMovies.length > 0 && props.favouritesMovies.map( movie => (
                        <div className='movie-card' key={movie.id}>
                            <img src={IMG_POSTER + movie.poster_path} alt={movie.title}/>
                            <h3>{movie.title}</h3>
                            
                            <p>Release Date: {movie.release_date}</p>
                            <p>Vote Average: {movie.vote_average}</p>

                            
                            <div className='remove-favourites' onClick={()=> props.handleRemove(movie)}>
                                <span>Remove from favourites</span>
                            </div>
                        </div>
                    ))}
                </div> 
            </section>
        </main>

    );
}
      
                    
                    
                




       


