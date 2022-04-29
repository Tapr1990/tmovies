import { useContext } from "react"
import { ApiData } from "../contexts/ApiData"
import '../styles/Tvseries.css'

export default function Tvseries() {

  const IMG_API = "https://image.tmdb.org/t/p/w500";

  const context = useContext(ApiData);

  const {tvSeries, img} = context;

  const dataTvSeries = tvSeries;

  const dataimg = img;

  return (
    <main>
       <section className="background-container">
        <div className="background-image"  style={{backgroundImage: `url(${"https://image.tmdb.org/t/p/w1280" + dataimg.backdrop_path})`}}>
              <div className='background-title'>
                <h1>Tvseries</h1>
              </div>
        </div>
      </section>
      <section className="container-series">
        <div className="container-serie-card">
          {dataTvSeries.map(serie => (
            <div className="serie-card" key={serie.id}>
              <img src={IMG_API + serie.poster_path} alt={serie.name}/>
              <h3>{serie.name}</h3>
            </div>
          ))}

        </div>
      </section>
    
    </main>
        



  )
}
