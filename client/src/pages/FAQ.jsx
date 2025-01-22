// src/FAQ.js
import React, { useState } from 'react';
import FAQimg from '../assets/images/faq.png'

const faqData = [
  {
    question: 'What is digital marketing?',
    answer: 'Digital marketing refers to the use of online platforms and technologies to promote products or services, encompassing strategies like SEO, social media marketing, and email marketing.',
  },
  {
    question: 'Why is digital marketing important for my business?',
    answer: 'It allows businesses to reach a broader audience, improve brand visibility, and connect with customers in real-time.',
  },
  {
    question: 'How do I choose the right digital marketing strategy for my business?',
    answer: 'Consider your business goals, target audience, and budget. Consulting with a digital marketing agency can help tailor the right strategy.',
  },
  {
    question: 'How long does it take to see results from digital marketing?',
    answer: 'The timeline for seeing results from digital marketing varies based on the strategy employed. For instance, SEO can take several months to show significant results due to the time it takes for search engines to index changes. In contrast, pay-per-click (PPC) advertising can yield immediate results. Consistent effort and monitoring are key to achieving and maintaining success in digital marketing.',
  },
  {
    question: 'What is content marketing, and why is it important?',
    answer: 'Content marketing involves creating and distributing valuable content to attract and engage a specific audience. It can include blog posts, videos, infographics, and social media posts. Content marketing is important because it helps establish your brand as an authority in your industry, improves SEO, and builds trust with your audience, ultimately leading to increased conversions and customer loyalty.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track the currently open question

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the open index
  };

  return (
    <section className="">
      <div className="container">
      <div className="mb-10 pt-20 mx-5 text-center">
          <p className="subheading">Digital Marketing FAQ</p>
          <h2 className="heading">Digital Marketing <span className="text-green300">Most</span> asked <span className="text-green300"> questions</span></h2>
        </div>
      <div className="flex flex-col items-center justify-between md:flex-row gap-8 mx-5">

        <div className="flex-1 rounded-2xl bg-textColor">
          <img src={FAQimg} className='w-full hover:scale-[1.1] transition' alt="" />
        </div>
        
        <div className="flex-1 space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index} // Check if the current item is open
              onToggle={() => handleToggle(index)} // Pass the toggle function
            />
          ))}
        </div>
      </div>
      </div>

      <div className="container">
      <div className="mb-10 pt-20 mx-5 text-center">
          <p className="subheading">IT Solution FAQ</p>
          <h2 className="heading">IT Solutions <span className="text-green300">Most</span> asked <span className="text-green300"> questions</span></h2>
        </div>
      <div className="flex flex-col items-center justify-between md:flex-row gap-8 mx-5">

        <div className="flex-1 rounded-2xl bg-textColor">
          <img src={FAQimg} className='w-full hover:scale-[1.1] transition' alt="" />
        </div>
        
        <div className="flex-1 space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index} // Check if the current item is open
              onToggle={() => handleToggle(index)} // Pass the toggle function
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out">
      <div
        className="border-2 border-gray-300 rounded-xl p-4 cursor-pointer flex justify-between items-center transition-all duration-300 ease-in-out"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          ▼
        </span>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? 'max-h-40' : 'max-h-0'
        } bg-white border-t`}
      >
        <p className="p-4 text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
