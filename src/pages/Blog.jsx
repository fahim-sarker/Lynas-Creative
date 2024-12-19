import React from "react";
import Cntc from "../assets/history1.mp4";

const Blog = () => {
  return (
    <div className="relative">
      <video
        className="w-full object-cover z-0"
        src={Cntc}
        type="video/mp4"
        autoPlay
        loop
        muted
      />
      <div className="container mx-auto">
        <h3 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[120px] font-normal absolute top-[45%] left-[50%] translate-x-[-50%]">
        Blogs
        </h3>
      </div>
    </div>
  );
};

export default Blog;
