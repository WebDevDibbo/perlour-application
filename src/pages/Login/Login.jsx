import React from 'react';
import { FaGoogle } from "react-icons/fa"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mb-10 mt-6">

          
            <h1 className="text-4xl text-center font-bold py-6 "> Login With</h1>
          
            <form className="card-body p-10">
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
            <div className="form-control mb-2">
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
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-pink-600 border-0 hover:bg-pink-700">Login</button>
              </div>
              <div className="flex btn items-center justify-center my-4 bg-pink-600 border-0 hover:bg-pink-700   text-md cursor-pointer">
               <button><FaGoogle></FaGoogle></button>
               <span className='pl-4 text-white'>Continue With Google</span>
             </div>
            <p className="text-left">Don’t have an account?  <Link className="text-pink-500 font-semibold" to='/signup'>Create an account</Link> </p>

            </form>
          </div>
        
      </div>
    );
};

export default Login;