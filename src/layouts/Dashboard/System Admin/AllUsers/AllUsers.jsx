import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaTrashAlt, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Loading from "../../../../components/Shared/Loading";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users, refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    });

    const handleDelete = (user) => {
        console.log(user);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/user/${user?._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success",
                                timer: 1000
                            });
                        }
                    })
            }
        });
    }
    const handlePromotional = () => {
        Swal.fire({
            title: "Wow..!Promotional!🎉",
            text: "Promotional Message was sent successfully !",
            icon: "success"
          });
    
    }
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="w-[90%] mx-auto">
              <Helmet>
                <title>All User | Admin Home</title>
            </Helmet>
            <div className="flex justify-evenly my-4">
                <h3 className="text-xl font-bold text-center">Manage All Users</h3>
                <h3 className="text-xl font-bold text-center">Total Users : {users?.length}</h3>
            </div>
            <div className="">
                <table className="table w-full ">
                    {/* head */}
                    <thead className="text-[18px] font-bold table-zebra overflow-x-auto ">
                        <tr className="overflow-x-auto " >
                            <th>Count</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Shop Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-[18px] my-3 font-medium overflow-x-auto">

                        {
                            users?.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{
                                        user?.role === 'admin' ? 'Admin' : <button onClick={() => handlePromotional(user)} className="bg-gradient-to-r from-purple-500 to-pink-500 btn text-white text-base hover:text-black"><MdEmail />Promotional</button>
                                    }</td>
                                    <td>{user?.shop_name ? user?.shop_name :
                                        "No Have"
                                    }</td>
                                    <td>
                                        <button onClick={() => handleDelete(user)} className="btn bg-red-500 text-2xl text-white hover:text-black"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;