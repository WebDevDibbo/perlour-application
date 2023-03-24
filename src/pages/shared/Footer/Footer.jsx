import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare,FaInstagram,FaLinkedin,FaYoutube } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="footer grid p-10 md:py-16 md:px-32 bg-pink-700 text-white">
  <div className='flex'>
      <HiLocationMarker className='w-5 h-5'/>
    <p className='w-2/3 inline-block'>H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka, Bangladesh</p>
  </div> 
  <div>
    <h3 className="font-semibold text-white">Company</h3> 
    <Link className="link link-hover">Branding</Link> 
    <Link className="link link-hover">Design</Link> 
    <Link className="link link-hover">Marketing</Link> 
    <Link className="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <h3 className="font-semibold text-white">Quick Link</h3> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Contact</Link> 
    <Link className="link link-hover">Jobs</Link> 
    <Link className="link link-hover">Press kit</Link>
  </div> 
  <div>
    <h3 className="font-semibold text-white">About us</h3> 
    <p className='w-3/4'>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
    <div className='social-link flex'>
    <FaFacebookSquare className='w-5 h-5 mr-2'></FaFacebookSquare>
    <FaInstagram className='w-5 h-5 mr-2'></FaInstagram>
    <FaLinkedin className='w-5 h-5 mr-2'></FaLinkedin>
    <FaYoutube className='w-5 h-5'></FaYoutube>
    </div>
  </div>
</footer>
    );
};

export default Footer;