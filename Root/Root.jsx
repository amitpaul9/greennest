import React from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../src/Components/Footer/Footer';

const Root = () => {
    return (
        <div className='flex flex-col container mx-auto min-h-screen'>
            <Navbar></Navbar>
            <main className='flex-1'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;