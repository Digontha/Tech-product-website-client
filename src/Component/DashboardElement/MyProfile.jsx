
import useUsers from '../../Hooks/useUsers';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';


const MyProfile = () => {
    const [users,,isPending] = useUsers()
    console.log(users);
    return (
        <>
            {isPending ? <Loader></Loader> :
                <div className='lg:w-1/2  '>
                    {
                        users?.map(user => <>
                            <div className=" bg-gradient-to-r from-[#F3EFEC] to-[#D6E2FF] text-black p-10 rounded-2xl">
                                <div className="avatar online">
                                    <div className="w-24 rounded-full">
                                        <img src={user?.image} />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h2 className="card-title mb-5">Name: {user?.name}</h2>
                                    <p className='card-title'>Email: {user?.email}</p>
                                    <div className="card-actions justify-end">
                                        {user?.subscribe ? <button className="btn btn-secondary text-white font-semibold text-xl">Verified</button> : <Link to="/payment"><button className="btn text-white btn-outline">Subscribe / <span className='text-xl'>$20</span></button></Link>}
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