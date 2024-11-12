import React from 'react'
import bg from '../Assets/Images/bgimpact.png'
import img from '../Assets/Images/Image Placeholder.png'

const Impact = () => {
  return (
    <div className=' w-full h-full p-[30px] bg-[#FCFDFE]  bg-contain bg-center '
    style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
      }}
     >
    <div className="w-[150px] md:w-[218px] h-[40px] md:h-[51px] rounded-[40px] mx-auto mt-[10px] border border-[#DEDEDE] flex justify-center items-center text-[12px] md:text-[14px] text-[#6F7177] font-[500]">
    Impact
      </div>

      <h2 className=" text-[40px] text-center mt-[18px] mb-[50px] font-[600] ">Impact of <span className=" text-[#6833FB] "> Medchain </span> on African <br /> Medical Centres</h2>


{/*  */}
      <div className=" flex justify-center items-center gap-[80px] ">



        <div className=" shadow-md w-[512px] h-[325px] bg-white p-5 mt-[20px] rounded-[20px] flex gap-[10px] justify-start ">
<img src={img} alt="" className=" w-[63px] h-[63px] " />
<div className=" flex flex-col gap-[10px] ">
    <h1 className=" text-[32px] font-[600] text-[#0B9658] ">Research and Analytics</h1>
    <p className=" text-[20px] font-[400] text-[#6F7177] ">The consolidated database provides a rich source for research and analytics. Researchers can analyze anonymized patient data to identify patterns, trends, and
    insights that can lead to advancements in medical treatments and healthcare practices specific to the African context.</p>
</div>
        </div>
        <div className=" shadow-md w-[512px] h-[325px] bg-white p-5 rounded-[20px] flex gap-[10px] justify-start ">
<img src={img} alt="" className=" w-[63px] h-[63px] " />
<div className=" flex flex-col gap-[10px] ">
    <h1 className=" text-[32px] font-[600] text-[#E72B3B] ">Disease Management</h1>
    <p className=" text-[20px] font-[400] text-[#6F7177] ">Comprehensive EHR resources enable effective disease surveillance and outbreak
management. Medical centers can monitor the prevalence and spread of diseases,
identify at-risk populations, and implement timely interventions..</p>
</div>
        </div>
      </div>


      <div className=" flex justify-center items-center mt-[20px] gap-[80px] ">
        <div className=" shadow-md w-[512px] h-[325px] bg-white p-5 rounded-[20px] flex gap-[10px] justify-start ">
<img src={img} alt="" className=" w-[63px] h-[63px] " />
<div className=" flex flex-col gap-[10px] ">
    <h1 className=" text-[32px] font-[600] text-[#F98600] ">Telemedicine Healthcare</h1>
    <p className=" text-[20px] font-[400] text-[#6F7177] ">MedChain enhances telemedicine capabilities, allowing healthcare providers to remotely access patient records and provide consultations. This is particularly
    beneficial in remote areas with limited access to specialized healthcare.</p>
</div>
        </div>
        <div className=" shadow-md w-[512px] h-[325px] bg-white p-5 rounded-[20px] flex gap-[10px] justify-start ">
<img src={img} alt="" className=" w-[63px] h-[63px] " />
<div className=" flex flex-col gap-[10px] ">
    <h1 className=" text-[32px] font-[600] text-[#013772] ">Continuity of Care</h1>
    <p className=" text-[20px] font-[400] text-[#6F7177] ">The system promotes continuity of care by enabling seamless sharing of patient
information across different healthcare facilities. This ensures that healthcare
providers have access to complete and up-to-date medical histories, leading to
better-informed diagnoses and treatment decisions.</p>
</div>
        </div>
      </div>


{/*  */}

      <div className=" flex justify-center items-center gap-[80px] mt-[80px] ">



        <div className=" shadow-md w-[512px] h-[325px] bg-white p-5 rounded-[20px] flex gap-[10px] justify-start ">
<img src={img} alt="" className=" w-[63px] h-[63px] " />
<div className=" flex flex-col gap-[10px] ">
    <h1 className=" text-[32px] font-[600] text-[#86148A] ">Quality Improvement </h1>
    <p className=" text-[20px] font-[400] text-[#6F7177] ">MedChain facilitates data-driven quality improvement initiatives. Hospitals can
analyze aggregated data to identify areas for improvement, implement evidence
based practices, and enhance patient safety protocols.</p>
</div>
        </div>




        <div className="  shadow-md w-[512px] h-[325px] bg-white p-5 rounded-[20px] flex gap-[10px] justify-start ">
<img src={img} alt="" className=" w-[63px] h-[63px] " />
<div className=" flex flex-col gap-[10px] ">
    <h1 className=" text-[32px] font-[600] text-[#151A96] ">Research and Analytics</h1>
    <p className=" text-[20px] font-[400] text-[#6F7177] ">By subscribing to EHR resources on-demand and paying-as-they-use, hospitals can
optimize resource utilization and reduce costs associated with maintaining
individual databases. This allows them to allocate resources more efficiently and
focus on delivering quality healthcare services.</p>
</div>
        </div>
      </div>
      
    </div>
  )
}

export default Impact
