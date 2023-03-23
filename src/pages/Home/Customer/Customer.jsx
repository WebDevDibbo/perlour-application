import React from 'react';
import customer from '../../../assets/images/customer.png'

const Customer = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img className='max-w-sm rounded-lg shadow-2xl' src={customer} alt='customer-img' />
          <div className='mb-[70px]'>
            <h2 className="text-5xl font-bold">Let us handle your screen <span>Professionally</span>.</h2>
            <p className="py-6">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.The customer make a.</p>
          </div>
          <div>

          </div>
        </div>
      </div>
    );
};

export default Customer;