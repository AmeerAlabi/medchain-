import React from 'react'

const Features = () => {
  return (
    <div className=' p-[30px]  w-full bg-[#FCFDFE] '  >


        <div className="w-[150px] md:w-[218px] h-[40px] md:h-[51px] rounded-[40px] mx-auto mt-[10px] border border-[#DEDEDE] flex justify-center items-center text-[12px] md:text-[14px] text-[#6F7177] font-[500]">
     Features
      </div>


<div className=" flex flex-col justify-center mt-[50px] gap-[150px] items-center ">
    <div className=" flex  justify-center bg-[#F9FBFE] p-[30px] rounded-[15px] items-center gap-[20px] ">
        <div className="  bg-gray-500 w-[450px] h-[350px] rounded-[10px] "></div>
        <div className=" w-[500px] flex justify-start flex-col ">
            <h1 className="  text-[32px] font-[500] text-[#161C2D] ">Comprehensive Health
            Recording Management</h1>
            <p className=" mt-[10px] text-[20px] font-[400] text-[#6F7177] ">Manage patient health records with precision, ensuring accurate and up-to-date information is always accessible. Utilize advanced tools for inputting and monitoring disease incidence, aiding in effective outbreak and trend management.</p>
            <button className=" bg-[#6833fb] w-[140px] h-[48px] rounded-[10px] text-white cursor-pointer flex justify-center items-center mt-[20px]  ">Get started now</button>
        </div>
    </div>

{/*  */}

    <div className=" flex  justify-center bg-[#F9FBFE] p-[30px] rounded-[15px] items-center gap-[20px] ">
        <div className=" w-[500px] flex justify-start flex-col ">
            <h1 className="  text-[32px] font-[500] text-[#161C2D] ">Streamlined Staff and Patient Monitoring</h1>
            <p className=" mt-[10px] text-[20px] font-[400] text-[#6F7177] ">Track staff performance, schedules, and duties efficiently. Get a comprehensive overview of patient statuses, treatment progress, and healthcare needs to ensure optimal care delivery.</p>
            <button className=" bg-[#6833fb] w-[140px] h-[48px] rounded-[10px] text-white cursor-pointer flex justify-center items-center mt-[20px]  ">Get started now</button>
        </div>
        <div className="  bg-gray-500 w-[450px] h-[350px] rounded-[10px] "></div>
    </div>


    {/*  */}
    <div className=" flex  justify-center bg-[#F9FBFE] p-[30px] rounded-[15px] items-center gap-[20px] ">
        <div className="  bg-gray-500 w-[450px] h-[350px] rounded-[10px] "></div>
        <div className=" w-[500px] flex justify-start flex-col ">
            <h1 className="  text-[32px] font-[500] text-[#161C2D] ">Efficient Department Management</h1>
            <p className=" mt-[10px] text-[20px] font-[400] text-[#6F7177] ">Organize and display hospital departments clearly, making it easy for users to find relevant departments and their services. Enhance operational efficiency and patient navigation within the hospital.</p>
            <button className=" bg-[#6833fb] w-[140px] h-[48px] rounded-[10px] text-white cursor-pointer flex justify-center items-center mt-[20px]  ">Get started now</button>
        </div>
    </div>


    {/*  */}
    <div className=" flex  justify-center bg-[#F9FBFE] p-[30px] rounded-[15px] items-center gap-[20px] ">
        <div className=" w-[500px] flex justify-start flex-col ">
            <h1 className="  text-[32px] font-[500] text-[#161C2D] ">Insightful Doctor and Patient Statistics</h1>
            <p className=" mt-[10px] text-[20px] font-[400] text-[#6F7177] ">Empower doctors to enter patient information, treatment details, and outcomes efficiently. Access an overview of patient statistics, including the number of patients treated, ongoing treatments, discharge rates, and monitor patient mortality rates to enhance healthcare quality.</p>
            <button className=" bg-[#6833fb] w-[140px] h-[48px] rounded-[10px] text-white cursor-pointer flex justify-center items-center mt-[20px]  ">Get started now</button>
        </div>
        <div className="  bg-gray-500 w-[450px] h-[350px] rounded-[10px] "></div>
    </div>
</div>

    </div>
  )
}

export default Features
