import React from 'react';
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";



const ProjectDetail = () => {
    const images = [
        "images/l1.jpg",
        "images/l1.jpg",
        "images/l1.jpg",
       
    ];

    //These are custom properties for zoom effect while slide-show
    const zoomInProperties = {
        indicators: false,
        scale: 1.2,
        duration: 5000,
        arrows: true,
        transitionDuration: 500,
        infinite: true,
    };
        

  return (
    <div className='felx '>
        <div className="w-full md:pl-[20%] pt-12 md:pt-0 bg-black">
            <Zoom {...zoomInProperties}>
                {images.map((each, index) => (
                    <div key={index} className="flex justify-center lg:pl[20%] pt-63 bg-[#000] max-h-screen">
                        <img className="w-full  object-cover bg-[#000] z-20 shadow-xl" src={each} />
                    </div>
                ))}
            </Zoom>
        </div>
        <h1 className='pt-5 px-5 md:pl-[20%] text-xl lg:pl-[22%] bg-[#000] text-[#60724b] font-bold font-[arial]'>
        project title
        </h1>
        <h2 className='pt-2 pb-2 px-5 md:pl-[20%] text-sm lg:pl-[22%] bg-[#000] text-white font-[arial]'>
        project Owner
        </h2>
        <p className='px-8 font-[arial]  text-justify lg:pl-[22%] md:pl-[22%] pb-5 lg:pr-[35%]  bg-black text-gray-400'>
            project info gose here  project info gose here  project info gose here  project info gose here  project info gose here  project info gose here  project info gose here  project info gose here  project info gose here  project info gose here  project info gose here .
        </p>

       <div className='bg-black py-3 px-8 md:pl-[22%] lg:pl-[22%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-5'>
            <a className="block overflow-hidden rounded-2xl">
                    <div className="p-4 bg-[#60724b] ">
                        <div className="flex items-center">
                        <h5 className="text-xl font-[arial] text-white">Stractuer material</h5>
                        <p className="ml-1 text-xs font-[arial] font-bold text-gray-900">
                            <span> it's Brand </span>
                            {/* <span>  </span> */}
                            
                        </p>
                        </div>

                        <p className="mt-1 text-xs font-[arial] lg:text-lg text-gray-300">Lorem
                         ipsum dolor sit amet consectetur, adipisicing elit. Rerum nobis
                          aliquid accusamus? Sint, sequi voluptas.</p>
                    </div>

                    <img className="object-cover w-full h-56" src="./images/steal.jpg" alt="oda" />
                </a>

                <a className="block overflow-hidden rounded-2xl">
                    <div className="p-4 bg-[#60724b]">
                        <div className="flex items-center">
                        <h5 className="text-lg font-[arial] text-white">Inner material</h5>
                        <p className="ml-1 text-xs font-[arial] font-bold text-gray-900">
                            <span> it's Brand </span>
                            {/* <span>  </span> */}
                            
                        </p>
                        </div>

                        <p className="mt-1 font-[arial] text-xs lg:text-lg text-gray-300">Lorem ipsum dolor
                         sit amet consectetur, adipisicing elit. Rerum nobis aliquid accusamus?
                          Sint, sequi voluptas.</p>
                    </div>

                    <img className="object-cover w-full h-56" src="./images/inner.jpg" alt="oda" />
                </a>

                
                <a href="" className="block overflow-hidden font-[arial] rounded-2xl">
                    <div className="p-4 bg-[#60724b]">
                        <div className="flex items-center">
                        <h5 className="text-lg font-[arial] text-white">Floor Material</h5>
                        <p className="ml-1 text-xs font-[arial] font-bold text-gray-900">
                            <span> its brand </span>
                            <span>  </span>
                        </p>
                        </div>

                        <p className="mt-1 text-xs lg:text-lg font-[arial] text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nobis aliquid accusamus? Sint, sequi voluptas.</p>
                    </div>

                    <img className="object-cover w-full h-56" src="./images/material.jpg" alt="oda" />
                </a>

                
                    <h1 className='text-white font-[arial] text-xl'>
                        Other Photoes
                    </h1>







    </div>
    <div className='bg-black   py-5   md:pl-[20%]  '>
                <div className="container grid grid-cols-3 md:grid-cols-6 px-6  gap-2 ">
            <div className="w-full relative transition-transform hover:scale-[200%] hover:z-10 flex items-center justify-center ">
                <img  className="styles.image"      src="/images/steal.jpg"  alt= "img"   />
            </div>
         
            <div className="w-full relative transition-transform hover:scale-[200%] hover:z-10  flex items-center justify-center ">
                <img     className="styles.image"    src="/images/inner.jpg"     alt= "img"     />
            </div>
          
            <div className="w-full relative transition-transform hover:scale-[200%] hover:z-10  flex items-center justify-center ">
                <img            className="styles.image"        src="/images/material.jpg"        alt="img"  />
            </div>
            <div className="w-full relative transition-transform hover:scale-[200%] hover:z-10  flex items-center justify-center ">
                <img  className="styles.image"     src="/images/inner.jpg"    alt="img"      />
            </div>
            <div className="w-full relative transition-transform hover:scale-[200%] hover:z-10  flex items-center justify-center ">
                <img  className="styles.image"     src="/images/steal.jpg"     alt="img"    />
            </div>
            <div className="w-full relative transition-transform hover:scale-[200%] hover:z-10 flex items-center justify-center ">
                <img     className="styles.image"      src="/images/inner.jpg"     alt="img"   />
             </div>
             <div className="w-full relative transition-transform hover:scale-[200%] hover:z-10 flex items-center justify-center ">
                <img     className="styles.image"      src="/images/material.jpg"     alt="img"   />
             </div>
             <div className="w-full relative transition-transform hover:scale-[200%] hover:z-10 flex items-center justify-center ">
                <img     className="styles.image"      src="/images/steal.jpg"     alt="img"   />
             </div>
             <div className="w-full relative transition-transform hover:scale-[200%] hover:z-10 flex items-center justify-center ">
                <img     className="styles.image"      src="/images/inner.jpg"     alt="img"   />
             </div>
             <div className="w-full relative transition-transform hover:scale-[200%] hover:z-10 flex items-center justify-center ">
                <img     className="styles.image"      src="/images/material.jpg"     alt="img"   />
             </div>
             <div className="w-full relative transition-transform hover:scale-[200%] hover:z-10  flex items-center justify-center ">
                <img     className="styles.image"      src="/images/inner.jpg"     alt="img"   />
             </div>
             <div className="w-full relative transition-transform hover:scale-[200%] hover:z-10 flex items-center justify-center ">
                <img     className="styles.image"      src="/images/material.jpg"     alt="img"   />
             </div>
        </div>
       </div>
       </div>
  )
};

export default ProjectDetail;