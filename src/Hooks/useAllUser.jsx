import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllUser = () => {
    const axiosPublic = useAxiosPublic();
   
    const { refetch, data: AllUsers = [],isPending } = useQuery({
        queryKey: ["AllUsers"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users`);
            return res.data
        }

    })
    return [AllUsers, refetch,isPending]
};

export default useAllUser;