import React, { useState } from 'react';

const Why = () => {
  const items = [
    { id: 1, title: "On-demand Subscription Model", description: "MedChain allows hospitals to subscribe to EHR resources on demand and pay only for what they use. This model offers cost-effectiveness, especially for hospitals that cannot afford to invest heavily in expensive infrastructure and maintenance costs." },
    { id: 2, title: "Large Database Computing System", description: "The centralized database system allows healthcare professionals to maintain, protect, and use patient information for better treatments, research, and healthcare management. This large pool of data can be leveraged for epidemiological studies and real-time disease monitoring." },
    { id: 3, title: "Disease Incidence Monitoring", description: "MedChain includes a Disease Incidence Database System that helps in monitoring the occurrence of diseases. This system addresses issues related to the EHR's capacity to accurately reflect the population of interest and the accessibility and usability of both clinical and non-clinical data." },
    { id: 4, title: "Data Security and Privacy", description: "MedChain ensures enhanced data security and privacy. Centralizing EHR resources allows medical centers to employ advanced security measures and encryption techniques, protecting patient information from unauthorized access or data breaches." },
    { id: 5, title: "Interoperability and Standardization", description: "MedChain promotes interoperability and collaboration by enabling seamless sharing of EHR resources among medical centers. It uses standardized formats and protocols to ensure data integration and exchange across different systems." },
    { id: 6, title: "Integration with Healthcare Infrastructure", description: "MedChain integrates with existing healthcare infrastructure, allowing healthcare providers to use information from all points along the care continuum. This integration enables efficient and timely decision-making in patient care." }
  ];

  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className="w-full h-auto md:h-[600px] mb-0  bg-[#FCFDFE] p-4 md:p-8"
  
    >
      <h2 className="text-[24px] md:text-[32px] mb-6 md:mb-[40px] font-[600] text-center">
        Why <span className="text-[#6833FB]">MedChain?</span>
      </h2>
      
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-8">
        {/* Left side items */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className={`w-full md:w-[395px] h-[50px] rounded-[30px] flex items-center p-2 cursor-pointer transition transform ${selectedItem.id === item.id ? 'bg-gray-200 text-[#161c2d]' : 'text-[#6F7177]'}`}
              onClick={() => setSelectedItem(item)}
            >
              <div className={`w-[33px] h-[33px] rounded-full flex items-center justify-center ${selectedItem.id === item.id ? 'bg-[#d4c4ff] text-[#6833FB]' : 'bg-[#d4c4ff] text-[#6833FB]'}`}>
                {item.id}
              </div>
              <p className="ml-4 text-[14px] md:text-[16px] font-[500]">{item.title}</p>
            </div>
          ))}
        </div>
        
        {/* Right side content */}
        <div className="w-full md:w-[813px] h-[370px] bg-[#F4F7FA] p-6 md:p-8 rounded-[10px] shadow-md">
          <h1 className="text-[24px] md:text-[32px] font-[600] text-[#161C2D]">{selectedItem.title}</h1>
          <p className="text-[16px] md:text-[20px] font-[400] mt-4 text-[#6F7177]">{selectedItem.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Why;
