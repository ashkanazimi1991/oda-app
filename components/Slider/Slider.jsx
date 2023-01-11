import React from 'react'
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from 'next/image';

// const Slider = () => {
    const Slider = () => {
        //Array of Images
        const images = [
            // "images/888.jpg",
            "/images/slider3.jpg",
            "/images/slider2.jpg",
           
        ];
    
        //These are custom properties for zoom effect while slide-show
        const zoomInProperties = {
            indicators: false,
            scale: 1.2,
            duration: 5000,
            arrows: false,
            transitionDuration: 500,
            infinite: true,
            
        
        };


  return (
    
     <div className=" ">
				<Zoom {...zoomInProperties}>
          {images.map((each, index) => (
            <div key={index} className="flex justify-center  w-screen  h-screen">
                <Image height="2000" width="3000" alt='oda'
                  className=" object-cover h-[80%] md:object-contain z-20 "
                  src={each}
                />
            </div>
          ))}
			  </Zoom>
		</div>

  
  )
}

export default Slider