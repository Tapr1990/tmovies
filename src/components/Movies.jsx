import { NavLink } from "react-router-dom";
import '../styles/Movies.css';


export default function Movies(props) {

  
  const IMG_POSTER = "https://image.tmdb.org/t/p/w500";



  return (
    <main className="main-movies">
      <section className="movies">
        <div className="background-movies-container">
          <div className='background-movies'>
            <img src ="images/iron-men.jpg" alt=""/>
            <h2>Movies</h2>
          </div>
        </div>
      </section>
      <section className="search-container">
        <form className="search-form" onSubmit={props.submit}>
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
                  <img src={IMG_POSTER + movie.poster_path} alt={movie.title}/>
                  <h3>{movie.title}</h3>
                  <div className="favourite-movies" onClick={() => props.handleFavourites(movie)}>
                    <span>Add to Favourites</span>
                  </div>
                </div>
              ))}
            </div>
        </div>       
      </section>
    </main>
                  
  );
}

        
        
      
      

        





    

  


  


          
      
          
             
            
              


          

    
        




