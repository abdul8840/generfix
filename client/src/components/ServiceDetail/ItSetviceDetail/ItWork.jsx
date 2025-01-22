import { Timeline } from 'flowbite-react'
import React from 'react'

const ItWork = ({itsolServices}) => {
  return (
    <section className="mt-[100px]">
      <div className="container">
      <div className="mb-20 mx-5">
          <p className="subheading">Team Work</p>
          <h2 className="heading">How <span className="text-green300">it</span> Works</h2>
        </div>
      <Timeline horizontal className='mx-5'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {itsolServices.howWorks.map((step, index) => (
          <Timeline.Item key={index}>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Body>
            <div className="text-center shadow-lg rounded-lg bg-textColor flex flex-col gap-5 py-7 px-5 hover:translate-y-2 transition" key={index}>
                {/* <FaCircleCheck className='block mx-auto text-6xl shadow-xl rounded-full' /> */}

                <h2 className='text-center font-bold text-xl'>{step.hwHead}</h2>
                <p className="text-[14px] md:text-[16px]">{step.hwDesc}</p>

              </div>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        ))}
        </div>
      
      </Timeline>
      </div>
    </section>
  )
}

export default ItWork
