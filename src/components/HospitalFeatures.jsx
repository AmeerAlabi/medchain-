import React from 'react';
import img1 from '../Assets/Images/images (20).jpeg';
import img2 from '../Assets/Images/images (21).jpeg';
import img3 from '../Assets/Images/images (23).jpeg';
import img4 from '../Assets/Images/images (22).jpeg';

const HospitalFeatures = () => {
  return (
    <div className="p-5 w-full bg-[#FCFDFE]">
      {/* Features Heading */}
      <div className="w-32 sm:w-48 h-10 sm:h-12 rounded-full mx-auto mt-3 border border-[#DEDEDE] flex justify-center items-center text-xs sm:text-sm text-[#6F7177] font-medium">
        Features
      </div>

      {/* Feature Cards */}
      <div className="flex flex-col justify-center mt-12 gap-16 sm:gap-24 items-center">
        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row justify-center bg-[#F9FBFE] p-6 rounded-xl items-center gap-6">
          <div className="w-full lg:w-2/5 h-auto rounded-lg">
            <img src={img1} alt="" className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-full lg:w-3/5 flex flex-col">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#161C2D]">
              Comprehensive Health Records at Your Fingertips
            </h1>
            <p className="mt-3 text-sm sm:text-base lg:text-lg font-normal text-[#6F7177]">
              Access and review your complete health records, including medical history, prescriptions, lab results, and visit summaries. Visualize your health data with intuitive graphs showing trends in blood pressure, glucose levels, and other vital statistics over time.
            </p>
            <button className="bg-[#6833fb] w-36 h-12 rounded-md text-white cursor-pointer flex justify-center items-center mt-4">
              Get started now
            </button>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col lg:flex-row-reverse justify-center bg-[#F9FBFE] p-6 rounded-xl items-center gap-6">
          <div className="w-full lg:w-2/5 h-auto rounded-lg">
            <img src={img2} alt="" className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-full lg:w-3/5 flex flex-col">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#161C2D]">
              Stay Connected with Your Hospital
            </h1>
            <p className="mt-3 text-sm sm:text-base lg:text-lg font-normal text-[#6F7177]">
              View specific information from your hospital visits. Track your treatment progress with detailed health graphs and access comprehensive information on diagnosed diseases, including descriptions, treatments, and care plans.
            </p>
            <button className="bg-[#6833fb] w-36 h-12 rounded-md text-white cursor-pointer flex justify-center items-center mt-4">
              Get started now
            </button>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col lg:flex-row justify-center bg-[#F9FBFE] p-6 rounded-xl items-center gap-6">
          <div className="w-full lg:w-2/5 h-auto rounded-lg">
            <img src={img3} alt="" className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-full lg:w-3/5 flex flex-col">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#161C2D]">
              Seamless Personal Information Management
            </h1>
            <p className="mt-3 text-sm sm:text-base lg:text-lg font-normal text-[#6F7177]">
              Easily enter and update your personal details, including name, date of birth, contact information, and emergency contacts. Our user-friendly registration process allows you to create an account quickly with options for email sign-up.
            </p>
            <button className="bg-[#6833fb] w-36 h-12 rounded-md text-white cursor-pointer flex justify-center items-center mt-4">
              Get started now
            </button>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col lg:flex-row-reverse justify-center bg-[#F9FBFE] p-6 rounded-xl items-center gap-6">
          <div className="w-full lg:w-2/5 h-auto rounded-lg">
            <img src={img4} alt="" className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-full lg:w-3/5 flex flex-col">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#161C2D]">
              Direct Communication with Your Doctors
            </h1>
            <p className="mt-3 text-sm sm:text-base lg:text-lg font-normal text-[#6F7177]">
              Schedule and make voice or video calls with your doctors directly through our platform. Stay connected and get timely consultations without leaving your home.
            </p>
            <button className=" cursor-not-allowed bg-[#6833fb] w-36 h-12 rounded-md text-white flex justify-center items-center mt-4">
              Get started now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalFeatures;
