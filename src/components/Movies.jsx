import { useContext } from "react"
import { ApiData } from "../contexts/ApiData"
import '../styles/Movies.css';

export default function Movies() {

  const IMG_API = "https://image.tmdb.org/t/p/w500";

  const context = useContext(ApiData);

  const {movies, image} = context;
 
  const dataMovies = movies;

  const dataimg = image;

 
  

  return (
    <main>
      <section className="background-container">
        <div className="background-image"  style={{backgroundImage: `url(${"https://image.tmdb.org/t/p/w1280" + dataimg.backdrop_path})`}}>
              <div className='background-title'>
                <h1>Movies</h1>
              </div>
        </div>
      </section>
      <section className="container-movies">
        <div className="container-movie-card">
            {dataMovies.map(movie => (
              <div className="movie-card" key={movie.id}>
                <img src={IMG_API + movie.poster_path} alt={movie.title}/>
                <h3>{movie.title}</h3>
              </div>
          
            ))}
          </div>
      </section>
    </main>
          
             
            
              


          

    
        



  );
}

