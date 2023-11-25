import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAxios = () => {
    const { user } =useAuth();
    const axiosSecure = useAxiosSecure();
    const {data:products=[],refetch,isLoading} = useQuery({
        queryKey:['cart', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/products?email=${user.email}`);
            return res.data
        }
    })
    return [products,refetch,isLoading]
};

export default useAxios;