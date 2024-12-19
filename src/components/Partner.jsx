import React from "react";
import Annex from "../assets/annex.png";
import one1 from "../assets/1.png";
import one2 from "../assets/3.png";
import one3 from "../assets/4.png";
import one4 from "../assets/5.png";
import one5 from "../assets/6.png";
import one6 from "../assets/7.png";
import one7 from "../assets/8.png";
import one8 from "../assets/9.png";
import one9 from "../assets/9.png";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="lg:h-[55px] lg:w-[55px] w-[40px] h-[40px] bg-white hover:bg-[#66FCF1] rounded-full flex justify-center items-center absolute lg:bottom-[0] bottom-[-60px] lg:left-[50%] right-[35%] z-40 border-[5px] border-[#F5F5F5] cursor-pointer text-[#0C111F] hover:text-white duration-300 ease-in-out"
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
      className="lg:h-[55px] lg:w-[55px] w-[40px] h-[40px] bg-[#FFF] hover:bg-[#66FCF1] rounded-full flex justify-center items-center absolute lg:bottom-[0] bottom-[-60px] lg:left-[45%] left-[35%] z-40 border-[5px] border-[#F5F5F5] cursor-pointer text-[#0C111F] hover:text-white duration-300 ease-in-out"
      onClick={onClick}
    >
      <HiArrowSmLeft className="inline-block lg:text-[35px]" />
    </div>
  );
}

const Partner = () => {
    const settings = {
        dots: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
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
    <div className="pt-20 pb-[120px] bg-black">
      <div className="container mx-auto">
        <p className="font-popins text-[20px] font-semibold text-white py-5">
          Our Partners
        </p>
        <Slider {...settings}>
        <div className="">
        <div className="flex justify-between mt-10 space-x-0.5">
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-b border-gray-500">
            <img src={one1} alt="Annex" />
          </div>
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-b border-gray-500">
            <img src={Annex} alt="Annex"  />
          </div>
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-b border-gray-500">
            <img src={one2} alt="Annex" />
          </div>
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-b border-gray-500">
            <img src={one3} alt="Annex"  />
          </div>
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-b border-gray-500">
            <img src={one4} alt="Annex" />
          </div>
        </div>
        <div className="flex justify-between space-x-0.5">
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-gray-500">
            <img src={one5} alt="Annex" />
          </div>
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-gray-500">
            <img src={one6} alt="Annex" />
          </div>
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-gray-500">
            <img src={one7} alt="Annex"/>
          </div>
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-gray-500">
            <img src={one8} alt="Annex" />
          </div>
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-gray-500">
            <img src={one9} alt="Annex" />
          </div>
        </div>
        </div>
        <div className="">
        <div className="flex justify-between mt-10 space-x-0.5">
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-b border-gray-500">
            <img src={one1} alt="Annex" />
          </div>
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-b border-gray-500">
            <img src={Annex} alt="Annex"  />
          </div>
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-b border-gray-500">
            <img src={one2} alt="Annex" />
          </div>
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-b border-gray-500">
            <img src={one3} alt="Annex"  />
          </div>
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-b border-gray-500">
            <img src={one4} alt="Annex" />
          </div>
        </div>
        <div className="flex justify-between space-x-0.5">
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-gray-500">
            <img src={one5} alt="Annex" />
          </div>
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-gray-500">
            <img src={one6} alt="Annex" />
          </div>
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-gray-500">
            <img src={one7} alt="Annex"/>
          </div>
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-gray-500">
            <img src={one8} alt="Annex" />
          </div>
          <div className="w-[20%] flex justify-center items-center h-[250px] border-r border-gray-500">
            <img src={one9} alt="Annex" />
          </div>
        </div>
        </div>
        </Slider>
      </div>
    </div>
  );
};

export default Partner;
