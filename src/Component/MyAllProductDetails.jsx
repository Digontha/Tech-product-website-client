import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useReview from '../Hooks/useReview';
import { FaRegThumbsUp } from 'react-icons/fa';
import Review from './Review/Review';
import PostReview from './PostReview/PostReview';

const MyAllProductDetails = () => {
    const products=useLoaderData()
    console.log(products);
    const [review] = useReview(products._id)
    console.log("from details", review);
    console.log(products);
    const [upvoteCount, setUpvoteCount] = useState(products.upvote);
    const [isUpvoted, setIsUpvoted] = useState(false);

    const handleUpvote = () => {
        if (!isUpvoted) {
            
            setUpvoteCount(upvoteCount + 1);
         
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
        <div className='text-3xl underline'>Review</div>
        <div className=''>

            <div className=''>
                {
                    review.map(item => <Review key={item._id} item={item}></Review>)
                }
            </div>
            <div className='mt-7'>

                <PostReview id={products._id}></PostReview>
            </div>
        </div>

    </div>
    );
};

export default MyAllProductDetails;