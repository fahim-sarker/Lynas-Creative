import React from "react";
import Plogo from "../assets/plogo.png";

const Portfoliobanner = () => {
  return (
    <div className="bg-black pt-60 pb-20">
      <div className="container mx-auto">
        <h3 className="font-popins text-[90px] font-bold text-white w-[85%]">
          Lyans is a professional outfit for any type of marketing works.
        </h3>
        <div className="flex justify-end gap-x-5 items-center">
          <img
            src={Plogo}
            alt="Plogo"
            className="h-[100px] w-[100px] bg-blue-700 rounded-full"
          />
          <div className="">
            <h5 className="font-popins text-[20px] font-bold text-white">
              Mohamed Al-Binali
            </h5>
            <h6 className="font-popins text-[16px] font-medium text-[#66FCF1]">
              Hub71
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfoliobanner;
