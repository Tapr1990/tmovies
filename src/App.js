

import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './components/Contacts';
import Favourites from './components/Favourites';
import Footer from './components/Footer';
import Home from './components/Home';
import Movies from './components/Movies';
import Navbar from './components/Navbar';











function App() {

  const [dataMovies, setDataMovies] = useState([]);
  const [searchMovie, setSearchMovies] = useState("");
  const [favourites, setFavourites] = useState("");
  
  

  const API_URL = "https://api.themoviedb.org/3";
  //const Search_API_MOVIES = "https://api.themoviedb.org/3/search/movie?&query=";
  

  useEffect( () => {
   
    fetch(API_URL + "/discover/movie?sort_by=popularity.desc&api_key=")
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
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
            
  );
}
            
export default App;
           
    

     
     
    
  
 



 
                
  
      
      
  
     
  

  



 


      
      

