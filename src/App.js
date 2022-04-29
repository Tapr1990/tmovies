
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Tvseries from './components/Tvseries';
import { ApiDataProvider } from './contexts/ApiData';

function App() {


  
 
      


  return (
    <ApiDataProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />}/>
            <Route path="/movies" element={<Movies />}/>
            <Route path="/tvseries" element={<Tvseries />}/>
          </Routes>

        </div>
      </BrowserRouter>
    </ApiDataProvider>
  );
}

export default App;
 
/*
   useEffect( () => {
    
    const data1 = fetch("")
    .then(response => response.json());

   

    
  
   
    });
    

      
      


  },[]);
*/
    
    
  
/*
 const data1 = fetch("http://www.omdbapi.com/?s=spider-man&apikey=81678389")
    .then(response => response.json());

    const data2 = fetch("http://www.omdbapi.com/?s=batman&apikey=81678389")
    .then(response => response.json());

    const data3 = fetch("http://www.omdbapi.com/?s=the-walking-dead&apikey=81678389")
    .then(response => response.json());


    Promise.all([data1, data2, data3])
    .then(results => {

      const spiderMan = results[0];
      const batman = results[1];
      const walkingDead = results[2];

      setSpiderMan(spiderMan.Search);
      setBatman(batman.Search);
      setWalkingDead(walkingDead.Search);
*/