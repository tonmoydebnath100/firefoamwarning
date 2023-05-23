import React from 'react';
import pic from '../pic/im-710475.jpg'

const Pfas = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse lg:items-start">
          <img src={pic} className="w-2/5 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">PFAS</h1>
            <p className="py-6 text-xl">Firefighting foam contains substances called PFAS. Certain types of PFAS, such as PFOA and PFOS, can be toxic. There are two primary reasons why:</p>
            <div className='flex items-start '>
              <div className="badge badge-md mx-5 my-1.5"></div>
              <div>
                <p className='text-xl font-bold'>Forever Chemicals</p>
                <p className='text-md'>These types of PFAS are often known as 'forever chemicals' because they do not break down in the environment or human bodies. The ramifications for health could be life-long.</p>
              </div>
            </div>
            <div className='flex items-start my-5'>
              <div className="badge badge-md mx-5 my-1.5"></div>
              <div>
                <p className='text-xl font-bold'>Carcinogens</p>
                <p className='text-md'>These chemicals have also been proven to be carcinogenic.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pfas;