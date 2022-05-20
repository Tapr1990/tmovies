import '../styles/HorizontalScrollMovies.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';





export default function HorizontalScrollMovies(props) {

  const IMG_API = "https://image.tmdb.org/t/p/w500";


  

      
  return (
    <section className="container-horizontal-slide">

        <div className="horizontal-slide"> 
          <div className="horizontal-slide-title">
            <h3>Popular Movies</h3>  
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            grabCursor={true}
          >
            {props.popularMovies.map(image => (
                    
              <SwiperSlide className="swiperslide" key={image.id}>
                <img src={IMG_API + image.poster_path} alt={image.title}/>
                <h4>{image.title}</h4>
              </SwiperSlide>
            ))}    
          </Swiper>
        </div>
        <div className="horizontal-slide"> 
          <div className="horizontal-slide-title">
            <h3>Best Movies</h3>  
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={5}
            grabCursor={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >                
            {props.bestMovies.map(image => (
                    
              <SwiperSlide className="swiperslide" key={image.id}>
                <img src={IMG_API + image.poster_path} alt={image.title}/>
                <h4>{image.title}</h4>
              </SwiperSlide>
            ))}    
          </Swiper>
        </div>
        <div className="horizontal-slide"> 
          <div className="horizontal-slide-title">
            <h3>Revenue Movies</h3>  
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={5}
            grabCursor={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {props.revenueMovies.map(image => (
                     
              <SwiperSlide className="swiperslide" key={image.id}>
                <img src={IMG_API + image.poster_path} alt={image.title}/>
                <h4>{image.title}</h4>
              </SwiperSlide>
            ))}    
          </Swiper>  
        </div>  
      </section>
              
    );
  }
          
            
            

          
                        
                   
                        
            
          
           
             
          
            

            
                         
            

            
                          
                    
                          
              
   
      
      
       
    
   
      



