import React,  { useState } from "react";
import We from "../assets/we.mp4"
import We1 from "../assets/we1.mp4"
import We2 from "../assets/we2.mp4"
import Slider from "react-slick";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

const Wework = () => {
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
        className={`lg:w-[40px] lg:h-[40px] h-[40px] w-[40px] flex justify-center items-center rounded-full drop-shadow-xl cursor-pointer absolute lg:left-[5%] lg:-bottom-40 right-[30%] -bottom-[20%] ${activeArrow === "next"
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
        className={`lg:w-[40px] lg:h-[40px] h-[40px] w-[40px] flex justify-center items-center rounded-full drop-shadow-xl cursor-pointer absolute lg:left-[0%] lg:-bottom-40 right-[50%] -bottom-[20%] ${activeArrow === "prev"
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
    <div className="bg-black">
      <div className="container mx-auto">
        <p className="font-popins text-[20px] font-semibold text-white">
          How we work
        </p>
        <Slider {...settings}>
        <div className="!flex">
          <div className="w-[60%]">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[66px] font-bold mt-20">
              Build
            </h2>
            <h6 className="font-popins text-[30px] font-medium text-gray-500 capitalize">development</h6>
          </div>
          <div className="w-[30%]">
          <video
        className="w-full h-full"
        src={We}
        type="video/mp4"
        autoPlay
        loop
        muted
      />
          </div>
        </div>
        <div className="!flex">
          <div className="w-[60%]">
            <h2 className="text-transparent uppercase bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[66px] font-bold mt-20">
              tests & tweaks
            </h2>
            <h6 className="font-popins text-[30px] font-medium text-gray-500 capitalize">challenges</h6>
          </div>
          <div className="w-[30%]">
          <video
        className="w-full"
        src={We1}
        type="video/mp4"
        autoPlay
        loop
        muted
      />
          </div>
        </div>
        <div className="!flex">
          <div className="w-[60%]">
            <h2 className="text-transparent uppercase bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[66px] font-bold mt-20">
              going live
            </h2>
            <h6 className="font-popins text-[30px] font-medium text-gray-500 capitalize">Testing and publish</h6>
          </div>
          <div className="w-[30%]">
          <video
        className="w-full"
        src={We2}
        type="video/mp4"
        autoPlay
        loop
        muted
      />
          </div>
        </div>
        </Slider>
        <div className="h-[70px] w-[70px] rounded-full bg-gray-400 bg-opacity-30">
            </div>
            <a href="#" className="font-popins text-[20px] cursor-pointer font-semibold text-[#fff] capitalize ">reach an expert</a>
      </div>
    </div>
  );
};

export default Wework;
