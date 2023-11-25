import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const auth = () => {
    const axiosSecure = useAxiosSecure();
    const { data:users, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
          console.log(res);
            return res.data;
        }
    })
};

export default auth;