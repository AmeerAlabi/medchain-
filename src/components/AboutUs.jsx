import React from 'react';
import img from '../Assets/Images/Illustration (2).png';

const AboutUs = () => {
  return (
    <div className="h-full py-[70px] w-full px-4 md:px-[30px] bg-[#FCFDFE]">
      <div className="w-[150px] md:w-[218px] h-[40px] md:h-[51px] rounded-[40px] mx-auto mt-[10px] border border-[#DEDEDE] flex justify-center items-center text-[12px] md:text-[14px] text-[#6F7177] font-[500]">
        About
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-[20px] items-center gap-8 md:gap-[20px]">
        {/* Responsive Image */}
        <img src={img} alt="" className="w-full max-w-[350px] md:max-w-[590px] h-auto md:h-[380px]" />

        {/* Text Content */}
        <div className="flex flex-col gap-[10px] text-center md:text-left px-4 md:px-0">
          <h1 className="text-[28px] md:text-[48px] font-[600] text-black">
            <span className="text-[#6833FB]">Health Record</span> Computing Database System
          </h1>
          <p className="text-[16px] md:text-[20px] font-[400] text-[#6F7177]">
            MedChain is a health record computing database system leveraging blockchain technology and a pay-as-you-use model to improve healthcare delivery, enhance patient outcomes, and contribute to the advancement of healthcare in Africa.
          </p>
          <div className="cursor-pointer mt-[10px] flex justify-center items-center rounded-[12px] bg-[#6833FB] w-full max-w-[150px] md:max-w-[180px] h-[48px] text-white text-[16px] md:text-[18px] font-[500] mx-auto md:mx-0">
            Get started now
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
