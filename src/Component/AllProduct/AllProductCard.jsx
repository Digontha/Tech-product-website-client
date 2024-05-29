import React, { useState } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllProductCard = ({product}) => {
    console.log(product);
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
        <div>
            <>
            <div className="card bg-gradient-to-r from-[#F3EFEC] to-[#D6E2FF]">
                        <figure className="px-10 pt-10 w-full ">
                            <img src={product?.image} alt="Shoes" className="rounded-xl w-fit h-60" />
                        </figure>
                        <div className="card-body items-center text-center ">
                            <Link to={`/trandingProduct/${product?._id}`}> <h2 className="text-sm font-semibold cursor-pointer">{product?.product_name}</h2></Link>
                        </div>
                        <div className="card-action flex justify-center mb-3">
                            <Link to={`/trandingProduct/${product?._id}`}>
                                <button className="  rounded border-none btn  shadow-[#094F84] text-white bg-gradient-to-r from-[#333333] to-[#83543D] flex gap-2"><span>Buy Now</span> <span>
                                </span></button>
                            </Link>
                        </div>
                    </div>
            </>
        </div>
    );
};

export default AllProductCard;