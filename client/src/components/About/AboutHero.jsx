import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <div className='container aboutbg rounded-xl'>
      <div className="container">
        <div className="h-[80vh] sm:h-[70vh] mt-0 md:mt-10 flex flex-col md:flex-row gap-5 justify-center items-center bg-black bg-opacity-40 rounded-2xl py-5 md:p-10 text-center px-5">
          <div className="flex flex-col gap-5 ">
            
            <div className="">
              <p className="text-[15px] md:text-[18px] font-bold text-white">About</p>
              <h2 className="text-2xl md:text-3xl text-green300 font-bold">Generations Fix:<span className="text-white"> Trusted Tech Repair Service</span></h2>
            </div>
            <p className="text-[17px] text-white">
              Welcome to <span className='text-green300 font-semibold'>Generationsfix</span>, we are your trusted partner for all things tech! With a passion for innovation and a commitment to excellence, we provide comprehensive solutions tailored to meet your personal and business needs.
            </p>
            <p className="text-[17px] text-white">
              Get a free diagnose now. book an appointment with us
            </p>

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

            <div className="flex items-center gap-3 mt-5 justify-center">
              <Link to='/' className="text-white hover:text-green300 transition text-3xl">
                <FaSquareInstagram />
              </Link>
              <Link to='/' className="text-white hover:text-green300 transition text-3xl">
                <FaFacebookSquare />
              </Link>
              <Link to='/' className="text-white hover:text-green300 transition text-3xl">
                <FaLinkedin />
              </Link>
              <Link to='/' className="text-white hover:text-green300 transition text-3xl">
                <FaGithubSquare />
              </Link>
            </div>
            
          </div>


        </div>
      </div>
    </div>
  )
}

export default AboutHero
