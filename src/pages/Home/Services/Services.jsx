import React from 'react';
import { Link } from 'react-router-dom';
import anti from '../../../assets/icons/anti.png'
import hair from '../../../assets/icons/hair.png'
import skin from '../../../assets/icons/skin.png'
import Service from './Service';
import './Services.css'

const Services = () => {
    const servicesData = [
        {
            id:1,
            icon: anti,
            name: 'Anti Age Face Treatment',
            price: '$199',
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
        },
        {
            id:2,
            icon: hair,
            name: 'Hair Color & Styleing',
            price: '$99',
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
        },
        {
            id:3,
            icon: skin,
            name: 'Skin Care Treatment',
            price: '$299',
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
        }
    ]
    return (
        <div>
        <h2 className='text-3xl font-bold text-center my-[72px]'>Our Awesome <span>Services</span></h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {
                servicesData.map(service => <Service key={service.id} service= {service}></Service>)
            }
        </div>
       <div className='mt-[50px] mb-[150px] text-center'>
       <Link to='/appointment' className="btn login-btn border-0 px-10 py-3 ">Explore Now</Link>
       </div>
        </div>
    );
};

export default Services;