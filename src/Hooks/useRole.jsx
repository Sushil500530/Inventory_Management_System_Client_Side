import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useRole = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data:users=[],refetch,isLoading} = useQuery({
        queryKey:['users', user],
        queryFn: async() => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })
    return [users,refetch,isLoading]
}

export default useRole
