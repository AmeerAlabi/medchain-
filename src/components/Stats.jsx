import React from 'react'

const Stats = () => {
  return (
    <div className=' w-full flex justify-center items-center gap-[30px] h-[120px] p-[45px]  bg-[#f4f7fad9]  ' >
      <div className="  w-[283px] flex gap-[10px] items-center ">
        <h1 className=" text-[48px] font-[600] text-[#161C2D] ">1M+</h1>
        <p className=" text-[20px] font-[400]  text-[#161C2D] ">Customers visit <br /> every months</p>
      </div>


      <div className="  w-[283px] flex gap-[10px] items-center  ">
        <h1 className=" text-[48px] font-[600] text-[#161C2D] ">93%</h1>
        <p className=" text-[20px] font-[400]  text-[#161C2D] ">Satisfaction rate <br /> from our customers.</p>
      </div>

      <div className="  w-[283px] flex gap-[10px] items-center ">
        <h1 className=" text-[48px] font-[600] text-[#161C2D] ">4.9</h1>
        <p className=" text-[20px] font-[400]  text-[#161C2D] ">Average customer <br /> ratings  out of 5.00!</p>
      </div>

    </div>
  )
}

export default Stats
