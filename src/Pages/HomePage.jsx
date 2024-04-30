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
import { Typewriter } from 'react-simple-typewriter';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from 'lottie-react';
import mail from '../assets/mail.json'

const HomePage = () => {
  const [client, setClient] = useState([])
  useEffect(() => {
    fetch('https://roam-vista-server.vercel.app/client_review')
      .then(res => res.json())
      .then(data => setClient(data))
  }, [])
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 1500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
            delay: 3000,
            disableOnInteraction: false,
          }}

          loop={true}
          pagination={{
            clickable: true
          }}
          Autoplay={true}
          navigation={true}
          modules={[Pagination, Autoplay, EffectFade, Navigation]}
          className="mySwiper md:h-screen container mx-auto"
        >
          <SwiperSlide>
            {({ isActive }) => (
              <div className="relative h-full flex items-center justify-center">
                <img className='w-full' src="https://i.ibb.co/BBBvSGq/bharat-patil-WR5-Ev-bh-I-unsplash.jpg" alt="" loading='lazy' />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-40 absolute inset-0"></div>
                  {isActive && (
                    <div className="text-center text-white z-10">
                      <h2 className=" text-xl md:text-4xl text-blue-300 font-bold mb-4">  "Explore Europe's Charm", Travel to <Typewriter words={['France', 'Italy', 'Spain', 'England', 'Netherlands', 'Switzerland']} cursor={true} loop={true} /></h2>
                      <p className="md:text-start  text-sm md:text-base max-w-[600px] tracking-wide mx-auto">Embark on unforgettable adventures with RoamVista. Our expertly crafted itineraries promise to take you to the world's most enchanting destinations. Let us be your guide as you create memories to last a lifetime</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div className="relative h-full flex items-center justify-center">
                <img className='w-full' src="https://i.ibb.co/HXMQGLK/anthony-delanoix-QAwci-Fl-S1g4-unsplash.jpg" alt="" loading='lazy' />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                  {isActive && (
                    <div className="text-center text-white z-10">
                      <h2 className="text-xl md:text-4xl font-bold mb-4 text-blue-300">Journey Across Europe" Travel to  <Typewriter words={['France', 'Italy', 'Spain', 'England', 'Netherlands', 'Switzerland']} cursor={true} loop={true} /></h2>
                      <p className="md:text-start text-sm md:text-base  max-w-[600px] tracking-wide mx-auto">"Embark on an odyssey through Europe's diverse landscapes and captivating cultures. From the romance of Paris to the splendor of the Swiss Alps, let our curated experiences immerse you in the heart of each destination. Get ready to discover the wonders of Europe like never before."</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div className="relative h-full flex items-center justify-center">
                <img className='w-full' src="https://i.ibb.co/m5JPdq8/xavier-coiffic-Eq0-Lw-Afw-HDI-unsplash.jpg" alt="" loading='lazy' />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                  {isActive && (
                    <div className="text-center text-white z-10" >
                      <h2 className="text-xl md:text-4xl font-bold mb-4 text-blue-300"> "Embark on an Adventure" Travel to <Typewriter words={['France', 'Italy', 'Spain', 'England', 'Netherlands', 'Switzerland']} cursor={true} loop={true} /></h2>
                      <p className="md:text-start text-sm md:text-base  max-w-[600px] tracking-wide mx-auto">Uncover the timeless beauty of Europe with [Your Travel Agency Name]. Traverse through quaint villages, wander along cobblestone streets, and immerse yourself in the vibrant cultures that define this enchanting continent. Let us guide you on a journey filled with breathtaking landscapes, iconic landmarks, and unforgettable moments."</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div className="relative h-full flex items-center justify-center">
                <img className='w-full' src="https://i.ibb.co/C5mqVrc/adrien-olichon-QRtym77-B6xk-unsplash.jpg" alt="" loading='lazy' />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                  {isActive && (
                    <div className="text-center text-white z-10">
                      <h2 className="text-xl md:text-4xl font-bold mb-4 text-blue-300"> "Discover Your Path" Travel to  <Typewriter words={['France', 'Italy', 'Spain', 'England', 'Netherlands', 'Switzerland']} cursor={true} loop={true} /></h2>
                      <p className="md:text-start text-sm md:text-base  max-w-[600px] tracking-wide mx-auto">"Set foot on a journey of self-discovery with us. Navigate through unknown territories, uncover hidden treasures, and embrace the unexpected twists that define your unique path. Let every step be a testament to your courage, resilience, and determination to explore the depths of your soul. Join us as we embark on a quest to uncover the true essence of who you are."</p>
                    </div>
                  )}
                </div>
              </div>
            )}
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
            country.map((country, idx) => {
              return <Link to={`/spot-in-the-country/${country.country_name}`} key={idx} className=" dark:bg-[#3C5B6F] dark:text-[#DFD0B8] max-w-md mx-auto hover:scale-105 duration-150 bg-white rounded-lg shadow-md overflow-hidden">
                <div>
                  <div className="relative  pb-48 overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src={country.image}
                      alt=''
                    />
                  </div>
                  <div className="p-6 ">
                    <h2 className="text-2xl font-bold mb-2">{country.country_name}</h2>
                    <p className="">{country.description}</p>
                  </div>
                </div>
              </Link>
            })
          }
        </div>
        <div className='m-5'>
          <Heading text={'Client Review'} para={'Hear what our satisfied customers have to say about their experiences with our company. We take pride in delivering exceptional service and exceeding expectations.'}></Heading>
          <div className='mt-5'>
            <Slider {...settings}>

              {
                client.map((client) => <div key={client._id}>
                  <div className="bg-base-100 dark:bg-[#3C5B6F] dark:text-[#DFD0B8] flex justify-center items-center flex-col rounded-lg shadow-md overflow-hidden text-center mx-4 ">
                    <img src={ client.imageURL} alt="User" className="w-32 text-center p-5 mx-auto h-32 object-cover rounded-full" />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold">{ client.name}</h2>
                      <p className="dark:text-[#DFD0B8] mt-2">{`${client.review.slice(0,120)}....`}</p>
                    </div>
                  </div>
                </div>)
              }
            </Slider>
          </div>
        </div>
        <div>
          <Heading text={'Stay Updated with us'}></Heading>
          <div className=" py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6  lg:px-8">
              <div className="bg-white rounded-lg shadow-xl text-gray-600 dark:bg-[#818FB4] dark:text-[#F5E8C7] overflow-hidden md:flex">
                <div className="md:w-1/2 px-4 py-8 md:p-8">
                  <h2 className="text-2xl font-semibold  mb-2">Subscribe to Our Newsletter</h2>
                  <p className=" mb-6">Stay updated with our latest news and promotions. Subscribe now!</p>
                  <form >
                    <div className="flex items-center border-b-2  py-2">
                      <input type="email" name="email" id="email" className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Enter your email address"/>
                      <button type="submit" className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 dark:text-[#F5E8C7] text-white text-sm border-4 py-1 px-2 rounded">Subscribe</button>
                    </div>
                  </form>
                  <p className="text-xs  mt-2">We'll never share your email with anyone else.</p>
                </div>
                <div className="md:w-1/2 hidden md:block relative">
                  <Lottie animationData={mail}/>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default HomePage