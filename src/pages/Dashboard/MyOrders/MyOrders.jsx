import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyOrders = () => {

    const{user} = useContext(AuthContext);

    const styles = {
        txtColor:{
            color: " #686868"
        },
        txtColors:{
            color:'#000000'
        }
    }


    const {data : bookings = []} =  useQuery({
        queryKey : ['bookings', user?.email],
        queryFn : async () => {
            const res = await fetch(`https://perlour-app-server.vercel.app/bookings?email=${user?.email}`)
            const data = await res.json()
            return data
        }
       
    })


  return (
    <div className=" ml-9">
      <h2 className='text-2xl mb-6 text-black font-medium'>Order list</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr style={styles.txtColor} className="font-normal">
              
              <th>Name</th>
              <th>Email id</th>
              <th>Service</th>
              <th>Pay With</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            
            { bookings?.length &&
                bookings.map((booking,i) => <tr style={styles.txtColors} key={i}>
              
              <td>{booking.customer}</td>
              <td>{booking.email}</td>
              <td>{booking.treatment}</td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
