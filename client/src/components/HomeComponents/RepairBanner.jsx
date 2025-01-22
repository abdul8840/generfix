import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import Banner from '../../assets/images/repairbanner.jpg'

const RepairBanner = () => {
  return (
    <section className="mt-[100px] py-5">
      <div className="container">
        <div className="mb-20 mx-5">
          <p className="subheading">Experts on repair</p>
          <h2 className="heading">Your Devices <span className="text-green300">Are in</span> Good <span className="text-green300">Hands.</span></h2>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-between mx-5">

          <div className="w-full flex flex-col gap-4">
            <div className="">
              <p className="text-[14px] md:text-[16px] text-green300 text-bold">Your Devices, Restored by Experts</p>
              <h2 className='text-xl sm:text-2xl md:text-3xl text-headingColor font-bold'>Expert Repairs for Every Device: Bringing Your Technology Back to Life</h2>

            </div>
            <p className="text-[14px] md:text-[16px] text-green300 text-bold">At Generations Fix, we understand how essential your devices are to your daily routine. From smartphones and laptops to tablets and PCs, we offer expert repair services for a wide range of technology. Our highly skilled technicians have years of experience diagnosing and fixing all kinds of issues, from broken screens and malfunctioning batteries to complex board-level repairs. Whatever the problem may be, our team is equipped to handle it quickly and efficiently.</p>


            <p className="text-[14px] md:text-[16px] text-green300 text-bold">At Generations Fix, our mission is simple: to provide reliable, fast, and affordable repair services that keep your devices performing at their best. We know how important it is to get your devices back in your hands quickly, which is why we offer a swift turnaround without compromising on quality. No problem is too big or small for us to fix, and we guarantee that your device is in good hands. Let us help you get back on track with repairs that you can trust!</p>

            <div className="flex flex-col sm:flex-row text-center gap-4 text-black mt-10">
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

          <div className="w-full overflow-hidden">
            <img src={Banner} className='w-full rounded-xl shadow-lg hover:scale-[1.1] hover:rotate-3 transition-all' alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default RepairBanner
