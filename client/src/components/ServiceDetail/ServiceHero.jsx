import React from 'react'

const ServiceHero = ({onservices}) => {
  return (
    <section className="servicebg py-20">
      <div className="container">
        <div className="flex flex-col gap-5 justify-between items-center mx-5 text-center">
          <p className="text-[14px] md:text-[16px] text-white text-bold">{onservices.slogan}</p>
          <h2 className='text-xl sm:text-2xl md:text-4xl text-white font-bold'>{onservices.heading}</h2>
          {/* <p className="text-[14px] md:text-[16px] text-green300 text-bold">Home/Services/{onservices.name}</p> */}
        </div>
      </div>
    </section>
  )
}

export default ServiceHero
