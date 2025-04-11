import React from 'react';
import ProductCard from '../ProductCard';
import NavBar1 from '../NavBar1';
import Heading from './Heading.jsx';
import './Cat7.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductGrid from '../../ProductGrid.jsx';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import MS1 from '../../../assets/MS1.jpg';
import MS2 from '../../../assets/MS2.jpg';
import MS3 from '../../../assets/MS3.jpg';
import MS4 from '../../../assets/MS4.jpg';

const productsData = [
  { id: 1, title: 'VS Brand MS Forged Fittings', image: MS1 },
  { id: 2, title: 'MS Flanges', image: MS2 },
  { id: 3, title: 'MS Short bend and long bends', image: MS3 },
  { id: 4, title: 'SS304 Fittings', image: MS4 },
];

const Cat7 = () => {
  return (
    <div className="cat7-container">
      <NavBar1 />
      <br />
      <Heading title="MS , GI and other fittings" />
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

export default Cat7;
