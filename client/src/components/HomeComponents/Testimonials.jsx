import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Rating } from "flowbite-react";

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO',
    imgSrc: 'https://randomuser.me/api/portraits/men/1.jpg',
    twitter: '#',
    linkedin: '#',
    facebook: '#',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam iusto fugit neque tempore nemo.",
  },

  {
    name: 'Jane Smith',
    role: 'CTO',
    imgSrc: 'https://randomuser.me/api/portraits/women/2.jpg',
    twitter: '#',
    linkedin: '#',
    facebook: '#',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam iusto fugit neque tempore nemo.",
  },
  {
    name: 'Samuel Lee',
    role: 'Lead Developer',
    imgSrc: 'https://randomuser.me/api/portraits/men/3.jpg',
    twitter: '#',
    linkedin: '#',
    facebook: '#',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam iusto fugit neque tempore nemo.",
  },
  {
    name: 'Emily Johnson',
    role: 'Designer',
    imgSrc: 'https://randomuser.me/api/portraits/women/4.jpg',
    twitter: '#',
    linkedin: '#',
    facebook: '#',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam iusto fugit neque tempore nemo.",
  },
  {
    name: 'Emily Johnson',
    role: 'Designer',
    imgSrc: 'https://randomuser.me/api/portraits/women/4.jpg',
    twitter: '#',
    linkedin: '#',
    facebook: '#',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam iusto fugit neque tempore nemo.",
  },
  {
    name: 'Emily Johnson',
    role: 'Designer',
    imgSrc: 'https://randomuser.me/api/portraits/women/4.jpg',
    twitter: '#',
    linkedin: '#',
    facebook: '#',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam iusto fugit neque tempore nemo.",
  },
];

const Testimonials = () => {

  const scrollContainer = React.useRef(null);

  const scrollLeft = () => {
    const containerWidth = scrollContainer.current.offsetWidth;
    scrollContainer.current.scrollBy({
      left: -containerWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const containerWidth = scrollContainer.current.offsetWidth;
    scrollContainer.current.scrollBy({
      left: containerWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="my-[55px] mx-3 md:mx-0 relative">
      <div className="container">

        <div className="flex flex-wrap justify-between mb-8 mx-5">

          <div className="mb-10">
            <p className="subheading">Testimonials</p>
            <h2 className="heading">See what our <span className="text-green300">clients</span> says <span className="text-green300">about us</span></h2>
          </div>
        </div>

        <div
          ref={scrollContainer}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory mx-5"
        >
          {teamMembers.map((item, index) => (
            <div
              className="min-w-[100%] md:min-w-[300px] max-w-[350px] flex-shrink-0 shadow-md snap-center hover:bg-textColor hover:translate-y-2 transition-all border-4 border-textColor"
              key={index}
            >
              <div className="flex gap-3">
                <div className="w-[35%]">
                  <img src={item.imgSrc} className='w-full h-full object-cover shadow-xl' alt="" />
                </div>
                <div className="w-[65%] py-4">
                  <h5 className="text-xl font-bold tracking-tight text-gray-90">
                    {item.name}
                  </h5>

                  <div className="mb-4">
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </div>

                  <p className="text-[12px] text-green300">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Arrows positioned below */}
        <div className="flex justify-start mt-6 gap-5 mx-5">
          <button
            onClick={scrollLeft}
            className="p-2 bg-green300 text-white rounded-full shadow-lg hover:bg-white hover:text-green300 hover:border hover:border-solid hover:border-green300"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-green300 text-white rounded-full shadow-lg hover:bg-white hover:text-green300 hover:border hover:border-solid hover:border-green300"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

