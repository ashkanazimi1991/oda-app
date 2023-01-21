import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { TbBrandTelegram } from "react-icons/tb";

const Team = () => {
  return (
    <div className='mt-20 md:pl[200%'>
       {/* <!-- component --> */}
<section className=" bg-gradient-to-r from-black to-[#1414140a] md:pl-[20%]">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 
                capitalize lg:text-4xl dark:text-white">Our Executive Team</h1>
                              
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                    


                    {/* kivan......................................... */}
                    <div className="flex flex-col items-center p-8 transition-colors duration-200
                     transform  group hover:bg-[#60724b] rounded-xl">
                        <Image height='150' width='150'  className="object-cover  w-32 h-32  rounded-3xl ring-4 ring-gray-300"
                         src="/images/aa.jpg" alt="" />
                        
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white
                         group-hover:text-white">Kivan Azimi</h1>
                        
                        <h2 className="mt-2 text-gray-500 capitalize dark:text-gray-300
                         group-hover:text-gray-300">CEO & Architectu</h2>
                        
                        <div className="flex mt-3 -mx-2">
                            <Link href='https://www.instagram.com/ashkanazimi.info' passHref={true} target='_blank'  aria-label='Instagram'>
                              <FaInstagram className=' w-10 text-2xl text-[#fff] cursor-pointer'/> 
                            </Link>  
                            <Link href='https://t.me/keivanarc' passHref={true} target='_blank'  aria-label='telegram'>
                          <TbBrandTelegram className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                        </Link>  
                        </div>
                    </div>
                     {/* said................ */}
                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-[#60724b] rounded-xl">
                    <Image height='150' width='150'  className="object-cover  w-32 h-32  rounded-3xl ring-4 ring-gray-300"
                         src="/images/bb.jpg" alt="" />
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize
                         dark:text-white group-hover:text-white">Saide Sadat</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300
                         group-hover:text-gray-300">Architectu</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <Link href='https://www.instagram.com/ashkanazimi.info' passHref={true} target='_blank'  aria-label='Instagram'>
                              <FaInstagram className=' w-10 text-2xl text-[#fff] cursor-pointer'/> 
                            </Link>  
                            <Link href='https://t.me/Ssaadat25' passHref={true} target='_blank'  aria-label='telegram'>
                          <TbBrandTelegram className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                        </Link>  
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-200 
                    transform cursor-pointer group hover:bg-[#60724b] rounded-xl">
                       <Image height='150' width='150'  className="object-cover  w-32 h-32  rounded-3xl ring-4 ring-gray-300"
                         src="/images/www.jpg" alt="" />
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize
                         dark:text-white group-hover:text-white">Mina Rad</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300
                         group-hover:text-gray-300">3D designer</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <Link href='https://www.instagram.com/ashkanazimi.info' passHref={true} target='_blank'  aria-label='Instagram'>
                              <FaInstagram className=' w-10 text-2xl text-[#fff] cursor-pointer'/> 
                            </Link>  
                            <Link href='https://t.me/+ll4bLWoavUgyZTI0' passHref={true} target='_blank'  aria-label='telegram'>
                          <TbBrandTelegram className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                        </Link>  
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors 
                    duration-200 transform cursor-pointer group hover:bg-[#60724b] rounded-xl">
                      <Image height='150' width='150'  className="object-cover  w-32 h-32  rounded-3xl ring-4 ring-gray-300"
                         src="/images/kkk.jpg" alt="" />
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize
                         dark:text-white group-hover:text-white">Ashkan Azimi</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Full stack developer</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <Link href='https://www.instagram.com/ashkanazimi.info' passHref={true} target='_blank'  aria-label='Instagram'>
                              <FaInstagram className=' w-10 text-2xl text-[#fff] cursor-pointer'/> 
                            </Link>  
                            <Link href='https://t.me/+ll4bLWoavUgyZTI0' passHref={true} target='_blank'  aria-label='telegram'>
                          <TbBrandTelegram className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                        </Link>  
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform  group hover:bg-[#60724b] rounded-xl">
                    <Image height='150' width='150'  className="object-cover  w-32 h-32  rounded-3xl ring-4 ring-gray-300"
                         src="/images/880.jpg" alt="" />
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize
                         dark:text-white group-hover:text-white">Neda Mohamadi</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Graphic Designer</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <Link href='https://www.instagram.com/ashkanazimi.info' passHref={true} target='_blank'  aria-label='Instagram'>
                              <FaInstagram className=' w-10 text-2xl text-[#fff] cursor-pointer'/> 
                            </Link>  
                            <Link href='https://t.me/+ll4bLWoavUgyZTI0' passHref={true} target='_blank'  aria-label='telegram'>
                          <TbBrandTelegram className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                        </Link>  
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform  group hover:bg-[#60724b] rounded-xl">
                    <Image height='150' width='150'  className="object-cover  w-32 h-32  rounded-3xl ring-4 ring-gray-300"
                         src="/images/770.jpg" alt="" />
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize
                         dark:text-white group-hover:text-white">Ramin Milan</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Project Managers</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <Link href='https://www.instagram.com/ashkanazimi.info' passHref={true} target='_blank'  aria-label='Instagram'>
                              <FaInstagram className=' w-10 text-2xl text-[#fff] cursor-pointer'/> 
                            </Link>  
                            <Link href='https://t.me/+ll4bLWoavUgyZTI0' passHref={true} target='_blank'  aria-label='telegram'>
                          <TbBrandTelegram className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                        </Link>  
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform  group hover:bg-[#60724b] rounded-xl">
                    <Image height='150' width='150'  className="object-cover  w-32 h-32  rounded-3xl ring-4 ring-gray-300"
                         src="/images/ffff.jpg" alt="" />
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize
                         dark:text-white group-hover:text-white">Farzad Farzane</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Engineer</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <Link href='https://www.instagram.com/ashkanazimi.info' passHref={true} target='_blank'  aria-label='Instagram'>
                              <FaInstagram className=' w-10 text-2xl text-[#fff] cursor-pointer'/> 
                            </Link>  
                            <Link href='https://t.me/+ll4bLWoavUgyZTI0' passHref={true} target='_blank'  aria-label='telegram'>
                          <TbBrandTelegram className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                        </Link>  
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform  group hover:bg-[#60724b] rounded-xl">
                    <Image height='150' width='150'  className="object-cover  w-32 h-32  rounded-3xl ring-4 ring-gray-300"
                         src="/images/dddd.jpg" alt="" />
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize
                         dark:text-white group-hover:text-white">Sanaz Radmehr</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Architect</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <Link href='https://www.instagram.com/ashkanazimi.info' passHref={true} target='_blank'  aria-label='Instagram'>
                              <FaInstagram className=' w-10 text-2xl text-[#fff] cursor-pointer'/> 
                            </Link>  
                            <Link href='https://t.me/+ll4bLWoavUgyZTI0' passHref={true} target='_blank'  aria-label='telegram'>
                          <TbBrandTelegram className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                        </Link>  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Team