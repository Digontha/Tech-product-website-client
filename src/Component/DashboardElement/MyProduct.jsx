import React from 'react';
import useMyProduct from '../../Hooks/useMyProduct';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import swal from 'sweetalert';

const MyProduct = () => {
    const [myProduct,refetch, isPending] = useMyProduct()
    console.log(myProduct);
    const axiosPublic = useAxiosPublic()
    const handleDelete = (id) => {

        axiosPublic.delete(`/myProduct/${id}`)
            .then(res => {
                console.log(res.data);
                if(res.data.deletedCount>0){
                    swal("delete", "Your product deleted successfully", "success");
                    refetch()
                }
                
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <>
            {isPending ? <Loader></Loader> :
                <div className="bg-slate-100 w-full p-10 ml-10">

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Upvote</th>
                                    <th>Status</th>



                                </tr>
                            </thead>
                            {
                                myProduct?.map((item, inx) => <>
                                    <div key={item._id}></div>

                                    <tbody>

                                        <tr>
                                            <td>{inx + 1}.</td>
                                            <td>{item?.product_name}</td>
                                            <td>{item?.upvote}</td>
                                            <td>{item?.status}</td>
                                            <Link to={`/myProduct/${item?._id}`}><td className='btn btn-sm btn-accent btn-outline mr-6'>Update</td></Link>

                                            <td onClick={() => handleDelete(item._id)} className='btn btn-sm btn-secondary btn-outline'>Delete</td>
                                        </tr>

                                    </tbody>
                                </>
                                )
                            }
                        </table>

                    </div>
                </div>
            }
        </>


    );
};

export default MyProduct;