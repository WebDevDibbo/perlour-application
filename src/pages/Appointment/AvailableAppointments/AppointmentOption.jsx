import React from "react";

const AppointmentOption = ({ service,setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card bg-base-100 shadow-lg border border-black">
      <div className="card-body text-center">
        <h2 className="text-2xl text-pink-600 text-center font-semibold">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <div className="card-actions justify-center">
          <label
           onClick={()=>setTreatment(service)}
            htmlFor="booking-modal"
            className="btn bg-pink-600 hover:bg-pink-700 border-none"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
