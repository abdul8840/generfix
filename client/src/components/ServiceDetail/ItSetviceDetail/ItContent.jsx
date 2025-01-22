import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const ItContent = ({ itsolServices }) => {
  return (
    <section className="mt-[100px] bg-gray-50 py-5">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10 justify-between mx-5">

          <div className="w-full flex flex-col gap-4">
            <div className="">
              <p className="text-[14px] md:text-[16px] text-green300 text-bold">{itsolServices.cSlogan}</p>
              <h2 className='text-xl sm:text-2xl md:text-3xl text-headingColor font-bold'>{itsolServices.Cheading}</h2>

            </div>
            <p className="text-[14px] md:text-[16px] text-green300 text-bold">{itsolServices.aboutServices}</p>
            <div className="">
              <Link to='/appointment'>
                <button className="bg-gradient-to-r from-green300 to-headingColor hover:from-headingColor hover:to-green300 shadow-md transition-all text-xl font-bold py-3 px-4 rounded-[20px] flex gap-2 items-center text-white">Free Consultation <GoArrowUpRight className='bg-white text-green300 text-[25px]  p-1 rounded-full' /></button>
              </Link>
            </div>

            <p className="text-[14px] md:text-[16px] text-green300 text-bold">{itsolServices.shortDescription}</p>

          </div>

          <div className="w-full overflow-hidden">
            <img src={itsolServices.contImg} className='w-full rounded-xl shadow-lg hover:scale-[1.1] hover:rotate-12 transition-all' alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItContent
