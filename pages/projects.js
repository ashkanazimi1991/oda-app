import React from 'react';
import Head from 'next/head';
import Gallery from '../components/Gallery/Gallery';
// import ScrollItem2 from '../components/scrollItem2/ScrollItem2'

const Projects = () => {

    const galleryData =[
      {
        img: '/images/parvin1.jpg',
        title:" More Info",
        desc:"Parvin - Urmia",
        alt:"oda",
        btnlink:"/parvin"
      },
      {
        img: '/images/Somen-Abad.jpg',
        title:" More Info",
        desc:"Somon Abad - Urmia",
        alt:"oda",
        btnlink:"/somonabad"
      },
      {
        img: '/images/pezeshkian.jpg',
        title:" More Info",
        desc:"Pezeshkian - Urmia",
        alt:"oda",
        btnlink:"/pezeshkian"
      },
        {
          img: '/images/pashapoor.jpg',
          title:" More Info",
          desc:"Pashapoor - Urmia", 
          alt:"oda",
          btnlink:"/pashapoor"
        },
        {
          img: '/images/savalan.jpg',
          title:" More Info",
          desc:" Savalan - Urmia",
          alt:"oda",
          btnlink:"/savalan"
        },
        {
          img: '/images/Honarjoo.jpg',
          title:" More Info",
          desc:"Honarjooyan - Urmia",
          alt:"oda",
          btnlink:"/honarjooyan"
        },
        {
            img: '/images/modiriat.jpg',
            title:" More Info",
            desc:" Modiriat - Urmia",
            alt:"oda",
            btnlink:"/modiriat"
          },
          {
            img: '/images/moeyin.jpg',
            title:" More Info",
            desc:"Moeyin - Urmia",
            alt:"oda",
            btnlink:"/moyen"
          },
          {
            img: '/images/malekpoor.jpg',
            title:" More Info",
            desc:"Malekpoor - Urmia.",
            alt:"oda",
            btnlink:"/malekpoor"
          },

          {
            img: '/images/negin.jpg',
            title:" More Info",
            desc:" Negin - Mahabad",
            alt:"oda",
            btnlink:"/negin"
          },
          {
            img: '/images/amir.jpg',
            title:" More Info",
            desc:"Amir - Urmia",
            alt:"oda",
            btnlink:"/amir"
          },
          {
            img: '/images/Khodkari.jpg',
            title:" More Info",
            desc:"Khodkari - Chaloos.",
            alt:"oda",
            btnlink:"/khodkari"
          },
          {
            img: '/images/goroosh.jpg',
            title:" More Info",
            desc:"Guroosh - Urmia.",
            alt:"oda",
            btnlink:"/guroosh"
          },


        
    
      ]







    return (
        <div>
             <Head>
                <meta name="description" content="oda" />
                <link rel="icon" href="/images/logo.png" />
                <title>ODA - Architect Company</title>
                <meta name="description" content=" پروژه های شرکت اودا" />
                <meta name="theme-color" content="#000"/>
                <link rel='manifest' href='/manifest.json' />
         </Head>
            {/* <Gallery/> */}

        <div className='min-h-screen bg-black'>
            <section className='md:pl-[20%] pt-12 md:pt-0 flex justify-center'>
                <div className="container grid grid-cols-2 md:grid-cols-3  gap-1 ">
                {galleryData.map((data,index) => {
                    return <Gallery key={index} btnlink={data.btnlink} title={data.title} desc={data.desc}
                     img={data.img} alt={data.alt}  />
                })}

                </div>
            </section>

        </div>

	
            
        </div>
    );
}

export default Projects;
