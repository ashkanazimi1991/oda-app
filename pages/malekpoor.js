import React ,{useState} from 'react';

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from 'next/image';

import { BsArrowLeft } from "react-icons/bs";
import { BiCube } from "react-icons/bi";
import Link from "next/link";
// import Model from '../components/Modal';
// import React360Viewer from '../components/React360Viewer';


export const Malekpoor = () => {

  const images = [
    "/images/malekpoor.jpg",
    "/images/malek2.jpg",
    // "/images/malek3.jpg",
   
];


const zoomInProperties = {
  indicators: true,
  scale: 1.2,
  duration: 5000,
  arrows: true,
  transitionDuration: 500,
  infinite: true,
  autoplay:false,
};


    const [showModel, setShowModal] = useState(false)
  return (
    <div className=' flex justify-center md:pl-[20%]  flex-col bg-white pt-12 
    md:pt-0 min-h-screen '>
          <Link href='/projects'>
            <BsArrowLeft className='fixed md:left-[20%] left-0 top-10 z-20  p-2 
             rounded-full  my-4 ml-3  md:text-5xl text-4xl text-[#000]
             cursor-pointer'/>
           </Link>


           <div className=''>
    <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center  ">
              <Image height="2000" width="3000" alt='oda'
                className=" px-10  object-contain    z-20 "
                src={each}
              />
          </div>
        ))}
      </Zoom>
    </div>
        
    

{/* ................info................................ */}
       <div className='mt-[10%] relative bottom-10 pb-16'>
       <div className='flex flex-row border-y-2'>

        <div className='flex flex-row justify-around items-center w-3/4'>
               <div className=' py-5'>
                <h1 className='text-black text-3xl '>Malekpoor</h1>
             
                
               </div>
               <div className='py-5'>
                <h1 className='text-black md:text-xl'>Iran - Urmia</h1>
                
               </div>

              
            </div>

            <div className='flex justify-center items-center border-l-2 pl-5 place-content-center   w-1/4'>
        
           <h1 className='text-black text-xl md:text-3xl'>1397</h1>

        </div>

        

</div>
        <div>
            {/* ........modal.......... */}
            {/* <div>

            <Model isVisible={showModel} onclose={() => setShowModal(false)}>

                <div className="flex z-20 items-center  w-full bg-[#000000da] h-full  ">
                     <React360Viewer className="w-full h-full
                        bg-green-400" 
                         amount={36}
                         i={1}
                         imagePath="/images/myarm"
                         fileName="m{index}.jpg"
                         autoplay={0}
                         loop={1}           />
                 </div>
                </Model>
            </div> */}

            <div className='flex justify-end flex-row'>
             

                <div className='flex justify-center md:pr-10 py-4 z-0 cursor-pointer items-center '>
                            <button onClick={() => setShowModal(true)} className='w-20 h-20'>
                            <BiCube  className="text-4xl md:text-6xl animate-pulse  text-[#0a835b]"/>
                            </button>
                </div>

             
            </div>
            {/* ...../modal........... */}
            <div>
                <p className='text-black text-right leading-10 px-8 md:px-[20%]
                 md:text-xl '>
کارفرما : آقای ملک پور
                <br></br>  <br></br> 
                آدرس : ارومیه ، دانشکده
                </p>
            </div>
        </div>
       </div>
        
    </div>
  )
}

export default Malekpoor;