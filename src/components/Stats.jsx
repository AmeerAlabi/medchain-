import React from 'react';

const Stats = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-[60px] h-auto md:h-[160px] p-6 md:p-[45px] bg-[#f4f7fad9]">
      <div className="w-full md:w-[283px] flex gap-4 items-center text-center md:text-left">
        <h1 className="text-[36px] md:text-[48px] font-[600] text-[#161C2D]">1M+</h1>
        <p className="text-[16px] md:text-[20px] font-[400] text-[#161C2D]">
          Customers visit <br /> every month
        </p>
      </div>

      <div className="w-full md:w-[283px] flex gap-4 items-center text-center md:text-left">
        <h1 className="text-[36px] md:text-[48px] font-[600] text-[#161C2D]">93%</h1>
        <p className="text-[16px] md:text-[20px] font-[400] text-[#161C2D]">
          Satisfaction rate <br /> from our customers
        </p>
      </div>

      <div className="w-full md:w-[283px] flex gap-4 items-center text-center md:text-left">
        <h1 className="text-[36px] md:text-[48px] font-[600] text-[#161C2D]">4.9</h1>
        <p className="text-[16px] md:text-[20px] font-[400] text-[#161C2D]">
          Average customer <br /> rating out of 5.0!
        </p>
      </div>
    </div>
  );
};

export default Stats;
