import React from 'react';

const PricingPlans = () => {
  const plans = [
    {
      title: 'Free Trial - Individual',
      price: '$0',
      features: [
        '2 feature access',
        '10 queries',
        '1 telehealth session',
      ],
    },
    {
      title: 'Free Trial - Professional',
      price: '$0',
      features: [
        '3 telehealth sessions',
        '2 patient management features',
        '2 analytics features',
      ],
    },
    {
      title: 'Free Trial - Hospital',
      price: '$0',
      features: [
        '10 staff accounts',
        '10 patient management features',
        'Telehealth and analytics',
      ],
    },
    {
      title: 'Monthly Subscription - Individual',
      price: '$20',
      features: [
        '2 feature access',
        '10 queries',
        '1 telehealth session',
      ],
    },
    {
      title: 'Monthly Subscription - Professional',
      price: '$20',
      features: [
        '3 telehealth sessions',
        '2 patient management features',
        '2 analytics features',
      ],
    },
    {
      title: 'Monthly Subscription - Hospital',
      price: '$20',
      features: [
        '10 staff accounts',
        '10 patient management features',
        'Telehealth and analytics',
      ],
    },
    {
      title: 'Yearly Subscription - Individual',
      price: '$200',
      features: [
        '10 feature access',
        '50 search queries',
        '10 telehealth sessions',
        'Analytics',
        'Priority support',
      ],
    },
    {
      title: 'Yearly Subscription - Professional',
      price: '$200',
      features: [
        '15 telehealth sessions',
        '15 patient management features',
        '15 analytics features',
        'Data epidemiology feature',
        'Customized reporting',
      ],
    },
    {
      title: 'Yearly Subscription - Hospital',
      price: '$200',
      features: [
        '100 staff accounts',
        '100 patient management features',
        'Telehealth and analytics',
        'AI-powered chat',
        'ID continuity',
        'Yearly reports',
        'Epidemiology feature',
        'Department linking',
        'Staff telecall',
        'Dedicated account manager',
      ],
    },
  ];

  return (
    <div className="p-6 bg-white">
      <h2 className="text-4xl font-bold text-center text-[#6833FB] mb-12">
        Explore Our Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col cursor-not-allowed bg-white border border-[#6833FB] rounded-xl shadow-lg p-8 transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex-grow text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {plan.title}
              </h3>
              <p className="text-3xl font-bold text-[#6833FB] mb-6">
                {plan.price}
              </p>
            </div>
            <ul className="flex-grow list-disc list-inside text-gray-600 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-auto">
              <button className="px-6 py-2 bg-[#6833FB] text-white font-medium rounded-md shadow-md hover:bg-[#4d26c8] transition-all">
                Select Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
