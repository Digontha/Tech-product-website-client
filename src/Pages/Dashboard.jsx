import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaHome, FaList, FaStreetView, FaUser, FaUserAlt, FaUserCheck } from 'react-icons/fa';
import { MdLibraryAdd } from "react-icons/md";
import { Link, Outlet } from 'react-router-dom';
import useUsers from '../Hooks/useUsers';
import logo from "../assets/images/tech-logo.png"
const Dashboard = () => {
    const [users] = useUsers()
    console.log(users);
    return (
        <>
            <Helmet>
                <title>TechBD || dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open font-poppins">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col-reverse items-center justify-center">

                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-gradient-to-r from-[#F3EFEC] to-[#D6E2FF] text-base-content space-y-4">
                        <div className='flex flex-col text-center mb-10'>
                            <div className='flex items-center gap-4 justify-center '>
                                
                                <a href="/">
                                <img className='w-10 h-10 rounded-full ' src={logo} alt="" />
                                </a>
                            </div>
                        </div>
                        {/* Sidebar content here */}
                        <Link to="/dashboard"><li className="text-xl font-medium w-full btn btn-outline btn-neutral"><p><FaUser></FaUser> My Profile</p></li></Link>
                        <Link to="/dashboard/addProduct"><li className="text-xl font-medium w-full btn btn-outline btn-neutral"><p><MdLibraryAdd></MdLibraryAdd> Add Product</p></li></Link>
                        <Link to="/dashboard/myProduct"><li className="text-xl font-medium w-full btn btn-outline btn-neutral"><p><FaList></FaList>My Products</p></li></Link>
                        {
                            users?.map(item => item?.role === "moderator" && (
                                <div key={item.id} className="flex flex-col w-full">
                                    <div className="divider divider-neutral"></div>
                                    <p className='text-xl underline mb-3'>Moderator Function</p>
                                    <Link to="/dashboard/productReviewQueue">
                                        <li className="text-xl font-medium w-full btn btn-outline btn-neutral">
                                            <p><FaStreetView />product Review</p>
                                        </li>
                                    </Link>
                                </div>
                            ))
                        }

                        {users?.map(item => item?.role === "admin" && (<div key={item._id} className="flex flex-col w-full">
                            <div className="divider divider-neutral"></div>
                            <p className='text-xl underline mb-3'>Admin Function</p>
                            <Link to="/dashboard/manageUsers">
                                <li className="text-xl font-medium w-full btn btn-outline btn-neutral mb-3">
                                    <p><FaUserCheck />Manage User</p>
                                </li>
                            </Link>
                            <Link to="/dashboard/statistics">
                                <li className="text-xl font-medium w-full btn btn-outline btn-neutral">
                                    <p><FaUserCheck />Statistics</p>
                                </li>
                            </Link>
                        </div>))}

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