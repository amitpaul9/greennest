import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

const links = [
    <li className='mr-4'><NavLink to="/">Home</NavLink></li>,
    <li className='mr-4'><NavLink to='/plants'>Plants</NavLink></li>,
    <li className='mr-4'><NavLink to="/myprofile">My Profile</NavLink></li>
]

    return (
        <div className="navbar shadow-sm bg-white" >
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#344e41]">
       {links}
      </ul>
    </div>
    <Link className=" text-xl"><div className='h-10 w-40 flex justify-center items-center'><img src="/public/assets/GreenNest Logo2.png" alt="" /></div></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#344e41]">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;