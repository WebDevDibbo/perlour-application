import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-pink-700 text-white">
  <div>
  {/* <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> */}
    <p className='w-2/3'>H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka, Bangladesh</p>
  </div> 
  <div>
    <span className="footer-title text-white">Company</span> 
    <Link className="link link-hover">Branding</Link> 
    <Link className="link link-hover">Design</Link> 
    <Link className="link link-hover">Marketing</Link> 
    <Link className="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <span className="footer-title text-white">Quick Link</span> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Contact</Link> 
    <Link className="link link-hover">Jobs</Link> 
    <Link className="link link-hover">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title text-white">About us</span> 
    <p className='w-2/4'>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
    <div>

    </div>
  </div>
</footer>
    );
};

export default Footer;