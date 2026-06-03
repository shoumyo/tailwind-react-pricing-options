import React from 'react';

const DaisyPricing = ({pricing}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">Most Popular</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{pricing.name}</h2>
      <span className="text-xl">${pricing.price}/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
        {
  pricing.features.map((feature, index) => (
    <li key={index}>
      {/* Changed to flex and added items-start for top alignment on long text */}
      <div className="flex items-start">
        {/* Removed 'inline-block' and 'me-2', replaced with layout-stable margins/flex-shrink */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="size-4 mr-2 text-success shrink-0 mt-0.5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        {/* The text will now natively stack inside its own column */}
        <span className="text-left">{feature}</span>
      </div>
    </li>
  ))
}
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block">Subscribe</button>
    </div>
  </div>
</div>
    );
};

export default DaisyPricing;