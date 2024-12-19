import React from 'react'
import Bmw from "../assets/bmw11.png"
import Bmw1 from "../assets/bmwp.png"
import Bmw2 from "../assets/bmw1.png"
import Bmw3 from "../assets/bmw2.png"
import Bmw4 from "../assets/bmw3.png"
import Bmw5 from "../assets/bmw4.png"
import Bmw6 from "../assets/bmw5.png"
import Bmw7 from "../assets/bmw6.png"
import Bmw8 from "../assets/bmw7.png"
import Bmw9 from "../assets/bmw8.png"
import Bmw10 from "../assets/bmw10.png"


const Portfoliodetail = () => {
  return (
    <div className='py-[120px] bg-black'>
      <div className="container mx-auto">
        <h4 className='font-popins text-[30px] font-bold text-white py-10'>Some of our work</h4>
        <div className="flex justify-between">
            <div className="w-[49%] bg-[#464545] rounded-xl pt-10 px-10 h-[700px] hover:scale-95 duration-700 ease-in-out">
                <h5 className='font-popins text-[30px] font-bold text-white'>eMajlis</h5>
                <p className='font-popins text-[14px] font-bold text-white pb-10'>Designing & Developing aesthetically-pleasing interface.</p>
                <img src={Bmw} alt="Bmw"/>
            </div>
            <div className="w-[49%] bg-[#fff] rounded-xl pt-10 px-10 h-[700px] hover:scale-95 duration-700 ease-in-out">
                <h5 className='font-popins text-[30px] font-bold text-black'>Clean mobile design for BMW</h5>
                <p className='font-popins text-[14px] font-bold text-black pb-10'>Designing an website for BMW Abu Dhabi</p>
                <img src={Bmw1} alt="Bmw1"/>
            </div>
        </div>
        <div className="bg-[rgb(255,66,66)] p-10 rounded-xl mt-10 flex justify-between hover:scale-95 duration-700 ease-in-out">
            <div className="w-[30%]">
                <img src={Bmw2} alt="Bmw2"  className='h-[350px] rounded-xl'/>
                <h5 className='font-popins text-[30px] font-bold text-white mt-20'>Social Media Management</h5>
                <p className='font-popins text-[14px] font-bold text-white pb-10'>Branding and Social Mmedia moodboard designing</p>
            </div>
            <div className="w-[40%] flex flex-wrap gap-x-5">
                <img src={Bmw3} alt="Bmw3" className='h-[250px] w-[48%] rounded-xl'/>
                <img src={Bmw4} alt="Bmw3" className='h-[250px] w-[48%] rounded-xl'/>
                <img src={Bmw5} alt="Bmw3" className='h-[250px] w-[48%] rounded-xl'/>
                <img src={Bmw6} alt="Bmw3" className='h-[250px] w-[48%] rounded-xl'/>
            </div>
        </div>
        <div className="flex justify-between my-10">
            <div className="w-[65%] bg-[#198754] rounded-xl pt-10 px-10 h-[700px] hover:scale-95 duration-700 ease-in-out">
                <h5 className='font-popins text-[30px] font-bold text-white'>Design & Development for an ecommerce store</h5>
                <p className='font-popins text-[14px] font-bold text-white pb-10'>UI/UX design & Development for spacium Furnitures, an upcoming ecommerce startup</p>
                <img src={Bmw7} alt="Bmw7" className='h-[552px]'/>
            </div>
            <div className="w-[30%] bg-[rgb(47,112,209)] rounded-xl pt-10 px-10 h-[700px] hover:scale-95 duration-700 ease-in-out">
                <h5 className='font-popins text-[30px] font-bold text-white'>Branding for a sports store</h5>
                <img src={Bmw8} alt="Bmw8"/>
            </div>
        </div>
        <div className="flex justify-between">
            <div className="w-[49%] bg-[rgb(47,112,209)] rounded-xl pt-10 px-10 h-[700px] hover:scale-95 duration-700 ease-in-out">
                <h5 className='font-popins text-[30px] font-bold text-white'>Alma Health</h5>
                <p className='font-popins text-[14px] font-bold text-white pb-10'>UI/UX design & Development Alma Health, a digital health platform</p>
                <img src={Bmw9} alt="Bmw9"/>
            </div>
            <div className="w-[49%] bg-[#464545] rounded-xl pt-10 px-10 h-[700px] hover:scale-95 duration-700 ease-in-out">
                <h5 className='font-popins text-[30px] font-bold text-white'>Kanz Art</h5>
                <p className='font-popins text-[14px] font-bold text-white pb-10'>Branding kit and UI/UX design</p>
                <img src={Bmw10} alt="Bmw10"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfoliodetail
