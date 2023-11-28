import React, { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useMyProduct = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext)
    const { refetch, data: myProduct = [], isPending } = useQuery({
        queryKey: ["myProduct"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/myProduct?email=${user?.email}`)
            return res.data
        }

    })
    return [myProduct, refetch, isPending]
};

export default useMyProduct;