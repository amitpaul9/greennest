import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router';

const ErrorPAge = () => {
    return (
        <div className='flex flex-col container mx-auto min-h-screen'>
            <Navbar></Navbar>
           <main className='flex-1'>
            <div className="flex flex-col justify-center items-center space-y-2 py-10">
        <img className='h-[200px] ' src="/assets/error.jpg" alt="" />
         <h1 className="text-[#001931] text-5xl">Oops, page not found!</h1>
        <p className="text-[#627382] text-xl">
          The page you are looking for is not available.
        </p>

        <div className=" text-center">
          <Link to="/" className='btn text-white' style={{ backgroundImage: 'linear-gradient(to right, #344e41, #3f5c4b, #4a7655)' }}>
            Go to Home
          </Link>
        </div>
      </div>
           </main>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPAge;