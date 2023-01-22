import React from 'react';
import Link from "next/link";
import { FiPhone} from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#101010] md:pl-[20%] flex py-10 justify-center items-center">
                <div className="flex flex-col justify-center items-center w-full  max-w-lg ">
                  
                    <div className="flex justify-around  w-full py-4  border-y-2 border-gray-500  items-center ">
                        <div>
                            <Link href='tel:+984433361050' passHref={true}>
                              
                                <FiPhone className='text-lg text-[#60724b] transition hover:text-teal-700/75 '/> 
                              
                            </Link> 
                        </div>
                        
                         <div>
                             <Link href='https://www.instagram.com/oda.architect' passHref={true} target='_blank'  aria-label='Instagram'>
                           
                              <FaInstagram className=' w-10  text-2xl text-[#60724b] cursor-pointer'/> 
                          
                            </Link>
                         </div>
                               
                        <div>
                            <Link href='https://t.me/keivanarc' passHref={true} target='_blank'  aria-label='telegram'>
                         
                                <TbBrandTelegram className=' text-2xl text-[#60724b] transition hover:text-teal-700/75  '/> 
                          
                            </Link>  
                        </div>

                               
                    </div>
                            <p className="text-sm text-center pt-4 mb-10   text-gray-500 ">
                                Copyright &copy; 2022. All rights reserved for ODA 
                            </p>
                </div>
            </footer>


        </div>
    );
}

export default Footer;
