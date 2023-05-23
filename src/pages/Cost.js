import React from 'react';
import pic from '../pic/Carlisle_PA_Fire_Chief_at_training.jpg'

const Cost = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse lg:items-start">
          <img src={pic} className="w-2/5 rounded-lg shadow-2xl" />
          <div className='px-10'>
            <h1 className="text-4xl font-bold">Costs</h1>
            <p className="py-6 text-xl">Treatments for these types of conditions can be extremely expensive. Ultimately, exposure to firefighting foam could mean a lifetime of suffering—and struggling to pay staggering hospital bills. If this is your experience, it’s time to be proactive about compensation for your pain.</p>
           
       
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cost;