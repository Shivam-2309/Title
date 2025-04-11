import React from 'react';
import ProductCard from '../ProductCard';
import NavBar1 from '../NavBar1';
import Heading from './Heading.jsx';
import './Cat5.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductGrid from '../../ProductGrid.jsx';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import CP1 from '../../../assets/CP1.jpg';
import CP2 from '../../../assets/CP2.jpg';
import CP3 from '../../../assets/CP3.jpg';
import CP4 from '../../../assets/CP4.jpg';
import CP5 from '../../../assets/CP5.jpg';
import CP6 from '../../../assets/CP6.jpg';

const productsData = [
  { id: 1, title: 'Range : 1', image: CP1 },
  { id: 2, title: 'Range : 2', image: CP2 },
  { id: 3, title: 'Range : 3', image: CP3 },
  { id: 4, title: 'Range : 4', image: CP4 },
  { id: 5, title: 'Range : 5', image: CP5 },
  { id: 6, title: 'Range : 5', image: CP6 },
];

const Cat5 = () => {
  return (
    <div className="cat5-container">
      <NavBar1 />
      <br />
      <Heading title="Bath Accesories CP" />
      <br />
      <ProductGrid items={productsData} />

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

export default Cat5;
