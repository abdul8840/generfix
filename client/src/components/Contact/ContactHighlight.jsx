import React from 'react'
import icon01 from "../../assets/gifIcons/telephone.gif"
import icon02 from "../../assets/gifIcons/home.gif"
import icon03 from "../../assets/gifIcons/phone.gif"
import icon04 from "../../assets/gifIcons/mail.gif"

const contact = [
  {
    icon: icon01,
    title: "Emergency Call",
    text1: "+1 (786) 505-6525",
    text2: "Monday - Friday: 9am - 5pm",
  },
  {
    icon: icon02,
    title: "Address",
    text1: "821 SW 2nd st #10,",
    text2: "Miami FL 33130",
  },
  {
    icon: icon03,
    title: "Book By Phone",
    text1: "+1 (786) 505-6525",
    text2: " We are available",
  },
  {
    icon: icon04,
    title: "Email Us",
    text1: "ruhan.syed@generationsfix.com",
    text2: "emergencies@denticare.com",
  },
]

const ContactHighlight = () => {
  return (
    <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto mt-[55px]">
            <h2 className='text-3xl font-bold text-center'>Contact <span className='text-green300'>Flowbite</span></h2>
            <p className="text_para text-center">
            Globally incubate standards compliant channels before scalable benefits.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between flex-col md:flex-row gap-5 lg:gap-[30px] mt-[20px] lg:mt-[30px] mx-5">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[20px] lg:mt-[30px] ">

              {
                contact.map((item, index) => (
                  <div className="py-[30px] px-5 shadow-xl rounded-md " key={index}>
                <div className="flex items-center justify-center">
                  <img src={item.icon} className='h-[150px]' alt="" />
                </div>
                <div className="mt-[30px] ">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">{item.title}</h2>
                  <p className="flex flex-col leading-7 text-green300 font-[400] mt-4 text-center">
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                  </p>
                  
                </div>
              </div>
                ))
              }

            </div>
          </div>
        </div>
        
      </section>
  )
}

export default ContactHighlight
