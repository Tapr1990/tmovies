import React, { useContext } from 'react'
import { ApiData } from '../contexts/ApiData';
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Autoplay} from 'swiper'
import '../styles/Hero.css';

export default function Hero() {
  
    const context = useContext(ApiData);

    const {imageSlider} = context;

    const images = imageSlider;


    //SwiperCore.use([Autoplay]);
    // autoplay={{delay: 5000}}

    return (
        <div className="container-swiper">
          
                
                
                        {images.map(image => (

                            <section className="Hero-container" key={image.id}>
                                <div className="Hero-image"  style={{backgroundImage: `url(${"https://image.tmdb.org/t/p/w1280" +image.backdrop_path})`}}>
                                    <div className='Hero-info'>
                                        <div className='hero-text'>
                                            <h2>{image.title}</h2>
                                            <p>{image.overview}</p>
                                        </div>
                                        <div className='Hero-poster'>
                                            <img></img>
                                        </div>
                        
                                        
                                    </div>
                                </div>
                            </section>

                        ))}
               
        </div>
    )
  
}
/*
<Swiper
                grabCursor={true}
                modules={[Autoplay]}
                speed={1000}
                spaceBetween={0}
                slidesPerView={1}
                loop
                className="swiper"
            >
                
                <SwiperSlide className="swiperslide-container"></SwiperSlide>



                   </SwiperSlide>
            </Swiper>
*/