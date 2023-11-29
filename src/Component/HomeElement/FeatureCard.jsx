import React, { useState } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FeatureCard= ({ product }) => {
  const [upvoteCount, setUpvoteCount] = useState(product?.upvote);
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
    <div className="card  bg-orange-400 shadow-xl my-10">
      <figure className="px-10 pt-10 w-full h-fit">
        <img src={product?.image} alt="Shoes" className="rounded-xl h-60" />
      </figure>
      <div className="card-body text-white items-center text-center">
       <Link to={`/featuredProduct/${product?._id}`}> <h2 className="card-title cursor-pointer text-2xl">{product?.product_name}</h2></Link>
        <div className="card-actions">
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
    </div>
  );
};

export default FeatureCard;
