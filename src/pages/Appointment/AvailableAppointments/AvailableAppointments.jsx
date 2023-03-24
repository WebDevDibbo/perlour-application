import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({selectedDate}) => {
    return (
        <div className='mt-10'>
            <p className='text-center text-pink-700 font-bold'>Available Appointments on {format(selectedDate,'PP')}</p>
        </div>
    );
};

export default AvailableAppointments;