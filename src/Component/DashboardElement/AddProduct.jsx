import React, { useContext } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const axiosPublic = useAxiosPublic()
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleAddProduct = (e) => {
        e.preventDefault();
        const from = e.target
        const product_name = from.name.value
        const image = from.image.value
        const tag = from.tag.value
        const upvote = Number(from.upvote.value)
        const product_description = from.description.value
        console.log(product_description, product_name, image, tag, upvote);

        const productData = {
            product_name,
            image,
            tag,
            upvote,
            product_description,
            email:user?.email,
            status:"pending"
        }
        axiosPublic.post("/myProduct",productData)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                swal("Added", "Your product add successfully", "success");
                from.reset()
                navigate("/dashboard/myProduct")
            }
        })


    }
    return (
        <>
            <h1 className='text-2xl text-center underline mb-5'>Add Your Product</h1>
            <form onSubmit={handleAddProduct}>
                <div className='flex gap-10 '>
                    <div>
                        <input type="text" placeholder="name" name='name' className="input input-bordered w-full mb-4" />
                        <input type="text" placeholder="tag" name='tag' className="input input-bordered w-full " />
                    </div>
                    <div>
                        <input type="number" placeholder="Upvote" name='upvote' className="input input-bordered w-full  mb-4" />
                        <input type="text" placeholder="PhotoURL" name='image' className="input input-bordered w-full " />
                    </div>
                </div>
                <div>
                    <textarea placeholder="Description" name='description' className="textarea textarea-bordered textarea-lg w-full mt-4" ></textarea>
                </div>

                <input className="btn btn-block btn-neutral" type="submit" value="Add Product" />
            </form>


        </>
    );
};

export default AddProduct;