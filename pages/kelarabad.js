import React ,{useState} from 'react';

import { BsArrowLeft } from "react-icons/bs";
import { BiCube } from "react-icons/bi";
import Link from "next/link";
// import Model from '../components/Modal';
// import React360Viewer from '../components/React360Viewer';



import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from 'next/image';



export const kelarabad = () => {


  const images = [
    "/images/Kelarabad-pool01.jpg",
    "/images/Kelarabad-pool02.jpg",
    "/images/Kelarabad-pool03.jpg",
    "/images/Kelarabad-pool04.jpg",
    "/images/Kelarabad-pool05.jpg",
    "/images/Kelarabad-pool06.jpg",
   

   
];

const zoomInProperties = {
  indicators: true,
  scale: 1.2,
  duration: 5000,
  arrows: true,
  transitionDuration: 500,
  infinite: true,
  autoplay:false,
  pauseOnHover: true,
  swipeToSlide: true,
  lazyLoad: true,
  initialSlide: 2,
};

    // const [showModel, setShowModal] = useState(false)
  return (
    <div className=' flex justify-center md:pl-[20%]  flex-col bg-white mt-14
    min-h-screen '>
          <Link href='/projects'>
            <BsArrowLeft className='fixed md:left-[20%] left-0 top-10 z-20  p-2 
             rounded-full  my-4 ml-3  md:text-5xl text-4xl text-[#000]
             cursor-pointer'/>
           </Link>
        

           <div className='max-h-screen'>
            <Zoom {...zoomInProperties}>
             {images.map((each, index) => (
             <div key={index} className="flex justify-center  ">
               <Image height="800" width="800" alt='oda'
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
                <h1 className='text-black text-3xl '>kelarabad</h1>
             
                
               </div>
               <div className='py-5'>
                <h1 className='text-black md:text-xl'>Iran - Urmia</h1>
                
               </div>

              
            </div>

            <div className='flex justify-center items-center border-l-2 pl-5 place-content-center   w-1/4'>
        
           <h1 className='text-black text-xl md:text-3xl'>1396</h1>

        </div>

        

</div>
        <div>
            {/* ........modal.......... */}
            {/* <div>

            <Model isVisible={showModel} onclose={() => setShowModal(false)}>

                <div className="flex z-20 items-center  w-full bg-[#fff] h-full  ">
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
                {/* <p className='text-black text-right leading-10 px-8 md:px-[20%]
                 md:text-xl '>
کارفرما :
                <br></br>  <br></br> 
                آدرس پروژه :آذربایجان غربی ، اورمیه ، خیابان دانشکده ، خیابان منصور افشار ، انتهای کوی هنرجویان ، مشرف به رودخانه شهرچایی  
                <br></br>  <br></br> 
                زیربنا:800 متر مربع در قالب یک واحد مسکونی در 4 طبقه
                <br></br>  <br></br> 
                متریال مصرفی :سازه بنا از اسکلت بتنی و متریال مصرفی نما سنگ تراورتن سفیدعباس آباد و سرامیک مشکی پالرمو و چوب ترمو.  
                </p> */}
                

            </div>
        </div>
       </div>
        
    </div>
  )
}

export default kelarabad;