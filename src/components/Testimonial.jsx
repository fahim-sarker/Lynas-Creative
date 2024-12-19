import React,  { useState } from "react";
import Slider from "react-slick";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";


const Testimonial = () => {
    let [activeArrow, setActiveArrow] = useState(0);

    let handleNextClick = () => {
      setActiveArrow("next");
    };
  
    let handlePrevClick = () => {
      setActiveArrow("prev");
    };
  
    function SampleNextArrow(props) {
      const { onClick } = props;
      return (
        <div
          className={`lg:w-[60px] lg:h-[60px] h-[40px] w-[40px] flex justify-center items-center rounded-full drop-shadow-xl cursor-pointer absolute lg:right-[0%] lg:-bottom-0 right-[30%] -bottom-[20%] ${activeArrow === "next"
              ? "bg-sky-400 text-white"
              : "bg-[#FFFFFF] text-black"
            }`}
          onClick={() => {
            handleNextClick();
            onClick();
          }}
        >
          <MdArrowForwardIos />
        </div>
      );
    }
  
    function SamplePrevArrow(props) {
      const { onClick } = props;
      return (
        <div
          className={`lg:w-[60px] lg:h-[60px] h-[40px] w-[40px] flex justify-center items-center rounded-full drop-shadow-xl cursor-pointer absolute lg:right-[5%] lg:-bottom-0 right-[50%] -bottom-[20%] ${activeArrow === "prev"
              ? "bg-sky-400 text-white"
              : "bg-[#FFFFFF] text-black"
            }`}
          onClick={() => {
            handlePrevClick();
            onClick();
          }}
        >
          <MdOutlineArrowBackIos />
        </div>
      );
    }
  
    const settings = {
      infinite: true,
      dots: false,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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
    <div className="py-12 bg-black">
      <div className="container mx-auto">
        <h3 className="text-transparent uppercase bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[76px] font-bold ml-10 mt-28">
          Trusted by our clients
        </h3>
        <Slider {...settings}>
        <div className="!flex justify-between mt-20">
          <p className="text-transparent w-[30%] uppercase bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[96px] font-bold">""</p>
          <div className="w-[70%]">
            <p className="font-popins text-[25px] font-normal text-gray-500 pb-10 border-b-2 border-gray-700">We thank Lyans Creative for the wonderful job in helping us develop our Mobile
            App. Everyone was professional, excellent and hard working</p>
            <div className="flex gap-x-5 items-center pt-10">
                <div className="h-[100px] w-[100px] bg-blue-400 rounded-full"></div>
                <div className="">
                    <h3 className="font-popins text-[25px] font-semibold text-white">Geir Christian Karlsen </h3>
                    <p className="font-popins text-[18px] font-semibold text-sky-400">AppsCo</p>
                </div>
            </div>
          </div>
        </div>
        <div className="!flex justify-between mt-20">
          <p className="text-transparent w-[30%] uppercase bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[96px] font-bold">""</p>
          <div className="w-[70%]">
            <p className="font-popins text-[25px] font-normal text-gray-500 pb-10 border-b-2 border-gray-700">We thank Lyans Creative for the wonderful job in helping us develop our Mobile
            App. Everyone was professional, excellent and hard working</p>
            <div className="flex gap-x-5 items-center pt-10">
                <div className="h-[100px] w-[100px] bg-blue-400 rounded-full"></div>
                <div className="">
                    <h3 className="font-popins text-[25px] font-semibold text-white">Geir Christian Karlsen </h3>
                    <p className="font-popins text-[18px] font-semibold text-sky-400">AppsCo</p>
                </div>
            </div>
          </div>
        </div>
        <div className="!flex justify-between mt-20">
          <p className="text-transparent w-[30%] uppercase bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[96px] font-bold">""</p>
          <div className="w-[70%]">
            <p className="font-popins text-[25px] font-normal text-gray-500 pb-10 border-b-2 border-gray-700">We thank Lyans Creative for the wonderful job in helping us develop our Mobile
            App. Everyone was professional, excellent and hard working</p>
            <div className="flex gap-x-5 items-center pt-10">
                <div className="h-[100px] w-[100px] bg-blue-400 rounded-full"></div>
                <div className="">
                    <h3 className="font-popins text-[25px] font-semibold text-white">Geir Christian Karlsen </h3>
                    <p className="font-popins text-[18px] font-semibold text-sky-400">AppsCo</p>
                </div>
            </div>
          </div>
        </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
