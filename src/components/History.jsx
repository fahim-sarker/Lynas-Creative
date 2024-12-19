import React from "react";
import Histo1 from "../assets/history1.mp4";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";


const History = () => {
  return (
    <div className="realative">
      <video
        className="w-full h-full"
        src={Histo1}
        type="video/mp4"
        autoPlay
        loop
        muted
      />
      <div className="container mx-auto">
        <h3 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[50px] font-medium absolute top-[40%] left-[2%] w-[310px]">
          The Creative Powerhouse
        </h3>
        <p className="font-popins text-[20px] font-medium absolute top-[75%] left-[2%] text-white">Discover what it takes to evolve your vision.</p>
        <div className="w-[50px] h-[50px] absolute top-[80%] left-[2%] rounded-full bg-white flex justify-center items-center cursor-pointer">
            <MdArrowForwardIos/>
        </div>
      </div>
    </div>
  );
};

export default History;
