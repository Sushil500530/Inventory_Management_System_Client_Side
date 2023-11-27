import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSaleCollection = () => {
    const { user } =useAuth();
    const axiosSecure = useAxiosSecure();
    const {data:products=[],refetch,isLoading} = useQuery({
        queryKey:['sales', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/sales-product?email=${user?.email}`);
            return res.data
        }
    })
    return [products,refetch,isLoading]
};

export default useSaleCollection;