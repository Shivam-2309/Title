import React from 'react';
import ProductCard from '../ProductCard';
import NavBar1 from '../NavBar1';
import Heading from './Heading.jsx';
import './Cat8.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import BF1 from '../../../assets/BF1.jpg';
import BF2 from '../../../assets/BF2.jpg';
import BF3 from '../../../assets/BF3.jpg';
import BF4 from '../../../assets/BF4.jpg';
import BF5 from '../../../assets/BF5.jpg';
import BF6 from '../../../assets/BF6.jpg';
import BF7 from '../../../assets/BF7.jpg';
import BF8 from '../../../assets/BF8.jpg';

const productsData = [
  { id: 1, title: 'Series Fusion', image: BF1 },
  { id: 2, title: 'Series Opal', image: BF2 },
  { id: 3, title: 'Fish Series', image: BF3 },
  { id: 4, title: 'Sleek Collection', image: BF4 },
  { id: 5, title: 'Pluto Collection', image: BF5 },
  { id: 6, title: 'Wallmount Basin Mixture', image: BF6 },
  { id: 7, title: 'Single Levers', image: BF7 },
  { id: 8, title: 'Divertors', image: BF8 },
];

const Cat8 = () => {
  return (
    <div className="cat8-container">
      <NavBar1 />
      <br />
      <br />
      <br />
      <br />
      <Heading title="CP Bathroom Fittings" />
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

export default Cat8;
