import React from 'react';
import { Card } from "flowbite-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

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

const OurTeamSlider = () => {

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
          <p className="subheading">Our Team Members</p>
          <h2 className="heading">Meet ou <span className="text-green300">amazing</span> team <span className="text-green300">members</span></h2>
        </div>
        </div>

        <div
          ref={scrollContainer}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory mx-5"
        >
          {teamMembers.map((item, index) => (
            <Card
              className="min-w-[100%] md:min-w-[300px] max-w-[350px] flex-shrink-0 shadow-md snap-center hover:bg-textColor hover:translate-y-2 transition-all "
              key={index}
            >
              <FaHeart className='text-green300  text-xl mb-2' />
              <div className="">
                <img src={item.imgSrc} className='w-[100px] h-[100px] rounded-full block mx-auto border-4 border-green300 shadow-xl' alt="" />
              </div>
              <h5 className="text-2xl text-center font-bold tracking-tight text-gray-90">
                {item.name}
              </h5>
              <p className="font-semibold text-center text-green300 mt-[-15px]">
                {item.role}
              </p>

              <div className="flex items-center gap-3 justify-center">
                <Link to='/' className="text-green300 hover:text-black transition text-3xl">
                  <FaSquareInstagram />
                </Link>
                <Link to='/' className="text-green300 hover:text-black transition text-3xl">
                  <FaFacebookSquare />
                </Link>
                <Link to='/' className="text-green300 hover:text-black transition text-3xl">
                  <FaLinkedin />
                </Link>
                <Link to='/' className="text-green300 hover:text-black transition text-3xl">
                  <FaGithubSquare />
                </Link>
              </div>

              <p className="text-[14px] text-green300 text-center">{item.desc}</p>
            </Card>
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

export default OurTeamSlider;
