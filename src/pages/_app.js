import '../scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/main';
import 'animate.css';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import Header from '../components/header';

function MyApp({ Component, pageProps }) {
 
  return (
    <>
  <Header />
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
