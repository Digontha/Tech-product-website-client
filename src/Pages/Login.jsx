import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../AuthProvider/AuthProvider';
import Container from '../Component/UI/Container';
import im from "../assets/images/R (1).png"

const Login = () => {
    const { signInUser, user, googleLogin } = useContext(AuthContext)
    console.log(user);
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);



        signInUser(email, password)
            .then(() => {

                swal("Logged", "You login successfully", "success");
                e.target.reset()
                navigate(location?.state ? location.state : "/")

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
            <Container>
                <div className='lg:flex flex-row-reverse lg:w-full bg-base-100 pt-40 font-poppins'>
                    <div className='lg:w-1/2 flex flex-col justify-center items-center mt-10 lg:h-[70vh]'>
                        <h1 className="text-2xl font-semibold py-3">Login</h1>
                        <div className="card w-full  ">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input border-2 appearance-none focus:outline-none focus:border-[#333333] border-non outline-none border-[#333333] input-bordered lg:w-full  " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input border-2 appearance-none focus:outline-none focus:border-[#333333] border-non outline-none border-[#333333] input-bordered lg:w-full  " required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="rounded border-none btn  shadow-[#094F84] text-white bg-gradient-to-r  from-[#333333] to-[#83543D]">Login</button>
                                </div>
                            </form>
                            <Link className="text-center" to="/register"><p>Haven't any account? <span className="font-bold btn btn-link">register</span></p></Link>
                            <div className="p-5">
                                <button onClick={handleGoogle} className="btn btn-sm btn-neutral w-full"><FcGoogle></FcGoogle> Google</button>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2'>
                        <img src={im} alt="" />
                    </div>
                </div>
            </Container>

        </>

    );
};

export default Login;