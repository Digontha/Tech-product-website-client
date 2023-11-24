
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useFeatured = () => {
    const axiosPublic=useAxiosPublic();

    const {refetch, data:featuredProduct=[] }= useQuery({
        queryKey:["featuredProduct"],
        queryFn:async()=>{
            const res = await axiosPublic.get(`/featuredProduct`)
            return res.data
        }
      
    })
    return [featuredProduct,refetch]
};

export default useFeatured;