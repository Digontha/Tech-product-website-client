import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const navLinks = <>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline  font-semibold text-orange-400" : ""}
            to="/">
            <li><a>Home</a></li>
        </NavLink>

        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline  font-semibold text-orange-400" : ""}
            to="/products">
            <li><a>Products</a></li>
        </NavLink>



    </>
    const handleLogout = () => {
        logOut();
    }
    return (
        <>
            <div className="navbar fixed z-10 text-white font-bold  max-w-screen-xl bg-[#15151580]  bg-opacity-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>

                    <div className='flex items-center gap-4 text-center '>
                        <h1 className='text-xl text-orange-400'>TechBD</h1>
                        <img className='w-10 h-10 rounded-full ' src="https://wallpapercave.com/wp/wp2823499.png" alt="" />
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>


                {user ? <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <img tabIndex={0} className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" />
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-black'><a>{user?.displayName}</a></li>
                            <button onClick={handleLogout} className="btn btn-success btn-outline">Log out</button>
                        </ul>
                    </div>
                </div>
                    :
                    <div className="navbar-end">
                        <Link to="/login" className="btn px-5 btn-warning btn-outline">Log In</Link>
                    </div>}



            </div>
        </>
    );
};

export default Navbar;