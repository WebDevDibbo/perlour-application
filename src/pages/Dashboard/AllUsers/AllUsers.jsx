import { useQuery } from '@tanstack/react-query';
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import './AllUsers.css'
import { toast } from 'react-hot-toast';

const AllUsers = () => {
  const {user} = useContext(AuthContext);

    const styles = {
        txtColor:{
            color: " #686868"
        },
        txtColors:{
            color:'#000000'
        }
    }

    const {data : users = [],refetch} = useQuery({
        queryKey: ['users'],
        queryFn:async() => {
            const res = await fetch('https://perlour-app-server.vercel.app/users')
            const data = await res.json();
            return data
        }
    })
 
    const handleMakeAdmin = id => {
     if(window.confirm('Are you sure?')){

      console.log(id)
       fetch(`https://perlour-app-server.vercel.app/users/admin/${id}` ,{ 
        method: 'PUT' 
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if(data.modifiedCount){
          toast.success('Make Admin Successful');
          refetch();
        }
      })
     }
     else{
      console.log("you have cancelled")
      
    }
       
      
      
    };
    

    return (
        <>
        
            <div className="overflow-x-auto">
        <table className="table w-full">
          
          <thead>
            <tr style={styles.txtColor} className="font-normal">
              
              <th>Name</th>
              <th>Email id</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          
            {users.map(user => <tr style={styles.txtColors} key={user._id}>
              
              <td>{user.name}</td>
              <td>{user.email}</td>
            
              <td>{user?.role !== "admin" ? <label
              onClick={()=> handleMakeAdmin(user._id)}
              // htmlFor="confirm-modal"
              className="text-green-500  px-3 py-3 rounded-lg adminbtn cursor-pointer"
          >
            Make Admin
          </label> : <span className='text-green-500'>Admin</span>}</td>
              <td><button className='text-red-500 px-3 py-3 rounded-lg deletebtn'>Delete Admin</button></td>
            </tr>)
                
            }
          </tbody>
        </table>
      </div>

      {/* <AlertBox /> */}
      
        </>
    );
};

export default AllUsers;