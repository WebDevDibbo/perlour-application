import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../pages/shared/Header/Header";
import { FiHardDrive } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { TbMessageDots} from "react-icons/tb";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../Contexts/AuthProvider";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
    const styles = {
        primary:{
            color:"#F63E7B"
        }
    }
   
  return (
    <>
      <Header></Header>
      <div className="drawer drawer-mobile ">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>

        </div>
        <div className="drawer-side ">
       
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li style={styles.primary} className="pl-3" >
            <Link className="text-base" to='/book'> <BsCart2/> Book</Link>
            </li>
            <li className="pl-3">
            <Link className="text-base" to='/dashboard'><FiHardDrive></FiHardDrive> Order list</Link>
            </li>
            <li className="pl-3">
            {isAdmin && <Link className="text-base" to='/dashboard/allusers'><FiHardDrive></FiHardDrive> All Users</Link>}
            </li>
            <li className="pl-3">
            <Link className="text-base" to='/'> <TbMessageDots></TbMessageDots>Review</Link>
            </li>
            <li>
            
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
