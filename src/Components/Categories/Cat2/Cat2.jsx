import React from 'react';
import ProductCard from '../ProductCard';
import NavBar1 from '../NavBar1';
import Heading from './Heading.jsx';
import './Cat2.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductGrid from '../../ProductGrid.jsx';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import Shower1 from '../../../assets/shower_1.jpg';
import Shower2 from '../../../assets/shower_2.jpg';
import Shower3 from '../../../assets/shower_3.jpg';
import Shower4 from '../../../assets/shower_4.jpg';
import Shower5 from '../../../assets/shower_5.jpg';
import Shower6 from '../../../assets/shower_6.jpg';
import Shower7 from '../../../assets/shower_7.jpg';
import Shower8 from '../../../assets/shower_8.jpg';
import Shower9 from '../../../assets/shower_9.jpg';

const productsData = [
  { id: 1, title: 'Ultra Slim', image: Shower1 },
  { id: 2, title: 'Elegant', image: Shower2 },
  { id: 3, title: 'Maze', image: Shower3 },
  { id: 4, title: 'Kolar', image: Shower4 },
  { id: 5, title: 'Orchid Abs Shower', image: Shower5 },
  { id: 6, title: 'Brass Shower', image: Shower6 },
  { id: 7, title: 'Brass Shower', image: Shower7 },
  { id: 8, title: 'ABS Shower', image: Shower8 },
  { id: 9, title: 'SS Curve Shower', image: Shower9 },
];

const Cat2 = () => {
  return (
    <div className="cat2-container">
      <NavBar1 />
      <br />
      <Heading title="Showers" />
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

export default Cat2;
