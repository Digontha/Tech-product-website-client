import React from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import swal from 'sweetalert';
import useReview from '../../Hooks/useReview';

const PostReview = ({ id }) => {
    const axiosPublic = useAxiosPublic()
    const [,refetch]=useReview(id)
    const handleReview = (e) => {
        e.preventDefault();
        const form = e.target
        const reviewer_name = form.name.value
        const reviewer_image = form.image.value
        const reviewer_description = form.description.value
        const rating = form.rating.value
        console.log(rating, reviewer_name, reviewer_image, reviewer_description);
        const reviewData = {
            reviewer_name,
            reviewer_image,
            reviewer_description,
            rating,
            productId: id
        }

        axiosPublic.post("/review", reviewData)
            .then(res => {
                console.log(res.data)
                swal("Post", "Review post successfully", "success");
                form.reset()
                refetch()
            })


    };

    return (
        <form onSubmit={handleReview} className=''>
            <div>
                <input type="text" placeholder="Your Name" name='name' className="input input-bordered mr-2 " />
                <input type="text" placeholder="PhotoURL" name='image' className="input input-bordered mr-2 " />
                <input type="number" placeholder="Rating" name='rating' className="input input-bordered  " />
            </div>
            <div>
                <textarea placeholder="Description" name='description' className="textarea textarea-bordered textarea-lg w-full mt-4" ></textarea>
            </div>
            <input type="submit" value="Post Review" className='btn btn-neutral btn-outline' />
        </form>

    );
};

export default PostReview;