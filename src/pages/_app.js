import { useEffect } from "react";
import '../scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import AOS from "aos";
import Head from 'next/head';


import "aos/dist/aos.css";


import Header from '../components/header';


export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Marcio Campos | Currículo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Marcio Campos" />
        <meta name="description" content="Curriculum Marcio Campos - Desginer Gráfico e Web Designer, Moro em Tietê-SP. Aqui você pode ver todas as habilidades e experiências que tive!" />
        <meta name="keywords" content="HTML,CSS,XML,JavaScript" />
        <meta property="og:image" content="/capa.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="480" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://marciocampos.com.br" />
        <meta property="og:title" content="Marcio Campos | Currículo" />
        <meta property="og:site_name" content="Marcio Campos" />
        <meta property="og:type" content="website" />
      </Head>
        <Header />
        <Component {...pageProps} />
    </>
  )
}


