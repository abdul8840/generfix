import React from 'react';
import GenFixLogo from '../../assets/images/genfix.png';
import './MyCard.css';
import QR from '../../assets/images/whatqr.jpg'

const MyCard = () => {
  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="mycard bg-white rounded-md p-5 shadow-2xl">
            <div className="mycard-inner">
              <div className="mycard-front p-5 flex flex-col justify-center items-center border-2 border-gray-400">
                <img src={GenFixLogo} className='w-[200px] object-contain' alt="Logo" />
              </div>
              <div className="mycard-back flex flex-col justify-between p-5 text-center border-2 border-gray-400">
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-bold">Ruhan Syed</h3>
                  <p className="text-sm">Senior account manager</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-sm">+1 (786) 505-6525 </p>
                  <p className="text-sm">ruhan.syed@generationsfix.com</p>
                  <h3 className='text-sm font-[500]'>821 SW 2nd st #10 <br /> Miami FL 33130.</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mycard bg-white rounded-md p-5 shadow-2xl">
            <div className="mycard-inner">
              <div className="mycard-front p-5 flex flex-col justify-center items-center border-2 border-gray-400">
                <img src={GenFixLogo} className='w-[200px] object-contain' alt="Logo" />
              </div>
              <div className="mycard-back flex flex-col justify-between p-5 text-center border-2 border-gray-400">
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-bold">Ruhan Syed</h3>
                  <p className="text-sm">Senior account manager</p>
                </div>
                <div className="flex flex-col items-end">
                  <img src={QR} className='w-[100px]' alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="mycard bg-white rounded-md p-5 shadow-2xl">
            <div className="mycard-inner">
              <div className="mycard-front p-5 flex flex-col justify-center items-center border-2 border-gray-400">
                <img src={GenFixLogo} className='w-[200px] object-contain' alt="Logo" />
              </div>
              <div className="mycard-back flex flex-col justify-between p-5 text-center border-2 border-gray-400">
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-bold">Ruhan Syed</h3>
                  <p className="text-sm">Senior account manager</p>
                </div>
                <div className="flex flex-col items-center border-2">
                <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.956153315275!2d-80.21070922481651!3d25.772011777345472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b692e6051e35%3A0xe2f2e7b3fc0ac9c4!2s821%20SW%202nd%20St%20APT%2010%2C%20Miami%2C%20FL%2033130%2C%20USA!5e0!3m2!1sen!2sin!4v1737027518754!5m2!1sen!2sin"
              className="w-w-full h-[100px] shadow-xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MyCard;
