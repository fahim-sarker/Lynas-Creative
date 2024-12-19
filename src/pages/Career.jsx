import React from "react";
import Hr1 from "../assets/hr.png"
import Hr2 from "../assets/hr1.png"

const Career = () => {
  return (
    <div className="bg-black py-[120px]">
      <div className="container mx-auto">
      <h2 className="text-center font-roboto text-white text-[220px] leading-[250px] font-bold my-20 animate-color-change">WE ARE HIRING</h2>
      <div className="flex justify-between">
        <div className="w-[40%]">
          <h4 className="font-popins text-[40px] font-bold text-white w-[255px]">Life at <span className="font-popins text-[40px] font-bold text-[#66FCF1]">Lyans Creative</span></h4>
          <p className="font-popins text-[20px] font-bold text-white mt-5 w-[500px]">Due to our unique organizational culture, we offer a challenging work environment that encourages the expression of individual and collective talent, generating unique growth and development opportunities.</p>
        </div>
        <div className="w-[30%]">
          <img src={Hr1} alt="Hr1" />
        </div>
        <div className="w-[30%] mt-5">
          <img src={Hr2} alt="Hr2" />
        </div>
      </div>
      <div className="py-40">
      <h4 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[50px] font-normal">Explore current opportunities</h4>
      <p className="text-[#fff] font-raleway font-bold text-[18px]">Our door is open to meet individuals who believe it is possible to do better. If you identify with our philosophy and enjoy challenges and professional exposure, join us as we periodically need professionals in different areas of activity.</p>
      </div>
      </div>
    </div>
  );
};

export default Career;
