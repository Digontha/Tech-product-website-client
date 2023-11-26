import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Root = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('/dashboard')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;