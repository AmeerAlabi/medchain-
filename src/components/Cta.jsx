import React from 'react';

const Cta = () => {
  return (
    <div className="flex justify-center items-center w-full bg-[#F4F7FA] h-auto py-10 md:py-20">
      <div className="p-[50px] flex flex-col justify-center items-center w-full max-w-[850px]  bg-white rounded-[15px] shadow-lg">
        <h1 className="text-[28px] md:text-[36px] font-[500] text-[#44444F] text-center">
          Ready to take your healthcare experience to the next level?
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center mt-[20px] gap-[15px] w-full">
          <button className="w-full md:w-[180px] h-[48px] rounded-[5px] bg-[#6833FB] text-white flex justify-center items-center cursor-pointer text-[14px] font-[400] transition duration-300 hover:bg-[#5b29d1]">
            Get started now
          </button>
          <button className="w-full md:w-[180px] h-[48px] rounded-[5px] border-[#6833FB] text-[#6833FB] flex justify-center items-center border-[2px] cursor-pointer text-[14px] font-[400] transition duration-300 hover:bg-[#6833FB] hover:text-white">
            Download app
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;