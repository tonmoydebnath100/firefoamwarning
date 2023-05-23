import React from 'react';
import pic from '../pic/fighting_fire.jpeg'
const Next = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row lg:items-start">
          <img src={pic} className="w-2/5 rounded-lg shadow-2xl" />
          <div className='px-20'>
            <h1 className="text-4xl font-bold">Your Next Steps</h1>
            <p className="py-6 text-xl">The Agency for Toxic Substances and Disease Registry (a division of the CDC) states that exposure to PFAS is a public health concern. The CDC is currently investigating the downstream health effects of PFAS and firefighting foam. Despite this, many companies continue to sell and use PFOA products.</p>
           
       
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Next;