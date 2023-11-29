import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
        <div className="lg:w-[50%] mx-auto mt-10 bg-[#F4F3F0] p-20 flex flex-col items-center h-[70vh] space-y-10">
            <h1 className="text-5xl">Oops! 404 Something went wrong.</h1>
            <p>We're sorry, but an error occurred. Please try again later.</p>

            <Link to="/"><button className="btn btn-neutral">Back Home</button></Link>
        </div>
       
       
       </>
    );
};

export default ErrorPage;