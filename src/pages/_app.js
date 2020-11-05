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
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
