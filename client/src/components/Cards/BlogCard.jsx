"use client";

import React from "react";
import { Card } from "flowbite-react";
import Image1 from "../../assets/images/mobile.jpg";
import Image2 from "../../assets/images/laptop.jpg";
import Image3 from "../../assets/images/ipad.jpg";
import Image4 from "../../assets/images/tablet.jpg";
import Image5 from "../../assets/images/pchardware.jpg";
import Image6 from "../../assets/images/computer.jpg";
import Image7 from "../../assets/images/pcupgrade.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { repairServices } from "../../assets/data/repairServices";


// const cardContent = [
//   {
//     image: Image1,
//     name: "Mobile Repair Services",
//     title: "Expert Mobile Repairs You Can Trust",
//     desc: "We specialize in repairing all types of mobile phone issues, including screen replacements, battery replacements, charging port repairs, and software troubleshooting. Whether it's an Android or iPhone, we ensure your device is restored to perfect working condition quickly and efficiently.",
//   },
//   {
//     image: Image2,
//     name: "Laptop Repair Services",
//     title: "Get Your Laptop Running Like New Again",
//     desc: "Facing issues with your laptop? From cracked screens and faulty keyboards to slow performance and overheating problems, we provide comprehensive laptop repair services for all major brands. Our experts ensure your device is back to peak performance in no time.",
//   },
//   {
//     image: Image3,
//     name: "iPad Repair Services",
//     title: "Reliable iPad Repairs for Every Issue",
//     desc: "Is your iPad screen broken, or is it not charging? We offer professional iPad repair services, including screen replacements, battery repairs, and hardware diagnostics. Trust us to restore your device to optimal functionality.",
//   },
//   {
//     image: Image4,
//     name: "Tablet Repair Services",
//     title: "Expert Repairs for All Tablet Models",
//     desc: "Whether it's a Samsung, Lenovo, or other tablet brands, we fix issues like broken screens, unresponsive touchscreens, and hardware malfunctions. Enjoy your tablet as good as new with our quick and reliable service.",
//   },
//   {
//     image: Image5,
//     name: "PC Hardware Repair Services",
//     title: "Hardware Repairs for Your Desktop PC",
//     desc: "From upgrading components to fixing hardware failures, we provide top-notch repair services for desktop PCs. Whether it’s a motherboard issue, a faulty hard drive, or a RAM upgrade, we have the expertise to handle it all.",
//   },
//   {
//     image: Image6,
//     name: "Computer Screen Replacement",
//     title: "Crystal Clear Screens Restored",
//     desc: "Broken or malfunctioning computer screen? Our screen replacement services cover laptops and desktops, ensuring vibrant and flawless displays for your work or entertainment needs.",
//   },
//   {
//     image: Image7,
//     name: "Hardware Upgrades",
//     title: "Boost Your Device Performance",
//     desc: "Enhance your PC or laptop’s speed and performance with our hardware upgrade services. From installing SSDs to increasing RAM capacity, we ensure your device is ready for modern demands.",
//   },
// ];

const BlogCard = () => {
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

        <div className="flex flex-wrap justify-between mb-8">
          <div className="">
            <p className="text-[14px] text-green300 font-bold">Our Repair Services</p>   
            <h2 className="text-3xl text-headingColor font-bold">Make Your Devices <span className="text-green300">Run</span> Like <span className="text-green300">New Again!</span></h2>
          </div>
          <div className="">
            <Link to="/repair-services">
              <GoArrowUpRight className='bg-green300 text-[40px] text-white font-bold p-2 rounded-full hover:bg-white hover:text-green300 hover:border hover:border-solid hover:border-green300 transition-all' />
            </Link>
          </div>
        </div>

        <div
          ref={scrollContainer}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          {repairServices.map((item, index) => (
            <Link to={`/repair-services/${item.id}`}>
              <Card
              className="min-w-[100%] h-[500px] md:min-w-[300px] max-w-[350px] flex-shrink-0 shadow-md snap-center hover:bg-textColor"
              key={index}
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={item.contImg}
            >
              <p className="text-green300 text-md md:text-lg">{item.name}</p>
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.heading}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.shortDescription}
              </p>
            </Card>
            </Link>
          ))}
        </div>
        {/* Arrows positioned below */}
        <div className="flex justify-start mt-4 gap-5">
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

export default BlogCard;
