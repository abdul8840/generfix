import React from 'react'
import Image from '../../assets/images/aboutcont2.jpg'
import { PiGlobeStandFill } from "react-icons/pi";

const Aboutus = () => {
  return (
    <section className='mt-[100px]'>
      <div className="container">
        <div className="mb-20 mx-5">
          <p className="subheading">About Us</p>
          <h2 className="heading">Want to Know <span className="text-green300">more</span> about <span className="text-green300">us?</span></h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mx-5">
          <div className="w-full lnbg rounded-xl overflow-hidden">
            <img src={Image} className='rounded-xl hover:scale-[1.1] transition' alt="" />
          </div>

          <div className="w-full flex flex-col gap-5">
            <div className="flex items-center gap-2 text-green300 bg-textColor p-2 w-[200px] rounded-[20px]">
              <PiGlobeStandFill className='text-[20px] ' />
              <p className="text-[14px] font-semibold ">WHY CHOOSE US</p>
            </div>
            <h2 className='text-2xl md:text-4xl font-bold text-headingColor'>Comprehensive IT & Digital Marketing Solutions.</h2>
            <p className="text-green300 font-[14px]">Our team of experienced professionals is dedicated to helping business achieve higher visibility, increased to traffic, greater.</p>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row gap-3 items-center">
                <div className="shadow-md text-center p-5 rounded-xl lnbg ">
                  <h2 className="text-xl text-headingColor font-bold">Expertise</h2>
                  <p className="text-gray-600 text-[16px] mt-5">
                    Years of experience in the digital marketing and IT industry.
                  </p>
                </div>

                <div className="shadow-md text-center p-5 rounded-xl ">
                  <h2 className="text-xl text-headingColor font-bold">Customization</h2>
                  <p className="text-green300 text-[16px] mt-5">
                    Personalized solutions to match your unique business objectives.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3 items-center ">
                <div className="shadow-md text-center p-5 rounded-xl">
                  <h2 className="text-xl text-headingColor font-bold">Results-Driven</h2>
                  <p className="text-green300 text-[16px] mt-5">
                    We focus on delivering measurable outcomes and ROI.
                  </p>
                </div>

                <div className="shadow-md text-center p-5 rounded-xl lnbg ">
                  <h2 className="text-xl text-headingColor font-bold">Customer Approach</h2>
                  <p className="text-gray-600 text-[16px] mt-5">
                    Your success is our priority, and we go above and beyond to ensure your satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Aboutus
