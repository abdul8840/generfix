import React from 'react'
import { Timeline } from "flowbite-react";
import { MdLibraryAddCheck } from "react-icons/md";


const ItAbout = ({ itsolServices }) => {
  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10 justify-between mx-5">
          <div className="w-full overflow-hidden">
            <img src={itsolServices.aboutImg} className='w-full rounded-xl shadow-lg hover:scale-[1.1] hover:rotate-12 transition-all' alt="" />
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="">
              <p className="text-[14px] md:text-[16px] text-green300 text-bold">{itsolServices.slogan}</p>
              <h2 className='text-xl sm:text-2xl md:text-3xl text-headingColor font-bold'>{itsolServices.name}</h2>

            </div>
            <p className="text-[14px] md:text-[16px] text-green300 text-bold">{itsolServices.longDescription}</p>
            <h2 className="font-bold text-xl">What We Offers</h2>

            <Timeline>
              {
                itsolServices.weOffer.map((service, index) => (
                  <Timeline.Item key={index}>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Body className='flex items-center gap-2'>
                        <MdLibraryAddCheck />
                        <h2 className='text-green300 font-bold'>{service}</h2>
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                ))
              }

            </Timeline>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ItAbout
