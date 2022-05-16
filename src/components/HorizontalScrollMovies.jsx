import '../styles/HorizontalScrollMovies.css'

export default function HorizontalScrollMovies(props) {

    const IMG_API = "https://image.tmdb.org/t/p/w500";

  
    //const dataTvSeries = tvSeries;
  
    const ScrollLeft = () => {
  
      let slider = document.getElementById("slider");
   
      slider.scrollLeft = slider.scrollLeft - 500;
  
    }
  
    const ScrollRigth = () => {
    
      let slider = document.getElementById("slider");
    
      slider.scrollLeft = slider.scrollLeft + 500;
  
    } 

    const ScrollPrev = () => {
  
      let slide = document.getElementById("slide");
   
      slide.scrollLeft = slide.scrollLeft - 500;
  
    }
  
    const ScrollNext = () => {
    
      let slide = document.getElementById("slide");
    
      slide.scrollLeft = slide.scrollLeft + 500;
  
    } 
  
  return (
    <>
      <section className="poupular-movie-container">

          <h2>Popular Movies</h2>
          <span className="poupular-movie-left" onClick={ScrollLeft}>&#10094;</span>
          <div id="slider" className='poupular-movies'>
              {props.popularMovies.map(image => (
                  <div className='poupular-movie-images' key={image.id}>
                      <img src={IMG_API + image.poster_path} alt={image.title}/>
                      
                  </div>
              ))}    
          </div>
          <span className="poupular-movie-right" onClick={ScrollRigth}>&#10095;</span>
      </section>
      <section className="average-movie-container">
        <h2>Average Vote Movies</h2>
        <span className="average-movie-left" onClick={ScrollPrev}>&#10094;</span>
        <div id="slide" className='average-movies'>
          {props.bestMovies.map(image => (
              <div className='average-movie-images' key={image.id}>
                  <img src={IMG_API + image.poster_path} alt={image.title}/>
              </div>
          ))}    
        </div>
        <span className="average-movie-right" onClick={ScrollNext}>&#10095;</span>
      </section>
    </>
      

  )
}
