import React, { useState } from 'react';
import pic from '../Assets/Images/bg.png';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Testimonies = () => {
  const [currentTestimony, setCurrentTestimony] = useState(0);
  const [activeButton, setActiveButton] = useState("next"); // Track which button is active

  // Array of testimonials to switch between
  const testimonies = [
    {
      text: "MedChain integrates with existing healthcare infrastructure, allowing healthcare providers to use information from all points along the care continuum. This integration enables efficient and timely decision-making in patient care.",
      name: "Dr. Merch",
      pic: pic
    },
    {
      text: "MedChain integrates with existing healthcare infrastructure, allowing healthcare providers to use information from all points along the care continuum. This integration enables efficient and timely decision-making in patient care.",
      name: "Dr. Merch",
      pic: pic
    },
    {
      text: "MedChain integrates with existing healthcare infrastructure, allowing healthcare providers to use information from all points along the care continuum. This integration enables efficient and timely decision-making in patient care.",
      name: "Dr. Merch",
      pic: pic
    },
  ];

  const handleNextTestimony = () => {
    setActiveButton("next");
    setCurrentTestimony((prev) => (prev + 1) % testimonies.length); // Loop back to the first testimony
  };

  const handlePrevTestimony = () => {
    setActiveButton("prev");
    setCurrentTestimony((prev) => (prev - 1 + testimonies.length) % testimonies.length); // Loop to the last testimony
  };

  return (
    <div className='w-full bg-[#FCFDFE] p-5 md:p-[30px]'>
      <div className="w-[150px] md:w-[218px] h-[40px] md:h-[51px] rounded-[40px] mx-auto mt-[10px] border border-[#DEDEDE] flex justify-center items-center text-[12px] md:text-[14px] text-[#6F7177] font-[500]">
        Impact
      </div>

      <h2 className="text-[28px] md:text-[40px] text-center mt-[18px] mb-[50px] font-[600]">
        What <span className="text-[#6833FB]">People</span> say About us
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center mt-[20px] gap-5 md:gap-[100px]">
        <div className="flex justify-center items-center rounded-full border-dashed border-[#F6F6F6] border-[6px] bg-[#DEEFFE] w-[200px] h-[200px] md:w-[284px] md:h-[284px]">
          <img src={testimonies[currentTestimony].pic} alt="" className="w-[120px] h-[120px] md:w-[189px] md:h-[189px] rounded-full" />
        </div>
        <div className="flex justify-start items-start">
          <div className="flex-col flex justify-center items-start w-full md:w-[600px] h-auto bg-[white] shadow-md rounded-[50px] p-5 md:p-[30px] text-[#6F7177] mt-[20px]">
            <h3 className="text-[18px] md:text-[20px] font-[400]">
              {testimonies[currentTestimony].text}
            </h3>
            <p className="text-[14px] md:text-[16px] font-[500] text-[#6833FB]">{testimonies[currentTestimony].name}</p>
          </div>
        </div>
      </div>

      {/* Chevron controls */}
      <div className="flex justify-center mt-[20px] gap-[20px]">
        <button
          onClick={handlePrevTestimony}
          className={`p-2 rounded-full text-[20px] md:text-[30px] ${
            activeButton === "prev" ? "bg-[#6833FB] text-white" : "bg-gray-300 text-black"
          }`}
        >
          <BiChevronLeft size={30} />
        </button>
        <button
          onClick={handleNextTestimony}
 className={`p-2 rounded-full text-[20px] md:text-[30px] ${
            activeButton === "next" ? "bg-[#6833FB] text-white" : "bg-gray-300 text-black"
          }`}
        >
          <BiChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Testimonies;