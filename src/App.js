
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Tvseries from './components/Tvseries';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect( () => {

    

  },[]);

  return (
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
  );
}

export default App;
