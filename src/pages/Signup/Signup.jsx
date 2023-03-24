import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'
import { FaFacebook } from "react-icons/fa";


const Signup = () => {
    return (
    <div className='hero '>
       <div className="card flex-shrink-0 w-full max-w-md shadow-2xl pt-8 mb-4">
          <h1 className="text-4xl font-bold mt-3 pl-8 text-left">Create an account</h1>
          <form className="card-body">
            <div className="form-control mb-4">
             <label htmlFor='fname'>
             </label>
              <input
                name="fname"
                type="text"
                placeholder="First Name"
                id='fname'
                required
                className=''
              />
            </div>
            <div className="form-control mb-4">
            <label htmlFor='lname'>
            </label>
              <input
                name="lname"
                type="text"
                placeholder="Last Name"
                id='lname'
                required
              />
            </div>
            <div className="form-control mb-4">
            <label htmlFor='email'>
            </label>
              <input
                name="email"
                type="email"
                id='email'
                placeholder="Email"
                required
              />
              
            </div>
            <div className="form-control mb-4">
            <label htmlFor='password'>
            </label>
              <input
                name="password"
                type="password"
                id='password'
                placeholder="Password"
                required
              />
              
            </div>
            <div className="form-control mb-4">
            <label htmlFor='cpassword'>
            </label>
              <input
                name="cpassword"
                type="password"
                id='cpassword'
                placeholder="Confirm Password"
                required
              />
              
            </div>
            <div className="form-control">
              <input className="btn bg-pink-600 border-0 hover:bg-pink-700" type="submit" value="Create An Account" />
            </div>
            <p className="text-center mt-4">
            Already have an account?
            <Link to="/login" className="text-pink-600 pl-2 font-semibold" >
              login
            </Link>
          </p>
          <div className="text-center mb-1 divider">or</div>
          </form>
        
        <div className='mx-7'>
        <input
          type="submit"
          className="btn mb-2 w-full bg-pink-600 hover:bg-pink-700  border-none"
          value="Continue With Facebook"
        />
        <input
          type="submit"
          className="btn w-full bg-pink-600 hover:bg-pink-700  border-none"
          value="Continue With Google"
        />
        </div>
        
          
        </div>
        </div>
    );
};

export default Signup;