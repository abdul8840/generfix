import React from 'react'
import Icon1 from '../../assets/gifIcons/like.gif'
import Icon2 from '../../assets/gifIcons/chat.gif'
import Icon3 from '../../assets/gifIcons/computer.gif'
import Icon4 from '../../assets/gifIcons/like.gif'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom'

const solutionCard = [
  {
    icon: Icon1,
    title: "Simplified IT Solutions",
    description: "We eliminate complexity by delivering user-friendly IT solutions that are easy to implement and manage. Our focus is on making technology accessible to everyone, regardless of technical expertise.",
  },
  {
    icon: Icon2,
    title: "Seamless Communication",
    description: "Effective communication is the key to successful IT projects. We prioritize clear and transparent interactions to ensure your needs are understood and delivered with precision.",
  },
  {
    icon: Icon3,
    title: "Customized IT Services",
    description: "No two businesses are the same, and neither are our solutions. We tailor our IT services to align with your specific goals and challenges, providing a unique approach to every project.",
  },
]

const AboutOfferCard = () => {
  return (
    <section className='mt-[100px] mx-5'>
      <div className="container">
        <div className="mb-20 mx-5">
          <p className="subheading">IT Solutions</p>
          <h2 className="heading">How we <span className="text-green300">Solved</span> the <span className="text-green300">Problems</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {solutionCard.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-5 border-2 border-solid p-5 rounded-[10px] hover:shadow-md bg-white hover:bg-textColor hover:skew-x-2 transition-all">
              <img src={item.icon} alt={item.title} className="w-[100px]
                  h-[100px] md:w-[100px] md:h-[100px] object-cover
                  rounded-[50%] md:rounded-[100%]"/>

              <h2 className="text-2xl font-bold text-headingColor">{item.title}</h2>
              <span className="w-[100px] h-1 bg-green300 rounded-full block mt-[-14px] "></span>

              <p className="text-[16px] text-green300 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutOfferCard
