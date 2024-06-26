import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import logo from "../assets/images/tech-logo.png"
import "./Css/nav.css"
import Container from '../Component/UI/Container';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const navLinks = <div className='flex lg:flex-row  flex-col gap-10'>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2 border-black" : "border-b-2-hover"}
            to="/">
            <li><a>Home</a></li>
        </NavLink>

        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2 border-black" : "border-b-2-hover"}
            to="/products">
            <li><a>Products</a></li>
        </NavLink>

        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2 border-black" : "border-b-2-hover"}
            to="/contact">
            <li><a>Get In Touch</a></li>
        </NavLink>




    </div>
    const handleLogout = () => {
        logOut();
    }
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 120);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>

            {/* <div className="navbar fixed z-10 text-white font-bold  bg-[#15151580]  bg-opacity-30">
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
                                <li className='text-black'><p>{user?.displayName}</p></li>
                                <Link to="/dashboard"> <button className="btn w-full btn-sm btn-success btn-outline  mb-3">Dashboard</button></Link>
                                <button onClick={handleLogout} className="btn btn-sm btn-success btn-outline">Log out</button>
                            </ul>
                        </div>
                    </div>
                        :
                        <div className="navbar-end">
                            <Link to="/login" className="btn  px-5 btn-warning btn-outline">Log In</Link>
                        </div>}



                </div> */}
           
                <div className={`navbar-1 navbar  z-10 xl:px-20 2xl:px-[20%]  font-poppins fixed ${scrolled ? 'scrolled' : 'navbar z-10 xl:px-[20%]  fixed font-poppins'}`}>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm text-xl dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <a href='/'>
                            <img className='lg:w-20 lg:h-20 w-10 h-10 rounded-full' src={logo} alt="" />
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-xl font-medium">
                            {navLinks}
                        </ul>
                    </div>
                    {user ? <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <img tabIndex={0} className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" />
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li className='text-black'><p>{user?.displayName}</p></li>
                                <Link to="/dashboard"> <button className="btn w-full btn-sm btn-success btn-outline  mb-3">Dashboard</button></Link>
                                <button onClick={handleLogout} className="btn btn-sm btn-success btn-outline">Log out</button>
                            </ul>
                        </div>
                    </div>
                        :
                        <div className="navbar-end">
                            <Link to="/login">
                                <button className="py-2 w-28 h-12 px-3 mb-4 mt-6 bg-gradient-to-r from-[#333333] to-[#83543D]  duration-300 text-white flex items-center justify-center overflow-hidden hover:overflow-visible relative group"><svg viewBox="0 0 1024 1024" className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g ><path d="M244.5 662l268.1-446.4 268 446.4z" fill="#9ED5E4"></path><path d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z" fill="#154B8B"></path><path d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z" fill="#F7F9F9"></path><path d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z" fill="#154B8B"></path><path d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z" fill="#9ED5E4"></path><path d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z" fill="#154B8B"></path><path d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z" fill="#9ED5E4"></path><path d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z" fill="#154B8B"></path></g></svg><span className="duration-500">Login</span></button>
                            </Link>
                        </div>}

                </div>
          


        </>
    );
};

export default Navbar;