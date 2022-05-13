

import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';



import Favourites from './components/Favourites';
import Footer from './components/Footer';
import Home from './components/Home';
import Moviecard from './components/Moviecard';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Seriescard from './components/Seriescard';
import Tvseries from './components/Tvseries';






function App() {

  const [dataMovies, setDataMovies] = useState([]);
  const [searchMovie, setSearchMovies] = useState("");
  const [favourites, setFavourites] = useState("");
  
  

  const API_URL = "https://api.themoviedb.org/3";
  const Search_API_MOVIES = "https://api.themoviedb.org/3/search/movie?api_key=41fe7d9a83e0d2366dcfea91830440fa&query=";
  const Search_API_TVSERIES = "https://api.themoviedb.org/3/search/tv?api_key=41fe7d9a83e0d2366dcfea91830440fa&query=";

  useEffect( () => {
   
    fetch(API_URL + "/discover/movie?sort_by=popularity.desc&api_key=41fe7d9a83e0d2366dcfea91830440fa")
    .then(response => response.json())
    .then( data => {
      
  
      setDataMovies(data.results);
      
    });
  },[]);
     
     
  /*Search for Movies*/ 
  const handeOnSubmit = (event) => {
    event.preventDefault();
    if(searchMovie) {
      fetch(Search_API_MOVIES + searchMovie)
        .then((resposnse) => resposnse.json())
        .then((data) => {
          setDataMovies(data.results)
        });

      setSearchMovies("")
    }
  }
    
  
  const handeOnChange = (event) => {
    setSearchMovies(event.target.value)
  }
                
  
  /*Favourite movies*/
    const addFavourite = (movie) => {
      const newFavourite = [...favourites, movie];
      setFavourites(newFavourite);
      
    }  
  
  
    const removeFavourite = (movie) => {
      const newFavourite = favourites.filter((favourite) => favourite.id !== movie.id);
      setFavourites(newFavourite);
      
    }
    
  
     
      
  
  
  
  return (
    
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />}/>
            <Route path="/movies" element={<Movies filmes={dataMovies} searchValue={searchMovie} setSearchValue={setSearchMovies} submit={handeOnSubmit} change={handeOnChange} handleFavourites={addFavourite} />}/>
            <Route path="/favourites" element={<Favourites favouritesMovies={favourites} handleRemove={removeFavourite}/>}/>
            <Route path="/moviecard/:id" element={<Moviecard />}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}
            
           
    

     
     
    
export default App;
  
  /*const submit = (event) => {
    event.preventDefault();
    if(searchTvSeries) {
      fetch(Search_API_TVSERIES + searchTvSeries)
        .then((response) => response.json())
        .then((data) => {
          setSearchTvSeries(data.results)
        });

      setSearchTvSeries("")
    }
  }*/

 /* const change = (event) => {
    setSearchTvSeries(event.target.value)
  }*/





 
                
  
      
      
  
     
  

  



 


      
      

