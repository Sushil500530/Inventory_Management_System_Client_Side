import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllPayments = () => {
    const axiosSecure = useAxiosSecure();
    const {data:salesData=[],refetch,isLoading} = useQuery({
        queryKey:['salesData',],
        queryFn: async() => {
            const res = await axiosSecure.get('/all-payments');
            return res.data
        }
    })
    return [salesData,refetch,isLoading]
};

export default useAllPayments;