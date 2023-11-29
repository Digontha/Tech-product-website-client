
import useAllMyProduct from '../../Hooks/useAllMyProduct';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

import swal from 'sweetalert';

const ProductReviewQueue = () => {
    const [AllMyProduct, , isPending] = useAllMyProduct()
    console.log(AllMyProduct);
    const axiosPublic = useAxiosPublic()
    

    const handleAcceptedStatus = (id) => {
        
        axiosPublic.put(`/myProductAccepted?id=${id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                swal("Accepted", "Accepted successfully", "success");
            }
        })
    }
    const handleRejectedStatus = (id) => {
        
        axiosPublic.put(`/myProductRejected?id=${id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                swal("Rejected", "Rejected successfully", "success");
            }
        })
    }
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
                                    <th>Product Name</th>

                                </tr>
                            </thead>
                            {
                                AllMyProduct?.map((item, inx) => <>
                                    <div key={item._id}></div>

                                    <tbody>

                                        <tr>
                                            <td>{inx + 1}.</td>
                                            <td>{item.product_name}</td>

                                            <Link to={`/dashboard/AllMyProduct/${item._id}`}><td className='btn btn-sm btn-neutral mr-4'>view Details</td></Link>
                                            <td className='btn btn-sm btn-neutral mr-4'>Make Featured</td>

                                            <td onClick={()=>handleAcceptedStatus(item?._id)} className='btn btn-sm btn-neutral mr-4'>Accept</td>
                                            <td onClick={()=>handleRejectedStatus(item?._id)} className='btn btn-sm btn-warning'>Reject</td>

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

export default ProductReviewQueue;