import React from "react";
import Ahmed from "../assets/ahmed.png"
import Annex from "../assets/annex.png"
import Member from "../assets/member.png"
import Member1 from "../assets/member2.png"
import Member2 from "../assets/member3.png"
import Slider from "react-slick";

const Team = () => {
    const settings = {
        dots: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
        infinite: true,
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
    <div className="pt-[120px] pb-[50px] bg-black">
      <div className="container mx-auto">
        <p className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[50px] font-medium w-[410px]">Meet our team of experts</p>
        <div className="mt-20">
        <Slider {...settings}>
            <div className="!flex justify-between items-center">
            <div className="w-[40]">
                <img src={Ahmed} alt="Ahmed" />
            </div>
            <div className="w-[30%] flex justify-center">
                <p className='text-center font-popins font-medium text-[20px] text-[#fff] '>A UAE based entrepreneur and business executive, Ahmed is a pioneer in providing innovative business solutions and advisory that supports and highlights start-ups. He has over 10 years of experience in providing strategic foresight & drive across venture capital, consultancy and technology services as a founder of many start-ups.</p>
            </div>
            <div className="w-[20%] flex justify-center">
                <img src={Annex} alt="Annex" />
            </div>
            </div>
            <div className="!flex justify-between">
                <div className="w-[30%]">
                    <img src={Member} alt="Member" />
                    <p className='font-popins font-medium text-[14px] text-[#fff]'>Being a BEng (Hons) in Software Engineering and having been employed in the industry for 3+ years, it gives me great pleasure in working with such a dedicated and talented company. With many more ventures to endeavor, I will continue to learn new things, acquire new skills and make sure to stay on top of the game.</p>
                    <h5 className='font-popins font-medium text-[18px] text-[#66FCF1] mt-5'>Shazmina Irfan</h5>
                    <h6 className='font-popins font-medium text-[16px] text-gray-500'>COO & Co-Founder</h6>
                </div>
                <div className="w-[30%]">
                    <img src={Member1} alt="Member" />
                    <p className='font-popins font-medium text-[14px] text-[#fff]'>He has over 2 years of M&A experience with Emirates Investment Bank-PJSC, where he focused on F&B, healthcare, and education; and personally ushered them into tech. Locally, he has successfully helped grow UAE startups such as Alma Health, Dukkantek, and MKIA Hospitality.</p>
                    <h5 className='font-popins font-medium text-[18px] text-[#66FCF1] mt-5'>Kareem Anabtawi</h5>
                    <h6 className='font-popins font-medium text-[16px] text-gray-500'>Strategic Advisor</h6>
                </div>
                <div className="w-[30%]">
                    <img src={Member2} alt="Member" />
                    <p className='font-popins font-medium text-[14px] text-[#fff]'>Failure is not the alternative to success. Sometimes failure can't be avoided, but it's always only a temporary setback on a bigger, more significant course. Our story is all about being towards success</p>
                    <h5 className='font-popins font-medium text-[18px] text-[#66FCF1] mt-5'>Mohamed Wazil Liyadudeen</h5>
                    <h6 className='font-popins font-medium text-[16px] text-gray-500'>CEO & Co-Founder</h6>
                </div>
            </div>
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
