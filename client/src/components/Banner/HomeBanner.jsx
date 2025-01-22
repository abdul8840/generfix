import React from 'react';
import Image1 from '../../assets/images/banner2.jpg';
import { PiGlobeStandFill } from "react-icons/pi";
import { HiBadgeCheck } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";

const HomeBanner = () => {
  return (
    <div className='my-[100px] mx-5'>

      <div className="container">

        <div className="flex flex-wrap justify-between mb-[55px]">
          <div className="">
            <p className="text-[14px] text-green300 font-bold">Why Choose Us</p>
            <h2 className="text-3xl text-headingColor font-bold">We are <span className="text-green300">Dedicated</span> to <span className="text-green300">Work.</span></h2>
          </div>
          <div className="">
            <Link to="/about">
              <GoArrowUpRight className='bg-green300 text-[40px] text-white font-bold p-2 rounded-full hover:bg-white hover:text-green300 hover:border hover:border-solid hover:border-green300 transition-all' />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          <div className='w-full flex justify-center items-center'>
            <img src={Image1} className='w-full h-[350px] md:h-[520px] object-cover rounded-xl' alt="" />
          </div>

          <div className="w-full flex flex-col gap-[20px] md:gap-[40px]">
            <div className="flex items-center gap-2 text-green300 bg-textColor p-2 w-[200px] rounded-[20px]">
              <PiGlobeStandFill className='text-[20px] ' />
              <p className="text-[14px] font-semibold ">WHY CHOOSE US</p>
            </div>
            <h2 className='text-2xl md:text-4xl font-bold text-headingColor'>Business's Potential with A Leading Digital Marketing</h2>
            <p className="text-green300 font-[14px]">Our team of experienced professionals is dedicated to helping business achieve higher visibility, increased to traffic, greater.</p>

            <div className="flex items-start flex-col lg:flex-row gap-5">
              <div className="flex items-center gap-2 text-green300 bg-textColor py-3 px-4 rounded-[20px]">
                <HiBadgeCheck className='text-[20px] md:text-[26px] ' />
                <p className="text-[14px] md:text-[18px] font-bold ">Higher Conversion Rates</p>
              </div>
              <div className="flex items-center gap-2 text-green300 bg-textColor py-3 px-4 rounded-[20px]">
                <HiBadgeCheck className='text-[20px] md:text-[26px] ' />
                <p className="text-[14px] md:text-[18px] font-bold "> Increase Website Traffic</p>
              </div>
            </div>

            <div className="flex items-start flex-col lg:flex-row gap-5">
              <div className="flex items-center gap-2 text-green300 bg-textColor py-3 px-4 rounded-[20px]">
                <HiBadgeCheck className='text-[20px] md:text-[26px] ' />
                <p className="text-[14px] md:text-[18px] font-bold ">Local Market Dominance</p>
              </div>
              <div className="flex items-center gap-2 text-green300 bg-textColor py-3 px-4 rounded-[20px]">
                <HiBadgeCheck className='text-[20px] md:text-[26px] ' />
                <p className="text-[14px] md:text-[18px] font-bold "> 24/7 Promotion</p>
              </div>
            </div>

            <div className="">
              <div className="flex gap-4 flex-row text-white">
                <Link
                  to='/appointment'
                  className="block bg-transparent border-2 border-solid text-black border-green300 hover:bg-green300 hover:text-white transition-all font-bold p-1 rounded-xl py-2 px-5"
                >
                  Book Appointment
                </Link>
                <Link
                  to='/contact'
                  className="block bg-transparent border-2 border-solid text-black border-green300 hover:bg-green300 hover:text-white transition-all font-bold p-1 rounded-xl py-2 px-5"
                >
                  Send Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner;
