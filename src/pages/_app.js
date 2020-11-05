import { useEffect } from "react";
import '../scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import AOS from "aos";
import Head from 'next/head';


import "aos/dist/aos.css";


import Header from '../components/header';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <Head>
        <title>Marcio Campos | Currículo</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
