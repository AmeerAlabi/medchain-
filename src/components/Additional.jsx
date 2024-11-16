import React from 'react';
import client from '../Assets/Images/Client (1).png';

const Additional = () => {
  return (
    <div className="relative w-full p-6 bg-[#FCFDFE]">
      <h3 className="text-[24px] md:text-[32px] font-[600] text-center">
        Healthcare Providers’{' '}
        <span className="text-[#6833fb]">
          Additional <br className="hidden md:block" /> Features
        </span>
      </h3>

      {/* Image Section as Background */}
      <div className="absolute inset-0 z-0 flex justify-center items-center mt-8">
        <img
          src={client}
          alt="Healthcare Illustration"
          className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-contain opacity-90"
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-[80px] mt-12 justify-center items-center">
        {/* Card 1 */}
        <div className="bg-white p-6 shadow-md rounded-2xl w-full max-w-[450px] h-auto flex flex-col items-start">
          <div className="w-12 h-12 bg-gray-100 text-[24px] font-[500] flex justify-center items-center text-[#013772] rounded-full">
            1
          </div>
          <h3 className="text-lg md:text-xl mt-4 font-semibold text-[#013772]">
            Monitor and Track Patient Health Effectively
          </h3>
          <p className="text-sm md:text-base font-normal text-[#6F7177] mt-2">
            Gain access to your patients’ health records to monitor their health status and progress over time. Provide better care with comprehensive and up-to-date information.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 shadow-md rounded-2xl w-full max-w-[450px] h-auto flex flex-col items-start">
          <div className="w-12 h-12 bg-gray-100 text-[24px] font-[500] text-[#FB6833] rounded-full flex justify-center items-center">
            2
          </div>
          <h3 className="text-lg md:text-xl mt-4 font-semibold text-[#FB6833]">
            Efficient Appointment and Communication Management
          </h3>
          <p className="text-sm md:text-base font-normal text-[#6F7177] mt-2">
            Manage your availability and easily schedule appointments or calls with patients. Increase your visibility to patients and hospitals by showcasing your profile and specialties.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative z-10 flex justify-center items-center mt-12">
        <div className="bg-white p-6 shadow-md rounded-2xl w-full max-w-[480px] h-auto flex flex-col items-start">
          <div className="w-12 h-12 bg-gray-100 rounded-full text-[#86148A] flex justify-center items-center font-[500] text-[24px]">
            3
          </div>
          <h3 className="text-lg md:text-xl mt-4 font-semibold text-[#86148A]">
            Advanced Search for Specialized Care
          </h3>
          <p className="text-sm md:text-base font-normal text-[#6F7177] mt-2">
            Allow patients to search for doctors by specialty, field of expertise, or specific conditions. Enable them to find hospitals filtered by services, departments, and specialties related to specific diseases for tailored healthcare solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Additional;
