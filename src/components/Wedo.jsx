import React from "react";
import { IoIosArrowForward } from "react-icons/io";


const Wedo = () => {
  return (
    <div className="pt-[120px] bg-[#131313]">
      <div className="container mx-auto">
        <h4 className="text-white font-popins text-[35px] font-semibold">
          WHAT WE DO
        </h4>
        <h3 className="text-white font-popins text-[65px] font-semibold">
          We are idea-driven; Our focus is on smart designs and user experience
          combined with rich technology.
        </h3>
        <div className="flex gap-x-40 items-center">
          <div className="h-[300px] w-[300px] bg-sky-400 rounded-full flex justify-center items-center animate-rotate">
            <h3 className="text-white font-popins text-[25px] font-semibold">
              THINK TO CREATE
            </h3>
          </div>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-white font-bebas text-[126px] font-bold w-[850px] leading-[130px] mt-20">
            "WE MAKE CLIENTS HAPPY AND HAPPIER"
          </h2>
        </div>
      </div>
      <div className="bg-[#0dcaf0] py-10">
        <div className="container mx-auto overflow-hidden">
          <ul className="scrolling-text flex font-raleway font-bold text-[30px] text-black">
            <li className="mr-10">Strategy</li>
            <li className="mr-10">Branding</li>
            <li className="mr-10">UI&UX</li>
            <li className="mr-10">Development</li>
            <li className="mr-10">Digital Marketing</li>
            <li className="mr-10">Motion Graphics</li>
            <li className="mr-10">Development</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto">
      <h3 className="text-center text-[#0dcaf0] font-raleway font-bold text-[30px] py-10">A DIGITAL PRODUCT DESIGN AGENCY LIKE NO OTHER</h3>
      <h2 className="text-center text-[#fff] font-raleway font-bold text-[35px] pb-10">Our story is all about being committed towards Success.</h2>
      <p className="w-[950px] mx-auto text-[#fff] font-raleway font-medium text-[25px] pb-10">Having extensive experience in the world of software development, we were ready to establish our own company with our own rules. The past few years have been full of growth, prosperity and lessons learned. From small startups to globally recognized companies, we've coded through it all. We foster a positive work environment based on trust, teamwork, open-communication and lots of laughs.</p>
      <h6 className="w-[950px] mx-auto text-[#fff] font-raleway font-medium text-[25px] pb-10">We work with you to design, manage and implement innovative solutions that meet the business needs and address the challenges of growth. Client services are provided by certified experts who are trained and experienced in building high-quality tools that deliver business value to their clients.</h6>
      <div className="flex justify-center gap-x-8 items-center py-10">
        <h3 className="text-[#fff] font-raleway font-bold text-[45px]">Build your brand</h3>
        <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
            <IoIosArrowForward className="text-[25px] cursor-pointer"/>
        </div>
      </div>
      <h1 className="text-[180px] font-bold text-gray-400 opacity-5 font-roboto">LYANS CREATIVE</h1>
      </div>
    </div>
  );
};

export default Wedo;
