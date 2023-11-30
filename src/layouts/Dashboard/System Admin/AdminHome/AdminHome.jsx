import { FaLayerGroup } from "react-icons/fa";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { HiUserGroup } from "react-icons/hi";
import './adminHome.css'
import { FaCircleDollarToSlot } from "react-icons/fa6";
import ChartSection from "./ChartSection";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useRole from "../../../../Hooks/useRole";


const AdminHome = () => {
    const axiosSecure = useAxiosSecure();
    const [users] = useRole();
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const response = await axiosSecure.get('/admin-stats');
            return response?.data;
        }
    })

    return (
        <div className="w-[90%] mx-auto mb-12 dark:text-white">
            <div className="w-full h-[70vh]">
                <h2 className="text-2xl font-bold capitalize text-center my-5"><span className="text-4xl font-bold text-fuchsia-500">Hi</span>, Wellcome 🎁🎉<br />
                   <span className=" text-fuchsia-500">{users?.name}</span>
                </h2>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center mt-12">
                    <div className=" income-component shadow-xl gap-1 rounded-lg flex flex-col items-center py-3">
                        <FaCircleDollarToSlot className="text-4xl" ></FaCircleDollarToSlot>
                        <p className="font-bold text-xl">Total Income</p>
                        <h2 className="text-5xl font-bold text-center">$ {stats?.revenue}</h2>
                        <div className="stat-desc pl-2 font-medium">↗︎ 400 (22%)</div>
                    </div>
                    <div className="product-component shadow-xl gap-1 rounded-lg flex flex-col items-center py-3">
                        <FaLayerGroup className="text-4xl" ></FaLayerGroup>
                        <p className="font-bold text-xl">Total Products</p>
                        <h2 className="text-5xl font-bold text-center">{stats?.productItems}</h2>
                        <div className="stat-desc pl-2 font-medium">↗︎ 400 (22%)</div>
                    </div>
                    <div className="sale-component shadow-xl gap-1 rounded-lg flex flex-col items-center py-3">
                        <HiClipboardDocumentCheck className="text-4xl" ></HiClipboardDocumentCheck>
                        <p className="font-bold text-xl">Total Sale</p>
                        <h2 className="text-5xl font-bold text-center">{stats?.orders}</h2>
                        <div className="stat-desc pl-2 font-medium">↗︎ 400 (22%)</div>
                    </div>
                    <div className="user-component shadow-xl  rounded-lg flex flex-col items-center py-3 gap-1">
                        <HiUserGroup className="text-4xl" ></HiUserGroup>
                        <p className="font-bold text-xl">All users</p>
                        <h2 className="text-5xl font-bold text-center">{stats?.users}</h2>
                        <div className="stat-desc pl-2 font-medium">↗︎ 400 (22%)</div>
                    </div>
                </div>
                <div className="flex gap-8 my-12">
                    <ChartSection />
                </div>
              
            </div>
        </div>
    );
};

export default AdminHome;