import React from 'react'
import Icon1 from '../../assets/gifIcons/phone-pic.gif'
import Icon2 from '../../assets/gifIcons/expert.gif'
import Icon3 from '../../assets/gifIcons/mechanic.gif'
import Icon4 from '../../assets/gifIcons/pickup-truck.gif'

const work = [
  {
    icon: Icon1,
    title: 'Schedule a Pickup:',
    info: 'Call or book online to arrange a convenient time for us to collect your device.',
  },
  {
    icon: Icon2,
    title: 'Expert Diagnosis:',
    info: 'Our technicians will assess the issue and provide a clear estimate before starting any work.',
  },
  {
    icon: Icon3,
    title: 'Fast Repair:',
    info: 'Once approved, we’ll get straight to work, ensuring your device is fixed as quickly as possible.',
  },
  {
    icon: Icon4,
    title: 'Drop-off:',
    info: 'We’ll return your device to your doorstep, good as new! ',
  },
]

const AboutWork = () => {
  return (
    <section className="mt-[100px] aboutcontbg py-20">
          <div className="container">
            <div className="mb-10 text-center">
            <p className="subheading">Working Process</p>
            <h2 className="heading text-white">How <span className="text-green300">It</span> Works </h2>
              </div>
            <div className="flex flex-col md:flex-row items-center justify-between text-center mx-5 gap-8">
    
              {
                work.map((item, index) => (
                  <div key={index} className="border p-4 bg-green300 bg-opacity-30 w-[350px] h-full md:h-[250px] rounded-tl-3xl rounded-br-3xl hover:translate-y-2 hover:shadow-xl transition-all">
                <div className="w-[80px] h-[80px] bg-textColor block mx-auto hover:border-8 hover:border-solid hover:border-green300 hover:rotate-[360deg] transition-all rounded-full">
                  <img src={item.icon} alt="" className="w-full rounded-full p-2" />
                </div>
                <h2 className="text-xl font-bold text-white mt-5">{item.title}</h2>
                <p className="text-md text-white mt-2">{item.info}</p>
              </div>
                ))
              }
    
            </div>
          </div>
        </section>
  )
}

export default AboutWork
