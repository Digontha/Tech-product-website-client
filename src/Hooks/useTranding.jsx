 
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
 
 const useTranding = () => {
    const axiosPublic=useAxiosPublic();

    const {refetch, data:trandingProduct=[] }= useQuery({
        queryKey:["trandingProduct"],
        queryFn:async()=>{
            const res = await axiosPublic.get(`/trandingProduct`)
            return res.data
        }
      
    })
    return [trandingProduct,refetch]
 };
 
 export default useTranding;