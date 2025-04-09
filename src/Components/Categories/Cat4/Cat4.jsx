import React from 'react';
import ProductCard from '../ProductCard';
import NavBar1 from '../NavBar1';
import Heading from './Heading.jsx';
import './Cat4.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import Connection1 from '../../../assets/Connection_1.jpg';
import Connection2 from '../../../assets/Connection_2.jpg';
import Connection3 from '../../../assets/Connection_3.jpg';
import Connection4 from '../../../assets/Connection_4.jpg';
import Connection5 from '../../../assets/Connection_5.jpg';

const productsData = [
  { id: 1, title: 'PTMT Connection', image: Connection1 },
  { id: 2, title: 'PVC Connection', image: Connection2 },
  { id: 3, title: 'SS304 Connection Brass Unit', image: Connection3 },
  { id: 4, title: 'SS Connection Standard', image: Connection4 },
  { id: 5, title: 'SS304 Connection with SS Nuts', image: Connection5 },
];

const Cat4 = () => {
  return (
    <div className="cat4-container">
      <NavBar1 />
      <br />
      <br />
      <br />
      <br />
      <Heading title="Connections" />
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

export default Cat4;
