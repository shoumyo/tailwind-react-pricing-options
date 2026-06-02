import React from 'react';
import Feature from './Feature';

const PricingCard = ({pricing}) => {
    return (
        <div className='border bg-amber-200 rounded-2xl p-4'>
            <div>
                <h1 className='text-3xl'>{pricing.name}</h1>
                <h3>${pricing.price} {pricing.currency}/{pricing.billingPeriod}</h3>
            </div>
            <div className='bg-amber-100 p-4 rounded-2xl mt-10'>
                <p>{pricing.description}</p>
                {
                    pricing.features.map((feature)=><Feature key={feature.id} feature={feature}></Feature>)
                }
            </div>
        </div>
    );
};

export default PricingCard;