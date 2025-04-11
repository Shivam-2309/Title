import React from "react";
import ProductCard from "../ProductCard";
import NavBar1 from "../NavBar1";
import Heading from "./Heading.jsx";
import "./Cat1.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductGrid from '../../ProductGrid.jsx';

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import product images
import valve1 from "../../../assets/valve_1.jpg";
import valve2 from "../../../assets/valve_2.jpg";
import valve3 from "../../../assets/valve_3.jpg";
import valve4 from "../../../assets/valve_4.jpg";
import valve5 from "../../../assets/valve_5.jpg";
import valve6 from "../../../assets/valve_6.jpg";
import valve7 from "../../../assets/valve_7.jpg";
import valve8 from "../../../assets/valve_8.jpg";

const productsData = [
  { id: 1, title: "Title Non Return Valve", image: valve1 },
  { id: 2, title: "Title Nozal Cock Valve", image: valve2 },
  { id: 3, title: "Title Brass Forged Ball Valve", image: valve3 },
  { id: 4, title: "Gas Cock", image: valve4 },
  { id: 5, title: "Mini Valve", image: valve5 },
  { id: 6, title: "Air Vent Valve", image: valve6 },
  { id: 7, title: "Vertical Non Return Valve", image: valve7 },
  { id: 8, title: "Control Valve", image: valve8 },
];

const Cat1 = () => {
  return (
    <div className="cat1-container">
      <NavBar1 />
      <br />
      <Heading title="Valves" />
      <br />
      <ProductGrid items={productsData} />

      {/* Swiper Wrapper */}
      <div className="swiper-wrapper-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true} 
        slidesPerView={"auto"}
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

export default Cat1;
