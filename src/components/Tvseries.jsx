

//import { useEffect, useState } from 'react';
/*import { NavLink } from 'react-router-dom';


import '../styles/Tvseries.css'


export default function Tvseries(props) {

  const IMG_POSTER = "https://image.tmdb.org/t/p/w500";

  



  return (
    <main>
       <section className="background-container">
          <div className='background-title'>
            <img className="background-image" src="images/2052703.jpg" alt=""/>
            <h2>TvSeries</h2>
          </div>
        </section>
      <section className="container-series">
          <form onSubmit={props.submitTvSeries}>
            <input
              type="search"
              name="search"
              placeholder="Search TvSeries"
              value={props.search}
              onChange={props.changeTvSeries}
            />
          </form>
          <div className="container-serie-card">
            {props.series.length > 0 && props.series.map(serie => (
              <div className="serie-card" key={serie.id}>
                <NavLink to={"/seriescard/" + serie.id}><img src={IMG_POSTER + serie.poster_path} alt={serie.name}/></NavLink>
                <NavLink to={"seriescard/" + serie.id}><h3>{serie.name}</h3></NavLink>
              </div>
            ))}

          </div>
       
      </section>
    
    </main>
        



  )
}


*/