import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaHome, FaList, FaStreetView, FaUser } from 'react-icons/fa';
import { MdLibraryAdd } from "react-icons/md";
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>TechBD || dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col-reverse items-center justify-center">
                    
                        <Outlet></Outlet>
                 
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-orange-400 text-base-content space-y-4">
                        <div className='flex flex-col text-center mb-10'>
                            <div className='flex items-center gap-4 justify-center '>
                                <h1 className='text-xl text-black'>TechBD</h1>
                                <img className='w-10 h-10 rounded-full ' src="https://wallpapercave.com/wp/wp2823499.png" alt="" />
                            </div>
                        </div>
                        {/* Sidebar content here */}
                        <Link to="/dashboard"><li className="text-xl font-medium w-full btn btn-outline btn-neutral"><p><FaUser></FaUser> My Profile</p></li></Link>
                        <Link to="/dashboard/addProduct"><li className="text-xl font-medium w-full btn btn-outline btn-neutral"><p><MdLibraryAdd></MdLibraryAdd> Add Product</p></li></Link>
                        <Link to="/dashboard/myProduct"><li className="text-xl font-medium w-full btn btn-outline btn-neutral"><p><FaList></FaList>My Products</p></li></Link>
                        <Link to="/dashboard/productReviewQueue"><li className="text-xl font-medium w-full btn btn-outline btn-neutral"><p><FaStreetView></FaStreetView>product Review</p></li></Link>
                        <div className="flex flex-col w-full ">

                            <div className="divider divider-neutral"></div>

                        </div>
                        <Link to="/"><li className="text-xl font-medium w-full btn btn-outline btn-neutral"><p><FaHome></FaHome> Home</p></li></Link>

                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;