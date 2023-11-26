
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllProduct = () => {
    const axiosPublic=useAxiosPublic();

    const {refetch, data:AllProduct=[],isPending }= useQuery({
        queryKey:["AllProduct"],
        queryFn:async()=>{
            const res = await axiosPublic.get(`/AllProduct`)
            return res.data
        }
      
    })
    return [AllProduct,refetch,isPending]
};

export default useAllProduct;