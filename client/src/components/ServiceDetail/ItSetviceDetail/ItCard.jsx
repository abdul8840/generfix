import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

const ItCard = ({ itsolServices }) => {
  return (
    <section className="contentbg mt-[100px] py-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mx-5">

          {
            itsolServices.mainPoints.map((item, index) => (
              <div className=" shadow-lg rounded-lg bg-white flex flex-col gap-5 py-7 px-5 hover:translate-y-2 transition" key={index}>
                <FaCircleCheck className='block mx-auto text-6xl shadow-xl rounded-full' />

                <h2 className='text-center font-bold'>{item}</h2>

              </div>

            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ItCard
