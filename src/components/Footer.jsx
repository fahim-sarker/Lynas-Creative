import React from "react";

const Footer = () => {
  return (
    <div className="py-[80px] bg-black">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-[45%]">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-white font-popins text-[96px] font-bold leading-[100px]">Take The Next Step? Give us a call.</h2>
          </div>
          <div className="w-[50%] flex justify-end">
          <ul className="space-y-4 mt-5 text-center">
                        <li className='w-[400px] mx-auto'><a href="#" className="text-[20px] text-white font-popins font-medium hover:text-[#66FCF1] duration-300 ease-in-out">+971 54446 2064</a></li>
                        <li><a href="#" className="text-[20px] text-white font-popins font-medium hover:text-[#66FCF1] duration-300 ease-in-out">info@lyanscreative.com</a></li>
                        <li><a href="#" className="text-[20px] text-white font-popins font-medium hover:text-[#66FCF1] duration-300 ease-in-out">UAE SriLanka</a></li>
                    </ul>
          </div>
        </div>
        <ul className="flex justify-end gap-x-5">
            <li><a href="#" className="text-[18px] text-white font-popins font-medium hover:text-[#66FCF1] duration-300 ease-in-out underline">Facebook</a></li>
            <li><a href="#" className="text-[18px] text-white font-popins font-medium hover:text-[#66FCF1] duration-300 ease-in-out underline"> Instagram</a></li>
            <li><a href="#" className="text-[18px] text-white font-popins font-medium hover:text-[#66FCF1] duration-300 ease-in-out underline">Twitter</a></li>
            <li><a href="#" className="text-[18px] text-white font-popins font-medium hover:text-[#66FCF1] duration-300 ease-in-out underline">LinkedIn</a></li>
        </ul>
        <div className="flex justify-center gap-x-10 pt-10">
            <h5 className="font-popins text-[18px] font-normal text-gray-500">© 2022 Lyans Creative International</h5>
            <h5 className="font-popins text-[18px] font-normal text-gray-500">Privacy & Cookies</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
