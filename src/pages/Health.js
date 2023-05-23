import React from 'react';
import pic from '../pic/Carlisle_PA_Fire_Chief_at_training.jpg'

const Health = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-red-50">
        <div className="hero-content flex-col lg:flex-row lg:items-start">
          <img src={pic} className="w-2/5 rounded-lg shadow-2xl" />
          <div className='px-20'>
            <h1 className="text-4xl font-bold">Health Concerns</h1>
            <p className="py-6 text-xl">Carcinogens cause many cancers by affecting your DNA on a cellular level. These chemicals can also weaken your immune system. Aside from cancers, PFAS have also been shown to cause other conditions, such as fertility and pregnancy issues, liver damage, increased cholesterol, asthma, thyroid disease, and more.</p>
           
       
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;