import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel, HashNavigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel, HashNavigation]);



import Sobre from '../components/sobre';
import Design from '../components/design';
import Web from '../components/webdesign';
import Port from '../components/portfolio';
import Exp from '../components/experiencia';


export default function Home({beha}) {  


  const params = {   
    direction: "vertical",
    hashNavigation: {
      watchState: true,
    },
    mousewheel: {
      invert: false,
    },
  };

  return (  
    <>
      <Swiper {... params}>
        <SwiperSlide data-hash="sobre" id="sobre"> <Sobre /> </SwiperSlide>
        <SwiperSlide data-hash="design" id="design"> <Design /> </SwiperSlide>
        <SwiperSlide data-hash="webdesign" id="webdesign"><Web /></SwiperSlide>
        <SwiperSlide data-hash="portfolio" id="portfolio"><Port beha={beha}/></SwiperSlide>
        <SwiperSlide data-hash="experiencia" id="experiencia"><Exp /></SwiperSlide>      
    </Swiper>

    </>

    

    
 
  );
}

export const getStaticProps = async () => {
  const response = await fetch('https://behance.net/v2/users/marciomrb/projects?api_key=CDE4h183exq2KsymA02qhHZU3DUvvW4e');
  const data = await response.json();
  return {
    props: {
      beha: data
    },
    revalidate: 86400,
  }
}