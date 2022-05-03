import { createContext, useEffect, useState } from "react";


export const ApiData = createContext();

export function ApiDataProvider(props) {

  

    

    const API_URL = "https://api.themoviedb.org/3";
  
    const [movies, SetMovies] = useState([]);
  
    const [tvSeries, SetTvSeries] = useState([]);

    const [image, setImage] = useState([]);

    const [img, setImg] = useState([]);

    const [imageSlider, setImageSlider] = useState([]);
  
  
    useEffect( () => {
  
      const data1 = fetch(API_URL + "/discover/movie?api_key=" + Data.API_KEY).then(response => response.json());
  
      const data2 = fetch(API_URL + "/discover/tv?api_key=" + Data.API_KEY).then(response => response.json());

           
  
      Promise.all([data1, data2])
      .then( data => {
  
        const dataMovies = data[0];
        const dataTvSeries = data[1];
        
        
  
        SetMovies(dataMovies.results);
        SetTvSeries(dataTvSeries.results);
        setImage(dataMovies.results[18]);
        setImg(dataTvSeries.results[1]);
        setImageSlider(dataMovies.results.slice(0, 4))
      })
  
    },[]);


    return(
        <ApiData.Provider value={{movies, tvSeries, image, img, imageSlider}}>
            {props.children}
        </ApiData.Provider>
    )

}

