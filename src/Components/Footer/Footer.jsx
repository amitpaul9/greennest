import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaSquareFacebook, FaSquarePinterest } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center text-base-content rounded p-8 shadow-sm  bg-[#344e4105] ">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Privecy Policy</a>

  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
    
        <a ><AiFillInstagram className='h-7 w-7' /></a>
      <a><FaSquareFacebook className='h-7 w-7' /> </a>
      <a><FaSquarePinterest className='h-7 w-7' /></a>
      
    </div>
  </nav>
  <aside>
    <p>© {new Date().getFullYear()} - GreenNest. All rights reserved.</p>
  </aside>
</footer>
    );
};

export default Footer;