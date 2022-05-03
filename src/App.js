

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
 


      
      

