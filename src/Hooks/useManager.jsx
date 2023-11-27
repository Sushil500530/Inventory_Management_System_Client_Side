import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useManager = () => {
    const { user } =useAuth();
    const axiosSecure = useAxiosSecure();
    const {data:managers=[],refetch,isLoading} = useQuery({
        queryKey:['cart', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/managers`);
            return res.data
        }
    })
    return [managers,refetch,isLoading]
};

export default useManager;