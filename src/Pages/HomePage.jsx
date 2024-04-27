import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Heading from '../Components/Heading';
import Card from '../Components/Card';
const Slider = () => {
  return (
    <>
      <div>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          loop={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Pagination, EffectFade, Autoplay, Navigation]}
          className="mySwiper md:h-screen"
        >
          <SwiperSlide>
            <div className="relative h-full flex items-center justify-center">
              <img className='w-full' src="https://i.ibb.co/BBBvSGq/bharat-patil-WR5-Ev-bh-I-unsplash.jpg" alt="" loading='lazy' />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-40 absolute inset-0"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full flex items-center justify-center">
              <img className='w-full' src="https://i.ibb.co/HXMQGLK/anthony-delanoix-QAwci-Fl-S1g4-unsplash.jpg" alt="" loading='lazy' />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-50 absolute inset-0"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full flex items-center justify-center">
              <img className='w-full' src="https://i.ibb.co/C5mqVrc/adrien-olichon-QRtym77-B6xk-unsplash.jpg" alt="" loading='lazy' />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-50 absolute inset-0"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full flex items-center justify-center">
              <img className='w-full' src="https://i.ibb.co/m5JPdq8/xavier-coiffic-Eq0-Lw-Afw-HDI-unsplash.jpg" alt="" loading='lazy' />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-50 absolute inset-0"></div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Heading text='This is a heading ' />
      </div>
    </>
  )
}

export default Slider