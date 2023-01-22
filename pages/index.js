// import Slider from '../components/Slider/Slider'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';




export default function Home() {

  return(
    



<div>
  <Head>
        <meta name="description" content="oda" />
        <link rel="icon" href="/images/logo.png" />
        <title>ODA - Architect Company</title>
        <meta name="description" content="شرکت معماری اودا" />
        <meta name="theme-color" content="#000"/>
        <link rel='manifest' href='/manifest.json' />
  </Head>

  
  {/* <Slider/> */}

  <Image height='100' width='1200'
                className="fixed -z-10  object-cover  w-full h-screen opacity-100 "
                src="/images/slider3.jpg"   alt="about oda" />
  <div className='bg-[#00000075] md:pl-[20%] min-h-screen flex flex-col py-8 justify-center items-center'>
     <h2 className="text-lg py-2 xl:text-6xl text-center  font-bold text-white ">
        Welcome to ODA Architecture Company
     </h2>
     <p className=" text-lg  text-gray-300 md:mt-4 md:block">
                            We build for you
                            </p>

                            <div className="mt-4 md:mt-8">
                                 <Link href='/about'>
                                    <h2
                                    className="inline-block px-12 py-3 text-lg  text-white 
                                     rounded bg-[#60724b] hover:bg-emerald-700 "
                                    >
                                    Contact us Today
                                    </h2>
                                
                                </Link>
                             </div>
  </div>
                                 


</div>

  )
}
