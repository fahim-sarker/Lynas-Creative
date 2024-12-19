import React,  { useState } from "react";
import Stra from "../assets/strategic.png";
import Stra1 from "../assets/branding.png";
import Stra2 from "../assets/digitalmarketing.png";
import Stra3 from "../assets/animation_motiongraphics.png";
import Stra4 from "../assets/website_dev.png";
import Slider from "react-slick";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";



const Weare = () => {
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
        className={`lg:w-[60px] lg:h-[60px] h-[40px] w-[40px] flex justify-center items-center rounded-full drop-shadow-xl cursor-pointer absolute lg:left-[50%] lg:-bottom-8 right-[30%] -bottom-[20%] ${activeArrow === "next"
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
        className={`lg:w-[60px] lg:h-[60px] h-[40px] w-[40px] flex justify-center items-center rounded-full drop-shadow-xl cursor-pointer absolute lg:left-[40%] lg:-bottom-8 right-[50%] -bottom-[20%] ${activeArrow === "prev"
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
    <div className="py-[50px] bg-black">
      <div className="container mx-auto">
        <h5 className="font-popins font-semibold text-[35px] text-white">
          What we are into
        </h5>
        <Slider {...settings}>
        <div className="!flex justify-between">
          <div className="w-[60%] relative">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[76px] font-bold py-5">
              Strategy
            </h2>
            <p className="text-[#fff] font-raleway font-medium text-[20px] pb-10">
              The beginning of a digital project is not a piece of cake. It is
              the time to think deeply and to analyze in detail. What is the
              project’s purpose? What are the smart business goals? What can be
              achieved? How do users currently use your service? At Lyans,
              “strategy” essentially means to get a clear picture of what
              problem to solve and what vision to follow.
            </p>
            <ul className="pt-10">
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                capabalities & service
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                digital brand strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                data analysis
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                website strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                media strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                content strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                creative consultancy
              </li>
            </ul>
            <div className="h-[100px] w-[100px] rounded-full bg-gray-400 bg-opacity-30 mt-5">
            </div>
            <a href="#" className="font-popins text-[20px] cursor-pointer font-semibold text-[#fff] capitalize absolute bottom-10 left-10">reach an expert</a>
          </div>
          <div className="w-[30%] bg-gray-400 bg-opacity-30 h-[700px] flex justify-between items-center">
            <img src={Stra} alt="Stra" />
          </div>
        </div>
        <div className="!flex justify-between">
          <div className="w-[60%] relative">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[76px] font-bold py-5">
              Branding
            </h2>
            <p className="text-[#fff] font-raleway font-medium text-[20px] pb-10">
              The beginning of a digital project is not a piece of cake. It is
              the time to think deeply and to analyze in detail. What is the
              project’s purpose? What are the smart business goals? What can be
              achieved? How do users currently use your service? At Lyans,
              “strategy” essentially means to get a clear picture of what
              problem to solve and what vision to follow.
            </p>
            <ul className="pt-10">
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                capabalities & service
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                digital brand strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                data analysis
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                website strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                media strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                content strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                creative consultancy
              </li>
            </ul>
            <div className="h-[100px] w-[100px] rounded-full bg-gray-400 bg-opacity-30 mt-5">
            </div>
            <a href="#" className="font-popins text-[20px] cursor-pointer font-semibold text-[#fff] capitalize absolute bottom-10 left-10">reach an expert</a>
          </div>
          <div className="w-[30%] bg-gray-400 bg-opacity-30 h-[700px] flex justify-between items-center">
            <img src={Stra1} alt="Stra" />
          </div>
        </div>
        <div className="!flex justify-between">
          <div className="w-[60%] relative">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[76px] font-bold py-5">
              UI & UX And Development
            </h2>
            <p className="text-[#fff] font-raleway font-medium text-[20px] pb-10">
              The beginning of a digital project is not a piece of cake. It is
              the time to think deeply and to analyze in detail. What is the
              project’s purpose? What are the smart business goals? What can be
              achieved? How do users currently use your service? At Lyans,
              “strategy” essentially means to get a clear picture of what
              problem to solve and what vision to follow.
            </p>
            <ul className="pt-10">
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                capabalities & service
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                digital brand strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                data analysis
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                website strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                media strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                content strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                creative consultancy
              </li>
            </ul>
            <div className="h-[100px] w-[100px] rounded-full bg-gray-400 bg-opacity-30 mt-5">
            </div>
            <a href="#" className="font-popins text-[20px] cursor-pointer font-semibold text-[#fff] capitalize absolute bottom-10 left-10">reach an expert</a>
          </div>
          <div className="w-[30%] bg-gray-400 bg-opacity-30 h-[700px] flex justify-between items-center">
            <img src={Stra4} alt="Stra" />
          </div>
        </div>
        <div className="!flex justify-between">
          <div className="w-[60%] relative">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[76px] font-bold py-5">
              Motion Graphics
            </h2>
            <p className="text-[#fff] font-raleway font-medium text-[20px] pb-10">
              The beginning of a digital project is not a piece of cake. It is
              the time to think deeply and to analyze in detail. What is the
              project’s purpose? What are the smart business goals? What can be
              achieved? How do users currently use your service? At Lyans,
              “strategy” essentially means to get a clear picture of what
              problem to solve and what vision to follow.
            </p>
            <ul className="pt-10">
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                capabalities & service
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                digital brand strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                data analysis
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                website strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                media strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                content strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                creative consultancy
              </li>
            </ul>
            <div className="h-[100px] w-[100px] rounded-full bg-gray-400 bg-opacity-30 mt-5">
            </div>
            <a href="#" className="font-popins text-[20px] cursor-pointer font-semibold text-[#fff] capitalize absolute bottom-10 left-10">reach an expert</a>
          </div>
          <div className="w-[30%] bg-gray-400 bg-opacity-30 h-[700px] flex justify-between items-center">
            <img src={Stra3} alt="Stra" />
          </div>
        </div>
        <div className="!flex justify-between">
          <div className="w-[60%] relative">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[76px] font-bold py-5">
              Digital Marketing
            </h2>
            <p className="text-[#fff] font-raleway font-medium text-[20px] pb-10">
              The beginning of a digital project is not a piece of cake. It is
              the time to think deeply and to analyze in detail. What is the
              project’s purpose? What are the smart business goals? What can be
              achieved? How do users currently use your service? At Lyans,
              “strategy” essentially means to get a clear picture of what
              problem to solve and what vision to follow.
            </p>
            <ul className="pt-10">
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                capabalities & service
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                digital brand strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                data analysis
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                website strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                media strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                content strategy
              </li>
              <li className="font-popins text-[20px] cursor-pointer font-normal text-[#66fcf1] capitalize pb-2">
                creative consultancy
              </li>
            </ul>
            <div className="h-[100px] w-[100px] rounded-full bg-gray-400 bg-opacity-30 mt-5">
            </div>
            <a href="#" className="font-popins text-[20px] cursor-pointer font-semibold text-[#fff] capitalize absolute bottom-10 left-10">reach an expert</a>
          </div>
          <div className="w-[30%] bg-gray-400 bg-opacity-30 h-[700px] flex justify-between items-center">
            <img src={Stra2} alt="Stra" />
          </div>
        </div>
        </Slider>
      </div>
    </div>
  );
};

export default Weare;
