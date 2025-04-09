import React from 'react';
import ProductCard from '../ProductCard';
import NavBar1 from '../NavBar1';
import Heading from './Heading.jsx';
import './Cat3.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import Faucet1 from '../../../assets/Faucet_1.jpg';
import Faucet2 from '../../../assets/Faucet_2.jpg';
import Faucet3 from '../../../assets/Faucet_3.jpg';
import Faucet4 from '../../../assets/Faucet_4.jpg';
import Faucet5 from '../../../assets/Faucet_5.jpg';
import Faucet6 from '../../../assets/Faucet_6.jpg';

const productsData = [
  { id: 1, title: 'ABS Royal', image: Faucet1 },
  { id: 2, title: 'ABS PRAY', image: Faucet2 },
  { id: 3, title: 'ABS STAR', image: Faucet3 },
  { id: 4, title: 'ABS MILANO', image: Faucet4 },
  { id: 5, title: 'ABS JACO', image: Faucet5 },
  { id: 6, title: 'ABS JAGGUAR', image: Faucet6 },
];

const Cat3 = () => {
  return (
    <div className="cat3-container">
      <NavBar1 />
      <br />
      <br />
      <br />
      <br />
      <Heading title="Health Faucets" />
      <br />

      <div className="swiper-wrapper-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true} 
          slidesPerView={'auto'} 
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="product-swiper"
        >
          {productsData.map((product) => (
            <SwiperSlide key={product.id} className="swiper-slide">
              <ProductCard title={product.title} image={product.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Cat3;
