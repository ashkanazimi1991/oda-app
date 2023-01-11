// import ScrollItem from '../components/ScrollItems/ScrollItem';
import Slider from '../components/Slider/Slider'
import Head from 'next/head';
import Info from '../components/Info/Info';
// import Pano from '../components/pano';




export default function Home() {

  return(
    // <Layout>



<div>
  <Head>
        <meta name="description" content="oda" />
        <link rel="icon" href="/images/logo.png" />
        <title>ODA - Architect Company</title>
        <meta name="description" content="شرکت معماری اودا" />
        <meta name="theme-color" content="#000"/>
        <link rel='manifest' href='/manifest.json' />
  </Head>

  
  <Slider/>
  <Info/>

{/* 
  <Pano/> */}

                                  


</div>

  )
}
