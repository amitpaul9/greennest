import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { TreeContext } from '../../../Contexts/TreeContext';


const Navbar = () => {

  const {user, signOutUser} = useContext(TreeContext);
  console.log(user)

  const handleSignOut=()=>{
    signOutUser()
    .then(()=>console.log("Sign out Successfull"))
    .catch(error=>console.log(error.message))
  }

const links = [
    <li className='mr-4'><NavLink to="/">Home</NavLink></li>,
    <li className='mr-4'><NavLink to='/allplants'>Plants</NavLink></li>,
    <li className='mr-4'><NavLink to="/profile">My Profile</NavLink></li>
]

    return (
        <div className="navbar shadow-sm  bg-[#344e4105]" >
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} className="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#344e41]">
       {links}
      </ul>
    </div>
    <Link className=" text-xl" to="/"><div className='h-10 w-40 flex justify-center items-center'><img src="/public/assets/GreenNest Logo2.png" alt="" /></div></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#344e41]">
      {links}
    </ul>
  </div>
 {user ? <div className='navbar-end'> 


    {/* dropdown  */}
    <div className="dropdown dropdown-end">
  <div tabIndex={0} className=" mr-5 border-2 border-[#344e41] rounded-full"><img className='h-10 w-10 rounded-full' src={user.photoURL} alt="" /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-[#344e41] text-white rounded-box z-1 w-52 p-2 shadow-sm">
    <li><p>{user.displayName}</p></li>
    <li><Link onClick={handleSignOut}>Logout</Link></li>
  </ul>
</div></div>
 : <div className="navbar-end ">
    <Link className="btn bg-[#344e41] text-white mr-2" to="/login">Login</Link>
    <Link className='btn border-2 border-[#344e41] bg-white' to="/register">Register</Link>
  </div>}
</div>
    );
};

export default Navbar;