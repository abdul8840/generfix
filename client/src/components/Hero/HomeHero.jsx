import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import React Icons
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Image1 from '../../assets/images/homec1.jpg';
import Image2 from '../../assets/images/homec2.jpg';
import Image3 from '../../assets/images/homec3.jpg';
import { Link } from "react-router-dom";

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: Image1,
      heading: "Tech Troubles? We’ve Got You Covered!",
      heading2: "Need to Fix Your Laptop, Mobile, or PC? We're Here to Help!",
      description: "From diagnostics to repairs, we ensure your devices are back in action quickly with professional service and quality assurance.",
      buttonText: "Learn More",
      buttonLink: "/repair-services"
    },
    {
      src: Image2,
      heading: "Simplifying IT, Amplifying Success",
      heading2: "Enhance Your PC Performance with Our Expert IT Solutions!",
      description: "Transform your business with our tailored IT services, including network management, software development, and 24/7 support designed to keep your systems running seamlessly.",
      buttonText: "Get Started",
      buttonLink: "/it-solutions"
    },
    {
      src: Image3,
      heading: "Your Growth, Our Mission",
      heading2: "Want to Grow Your Business? We’ve Got the Perfect Digital Marketing Solutions!",
      description: "Maximize your online presence with data-driven digital marketing solutions, from targeted ads to conversion optimization, to ensure measurable growth.",
      buttonText: "Start Now",
      buttonLink: "/digital-marketing-services"
    },
  ];

  // Function to handle slide change
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Function to go to the previous slide
  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 10000); // Change slide every 4 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container relative">
  <div className="w-full h-[50vh] md:h-[70vh] overflow-hidden rounded-2xl relative">
    <div
      className="relative w-full h-full mt-0 md:mt-10 flex transition-transform duration-1000 ease-in-out"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="w-full h-full flex-shrink-0 relative rounded-2xl overflow-hidden" // Added rounded-2xl for border radius
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-40 ">
            <div className="text-center text-white px-4 max-w-[700px]">
              <h2 className="text-md sm:text-lg md:text-xl font-bold mb-2 text-textColor">{image.heading}</h2>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5">{image.heading2}</h2>
              <p className="mb-8 text-[12px] sm:text-[14px] md:text-[16px]">{image.description}</p>
              <Link
                to={image.buttonLink}
                className=" bg-transparent border-2 border-solid border-green300 hover:bg-green300 hover:text-white transition-all font-bold p-1 rounded-xl py-2 px-5"
              >
                {image.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Left Arrow */}
  <div
    onClick={goToPreviousSlide}
    className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
  >
    <MdOutlineKeyboardArrowLeft size={30} />
  </div>

  {/* Right Arrow */}
  <div
    onClick={goToNextSlide}
    className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
  >
    <MdOutlineKeyboardArrowRight size={30} />
  </div>

  {/* Radio buttons for manual navigation */}
  <div className="flex justify-center items-center absolute bottom-2 left-1/2 transform -translate-x-1/2">
    {images.map((_, index) => (
      <label key={index} htmlFor={`slide-${index}`}>
        <input
          type="radio"
          id={`slide-${index}`}
          name="slide"
          checked={index === currentSlide}
          onChange={() => handleSlideChange(index)}
          className="hidden" // Hides the radio input
        />
        <span
          className={`w-2.5 h-2.5 rounded-full mx-1 cursor-pointer transition-colors duration-200 ${
            index === currentSlide ? 'bg-black' : 'bg-gray-400'
          }`}
          style={{
            display: 'inline-block',
            borderRadius: '50%',
            width: '10px', // Decreased size
            height: '10px', // Decreased size
            backgroundColor: index === currentSlide ? 'black' : '#c4c4c4', // Black for active, gray for inactive
          }}
        />
      </label>
    ))}
  </div>
</div>

  );
};

export default HomeHero;
