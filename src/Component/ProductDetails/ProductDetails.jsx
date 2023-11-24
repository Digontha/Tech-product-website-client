import React, { useState } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const ProductDetails = () => {
    const products = useLoaderData()
    console.log(products);
    const [upvoteCount, setUpvoteCount] = useState(products.upvote);
    const [isUpvoted, setIsUpvoted] = useState(false);

    const handleUpvote = () => {
        if (!isUpvoted) {
            // Increase the upvote count by 1 when the button is clicked
            setUpvoteCount(upvoteCount + 1);
            // Set isUpvoted to true to disable the button
            setIsUpvoted(true);
        }
    };

    return (
        <div className='flex flex-col  mb-10'>
            <div className="">
                <figure className='lg:w-fit lg:h-[600px] mx-auto'><img className='lg:w-fit lg:h-[600px] mx-auto' src={products.image} alt="Album" /></figure>
            </div>
            <div className='mt-3'>
                <p className='text-3xl'>{products.product_name}</p>
                <p className='mt-3'>Description:{products.product_description}</p>
            </div>

            <button
                className={`btn btn-secondary  text-white btn-outline ${isUpvoted ? 'disabled' : ''}`}
                onClick={handleUpvote}
                disabled={isUpvoted}
            >
                <FaRegThumbsUp />
                {upvoteCount}
            </button>

            <Review products={products}></Review>

        </div>
    );
};

export default ProductDetails;