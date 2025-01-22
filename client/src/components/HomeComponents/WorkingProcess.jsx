import React from 'react'
import Icon1 from '../../assets/gifIcons/bar-chart.gif'
import Icon2 from '../../assets/gifIcons/book.gif'
import Icon3 from '../../assets/gifIcons/computer.gif'
import Icon4 from '../../assets/gifIcons/target.gif'

const WorkingProcess = () => {
  return (
    <section className="mt-[100px] contentbg pb-40 pt-20">
      <div className="container">
        <div className="mb-10 md:mb-[200px] text-center">
        <p className="subheading">Working Process</p>
        <h2 className="heading text-white">How are <span className="text-green300">Team</span> Works <span className="text-green300">with project</span></h2>
          </div>
        <div className="flex flex-col md:flex-row items-center justify-between text-center mx-5 gap-8">

          <div className="w-full md:mb-[-100px]">
            <div className="w-[130px] h-[130px] bg-textColor block mx-auto hover:border-8 hover:border-solid hover:border-green300 hover:rotate-[360deg] transition-all rounded-full">
              <img src={Icon1} alt="" className="w-full rounded-full p-2" />
            </div>
            <h2 className="text-2xl font-bold text-white mt-5">Understanding Your Needs</h2>
          </div>

          <div className="w-full md:mt-[-200px]">
            <div className="w-[130px] h-[130px] bg-textColor block mx-auto hover:border-8 hover:border-solid hover:border-green300 hover:rotate-[360deg] transition-all rounded-full">
              <img src={Icon2} alt="" className="w-full rounded-full p-2" />
            </div>
            <h2 className="text-2xl font-bold text-white mt-5">Research and Planning</h2>
          </div>

          <div className="w-full md:mb-[-100px]">
            <div className="w-[130px] h-[130px] bg-textColor block mx-auto hover:border-8 hover:border-solid hover:border-green300 hover:rotate-[360deg] transition-all rounded-full">
              <img src={Icon3} alt="" className="w-full rounded-full p-2" />
            </div>
            <h2 className="text-2xl font-bold text-white mt-5">Implementation and Development</h2>
          </div>

          <div className="w-full md:mt-[-200px]">
            <div className="w-[130px] h-[130px] bg-textColor block mx-auto hover:border-8 hover:border-solid hover:border-green300 hover:rotate-[360deg] transition-all rounded-full">
              <img src={Icon4} alt="" className="w-full rounded-full p-2" />
            </div>
            <h2 className="text-2xl font-bold text-white mt-5">Testing and Launching</h2>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WorkingProcess
