import React from 'react';
import Link from "next/link";
import { FiPhone} from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#101010] md:pl-[20%] flex justify-center">
                <div className="   w-3/4  max-w-lg ">
                    <div className=" pt-4    flex-col" >
            
                         
                            
                  
                        </div>

                        <div   className=" mt-4 border-t border-gray-100  items-center "   >

                            <ul className="flex items-center justify-center gap-4 mt-4  ">
                         

                                <li>
                                <Link href='https://www.instagram.com/oda.architect' target='_blank'  aria-label='Instagram'>
                              <FaInstagram className=' w-10 text-2xl text-[#60724b] cursor-pointer'/> 
                            </Link>
                                </li>

                                <li>
                                <Link href='https://t.me/keivanarc' target='_blank'  aria-label='telgram'>
                                    <TbBrandTelegram className=' text-2xl text-[#60724b] transition hover:text-teal-700/75  '/> 
                                </Link>  
                                </li>


                                <li>
                                    <Link href='tel:+984433361050'>
                                        <FiPhone className='text-lg text-[#60724b] transition hover:text-teal-700/75 '/> 
                                    </Link> 
                                </li>
                            
                            </ul>
                            <p className="text-sm text-center pt-4 mt-4 border-t border-gray-100 text-gray-500 pb-20">
                                Copyright &copy; 2022. All rights reserved for ODA 
                            </p>
                    </div>
                </div>
            </footer>


        </div>
    );
}

export default Footer;
