import React from 'react';
import { FaHome, FaList, FaUser } from 'react-icons/fa';
import { MdLibraryAdd } from "react-icons/md";
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-orange-400 text-base-content space-y-4">
                        {/* Sidebar content here */}
                        <Link><li className="text-xl font-medium w-full btn btn-outline btn-neutral"><a><FaUser></FaUser> My Profile</a></li></Link>
                        <Link><li className="text-xl font-medium w-full btn btn-outline btn-neutral"><a><MdLibraryAdd></MdLibraryAdd> Add Product</a></li></Link>
                        <Link><li className="text-xl font-medium w-full btn btn-outline btn-neutral"><a><FaList></FaList>My Products</a></li></Link>
                        <div className="flex flex-col w-full ">
                          
                            <div className="divider divider-neutral"></div>
                           
                        </div>
                        <Link to="/"><li className="text-xl font-medium w-full btn btn-outline btn-neutral"><a><FaHome></FaHome> Home</a></li></Link>

                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;