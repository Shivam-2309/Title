import React from 'react';
import ProductCard from '../ProductCard';
import NavBar1 from '../NavBar1';
import Heading from './Heading.jsx';
import './Cat6.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductGrid from '../../ProductGrid.jsx';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import Allied1 from '../../../assets/Allied1.jpg';
import Allied2 from '../../../assets/Allied2.jpg';
import Allied3 from '../../../assets/Allied3.jpg';
import Allied4 from '../../../assets/Allied4.jpg';
import Allied5 from '../../../assets/Allied5.jpg';
import Allied6 from '../../../assets/Allied6.jpg';

import Allied7 from '../../../assets/Allied7.jpg';
import Allied8 from '../../../assets/Allied8.jpg';
import Allied9 from '../../../assets/Allied9.jpg';
import Allied10 from '../../../assets/Allied10.jpg';
import Allied11 from '../../../assets/Allied11.jpg';
import Allied12 from '../../../assets/Allied12.jpg';

import Allied13 from '../../../assets/Allied13.jpg';
import Allied14 from '../../../assets/Allied14.jpg';
import Allied15 from '../../../assets/Allied15.jpg';
import Allied16 from '../../../assets/Allied16.jpg';
import Allied17 from '../../../assets/Allied17.jpg';
import Allied18 from '../../../assets/Allied18.jpg';

import Allied19 from '../../../assets/Allied19.jpg';
import Allied20 from '../../../assets/Allied20.jpg';
import Allied21 from '../../../assets/Allied21.jpg';
import Allied22 from '../../../assets/Allied22.jpg';
import Allied23 from '../../../assets/Allied23.jpg';
import Allied24 from '../../../assets/Allied24.jpg';
import Allied25 from '../../../assets/Allied25.jpg';


const productsData = [
  { id: 1, title: 'Hand Showers : 1', image: Allied1 },
  { id: 2, title: 'Hand Showers : 2', image: Allied2 },
  { id: 3, title: 'Hand Showers : 3', image: Allied3 },
  { id: 4, title: 'Hand Showers : 4', image: Allied4 },
  { id: 5, title: 'Pop Up Waste Coupling', image: Allied5 },
  { id: 6, title: 'Long Drainers', image: Allied6 },
  { id: 7, title: 'Fancy Gratings', image: Allied7 },
  { id: 8, title: 'Round Gratings', image: Allied8 },
  { id: 9, title: 'Locking Grating Round', image: Allied9 },
  { id: 10, title: 'Locking Grating Square', image: Allied10 },
  { id: 11, title: 'SS Anti Cockroach Grating', image: Allied11 },
  { id: 12, title: 'Bottle Trap', image: Allied12 },
  { id: 13, title: 'PVC Sink Waste', image: Allied13 },
  { id: 14, title: 'Sink Waste Square', image: Allied14 },
  { id: 15, title: 'SS Sink Waste', image: Allied15 },
  { id: 16, title: 'Urinal Spreaders', image: Allied16 },
  { id: 17, title: 'Wall Mixer Bend', image: Allied17 },
  { id: 18, title: 'Brass/SS Waste Couplings', image: Allied18 },
  { id: 19, title: 'Square Shower Arm', image: Allied19 },
  { id: 20, title: 'Rectangle Shower Arm', image: Allied20 },
  { id: 21, title: 'Shaving Mirrors', image: Allied21 },
  { id: 22, title: 'PVC Grab Bars', image: Allied22 },
  { id: 23, title: 'Tissue Dispenser', image: Allied23 },
  { id: 24, title: 'Hair Dryer', image: Allied24 },
  { id: 25, title: 'Hand Dryer', image: Allied25 },
];

const Cat6 = () => {
  return (
    <div className="cat6-container">
      <NavBar1 />
      <br />
      <Heading title="Allied Items" />
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

export default Cat6;
