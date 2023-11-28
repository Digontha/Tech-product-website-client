import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllMyProduct = () => {
    const axiosPublic = useAxiosPublic();
   
    const { refetch, data: AllMyProduct = [], isPending } = useQuery({
        queryKey: ["myProduct"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/myProduct`)
            return res.data
        }

    })
    return [AllMyProduct, refetch, isPending]
};

export default useAllMyProduct;