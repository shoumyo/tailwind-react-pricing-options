import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({PricingPromise}) => {

    const pricingData=use(PricingPromise);

    return (
        <div>
            <div className='grid grid-cols-3 gap-8'>
                {
                    pricingData.map(pricing=><PricingCard 
                        key={pricing.id} 
                        pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;