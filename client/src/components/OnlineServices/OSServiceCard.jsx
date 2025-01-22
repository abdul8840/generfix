import React from 'react'
import { BsArrowRight } from "react-icons/bs"
import { Link } from 'react-router-dom'

const OSServiceCard = ({ onlineServices }) => {
  const getShortDescription = (longDescription) => {
    if (!longDescription) return "";
    const words = longDescription.split(' ');
    const first50Words = words.slice(0, 50).join(' ');
    return first50Words + (words.length > 50 ? '...' : '');
  }

  return (
    <section className="mt-[100px]">
      <div className="container">
      <div className="mb-10 mx-5 text-center">
          <p className="subheading">Explore Our All</p>
          <h2 className="heading">Digital <span className="text-green300">Marketing </span>Services <span className="text-green300">withus</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-5">
          {
            onlineServices.map((service, index) => (
              <div className='py-[30px] px-3 lg:px-5 shadow-lg hover:shadow-2xl hover:border hover:rounded-b-[40px] transition-all' key={index}>
                <img src={service.contImg} className='w-full h-[200px] object-cover' alt="" />
                <h2 className="text-[22px] leading-9 text-headingColor font-[700] bg-gray-50 p-2 text-center">
                  {service.name}
                </h2>
                <p className="text-[15px] leading-7 font-[400] text-green300 mt-4">
                  {getShortDescription(service.shortDescription)} {/* Display shortened description */}
                </p>

                <div className="flex items-center justify-between mt-[30px]">
                  <Link to={`/services/${service.id}`} className='py-2 px-4 rounded-md border border-solid border-green300 mt-[30px] flex items-center justify-center group hover:bg-textColor hover:border-black shadow-md transition-all'>
                    Read More <BsArrowRight className='group-hover:text-green300 w-6 h-5 pl-2' />
                  </Link>

                  <span className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-bold mt-[30px] bg-textColor">
                    {index + 1}
                  </span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default OSServiceCard;
