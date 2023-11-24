import React, { useState } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';

const FeatureCard= ({ product }) => {
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
    <div className="card w-96 bg-slate-600 shadow-xl my-10">
      <figure className="px-10 pt-10 w-full h-60">
        <img src={product.image} alt="Shoes" className="rounded-xl h-60" />
      </figure>
      <div className="card-body text-white items-center text-center">
        <h2 className="card-title">{product.product_name}</h2>
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
