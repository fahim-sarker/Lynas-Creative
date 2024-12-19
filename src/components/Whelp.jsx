import React from "react";

const Whelp = () => {
  return (
    <div className="py-[50px] bg-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h3 className="font-popins font-bold text-[50px] text-[#fff] w-[45%]">
            We help move your business forward with
            <span className="font-popins font-bold text-[50px] text-[#66FCF1]">
              design, technology & creativity.
            </span>
          </h3>
          <a
            href="#"
            className="border-2 border-[#66fcf1] h-[50px] w-[250px] hover:bg-[#666666] duration-300 ease-in-out text-white text-[17px] font-raleway font-bold flex justify-center items-center rounded-full"
          >
            Reach Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Whelp;
