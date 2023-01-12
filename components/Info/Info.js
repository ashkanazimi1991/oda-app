import Link from 'next/link';
import React from 'react';

const Info = () => {
    return (
        <div className='bg-[#000000] border-y-2'>
                <aside className="overflow-hidden bg-transparent sm:grid md:pl-[20%] sm:grid-cols-1">
                     <div className="p-8 md:p-12 md:pl-[20%] lg:px-16 lg:py-24">
                        <div className="max-w-xl mx-auto text-center">
                            <h2 className="text-2xl font-bold text-white md:text-3xl">
                            Welcome to ODA Architecture Company
                            </h2>
                            <p className=" text-lg  text-gray-300 md:mt-4 md:block">
                            We build for you to enjoy
                            </p>

                            <div className="mt-4 md:mt-8">
                                 <Link href='/about'>
                                    <a
                                    className="inline-block px-12 py-3 text-lg  text-white 
                                     rounded bg-[#60724b] hover:bg-emerald-700 "
                                    >
                                    Contact us Today
                                    </a>
                                
                                </Link>
                             </div>
                        </div>
                            </div>

                            
            </aside>

        </div>
    );
}

export default Info;
