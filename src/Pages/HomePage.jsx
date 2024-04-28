import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Heading from '../Components/Heading';
import Card from '../Components/Card';
import { Link, useLoaderData } from 'react-router-dom';



const HomePage = () => {
  const tourist_spot = useLoaderData()
  const [country, setCountry] = useState([])
  useEffect(() => {
    fetch(`https://roam-vista-server.vercel.app/country`)
      .then((res) => res.json())
      .then(result => setCountry(result))
  }, [])
  return (
    <div className='container mx-auto'>
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
          className="mySwiper md:h-screen container mx-auto"
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
        <Heading text='Best tourist spots of Europe' para={`Nestled in the heart of Europe, the enchanting city of Paris boasts the iconic Eiffel Tower, offering panoramic views and romantic ambiance. Rome, with its rich history and ancient landmarks like the Colosseum and Vatican City, invites visitors to immerse themselves in millennia-old culture. Meanwhile, the fairytale-like landscapes of Switzerland's Interlaken captivate travelers with its pristine lakes, snow-capped peaks, and thrilling outdoor adventures.`} />
      </div>
      <div className='p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          tourist_spot.slice(0, 6).map((spot, idx) => <Card key={idx} spot={spot}></Card>)
        }
      </div>
      <div>
        <Heading text={`Choose your Country for travel`} para={`Unlock a world of possibilities as you embark on an unforgettable adventure. Discover hidden gems nestled within breath-taking landscapes, where every step unveils a new story to be told. Embrace the thrill of the unknown and let your wanderlust guide you through`}></Heading>
        <div className='mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>

          {
            country.map((country,idx) => {
              return <Link to={`/spot-in-the-country/${country.country_name}`} key={idx} className="max-w-md mx-auto hover:scale-105 duration-150 bg-white rounded-lg shadow-md overflow-hidden">
              <div>
                <div className="relative pb-48 overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={country.image}
                    alt=''
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{country.country_name}</h2>
                  <p className="text-gray-700">{country.description}</p>
                </div>
                  </div>
                </Link>
            })
          }
        </div>
        {

        }
      </div>
    </div>
  )
}

export default HomePage