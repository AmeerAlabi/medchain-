import React from 'react';
import client from '../Assets/Images/Client (1).png';

const Additional = () => {
  return (
    <div className='relative w-full p-[30px] bg-[#FCFDFE]'>
      <h3 className="text-[32px] font-[600] text-center">
        Healthcare Providers’ <span className="text-[#6833fb]">Additional <br /> Features</span>
      </h3>

      {/* Image Section as Background */}
      <div className="absolute inset-0 z-0 flex justify-center items-center mt-8">
        <img
          src={client}
          alt="Healthcare Illustration"
          className=" w-[250px] h-[250px] object-contain opacity-90" // Adjust width and opacity as needed
        />
      </div>

      <div className="relative z-10 flex gap-[80px] mt-[30px] justify-center items-center">
        <div className="bg-white p-6 shadow-md rounded-2xl w-[450px] h-64 flex flex-col items-start">
          <div className="w-12 h-12 bg-gray-600 rounded-full" />
          <h3 className="text-lg font-semibold text-[#013772] mb-2">
            Monitor and Track Patient Health Effectively
          </h3>
          <p className="text-base font-normal text-[#6F7177]">
            Gain access to your patients’ health records to monitor their health status and progress over time. Provide better care with comprehensive and up-to-date information.
          </p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-2xl w-[450px] h-64 flex flex-col items-start">
          <div className="w-12 h-12 bg-gray-600 rounded-full" />
          <h3 className="text-lg font-semibold text-[#FB6833] mb-2">
            Efficient Appointment and Communication Management
          </h3>
          <p className="text-base font-normal text-[#6F7177]">
            Manage your availability and easily schedule appointments or calls with patients. Increase your visibility to patients and hospitals by showcasing your profile and specialties.
          </p>
        </div>
      </div>

      <div className="relative z-10 flex justify-center items-center mt-[80px]">
        <div className="bg-white p-6 shadow-md rounded-2xl w-[480px] h-64 flex flex-col items-start">
          <div className="w-12 h-12 bg-gray-600 rounded-full" />
          <h3 className="text-lg font-semibold text-[#86148A] mb-2">
            Advanced Search for Specialized Care
          </h3>
          <p className="text-base font-normal text-[#6F7177]">
            Allow patients to search for doctors by specialty, field of expertise, or specific conditions. Enable them to find hospitals filtered by services, departments, and specialties related to specific diseases for tailored healthcare solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Additional;