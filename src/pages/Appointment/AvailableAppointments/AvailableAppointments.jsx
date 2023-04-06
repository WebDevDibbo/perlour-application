import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React,  { useState}  from 'react';
import Loading from '../../shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [treatment,setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const {data :services = [],refetch,isLoading} =  useQuery({
        queryKey : ['appointmentOptions',date],
        queryFn : () => fetch(`https://perlour-app-server.vercel.app/appointmentOptions?date=${date}`)
        .then(res => res.json()) 
    })
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='my-16'>
            <p className='text-center text-pink-700 font-bold'>Available Appointments on {format(selectedDate,'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-6 mt-6'>
                {
                  services.map(service => <AppointmentOption
                   key={service._id}
                   service={service}
                   setTreatment={setTreatment}
                   ></AppointmentOption>)
                }
            </div>
            {treatment && <BookingModal
            treatment={treatment}
            selectedDate={selectedDate}
            setTreatment={setTreatment}
            refetch={refetch}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;