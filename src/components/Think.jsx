import React from "react";

const Think = () => {
  return (
    <div className="relative bg-[#0dcaf0] py-[20px]">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="ball-field">
          <div className="ball ball1"></div>
          <div className="ball ball2"></div>
          <div className="ball ball3"></div>
          <div className="ball ball5"></div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
          <h1 className="font-bebas font-bold text-[136px] text-transparent bg-clip-text transform transition-all duration-700 ease-in-out animate-text cursor-pointer text-center">
            Think To Brake
          </h1>

          <h6 className="text-white text-[25px] font-popins font-semibold w-[700px] mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            quibusdam vitae veniam voluptatem reiciendis iusto tempora dolorum
            quam et maxime!
          </h6>
      </div>
    </div>
  );
};

export default Think;
