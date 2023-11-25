import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, isLoading } =useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !isLoading,
        queryFn: async () => {
            if (user) {
                const res = await axiosSecure.get(`/users/admin/${user?.email}`);
                console.log(res.data);
                return res.data?.admin;
            }
        }

    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;