import React from 'react';
import useUsers from '../../Hooks/useUsers';
import Loader from '../Loader/Loader';


const MyProfile = () => {
    const [users,,isPending] = useUsers()
    console.log(users);
    return (
        <>
            {isPending ? <Loader></Loader> :
                <div className='lg:w-1/2  '>
                    {
                        users.map(user => <>
                            <div className=" bg-neutral text-neutral-content p-10 rounded-2xl">
                                <div className="avatar online">
                                    <div className="w-24 rounded-full">
                                        <img src={user?.image} />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h2 className="card-title mb-5">Name: {user?.name}</h2>
                                    <p className='card-title'>Email: {user?.email}</p>
                                    <div className="card-actions justify-end">
                                        {user?.subscribe ? <button className="btn text-white">Verified</button> : <button className="btn text-white btn-outline">Subscribe</button>}
                                    </div>
                                </div>
                            </div>
                        </>)
                    }

                </div>}
        </>
    );
};

export default MyProfile;