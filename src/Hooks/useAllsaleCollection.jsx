import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllsaleCollection = () => {
    const axiosSecure = useAxiosSecure();
    const {data:salesData=[],refetch,isLoading} = useQuery({
        queryKey:['salesData',],
        queryFn: async() => {
            const res = await axiosSecure.get('/payments');
            return res.data
        }
    })
    return [salesData,refetch,isLoading]
};

export default useAllsaleCollection;