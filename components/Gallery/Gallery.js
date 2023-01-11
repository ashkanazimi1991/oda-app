import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Gallery = ({img, alt, title, desc , btnlink }) => {
  return (
    <div className='flex justify-center bg-black '>
        
            <div className="relative items-center justify-center ">
            <Link href={btnlink}>
                    <div className='absolute top-[25%]  cursor-pointer z-10 opacity-0 hover:opacity-100 
                    ease-in-out duration-1000 bg-[#5e5e5fee]    w-full  h-1/2 '>
                        <h1 className=' rounded  py-4 -mb-4 relative top-1/2 w-full  text-center 
                        xl:text-2xl  font-bold  tracking-wide text-[#93ad75]   '>
                             {title} 
                        </h1>
                          <p  className=' relative text-center z-20 text-xs   
                              md:text-2xl  text-[#aaaaab] '>
                            {desc}
                            </p>
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