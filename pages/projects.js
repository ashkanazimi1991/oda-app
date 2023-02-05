import React from 'react';
import Head from 'next/head';
import Gallery from '../components/Gallery/Gallery';


const Projects = () => {

    const galleryData =[
      {
        img: '/images/Salimpour01T.jpg',
        title:" More Info",
        desc:"Parvin - Urmia",
        alt:"oda",
        btnlink:"/parvin"
      },
      {
        img: '/images/Somunabad01T.jpg',
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
          img: '/images/Baran01T.jpg',
          title:" More Info",
          desc:"Baran - Urmia", 
          alt:"oda",
          btnlink:"/pashapoor"
        },
        {
          img: '/images/Kelarabad-pool02P.jpg',
          title:" More Info",
          desc:"Kelarabad - Urmia", 
          alt:"oda",
          btnlink:"/kelarabad"
        },
        {
          img: '/images/savalanop.jpg',
          title:" More Info",
          desc:" Savalan - Urmia",
          alt:"oda",
          btnlink:"/savalan"
        },
        {
          img: '/images/kajP.jpg',
          title:" More Info",
          desc:" Kaj - Urmia",
          alt:"oda",
          btnlink:"/kaj"
        },
        {
          img: '/images/Hajizadeh01T.jpg',
          title:" More Info",
          desc:"Hajizadeh - Urmia",
          alt:"oda",
          btnlink:"/honarjooyan"
        },
        {
            img: '/images/Erfan03T.jpg',
            title:" More Info",
            desc:" Erfan - Urmia",
            alt:"oda",
            btnlink:"/modiriat"
          },
              {
            img: '/images/Persian01T.jpg',
            title:" More Info",
            desc:" Persian - Urmia",
            alt:"oda",
            btnlink:"/persian"
          },
          {
            img: '/images/Afrand01T.jpg',
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
          {
            img: '/images/gorooshop.jpg',
            title:" More Info",
            desc:"Pashapoor - Urmia.",
            alt:"oda",
            btnlink:"/pashapoor"
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
