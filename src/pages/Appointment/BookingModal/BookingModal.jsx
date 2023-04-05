import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate,setTreatment,refetch }) => {

  const {user} = useContext(AuthContext);

  const { name,slots } = treatment;
  const date = format(selectedDate, "PP");
  

  const handleBooking =(e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const slot = form.slot.value;
    // console.log(name,phone,email,slot,selectedDate);
    const customerBooking={
      appointmentDate : date,
      treatment : treatment.name,
      customer : name,
      slot,email,phone


    }
    fetch('https://perlour-app-server.vercel.app/bookings',{
      method: 'POST',
      headers : {'content-type': 'application/json'},
      body : JSON.stringify(customerBooking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.acknowledged){

        setTreatment(null)
        toast.success('Booking confirmed successfully');
        refetch();
        
      }
      else{
        toast.error(data.message)
      }
    })
    console.log(customerBooking);
  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center"> {name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              value={date}
              disabled
              className="input w-full"
            />
            <select name="slot" className="select w-full ">
              {
                slots.map((slot,i) => <option value={slot} key={i}>{slot}</option>)
              }
            </select>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full"
              autoComplete="off"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full"
              required
              autoComplete="off"
            />
            <input
            defaultValue={user?.email}  
           disabled         
              name="email"
              type="email"
              placeholder="Email"
              className="input w-full"
              required
              autoComplete="off"
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn w-full bg-pink-600 hover:bg-pink-700 border-none"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
