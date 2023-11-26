
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useFeatured = () => {
    const axiosPublic=useAxiosPublic();

    const {isPending,refetch, data:featuredProduct=[] }= useQuery({
        queryKey:["featuredProduct"],
        queryFn:async()=>{
            const res = await axiosPublic.get(`/featuredProduct`)
            return res.data
        }
      
    })
    return [featuredProduct,refetch,isPending]
};

export default useFeatured;