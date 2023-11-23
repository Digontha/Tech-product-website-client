import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {


    const navLinks = <>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-base font-semibold text-orange-400" : ""}
             to="/">
            <li><a>Home</a></li>
        </NavLink>

        <NavLink to="/product"><li><a>Products</a></li></NavLink>



    </>

    return (
        <>
            <div className="navbar fixed z-10 text-white font-bold  max-w-screen-xl bg-[#15151580]  bg-opacity-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>

                    <div className='flex flex-col text-center'>
                        <a className="btn btn-ghost normal-case text-xl "> <span>BISTRO BOSS</span></a>
                        <span className='text-xl'>Restaurant</span>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>


                {/* <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <img tabIndex={0} className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" />
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li className='text-black'><a>{user?.displayName}</a></li>
                                <button onClick={handleLogout} className="btn btn-success btn-outline">Log out</button>
                            </ul>
                        </div>
                    </div> */}

                <div className="navbar-end">
                    <Link className="btn px-5 btn-warning btn-outline">Log In</Link>
                </div>



            </div>
        </>
    );
};

export default Navbar;