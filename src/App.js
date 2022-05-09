

import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


import Home from './components/Home';
import Moviecard from './components/Moviecard';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Seriescard from './components/Seriescard';
import Tvseries from './components/Tvseries';




function App() {

  const [dataMovies, setDataMovies] = useState([]);
  const [dataTvSeries, setDataTvSeries] = useState([]);
  const [searchMovie, setSearchMovies] = useState("");
  const [searchTvSeries, setSearchTvSeries] = useState("");

  const API_URL = "https://api.themoviedb.org/3";
  const Search_API_MOVIES = "https://api.themoviedb.org/3/search/movie?api_key=41fe7d9a83e0d2366dcfea91830440fa&query=";
  const Search_API_TVSERIES = "https://api.themoviedb.org/3/search/tv?api_key=41fe7d9a83e0d2366dcfea91830440fa&query=";

  useEffect( () => {
   
    const data1 = fetch(API_URL + "/discover/movie?sort_by=popularity.desc&api_key=41fe7d9a83e0d2366dcfea91830440fa").then(response => response.json());
  
    const data2 = fetch(API_URL + "/discover/tv?sort_by=popularity.desc&api_key=41fe7d9a83e0d2366dcfea91830440fa").then(response => response.json());
  
                
  
    Promise.all([data1, data2])
    .then( data => {
  
      const movies = data[0];
      const tvseries = data[1];
      
      
  
      setDataMovies(movies.results);
      setDataTvSeries(tvseries.results);
      
     
     
    })
  
  },[]);

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




  const submit = (event) => {
    event.preventDefault();
    if(searchTvSeries) {
      fetch(Search_API_TVSERIES + searchTvSeries)
        .then((response) => response.json())
        .then((data) => {
          setSearchTvSeries(data.results)
        });

      setSearchTvSeries("")
    }
  }

  const change = (event) => {
    setSearchTvSeries(event.target.value)
  }
 
                
  return (
    
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />}/>
            <Route path="/movies" element={<Movies filmes={dataMovies} searchValue={searchMovie} setSearchValue={setSearchMovies} submit={handeOnSubmit} change={handeOnChange} />}/>
            <Route path="/tvseries" element={<Tvseries series={dataTvSeries}  submitTvSeries={submit} changeTvSeries={change} search={searchTvSeries} setSearch={setSearchTvSeries}/>}/>
            <Route path="/moviecard/:id" element={<Moviecard />}/>
            <Route path="/seriescard/:id" element={<Seriescard />}/>
          </Routes>
        </div>
      </BrowserRouter>
    

     
  );
}
     
    
export default App;
  
      
      
  
     
  

  



 


      
      

