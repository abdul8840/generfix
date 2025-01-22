import React from 'react'
import { Link } from 'react-router-dom'

const RSHero = () => {
  return (
    <section className='container repairbg py-20 px-5 !mt-10 rounded-3xl'>
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center h-[70vh] sm:h-[40vh] mt-10">
          <div className="flex flex-col gap-5 text-center">
          <div className="">
              <p className="text-[16px] font-bold text-white">Revive Your Devices with Precision Repairs.</p>
              <h2 className="text-3xl text-white font-bold">Comprehensive <span className="text-green300">Repair Services</span> Under One Roof</h2>
            </div>
            <p className="text-[17px] text-white">
            Whether it’s a shattered screen, a faulty keyboard, or a slow PC, we have the expertise to repair all kinds of issues with efficiency and care.
            </p>

            <div className="block mx-auto mt-10">
              <div className="flex gap-4 justify-center flex-col sm:flex-row text-white">
                <Link
                  to='/appointment'
                  className=" bg-transparent border-2 border-solid border-green300 hover:bg-green300 hover:text-white transition-all font-bold p-1 rounded-xl py-2 px-5"
                >
                  Book Appointment
                </Link>
                <Link
                  to='/contact'
                  className=" bg-transparent border-2 border-solid border-green300 hover:bg-green300 hover:text-white transition-all font-bold p-1 rounded-xl py-2 px-5"
                >
                  Send Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default RSHero
