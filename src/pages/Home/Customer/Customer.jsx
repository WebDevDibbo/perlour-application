import React from 'react';
import customer from '../../../assets/images/customer.png'
import './Customer.css'

const Customer = () => {
    return (
        <div className="hero my-40 ">
        <div className="hero-content flex-col gap-x-24 lg:flex-row">
          <img className='md:w-1/2 lg:max-w-[580px] lg:max-h-[380px]  rounded-lg shadow-2xl' src={customer} alt='customer-img' />
          <div>
          <div className='mb-8 md:mb-[60px]'>
            <h2 className="text-5xl font-bold  max-w-[540px]">Let us handle your screen <span>Professionally</span></h2>
            <p className="py-6 max-w-[400px]">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.The customer make a good impression on my work. I am interested to work with new people.</p>
          </div>
          <div className='flex customer-number'>
             <div className='mr-20'>
             <h3 className='font-bold text-4xl pb-2'>500+</h3>
             <h4 className='font-normal text-base'>Happy Customer</h4>
             </div>
             <div>
              <h3 className='font-bold text-4xl pb-2'>16+</h3>
              <h4 className='font-normal text-base'>Total Service</h4>
             </div>
          </div>
          </div>
        </div>
        
      </div>
    );
};

export default Customer;