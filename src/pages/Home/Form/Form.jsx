import React from 'react';

const Form = () => {
    return (
        <div className='mt-[105px] mb-12'>
        <h2 className='mb-20 font-bold text-3xl max-w-[370px] mx-auto text-center'>Let us handle your project, professionally.</h2>
        <div className='form'>
        <form className=' mx-auto max-w-3xl p-6'>
        <div className='flex justify-between flex-wrap gap-4 mb-6'>
        <input type="text" placeholder="Full Name" className="input w-full max-w-xs" />
        <input type="text" placeholder="Last Name" className="input w-full max-w-xs" />
        </div>
        <div className='flex justify-between flex-wrap mb-6 gap-4'>
        <input type="email" placeholder="Email" className="input w-full max-w-xs" />
        <input type="text" placeholder="Phone Number" className="input w-full max-w-xs" />
        </div>
       <div>
       <textarea  className="textarea w-4/5 lg:w-full  h-100" placeholder="Message"></textarea>
       </div>
       <div className='mt-7 text-center'>
       <button className="btn login-btn border-0 px-10 py-3 ">Send Message</button>
       </div>

        </form>
        </div>
        </div>
    );
};

export default Form;