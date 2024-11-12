import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import bg from '../Assets/Images/bg.png';

const Hero = () => {
  return (
    <div
      className="relative flex w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for faded background behind text */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff84] to-transparent"></div>

      {/* Content Wrapper */}
      <div className="relative ml-4 sm:ml-8 mt-[50px] sm:mt-[30px] z-10 w-full flex justify-start flex-col max-w-[690px] px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FB6833]">
          MedChain
        </h2>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 leading-tight text-black">
          Transforming Healthcare with{' '}
          <span className="text-[#6833FB]">Secure EHR Solutions</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-normal mt-6 text-gray-300">
          A transformative approach to managing healthcare records and
          monitoring diseases, enhancing healthcare delivery in Africa.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-start gap-4 mt-8">
          <div className="cursor-pointer font-semibold text-lg sm:text-xl flex justify-center items-center bg-[#6833FB] rounded-lg w-full sm:w-48 lg:w-56 text-white h-12 transition duration-300 transform hover:scale-105">
            Get Started Now
          </div>
          <div className="cursor-pointer flex gap-2 p-3 justify-center md:justify-start items-center rounded-lg w-full sm:w-48 lg:w-56 h-12 bg-white/80 shadow-lg transition duration-300 transform hover:scale-105">
            <FaPlayCircle className="text-[#636363]" size={20} />
            <span className="font-medium text-[#636363]">How It Works</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
