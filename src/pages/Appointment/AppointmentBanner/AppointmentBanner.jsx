import React, { useState } from 'react';
import girl from '../../../assets/images/hero.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';



const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    
    return (
        <div className="hero h-4/5 my-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={girl} className="max-w-xs rounded-lg" alt='girl-img'/>
          <div className='max-w-lg md:mr-20'>
          <DayPicker
          mode='single'
          selected ={selectedDate}
          onSelect={setSelectedDate}
           />
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;