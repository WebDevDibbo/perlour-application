import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";




const AlertBox = () => {
  
  const {user} = useContext(AuthContext);

  return (
    <>
      <div>
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="confirm-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">
            Are you sure you want to make admin?
          </h3>
          <div className="flex justify-center mt-10">
            <label   className="text-green-500 mr-4  px-3 py-3 rounded-lg border border-green-600 adminbtn  cursor-pointer">Confirm</label>
            <label htmlFor="confirm-modal"  className='text-red-500 px-3 py-3 cursor-pointer border border-red-600 deletebtn rounded-lg '>Cancel</label>
          </div>
          
        </div>
      </div>
      </div>
    </>
  );
};

export default AlertBox;
