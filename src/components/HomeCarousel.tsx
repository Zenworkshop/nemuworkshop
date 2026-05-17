import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import sliding1 from '../assets/sliding1.png';
import sliding2 from '../assets/sliding2.png';
import sliding3 from '../assets/sliding3.png';
import sliding4 from '../assets/sliding4.png';

export default function HomeCarousel() {
  const slides = [
    {
      image: sliding1,
      title: "Modern Glass Solutions",
      subtitle: "Transform your space with elegant glass installations"
    },
    {
      image: sliding2,
      title: "Premium Aluminum Works",
      subtitle: "Quality craftsmanship for lasting beauty"
    },
    {
      image: sliding3,
      title: "Innovative Designs",
      subtitle: "Where creativity meets functionality"
    },
    {
      image: sliding4,
      title: "Innovative Designs",
      subtitle: "Where creativity meets functionality"
    }
  ];

  return (
    <Swiper
    modules={[Autoplay, EffectFade]}
    effect="fade"
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    loop={true}
    className="w-full h-auto sm:h-screen pt-20 sm:pt-24"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-auto">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-auto sm:h-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  
  
  );
}