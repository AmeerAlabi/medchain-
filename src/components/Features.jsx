import React from 'react';
import img1 from '../Assets/Images/img1.jpeg';
import img2 from '../Assets/Images/img2.jpeg';
import img3 from '../Assets/Images/images (22).jpeg';
import img4 from '../Assets/Images/images (21).jpeg';

const Features = () => {
  return (
    <div className="p-5 md:p-8 w-full bg-[#FCFDFE]">
      {/* Features Header */}
      <div className="w-[150px] md:w-[218px] h-[40px] md:h-[51px] rounded-[40px] mx-auto mt-4 border border-[#DEDEDE] flex justify-center items-center text-sm md:text-base text-[#6F7177] font-medium">
        Features
      </div>

      {/* Features Content */}
      <div className="flex flex-col justify-center mt-12 gap-16 md:gap-24 items-center">
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row justify-center bg-[#F9FBFE] p-5 md:p-8 rounded-lg items-center gap-5 md:gap-8">
          <div className="w-full md:w-[450px] h-auto rounded-lg">
            <img
              src={img1}
              alt=""
              className="w-full h-auto md:h-[350px] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-[500px] flex flex-col">
            <h1 className="text-xl md:text-2xl font-semibold text-[#161C2D]">
              Comprehensive Health Recording Management
            </h1>
            <p className="mt-3 text-sm md:text-lg font-normal text-[#6F7177]">
              Manage patient health records with precision, ensuring accurate
              and up-to-date information is always accessible. Utilize advanced
              tools for inputting and monitoring disease incidence, aiding in
              effective outbreak and trend management.
            </p>
            <button className="bg-[#6833fb] w-[140px] h-[48px] rounded-lg text-white cursor-pointer flex justify-center items-center mt-5">
              Get started now
            </button>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row-reverse justify-center bg-[#F9FBFE] p-5 md:p-8 rounded-lg items-center gap-5 md:gap-8">
          <div className="w-full md:w-[450px] h-auto rounded-lg">
            <img
              src={img2}
              alt=""
              className="w-full h-auto md:h-[350px] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-[500px] flex flex-col">
            <h1 className="text-xl md:text-2xl font-semibold text-[#161C2D]">
              Streamlined Staff and Patient Monitoring
            </h1>
            <p className="mt-3 text-sm md:text-lg font-normal text-[#6F7177]">
              Track staff performance, schedules, and duties efficiently. Get a
              comprehensive overview of patient statuses, treatment progress,
              and healthcare needs to ensure optimal care delivery.
            </p>
            <button className="bg-[#6833fb] w-[140px] h-[48px] rounded-lg text-white cursor-pointer flex justify-center items-center mt-5">
              Get started now
            </button>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row justify-center bg-[#F9FBFE] p-5 md:p-8 rounded-lg items-center gap-5 md:gap-8">
          <div className="w-full md:w-[450px] h-auto rounded-lg">
            <img
              src={img3}
              alt=""
              className="w-full h-auto md:h-[350px] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-[500px] flex flex-col">
            <h1 className="text-xl md:text-2xl font-semibold text-[#161C2D]">
              Efficient Department Management
            </h1>
            <p className="mt-3 text-sm md:text-lg font-normal text-[#6F7177]">
              Organize and display hospital departments clearly, making it easy
              for users to find relevant departments and their services.
              Enhance operational efficiency and patient navigation within the
              hospital.
            </p>
            <button className="bg-[#6833fb] w-[140px] h-[48px] rounded-lg text-white cursor-pointer flex justify-center items-center mt-5">
              Get started now
            </button>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col md:flex-row-reverse justify-center bg-[#F9FBFE] p-5 md:p-8 rounded-lg items-center gap-5 md:gap-8">
          <div className="w-full md:w-[450px] h-auto rounded-lg">
            <img
              src={img4}
              alt=""
              className="w-full h-auto md:h-[350px] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-[500px] flex flex-col">
            <h1 className="text-xl md:text-2xl font-semibold text-[#161C2D]">
              Insightful Doctor and Patient Statistics
            </h1>
            <p className="mt-3 text-sm md:text-lg font-normal text-[#6F7177]">
              Empower doctors to enter patient information, treatment details,
              and outcomes efficiently. Access an overview of patient
              statistics, including the number of patients treated, ongoing
              treatments, discharge rates, and monitor patient mortality rates
              to enhance healthcare quality.
            </p>
            <button className="bg-[#6833fb] w-[140px] h-[48px] rounded-lg text-white cursor-pointer flex justify-center items-center mt-5">
              Get started now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
