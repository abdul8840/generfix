import React from 'react'
import { Link } from 'react-router-dom';

const ISHero = () => {
  return (
    <section className='container itservicebg py-20 px-5 !mt-10 rounded-3xl'>
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center h-[70vh] sm:h-[40vh] mt-10">
          <div className="flex flex-col gap-5 text-center">
          <div className="">
              <p className="text-[16px] font-bold text-white">Your Reliable IT Partner for Every Solution.</p>
              <h2 className="text-3xl text-white font-bold">Comprehensive <span className="text-green300">IT Solutions</span> for Modern Businesses</h2>
            </div>
            <p className="text-[17px] text-white">
            Transform your organization with our tailored IT services, including network management, cloud solutions, and cybersecurity. We ensure your operations run seamlessly and securely.
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

export default ISHero
