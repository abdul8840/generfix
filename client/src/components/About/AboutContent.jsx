import React from 'react'
import Image from '../../assets/images/aboutcont3.jpg'
import Icon1 from '../../assets/gifIcons/book.gif'
import Icon2 from '../../assets/gifIcons/computer.gif'
import Icon3 from '../../assets/gifIcons/seo1.gif'
import { PiGlobeStandFill } from "react-icons/pi";
import { Timeline } from "flowbite-react";

const Content = [
  {
    Icon: Icon1,
    head: "Digital Marketing:",
    desc: "We help you to increase your online presence and reach your target audience through various digital marketing strategies.",
  },
  {
    Icon: Icon2,
    head: "IT Services:",
    desc: "We provide a wide range of IT services including software development, software updates, and hardware maintanence.",
  },
  {
    Icon: Icon3,
    head: "Web Development:",
    desc: "We help you to create a professional and user-friendly website that meets your business needs.",
  }
]

const AboutContent = () => {
  return (
    <section className='mt-[100px]'>
      <div className="container">

        <div className="mb-20 mx-5">
          <p className="subheading">Smart Choice</p>
          <h2 className="heading">The Smart <span className="text-green300">Choice for</span> Growth and <span className="text-green300">Innovation</span></h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mx-5">


          <div className="w-full flex flex-col gap-5">

            <div className="flex flex-col gap-3 overflow-hidden">

              <div className="flex items-center gap-2 text-green300 bg-textColor p-2 w-[200px] rounded-[20px]">
                <PiGlobeStandFill className='text-[20px] ' />
                <p className="text-[14px] font-semibold ">WHY CHOOSE US</p>
              </div>
              <h2 className='text-2xl md:text-4xl font-bold text-headingColor'>Empowering Your Business: Why We're the Ideal Choice</h2>
              <p className="text-green300 font-[14px]">At <span className='text-green300 font-semibold'>Generationsfix</span>, we don’t just provide services—we partner with you to unlock your business's full potential.</p>

              <div className="flex flex-col gap-5 mx-5">
                <Timeline>
                {
                  Content.map((item, index) => (
                    <Timeline.Item key={index}>
                <Timeline.Point />
                <Timeline.Content>
                <Timeline.Body>
                <div className="w-full flex items-center justify-between gap-3 border p-1 rounded-md bg-textColor hover:shadow-md hover:bg-white transition-all">
                  <div className="w-[100px]">
                    <img src={item.Icon} className='w-full' alt="" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className='text-lg font-bold text-headingColor'>{item.head}</h3>
                    <p className="text-green300 text-[14px]">{item.desc}</p>
                  </div>
                </div>
                </Timeline.Body>
                </Timeline.Content>
                </Timeline.Item>
                  ))
                }

                
                </Timeline>
                
              </div>


            </div>
          </div>

          <div className="w-full h-[400px] md:h-[550px] lnbg rounded-xl overflow-hidden">
            <img src={Image} alt="" className='w-full h-full object-cover rounded-xl hover:scale-[1.1] transition-all' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutContent
