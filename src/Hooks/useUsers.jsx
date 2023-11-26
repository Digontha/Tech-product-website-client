import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useUsers = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext)
    const { refetch, data: users = [] } = useQuery({
        queryKey: ["trandingProduct"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users?email=${user.email}`);
            return res.data
        }

    })
    return [users, refetch]
};

export default useUsers;