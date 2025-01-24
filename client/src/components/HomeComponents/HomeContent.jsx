import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const exp = [
  {
    head: 4,
    desc: "Years of Experience",
    bgColor: 'red',
  },
  {
    head: 6,
    desc: "Experienced Team",
    bgColor: 'yellow',
  },
  {
    head: 20,
    desc: "Number of Services",
    bgColor: 'green',
  },
  {
    head: 50,
    desc: "Happy Clients",
    bgColor: 'purple',
  },
];

const HomeContent = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
    triggerOnce: true, // Animation triggers only once
  });

  return (
    <div ref={ref} className="mt-[100px]">
      <div className="contentbg py-10 px-5">
        <div className="container">
          <div className="flex gap-5 items-center justify-between">
            {exp.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 text-center"
                
              >
                <h2 className="text-xl md:text-4xl xl:text-5xl font-bold text-white">
                  {inView ? (
                    <CountUp start={0} end={item.head} duration={2} suffix="+" />
                  ) : (
                    "0+"
                  )}
                </h2>
                <span className="w-[50px] h-2 rounded-full block mt-[-16px] mx-auto" style={{ backgroundColor: item.bgColor }}></span>
                <p className="text-[11px] sm:text-[13px] md:text-[14px] xl:[yext-20] text-white font-bold">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
