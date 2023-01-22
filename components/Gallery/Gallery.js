import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Gallery = ({img, alt, title, desc , btnlink }) => {
  return (
    <div className='flex justify-center bg-black '>
        
            <div className="relative items-center justify-center ">
            <Link href={btnlink}>
                    <div className='absolute   cursor-pointer z-10 opacity-0 hover:opacity-100 
                    ease-in-out duration-1000 bg-[#5e5e5fad]    w-full  h-full '>
                      <p  className=' relative text-center z-20 text-xl   
                          md:text-2xl pt-[40%]  text-[#f1f1f1] '>
                        {desc}
                        </p>
                        <h1 className=' rounded  py-4 -mb-4 relative pt-[5%] w-full  text-center 
                        xl:text-2xl  font-bold  tracking-wide text-[#afda7f]   '>
                             {title} 
                        </h1>
                    </div>
                </Link> 
                <div className=' relative z-0'>
                    <Image width='500' height='500' className=' object-cover'  src={img}  alt= {alt}   />
                </div>

            </div>
         
    </div>
  )
}

export default Gallery