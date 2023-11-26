import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSaleCollection = () => {
    const { user } =useAuth();
    const axiosSecure = useAxiosSecure();
    const {data:products=[],isLoading} = useQuery({
        queryKey:['sales', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/sales?email=${user.email}`);
            return res.data
        }
    })
    return [products,isLoading]
};

export default useSaleCollection;