import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({PricingPromise}) => {

    const pricingData=use(PricingPromise);

    return (
        <div>
            <div className='grid grid-cols-3 gap-8'>
                {/* {
                    pricingData.map(pricing=><PricingCard 
                        key={pricing.id} 
                        pricing={pricing}></PricingCard>)
                } */}

                {
                    pricingData.map(pricing=><DaisyPricing pricing={pricing}></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;