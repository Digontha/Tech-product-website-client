import React from 'react';
import useAllUser from '../../Hooks/useAllUser';
import Loader from '../Loader/Loader';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const ManageUser = () => {
    const [AllUsers, refetch, isPending] = useAllUser()
    console.log(AllUsers);
    const axiosPublic=useAxiosPublic()
    const handleAdmin=(id) => {
       axiosPublic.put(`/usersAdmin?id=${id}`)
       .then(res=>{
        console.log(res.data);
        refetch()
       })
       .catch(err=>{
        console.log(err);
       })
    }
    const handleModerator=(id) => {
       axiosPublic.put(`/usersModerator?id=${id}`)
       .then(res=>{
        console.log(res.data);
        refetch()
       })
       .catch(err=>{
        console.log(err);
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
                                    <th>Name</th>
                                    <th>email</th>
                                    <th>Role</th>
                                    



                                </tr>
                            </thead>
                            {
                                AllUsers?.map((item, inx) => <>
                                    <div key={item._id}></div>

                                    <tbody className='border-4 border-orange-300'>

                                        <tr>
                                            <td>{inx + 1}.</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>
                                                {item?.role == "moderator" ? <p>{item?.role}</p> : <button onClick={()=>handleModerator(item?._id)} className='btn btn-success btn-sm mr-4'>Make Moderator</button>}
                                                {item?.role == "admin" ? <p>{item?.role}</p> : <button onClick={()=>handleAdmin(item?._id)} className='btn btn-success btn-sm'>Make Admin</button>}
                                            </td>

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

export default ManageUser;