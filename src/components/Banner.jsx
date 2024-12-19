import React from "react";
import banVideo from "../assets/ban.mp4";

const Banner = () => {
  return (
    <div className="relative">
      <video
        className="w-full h-full object-cover z-0"
        src={banVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
      />
      <div className="container mx-auto">
        <div className="">
          <h3 className="text-white font-popins text-[35px] font-bold absolute bottom-[65%] left-10">Hello,</h3>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[136px] font-bold absolute bottom-[20%] left-7">Let's create some MAGIC!</h2>
          <p className="text-white font-popins text-[25px] font-bold absolute bottom-[27%] w-[700px] left-[40%]">We are a design and web development studio that delivers superlative work for agencies or any beings</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
