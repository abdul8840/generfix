import React from 'react'
import { Timeline } from "flowbite-react";
import { MdLibraryAddCheck } from "react-icons/md";
import AbtImg from '../../assets/images/aboutcont1.jpg'

const onservices = [
  {
    title: 'Comprehensive Repairs',
    description: "Cracked screens, battery issues, water damage, software troubleshooting – we’ve got you covered for all types of device problems. "
  },
  {
    title: 'Certified Technicians:',
    description: "Our expert team is trained to handle devices from all major brands, ensuring precision and quality in every repair."
  },
  {
    title: 'Convenient Pickup & Drop Service:',
    description: "Don’t have time to visit us? No problem! We offer a hassle-free pickup and drop-off service across Miami, saving you time and effort."
  },
  {
    title: 'Fast Turnaround:',
    description: "We understand how important your devices are to your daily life. That’s why we aim to complete most repairs within 24 hours."
  },
  {
    title: 'Affordable Pricing:',
    description: "Premium service without the premium price tag. We offer competitive pricing and no hidden fees."
  },
]

const WhyChoose = () => {
  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="mb-20 mx-5">
          <p className="subheading">IT Solutions</p>
          <h2 className="heading">We Offer <span className="text-green300">IT</span> Solutions <span className="text-green300">with</span></h2>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-between mx-5">
          <div className="w-full overflow-hidden">
            <img src={AbtImg} className='w-full h-[300px] sm:h-[400px] md:h-full object-cover rounded-xl shadow-lg hover:scale-[1.1] hover:rotate-3 transition-all' alt="" />
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="">
              <p className="text-[14px] md:text-[16px] text-green300 text-bold">Generations Fix</p>
              <h2 className='text-xl sm:text-2xl md:text-3xl text-headingColor font-bold'>Why Choose <span className="text-green300">Generations Fix?</span></h2>

            </div>
            <p className="text-[14px] md:text-[16px] text-green300 text-bold">At Generations Fix, we specialize in breathing new life into your devices! Whether it's your smartphone, laptop, computer, or tablet, we provide top-quality repair services to get your tech back in perfect working condition. Based in the heart of Miami, we’re committed to offering fast, reliable, and affordable solutions for all your tech repair needs.  </p>
            {/* <h2 className="font-bold text-xl">What We Offers</h2> */}

            <Timeline>
              {
                onservices.map((service, index) => (
                  <Timeline.Item key={index}>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Title className='flex items-center gap-2'>
                        <MdLibraryAddCheck />
                        <h2 className='text-black font-bold'>{service.title}</h2>
                      </Timeline.Title>
                      <Timeline.Body>
                        <p className='text-green300 text-[14px] font-bold'>{service.description}</p>
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

export default WhyChoose
