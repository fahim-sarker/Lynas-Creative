import React, { useState, useEffect, useRef } from 'react';
import Logo from "../assets/logo.png";
import Hamburger from 'hamburger-react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let [isOpen, setOpen] = useState(false);
    let leftSidebarRef = useRef(null); 
    let rightSidebarRef = useRef(null); 
    let hamburgerRef = useRef(null);

    useEffect(() => {
        let handleClickOutside = (event) => {
            if (
                isOpen &&
                !leftSidebarRef.current.contains(event.target) &&
                !rightSidebarRef.current.contains(event.target) &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setOpen(false); 
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]); 

    let handleMenuItemClick = () => {
        setOpen(false); 
    };

    let closeSidebars = () => {
        setOpen(false);
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-5">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Link to="/">
                    <img src={Logo} alt="Logo" className="w-[120px]" />
                    </Link>
                    <a
                        href="#"
                        className="border-2 border-[#66fcf1] py-3 px-6 hover:bg-[#666666] duration-300 ease-in-out text-white text-[17px] font-raleway font-bold"
                    >
                        Start your project
                    </a>
                </div>
                <div className="flex justify-end items-center mt-20">
                    <h2 className='font-raleway font-bold text-white'>Menu</h2>
                    <div ref={hamburgerRef}>
                        <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            size={30}
                            color="#fff"
                        />
                    </div>
                </div>
            </div>
            <div
                ref={leftSidebarRef}
                className={`fixed top-0 left-0 w-[50%] h-full bg-[#66FCF1] text-white transition-transform duration-700 ease-in-out transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="pt-6">
                    <h3 className="text-[40px] font-raleway text-[#000] font-bold text-center">Sri Lanka</h3>
                    <ul className="space-y-4 mt-8 text-center">
                        <li className='w-[400px] mx-auto'><a href="#" className="text-[20px] text-black font-popins font-medium" onClick={handleMenuItemClick}>Level 12 MAGA ONE , No. 200, Narahenpita - Nawala Rd, Colombo 00500</a></li>
                        <li><a href="#" className="text-[20px] text-black font-popins font-medium underline" onClick={handleMenuItemClick}>view location</a></li>
                    </ul>
                    <h3 className="text-[40px] font-raleway text-[#000] font-bold text-center mt-5">UAE</h3>
                    <ul className="space-y-4 mt-5 text-center">
                        <li className='w-[400px] mx-auto'><a href="#" className="text-[20px] text-black font-popins font-medium" onClick={handleMenuItemClick}>Haibu Space, Abu Dhabi</a></li>
                        <li><a href="#" className="text-[20px] text-black font-popins font-medium underline" onClick={handleMenuItemClick}>view location</a></li>
                    </ul>
                    <div className="bg-black py-5 mt-5 h-[400px]">
                    <ul className="space-y-4 mt-5 text-center">
                        <li className='w-[400px] mx-auto'><a href="#" className="text-[30px] text-white font-popins font-medium hover:text-[#66FCF1] duration-300 ease-in-out" onClick={handleMenuItemClick}>+971 54446 2064</a></li>
                        <li><a href="#" className="text-[30px] text-white font-popins font-medium hover:text-[#66FCF1] duration-300 ease-in-out" onClick={handleMenuItemClick}>info@lyanscreative.com</a></li>
                        <li><a href="#" className="text-[30px] text-white font-popins font-medium hover:text-[#66FCF1] duration-300 ease-in-out" onClick={handleMenuItemClick}>Download Portfolio</a></li>
                    </ul>
                    </div>
                </div>
            </div>
            <div
                ref={rightSidebarRef}
                className={`fixed top-0 right-0 w-[50%] h-full bg-black text-white transition-transform duration-700 ease-in-out transform ${
                    isOpen ? 'translate-y-0' : 'translate-y-full'
                }`}
            >
                <div className="absolute top-4 right-4">
                    <FaTimes 
                        size={30} 
                        color="#fff" 
                        onClick={closeSidebars} 
                    />
                </div>
                <div className="p-6">
                    <ul className="mt-5">
                        <li className='text-center py-5'><a href="#home" className="text-[60px] font-roboto font-bold hover:line-through duration-500 ease-in-out hover:text-gray-400" onClick={handleMenuItemClick}><Link to="/story">Our Story</Link></a></li>
                        <li className='text-center py-5'><a href="#story" className="text-[60px] font-roboto font-bold hover:line-through duration-500 ease-in-out hover:text-gray-400" onClick={handleMenuItemClick}><Link to="/portfolio">Portfolio</Link></a></li>
                        <li className='text-center py-5'><a href="#portfolio" className="text-[60px] font-roboto font-bold hover:line-through duration-500 ease-in-out hover:text-gray-400" onClick={handleMenuItemClick}><Link to="/career">Career</Link></a></li>
                        <li className='text-center py-5'><a href="#career" className="text-[60px] font-roboto font-bold hover:line-through duration-500 ease-in-out hover:text-gray-400" onClick={handleMenuItemClick}><Link to="/contact">Contact Us</Link></a></li>
                        <li className='text-center py-5'><a href="#blog" className="text-[60px] font-roboto font-bold hover:line-through duration-500 ease-in-out hover:text-gray-400" onClick={handleMenuItemClick}><Link to="/blog">Blog</Link></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
