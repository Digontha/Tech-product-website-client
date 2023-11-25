import React, { useState } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TrandingCard = ({ product }) => {
    const [upvoteCount, setUpvoteCount] = useState(product.upvote);
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
        <div>
            <>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 w-full h-60">
                        <img src={product.image} alt="Shoes" className="rounded-xl w-fit h-60" />
                    </figure>
                    <div className="card-body items-center text-center ">
                       <Link to={`/trandingProduct/${product._id}`}> <h2 className="text-xl cursor-pointer">{product.product_name}</h2></Link>
                    </div>
                    <div className="card-action flex justify-center mb-3">
                        <button
                            className={`btn btn-secondary text-white btn-outline ${isUpvoted ? 'disabled' : ''}`}
                            onClick={handleUpvote}
                            disabled={isUpvoted}
                        >
                            <FaRegThumbsUp />
                            {upvoteCount}
                        </button>
                    </div>
                </div>
            </>
        </div>
    );
};

export default TrandingCard;