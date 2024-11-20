import React from 'react';
import bg from '../Assets/Images/bgimpact.png';
import img from '../Assets/Images/Image Placeholder.png';

const Card = ({ icon, title, description, titleColor }) => (
<div className="shadow-md w-full md:w-[512px] md:h-[320px] h-auto bg-white p-5 rounded-[20px] flex gap-[10px] justify-start items-start transition-all hover:shadow-lg hover:scale-[1.02]">
  {icon ? (
    <div className={`w-[63px] h-[63px] rounded-full flex justify-center text-[48px] items-center text-[${titleColor}]`}>
      {icon}
    </div>
  ) : (
    <img
      src={img}
      alt="Placeholder"
      className="w-[63px] h-[63px] object-cover rounded-full"
    />
  )}
  <div className="flex flex-col gap-[10px]">
    <h1 className={`text-[24px] md:text-[32px] font-[600] ${titleColor ? `text-[${titleColor}]` : "text-black"}`}>
      {title}
    </h1>
    <p className="text-[16px] md:text-[20px] font-[400] text-[#6F7177]">{description}</p>
  </div>
</div>

);

const Impact = () => {
  const cards = [
    {
      icon: '1).',
      title: 'Research and Analytics',
      description:
        'The consolidated database provides a rich source for research and analytics. Researchers can analyze anonymized patient data to identify patterns, trends, and insights that can lead to advancements in medical treatments and healthcare practices specific to the African context.',
      titleColor: '#0B9658',
    },
    {
      icon: '2).',
      title: 'Disease Management',
      description:
        'Comprehensive EHR resources enable effective disease surveillance and outbreak management. Medical centers can monitor the prevalence and spread of diseases, identify at-risk populations, and implement timely interventions.',
      titleColor: '#E72B3B',
    },
    {
      icon:'3).',
      title: 'Telemedicine Healthcare',
      description:
        'MedChain enhances telemedicine capabilities, allowing healthcare providers to remotely access patient records and provide consultations. This is particularly beneficial in remote areas with limited access to specialized healthcare.',
      titleColor: '#F98600',
    },
    {
      icon:'4).',
      title: 'Continuity of Care',
      description:
        'The system promotes continuity of care by enabling seamless sharing of patient information across different healthcare facilities. This ensures that healthcare providers have access to complete and up-to-date medical histories, leading to better-informed diagnoses and treatment decisions.',
      titleColor: '#013772',
    },
    {
      icon: '5).',
      title: 'Quality Improvement',
      description:
        'MedChain facilitates data-driven quality improvement initiatives. Hospitals can analyze aggregated data to identify areas for improvement, implement evidence-based practices, and enhance patient safety protocols.',
      titleColor: '#86148A',
    },
    {
      icon:'6).',
      title: 'Resource Optimization',
      description:
        'By subscribing to EHR resources on-demand and paying-as-they-use, hospitals can optimize resource utilization and reduce costs associated with maintaining individual databases. This allows them to allocate resources more efficiently and focus on delivering quality healthcare services.',
      titleColor: '#151A96',
    },
  ];

  return (
    <div
      className="w-full h-auto p-5 md:p-[30px] bg-[#FCFDFE] bg-contain bg-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Header */}
      <div className="w-[150px] md:w-[218px] h-[40px] md:h-[51px] rounded-[40px] mx-auto mt-[10px] border border-[#DEDEDE] flex justify-center items-center text-[12px] md:text-[14px] text-[#6F7177] font-[500]">
        Impact
      </div>

      <h2 className="text-[28px] md:text-[40px] text-center mt-[18px] mb-[50px] font-[600]">
        Impact of <span className="text-[#6833FB]"> Medchain </span> on African <br /> Medical Centres
      </h2>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 md:gap-[80px]">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            titleColor={card.titleColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Impact;
