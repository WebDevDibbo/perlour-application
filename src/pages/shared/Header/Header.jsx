import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../Contexts/AuthProvider';
import './Header.css'

const Header = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogout = () => {
   logOut()
   .then()
   .catch((error) => console.error(error));
  }



    return (
      <div className="navbar h-24 py-0 md:px-16 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/' className='font-semibold'>Home</Link></li>
        <li><Link className='font-semibold'>Our Portfolio</Link> </li>
        <li><Link className='font-semibold'>Our Team</Link></li>
        <li><Link className='font-semibold'>Contact Us</Link></li>
        {user?.uid ? <li><Link to='/dashboard' className='font-semibold'>Dashboard</Link></li>: null  }
      </ul>
    </div>
    <Link><img className='h-12' src={logo} alt="logo" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/' className='font-semibold'>Home</Link></li>
      <li><Link className='font-semibold'>Our Portfolio</Link> </li>
      <li><Link className='font-semibold'>Our Team</Link></li>
      <li><Link className='font-semibold'>Contact Us</Link></li>
      {user?.uid ? <li><Link to='/dashboard' className='font-semibold'>Dashboard</Link></li>: null  }
    </ul>
  </div>
  <div className="navbar-end">
    {user?.uid ? <Link className="font-medium login-btn border-0 px-10 py-3" onClick={handleLogout}>Logout</Link> : <Link to='/login' className="font-medium login-btn border-0 px-10 py-3">Login</Link>}
  </div>
</div>
    )
};

export default Header;