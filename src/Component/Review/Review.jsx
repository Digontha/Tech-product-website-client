import { Rating } from '@smastrom/react-rating';
import React from 'react';

const Review = ({ products }) => {
    return (
        <>
        <div className='text-3xl underline'>Review</div>
            <div className='border-4 px-2 p-2 lg:w-4/12 mt-4 border-black rounded-3xl'>
                <div className="lg:relative lg:flex lg:w-full lg:max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <div className="lg:relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                        <img
                            src={products?.reviewer_image}
                            alt="tania andrew"
                            className="lg:relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    {products?.reviewer_name}

                                </h5>

                            </div>
                            <p className="flex">

                            </p>
                        </div>
                    </div>
                    <div className="p-0 mb-6">
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            {products?.reviewer_description}
                        </p>
                    </div>

                    <div className="">
                        <Rating
                            style={{ maxWidth: 10, color: '#FFD700' }}
                            value={products?.rating}
                            readOnly
                        >

                        </Rating>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Review;