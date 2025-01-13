import React from 'react';
import Slider from 'react-slick';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import Carousel from './Carousel';
import LeadershipSection from './LeadershipSection';

const images = [
  { src: '/IMG5.JPG', alt: 'pic1' },
  { src: '/pic (4)1.jpg', alt: 'pic2' },
  { src: '/pic (3).jpg', alt: 'pic3' },
  { src: '/pic6.JPG', alt: 'pic4' },
  { src: '/pic (1).jpg', alt: 'pic5' },
];

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: (
      <button className="slick-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 rounded-full p-2 w-8 h-8 cursor-pointer transition duration-300 ease-in-out">
        <MdArrowBack className="text-3xl text-red-500 hover:text-red-700 hover:scale-110" />
      </button>
    ),
    nextArrow: (
      <button className="slick-next absolute top-1/2 right-6 transform -translate-y-1/2 z-10 rounded-full p-2 w-8 h-8 cursor-pointer transition duration-300 ease-in-out">
        <MdArrowForward className="text-3xl text-red-500 hover:text-red-700 hover:scale-110" />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative pb-4 h-full w-full flex flex-col bg-white bg-[radial-gradient(circle,_red_1px,_transparent_1px)] bg-[size:20px_20px]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,0,.6)_0,rgba(252,205,238,.5)_100%)]"></div>

        <div className="flex flex-col items-center justify-start z-10 p-0 mb-10">
          <img
            src="/main.jpg"
            className="w-full max-w-full h-auto object-cover rounded-b-lg shadow-lg"
            alt="Home Page image"
          />
        </div>


        <div className="text-center z-10 relative px-6">
          <h1 className="text-red-600 text-3xl md:text-4xl font-bold mb-4">About the Foundation</h1>
          <p className="text-black text-lg md:text-2xl mx-auto max-w-3xl mb-8 px-4 leading-relaxed text-justify">
            Fruitful Foundation is committed to transforming children’s lives through education. Our mission is to assist in providing quality education to underprivileged children, equipping them with the tools and opportunities needed for a brighter future. We offer comprehensive mentorship and financial support to help children excel both academically and personally. By creating a supportive and nurturing environment, we aim to empower the next generation to reach their full potential and make positive contributions to society. Additionally, we assist families with their monthly household expenses, with a special focus on supporting widowed women.
          </p>
        </div>

        <div className="text-center z-10 relative px-6">
          <LeadershipSection />

          <h1 className="text-red-600 text-3xl md:text-4xl font-bold mb-14 mt-14">Our Campus Teams</h1>
          {/* NUST Islamabad Team */}
          <h2 className="text-black text-xl md:text-2xl font-bold mt-24 mb-10 text-center">NUST Islamabad Team</h2>
          <div className="mb-10">
            <Carousel images={images} />
          </div>
          {/* CMH Lahore Team */}
          <h2 className="text-black text-xl md:text-2xl font-bold mt-24 mb-10 text-center">CMH Lahore Team</h2>
          <div className="flex flex-wrap justify-center items-start mb-8 px-4">
            <div className="flex justify-center w-full sm:w-1/3 p-4 text-center">
              <img
                src="aaleen.jpg"
                alt="Aaleen"
                className="object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 mx-auto"
                style={{ width: '90%', height: '350px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
