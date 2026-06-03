import React, { use } from 'react';
import DaisyPricing from '../DaisyPricing/DaisyPricing'; 

const PricingOptions = ({ PricingPromise }) => {
  const pricingData = use(PricingPromise);

  return (
    <div className="my-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-10">
        Gym Membership Plans
      </h2>
      
      {/* 
        Responsive Grid layout:
        - 1 column on mobile (grid-cols-1)
        - 2 columns on tablets/small laptops (md:grid-cols-2)
        - 3 columns on desktop (lg:grid-cols-3)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {
          pricingData.map((pricing) => (
            <DaisyPricing key={pricing.id} pricing={pricing} />
          ))
        }
      </div>
    </div>
  );
};

export default PricingOptions;