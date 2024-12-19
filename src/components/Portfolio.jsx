import React, { useState } from "react";
import Slider from "react-slick";
import Bmw from "../assets/bmw.png";
import emaj from "../assets/emaj.png";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="lg:h-[55px] lg:w-[55px] w-[40px] h-[40px] bg-white hover:bg-[#66FCF1] rounded-full flex justify-center items-center absolute lg:bottom-[100px] bottom-[-60px] lg:left-24 right-[35%] z-40 border-[5px] border-[#F5F5F5] cursor-pointer text-[#0C111F] hover:text-white duration-300 ease-in-out"
      onClick={onClick}
    >
      <HiArrowSmRight className="inline-block lg:text-[35px]" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="lg:h-[55px] lg:w-[55px] w-[40px] h-[40px] bg-[#FFF] hover:bg-[#66FCF1] rounded-full flex justify-center items-center absolute lg:bottom-[100px] bottom-[-60px] lg:left-4 left-[35%] z-40 border-[5px] border-[#F5F5F5] cursor-pointer text-[#0C111F] hover:text-white duration-300 ease-in-out"
      onClick={onClick}
    >
      <HiArrowSmLeft className="inline-block lg:text-[35px]" />
    </div>
  );
}

const Portfolio = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <div className="py-[120px] bg-black">
      <div className="container mx-auto">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[96px] font-bold w-[90%]">
          Building online solutions for your next challenge.
        </h2>
        <div className="flex justify-between items-center my-14">
          <p className="font-popins text-[20px] font-semibold text-white">
            Our Portfolio
          </p>
          <a
            href="#"
            className="font-popins text-[20px] font-semibold text-white"
          >
            <Link to="/portfolio">View all</Link>
          </a>
        </div>
        
        <div className="relative">
          <Slider {...settings}>
            <div className="!w-[95%] bg-[#66FCF1] h-[400px] relative">
              <img src={Bmw} alt="Bmw" className="w-full h-full object-cover" />
              <h2 className="absolute top-[40%] left-4 font-popins text-[30px] font-semibold text-black uppercase">
                Bmw
              </h2>
              <p className="font-popins text-[20px] font-semibold text-black capitalize absolute top-[50%] left-4">
                case study
              </p>
              <div
                className={`absolute top-0 left-0 w-full h-full bg-black transition-all duration-1000 z-20 ${
                  activeSlide === 0 ? "opacity-80" : "opacity-0"
                }`}
              ></div>
            </div>
            <div className="!w-[95%] bg-[#66FCF1] h-[400px] relative">
              <img src={emaj} alt="eMajlis" className="w-full h-full object-cover" />
              <h2 className="absolute top-[40%] left-4 font-popins text-[30px] font-semibold text-black">
                eMajlis
              </h2>
              <p className="font-popins text-[20px] font-semibold text-black capitalize absolute top-[50%] left-4">
                case study
              </p>
              <div
                className={`absolute top-0 left-0 w-full h-full bg-black transition-all duration-1000 z-20 ${
                  activeSlide === 1 ? "opacity-80" : "opacity-0"
                }`}
              ></div>
            </div>
            <div className="!w-[95%] bg-[#66FCF1] h-[400px] relative">
              <img src={Bmw} alt="Bmw" className="w-full h-full object-cover" />
              <h2 className="absolute top-[40%] left-4 font-popins text-[30px] font-semibold text-black uppercase">
                Bmw
              </h2>
              <p className="font-popins text-[20px] font-semibold text-black capitalize absolute top-[50%] left-4">
                case study
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
  );
};

export default Portfolio;
