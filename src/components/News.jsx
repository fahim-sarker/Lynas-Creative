import React, { useState } from "react";
import New from "../assets/news.png"
import New1 from "../assets/news1.png"
import Slider from "react-slick";



const News = () => {
    const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows : false,
    infinite: true,
    beforeChange: (current, next) => {
      setActiveSlide(next); 
    },
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='py-[70px] bg-black'>
      <div className="container mx-auto">
        <div className="flex justify-between items-center my-14">
          <p className="font-popins text-[20px] font-semibold text-white">
          Latest News
          </p>
          <a
            href="#"
            className="font-popins text-[20px] font-semibold text-white"
          >
            View all
          </a>
        </div>
        <div className="relative">
          <Slider {...settings}>
            <div className="!w-[95%] bg-[#66FCF1] h-[400px] relative">
              <img src={New} alt="Bmw" className="w-full h-full object-cover" />
              <h2 className="absolute top-[40%] left-4 font-popins text-[20px] font-semibold text-white uppercase">
              Technology at its finest
              </h2>
              <p className="font-popins text-[16px] font-semibold text-sky-400 capitalize absolute top-[50%] left-4">
                view article
              </p>
              <div
                className={`absolute top-0 left-0 w-full h-full bg-black transition-all duration-1000 z-20 ${
                  activeSlide === 0 ? "opacity-80" : "opacity-0"
                }`}
              ></div>
            </div>
            <div className="!w-[95%] bg-[#66FCF1] h-[400px] relative">
              <img src={New1} alt="eMajlis" className="w-full h-full object-cover" />
              <h2 className="absolute top-[40%] left-4 font-popins text-[20px] font-semibold text-white">
              Technology at its finest
              </h2>
              <p className="font-popins text-16px] font-semibold text-sky-400 capitalize absolute top-[50%] left-4">
                view article
              </p>
              <div
                className={`absolute top-0 left-0 w-full h-full bg-black transition-all duration-1000 z-20 ${
                  activeSlide === 1 ? "opacity-80" : "opacity-0"
                }`}
              ></div>
            </div>
            <div className="!w-[95%] bg-[#66FCF1] h-[400px] relative">
              <img src={New1} alt="Bmw" className="w-full h-full object-cover" />
              <h2 className="absolute top-[40%] left-4 font-popins text-[20px] font-semibold text-white uppercase">
              Technology at its finest
              </h2>
              <p className="font-popins text-[16px] font-semibold text-sky-400 capitalize absolute top-[50%] left-4">
                view article
              </p>
              <div
                className={`absolute top-0 left-0 w-full h-full bg-black transition-all duration-1000 z-20 ${
                  activeSlide === 2 ? "opacity-80" : "opacity-0"
                }`}
              ></div>
            </div>
          </Slider>
        </div>
        </div>
    </div>
  )
}

export default News
