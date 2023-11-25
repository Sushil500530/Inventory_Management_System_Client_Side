import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaTrashAlt, } from "react-icons/fa";
import { MdCreate, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleDelete = () => {
        console.log('delete clicked');
    }
    const handleMakeAdmin = () => {
        console.log('meking admin');
    }

    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h3 className="text-xl font-bold text-center">Manage All Users</h3>
                <h3 className="text-xl font-bold text-center">Total Users : {users?.length}</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className="text-[18px] font-bold table-zebra overflow-x-auto">
                        <tr>
                            <th>Count</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Shop Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-[18px] my-3 font-medium">

                        {
                            users?.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{
                                        user?.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="bg-gradient-to-r from-purple-500 to-pink-500 btn text-white text-base hover:text-black"><MdEmail />Promotional</button>
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