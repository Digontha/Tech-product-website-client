import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import swal from 'sweetalert';

const Update = () => {
    const productData = useLoaderData()
    console.log(productData);
const axiosPublic = useAxiosPublic()
    const handleUpdate = (e) => {
        e.preventDefault();
        const from = e.target
        const product_name = from.name.value
        const image = from.image.value
        const tag = from.tag.value
        const upvote = Number(from.upvote.value)
        const product_description = from.description.value
        console.log(product_description, product_name, image, tag, upvote);

        const updateData = {
            product_name,
            image,
            tag,
            upvote,
            product_description,
              
        }
        axiosPublic.put(`/myProduct/${productData._id}`,updateData)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                swal("Updated", "Your product update successfully", "success");
            }
        })
        .catch(err => {
            console.log(err);
        })
        
    };

    return (
        <>
            <h1 className='text-2xl text-center underline mb-5'>Update Your Product</h1>
            <form onSubmit={handleUpdate} className='lg:h-[40vh] lg:mt-40'>
                <div className='flex gap-10 justify-center '>
                    <div>
                        <input defaultValue={productData?.product_name} type="text" placeholder="name" name='name' className="input input-bordered w-full mb-4" />
                        <input defaultValue={productData?.tag} type="text" placeholder="tag" name='tag' className="input input-bordered w-full " />
                    </div>
                    <div>
                        <input defaultValue={productData?.upvote} type="number" placeholder="Upvote" name='upvote' className="input input-bordered w-full  mb-4" />
                        <input defaultValue={productData?.image} type="text" placeholder="PhotoURL" name='image' className="input input-bordered w-full " />
                    </div>
                </div>
                <div>
                    <textarea defaultValue={productData?.product_description} placeholder="Description" name='description' className="textarea textarea-bordered textarea-lg w-full mt-4" ></textarea>
                </div>

                <input className="btn btn-block btn-neutral mb-4" type="submit" value="Update Product" />
            </form>


        </>
    );
};

export default Update;