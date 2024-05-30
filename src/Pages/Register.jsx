import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Container from '../Component/UI/Container';
import r2 from "../assets/images/R (2).png"
const Register = () => {
  const { createUser, googleLogin } = useContext(AuthContext)
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const handleRegister = (e) => {

    e.preventDefault();
    const name = e.target.name.value
    const image = e.target.image.value
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(name, image, email, password);

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`])[A-Za-z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`]{7,}$/.test(password)) {

      swal("error", "password must be at least 6 characters one capital letter and one special letter", "error");
    } else {
      createUser(email, password, name, image)
        .then(res => {
          console.log(res.user);
          swal("success", "Your account create successfully", "success");
          updateProfile(res.user, { displayName: name, photoURL: image })
            .then(() => {
              const userData = {
                email,
                name,
                image,
                subscribe: false,
              }
              axiosPublic.post("/users", userData)
                .then(res => console.log(res.data))
              navigate("/")
            })
          e.target.reset()
        })
        .catch(() => {

          swal("error", "something went wrong", "error");
        })
    }




  }
  const handleGoogle = () => {
    googleLogin()
      .then((res) => {

        const userData = {
          email: res.user.email,
          name: res.user.displayName,
          image: res.user.photoURL,
          subscribe: false

        }
        axiosPublic.post("/users", userData)
          .then(res => console.log(res.data))
        swal("success", "Your account create successfully", "success");
      })
      .catch((err) => {
        console.log(err);
        swal("error", "something went wrong", "error");
      })
  }

  return (
    <>
      <section className=''>
        <Container>
          <div className='lg:flex flex-row-reverse items-center lg:w-full  pt-40 font-poppins'>
            <div className='flex flex-col justify-center lg:w-1/2 items-center mt-4 lg:h-[70vh]'>
              <h1 className="text-2xl font-semibold  ">Register</h1>
              <div className="card lg:w-full">
                <form onSubmit={handleRegister} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" name="name" className="input border-2 appearance-none focus:outline-none focus:border-[#333333] border-non outline-none border-[#333333] input-bordered lg:w-full " />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Image</span>
                    </label>
                    <input type="text" placeholder="Image URL" name="image" className="input border-2 appearance-none focus:outline-none focus:border-[#333333] border-non outline-none border-[#333333] input-bordered lg:w-full " />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input border-2 appearance-none focus:outline-none focus:border-[#333333] border-non outline-none border-[#333333] input-bordered lg:w-full " required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input border-2 appearance-none focus:outline-none focus:border-[#333333] border-non outline-none border-[#333333] input-bordered lg:w-full " required />

                  </div>
                  <div className="form-control mt-6">
                    <button className="rounded border-none btn  shadow-[#094F84] text-white bg-gradient-to-r  from-[#333333] to-[#83543D]">Register</button>
                  </div>
                </form>
                <Link className="text-center" to="/login"><p>Have a account? <span className="font-bold btn btn-link">login</span></p></Link>
                <div className="p-5">
                  <button onClick={handleGoogle} className="btn btn-sm btn-neutral w-full"><FcGoogle></FcGoogle> Google</button>
                </div>
              </div>

            </div>
            <div className='lg:w-1/2'>
              <img src={r2} alt="" />
            </div>
          </div>
        </Container>
      </section>

    </>

  );
};

export default Register;