import React from 'react';
import Head from 'next/head';
import Gallery from '../components/Gallery/Gallery';


const Projects = () => {

    const galleryData =[
      {
        img: '/images/parvin1op.jpg',
        title:" More Info",
        desc:"Parvin - Urmia",
        alt:"oda",
        btnlink:"/parvin"
      },
      {
        img: '/images/s1op.jpg',
        title:" More Info",
        desc:"Somon Abad - Urmia",
        alt:"oda",
        btnlink:"/somonabad"
      },
      {
        img: '/images/pezeshkianop.jpg',
        title:" More Info",
        desc:"Pezeshkian - Urmia",
        alt:"oda",
        btnlink:"/pezeshkian"
      },
        {
          img: '/images/pashapoorop.jpg',
          title:" More Info",
          desc:"Pashapoor - Urmia", 
          alt:"oda",
          btnlink:"/pashapoor"
        },
        {
          img: '/images/savalanop.jpg',
          title:" More Info",
          desc:" Savalan - Urmia",
          alt:"oda",
          btnlink:"/savalan"
        },
        {
          img: '/images/h1op.jpg',
          title:" More Info",
          desc:"Honarjooyan - Urmia",
          alt:"oda",
          btnlink:"/honarjooyan"
        },
        {
            img: '/images/modiriatop.jpg',
            title:" More Info",
            desc:" Modiriat - Urmia",
            alt:"oda",
            btnlink:"/modiriat"
          },
          {
            img: '/images/moeyinop.jpg',
            title:" More Info",
            desc:"Moeyin - Urmia",
            alt:"oda",
            btnlink:"/moyen"
          },
          {
            img: '/images/malekpoorop.jpg',
            title:" More Info",
            desc:"Malekpoor - Urmia.",
            alt:"oda",
            btnlink:"/malekpoor"
          },

          {
            img: '/images/neginop.jpg',
            title:" More Info",
            desc:" Negin - Mahabad",
            alt:"oda",
            btnlink:"/negin"
          },
          {
            img: '/images/amirop.jpg',
            title:" More Info",
            desc:"Amir - Urmia",
            alt:"oda",
            btnlink:"/amir"
          },
          {
            img: '/images/Khodkariop.jpg',
            title:" More Info",
            desc:"Khodkari - Chaloos.",
            alt:"oda",
            btnlink:"/khodkari"
          },
          {
            img: '/images/gorooshop.jpg',
            title:" More Info",
            desc:"Görüsh - Urmia.",
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
