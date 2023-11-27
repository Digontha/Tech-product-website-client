
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllProduct = (currentPage,itemsPerPage) => {
    const axiosPublic=useAxiosPublic();

    const {refetch, data:AllProduct=[],isPending }= useQuery({
        queryKey:["AllProduct",currentPage,itemsPerPage],
        queryFn:async()=>{
            const res = await axiosPublic.get(`/AllProduct?page=${currentPage}&size=${itemsPerPage}`)
            return res.data
        }
      
    })
    return [AllProduct,refetch,isPending]
};

export default useAllProduct;