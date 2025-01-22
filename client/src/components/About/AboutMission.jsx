import React from 'react'
import Image from '../../assets/images/mvbg.jpg'

const AboutMission = () => {
  return (
    <section className='mt-[100px]'>
      <div className="container">
        <div className="mb-20 mx-5">
          <p className="subheading">Your Business</p>
          <h2 className="heading">Grow your <span className="text-green300">business</span> with <span className="text-green300">us</span></h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mx-5">


          <div className="w-full flex flex-col gap-5">
            
            <div className="flex flex-col gap-3 overflow-hidden">
              
                <div className="shadow-md text-center p-5 rounded-xl lnbg hover:translate-y-1 transition-all">
                  <h2 className="text-xl text-headingColor font-bold">Our Mission</h2>
                  <span className="w-[90px] mx-auto h-1 bg-green300 rounded-full block"></span>
                  <p className="text-gray-600 text-[16px] mt-5">
                  At <span className='text-green300 font-semibold'>Generationsfix</span>, our mission is to empower businesses with innovative digital marketing strategies and state-of-the-art IT solutions that drive growth, enhance efficiency, and create lasting success. We aim to deliver measurable results by leveraging cutting-edge technology, creativity, and data-driven insights while fostering strong relationships with our clients.
                  </p>
                </div>

                <div className="shadow-md text-center p-5 rounded-xl bg-textColor hover:translate-y-1 transition-all">
                  <h2 className="text-xl text-headingColor font-bold">Our Vision</h2>
                  <span className="w-[90px] mx-auto h-1 bg-green300 rounded-full block"></span>
                  <p className="text-green300 text-[16px] mt-5">
                  To be a global leader in digital transformation and IT services, enabling businesses to achieve their full potential in a connected and competitive world. We aspire to create a future where technology and marketing converge seamlessly, helping organizations of all sizes thrive in the ever-evolving digital landscape.
                  </p>
                </div>
              

            </div>
          </div>

          <div className="w-full h-[460px] lnbg rounded-xl overflow-hidden">
            <img src={Image} alt="" className='w-full h-[460px] object-cover rounded-xl hover:scale-[1.1] transition-all' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutMission
