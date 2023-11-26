import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useReview = (id) => {
    const axiosPublic = useAxiosPublic();
    console.log(id);
    const { refetch, data: review = [],isPending } = useQuery({
        queryKey: ["review"],
        queryFn: async () => {
           
            const res = await axiosPublic.get(`/review?id=${id}`);
           
            console.log("data form hook",res.data);
            return res.data
            
        }

    })
    return [review,refetch,isPending]
};

export default useReview;