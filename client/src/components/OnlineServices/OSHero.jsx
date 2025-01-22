import React from 'react'
import { Link } from 'react-router-dom';

const OSHero = () => {
  return (
    <div className='container dmbg py-20 px-5 !mt-10 rounded-3xl'>
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center h-[70vh] sm:h-[40vh] mt-10">
          <div className="flex flex-col gap-5 text-center">
            <div className="">
              <p className="text-[16px] font-bold text-white">Maximize Your Online Presence, Maximize Your Success</p>
              <h2 className="text-3xl text-white font-bold">Effective <span className="text-green300">Digital Marketing Solutions</span> for Every Business</h2>
            </div>
            <p className="text-[17px] text-white">
              Whether you're a startup or an established enterprise, our digital marketing services are designed to match your goals. We create tailored marketing strategies that increase your visibility, connect you with the right audience, and drive conversions across all digital platforms.
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
    </div>
  )
}

export default OSHero
