import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { signInUser, user, googleLogin } = useContext(AuthContext)
    console.log(user);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);



        signInUser(email, password)
            .then(() => {

                swal("Logged", "You login successfully", "success");
                e.target.reset()


            })
            .catch(() => {

                swal("Error", "Your email or  password dose not match", "error");
            })





    }
    const handleGoogle = () => {
        googleLogin()
            .then(() => {
                swal("Logged", "You login successfully", "success");

            })
            .catch(() => {
                swal("Error", "something went wrong", "error");
            })
    }


    return (
        <>
            <div className='lg:flex flex-row-reverse lg:w-full bg-base-100'>
                <div className='lg:w-1/2 flex flex-col justify-center items-center mt-10 lg:h-[70vh]'>
                    <h1 className="text-2xl font-semibold py-3">Login</h1>
                    <div className="card w-full  ">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <Link className="text-center" to="/register"><p>Haven't any account? <span className="font-bold btn btn-link">register</span></p></Link>
                        <div className="p-5">
                            <button onClick={handleGoogle} className="btn btn-sm btn-neutral w-full"><FcGoogle></FcGoogle> Google</button>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <img src="https://th.bing.com/th/id/R.87e87fa8cb1c4d332a64470d5c3acd89?rik=vuWahGaWKYN5CQ&riu=http%3a%2f%2fdli-eduventure.um.ac.id%2fassets%2fimg%2flogin.png&ehk=hPJNQY6rdxBzsCPJa9ahwTJgf6KEPNQdNr1lfqo1NTk%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </div>
            </div>

        </>

    );
};

export default Login;