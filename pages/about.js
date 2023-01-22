import React from 'react';
import Head from 'next/head';
import Link from "next/link"
import Team from '../components/Member/Team';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { TbBrandTelegram } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone} from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";

const About = () => {
    return (
    <div className=''>
          <Head>
                <meta name="description" content="oda" />
                <link rel="icon" href="/images/logo.png" />
                <title>ODA</title>
                <meta name="description" content="شرکت اودا" />
                <meta name="theme-color" content="#000"/>
                <link rel='manifest' href='/manifest.json' />
         </Head>
         <div className="flex flex-col bg-gradient-to-r from-black to-[#1414140a]  justify-center ">
            <Image height='100' width='1200'
                className="fixed -z-10  object-cover  w-full h-screen opacity-100 "
                src="/images/a7.jpg"   alt="about oda" />
                <div className=" flex flex-col justify-center    ">
                    

                    <div className="flex flex-col justify-center   h-screen w-screen ">

                               
                        <div className="flex flex-col md:pl-[25%] py-10 pl-[5%] justify-center w-2/3">
                            <h1 className="flex text-left w-80  leading-10 lg:whitespace-nowrap 
                            pr-5 text-3xl text-white font-extrabold   sm:text-5xl">
                                Let us Build your Faver Home 
                            </h1>

                            <p className=" mt-3 sm:leading-relaxed  text-left text-white sm:text-xl max-w-[70%]">
                               See your project before starting in virtual reality, also  watch online how it grows in the ODA dashboard
                            </p>
                        </div>

                        
                        <div className='flex flex-row md:w-1/3 md:ml-[25%]  mt-4 border-y-2'>

                        <div className='flex flex-row sm:flex-col  justify-around items-center w-3/4'>
                                       <div className=' py-5'>
                                        <h1 className='text-white md:text-xl '>IRAN - Urmia</h1>
                                         <Link href='tel:+984433361050'>
                                            <h1 className='text-white md:text-xl'>+9844 3336 1050</h1>
                                         </Link> 
                                        
                                       </div>
                                       <div className='py-5'>
                                        <h1 className='text-white md:text-xl'>TURKEY - Istanbul</h1>
                                         <Link href='tel:+905528258841'>
                                            <h1 className='text-white md:text-xl'>+90 552 825 8841</h1>
                                         </Link> 
                                       </div>

                                      
                                    </div>





                                    <div className='grid grid-cols-2 sm:grid-cols-1 border-l-2 pl-5 place-content-center   w-1/4'>
                                
                                    <div>
                                        <Link href='https://t.me/keivanarc' target='_blank'  aria-label='telegram'>
                                        <TbBrandTelegram className='my-4 w-10 text-2xl text-[#fff] cursor-pointer '/> 
                                        </Link>

                                    </div>
                                    <div>
                                    <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'  aria-label='Instagram'>
                                    <FaInstagram className='my-4 w-10 text-2xl text-[#fff] cursor-pointer'/> 
                                    </Link>
                                    </div>
                                    <div>
                                    <Link href='tel:+989141403740'>
                                        <FiPhone className='my-4 w-10 text-2xl text-[#fff] cursor-pointer '/> 
                                    </Link> 
                                    </div>
                                    <div>
                                    <Link href="mailto:ashkan1991azimi@gmail.com" target='_blank'  aria-label='mail'>
                                      <HiOutlineMail className=' my-4 w-10 text-2xl text-[#fff] cursor-pointer '/> 
                                   </Link>  
                                    </div>

                                </div>
                                

                        </div>
                                    
                       
                </div>





        </div>
                  
         </div>
        <Team />
    </div>
    );
}

export default About;

{/* <form className="pt-1 md:px-[20%]  justify-center items-center ">
    <div className="flex flex-col gap-4 items-center" >
        <label htmlFor="order"></label>
        <textarea id="order" name="order"  placeholder="leave a message for us" 
        className='w-full h-36 rounded p-2 font-[arial] px-6'></textarea>
        <label htmlFor="email" className="sr-only">Email</label>
        <input
        className="w-full px-6 py-3 border-[#60724b] rounded-lg shadow-2xl"
        type="email"
        placeholder="Enter your email"  />

        <button
        className="w-full px-6 mb-5 py-3  text-white font-[arial] tracking-wide bold 
        transition bg-[#60724b]   rounded-lg hover:bg-green-600 " 
            type="submit" >
                    Send
        </button>
    </div>
</form> */}