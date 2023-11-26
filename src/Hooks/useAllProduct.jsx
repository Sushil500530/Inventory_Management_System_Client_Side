import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllProduct = () => {
    const axiosSecure = useAxiosSecure();
    const {data:allProducts=[],refetch,isLoading} = useQuery({
        queryKey:['all-products', ],
        queryFn: async() => {
            const res = await axiosSecure.get('/all-products');
            return res.data
        }
    })
    return [allProducts,refetch,isLoading]
};

export default useAllProduct;