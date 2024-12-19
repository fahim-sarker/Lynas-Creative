import React, { useState } from "react";
import Cntc from "../assets/history1.mp4";
import { GiFlyingDagger } from "react-icons/gi";
import { FaMessage } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const Contact = () => {
  const [isProjectClicked, setIsProjectClicked] = useState(false);
  const [isMessageClicked, setIsMessageClicked] = useState(false);

  const handleProjectClick = () => {
    setIsProjectClicked(true);
    setIsMessageClicked(false); 
  };

  const handleMessageClick = () => {
    setIsMessageClicked(true);
    setIsProjectClicked(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Form submitted successfully!");
    setIsProjectClicked(false);
    setIsMessageClicked(false);
  };

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
        <h3 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[120px] font-normal absolute top-[25%] left-[2%]">Hello there!</h3>
        <h6 className="font-popins font-medium text-white text-[50px] absolute top-[42%] left-10">let's chat.</h6>
        <p className="font-popins font-bold text-white text-[16px] absolute top-[58%] left-10">What would you like to talk about?</p>
        <a
          href="#"
          onClick={handleProjectClick}
          className="font-popins font-normal text-white text-[14px] absolute top-[65%] left-10 flex gap-x-5 border-2 border-[#66fcf1] py-3 px-5 rounded-full items-center"
        >
          <GiFlyingDagger className="text-[#66fcf1] text-[20px]" />
          An upcoming Project
        </a>
        <a
          href="#"
          onClick={handleMessageClick}
          className="font-popins font-normal text-white text-[14px] absolute top-[65%] left-80 flex gap-x-5 border-2 border-[#66fcf1] py-3 px-8 rounded-full items-center"
        >
          <FaMessage className="text-[#66fcf1] text-[20px]" />
          Just Want To Say Hello
        </a>
        {isProjectClicked && (
          <div
            className="absolute top-[32%] right-10 w-[50%] bg-black p-10 rounded-lg shadow-xl animate__animated animate__fadeIn animate__faster"
          >
            <h4 className="font-popins text-[24px] font-bold text-center mb-4 text-white">Tell Us About Your Project</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Project Name</label>
                <input
                  type="text"
                  className="w-full p-2 mt-1 text-white outline-none rounded-lg bg-[#000] border-2 border-[#33c6c1]"
                  placeholder="Enter your project name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Project Description</label>
                <textarea
                  className="w-full p-2 mt-1 text-white outline-none rounded-lg bg-[#000] border-2 border-[#33c6c1]"
                  rows="4"
                  placeholder="Describe your project"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#000] border-2 border-[#33c6c1] text-white rounded-full hover:bg-gray-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        {isMessageClicked && (
          <div
            className="absolute top-[32%] right-10 w-[50%] bg-black p-10 rounded-lg shadow-xl animate__animated animate__fadeIn animate__faster"
          >
            <h4 className="font-popins text-[24px] font-bold text-center mb-4 text-white">Say Hello</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  className="w-full p-2 mt-1 text-white outline-none rounded-lg bg-[#000] border-2 border-[#33c6c1]"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium ">Your Message</label>
                <textarea
                  className="w-full p-2 mt-1 text-white outline-none rounded-lg bg-[#000] border-2 border-[#33c6c1]"
                  rows="4"
                  placeholder="Write your message"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#000] border-2 border-[#33c6c1] text-white rounded-full hover:bg-gray-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
