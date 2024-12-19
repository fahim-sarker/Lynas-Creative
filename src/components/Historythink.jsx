import React from "react";

const Historythink = () => {
  return (
    <div className="relative bg-[#0dcaf0] py-[50px]">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="ball-field">
          <div className="ball ball1"></div>
          <div className="ball ball2"></div>
          <div className="ball ball3"></div>
          <div className="ball ball5"></div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex justify-between items-center">
          <div className="w-[40%]">
            <h1 className="font-bebas font-bold text-[326px] w-[350px] text-transparent bg-clip-text transform transition-all duration-700 ease-in-out animate-text leading-[250px]">
              Who We Are
            </h1>
          </div>
          <div className="w-[50%]">
            <h6 className="text-black text-[25px] font-popins font-normal">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              quibusdam vitae veniam voluptatem reiciendis iusto tempora dolorum
              quam et maxime!
            </h6>
            <h6 className="text-black text-[25px] font-popins font-normal mt-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              blanditiis nesciunt consequuntur quos quaerat aliquid eligendi
              iusto sint iste repellat ex odio similique perferendis a
              cupiditate saepe, commodi temporibus optio asperiores rem
              quibusdam tempore soluta? Assumenda natus reprehenderit sit minima
              id consequuntur, facere saepe expedita rem corporis, totam amet
              libero.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historythink;
