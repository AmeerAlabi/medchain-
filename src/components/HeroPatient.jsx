import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import mobileBg from '../Assets/Images/mobile.png'; // Replace with your mobile image path
import desktopBg from '../Assets/Images/herobg.png'; // Replace with your desktop image path

const HeroPatient = () => {
  return (
    <div className="hero-patient-background relative flex w-full h-screen bg-cover bg-center">
      {/* Overlay for faded background behind text */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ffffffcc] to-transparent"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-[700px] px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16 flex flex-col justify-center ml-4 sm:ml-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FB6833]">
          For Individuals
        </h2>
        <h1
          className="text-3xl sm:text-5xl lg:text-5xl font-extrabold mt-4 leading-tight text-black"
          style={{ lineHeight: 1.5 }}
        >
          Healthcare Services, {""} <br />
          <span className="text-[#6833FB]">Your Health Records, </span> <br />
          Anytime, Anywhere.
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="cursor-not-allowed  w-full sm:w-48 lg:w-56 h-12 bg-[#6833FB] text-white text-lg sm:text-xl font-semibold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            Get Started Now
          </button>
          <button className=" cursor-not-allowed w-full sm:w-48 lg:w-56 h-12 border-2 border-[#6833FB] text-[#6833FB] text-lg sm:text-xl font-medium rounded-lg shadow-lg flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105">
            Book a Demo
          </button>
        </div>
      </div>

      {/* Scoped CSS for Responsive Backgrounds */}
      <style>
        {`
          .hero-patient-background {
            background-image: url(${mobileBg});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }

          @media (min-width: 640px) {
            .hero-patient-background {
              background-image: url(${desktopBg});
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeroPatient;
