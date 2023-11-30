import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAllPayments from "../../../../Hooks/useAllPayments";
import Loading from "../../../../components/Shared/Loading";
import { Helmet } from "react-helmet-async";

const AdminSaleSummary = () => {
    const axiosSecure = useAxiosSecure();
    const [salesData, , isLoading] = useAllPayments();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const response = await axiosSecure.get('/admin-stats');
            return response?.data;
        }
    })

    if(isLoading){
        return <Loading />
    }

    return (
        <div className="w-[90%] mx-auto dark:text-white">
              <Helmet>
                <title>Sale Summary | Admin Home</title>
            </Helmet>
            <h3 className="text-3xl text-center font-bold mt-10">Admin Sale <span className="text-fuchsia-500">Summary..!</span></h3>
            <div className="flex item-center justify-center mt-6 gap-10">
                <div>
                    <h2 className="text-xl font-bold">Total <span className="text-fuchsia-500">Income</span>: $ {stats?.revenue}</h2>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Total <span className="text-fuchsia-500">Product</span>: {stats?.productItems}</h2>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Total <span className="text-fuchsia-500">Sale</span>: {stats?.orders}</h2>
                </div>
            </div>
            <div className="mt-5">
                <table className="table w-full ">
                    {/* head */}
                    <thead className="text-[18px] font-bold table-zebra overflow-x-auto ">
                        <tr className="overflow-x-auto " >
                            <th>Count</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody className="text-[18px] my-3 font-medium overflow-x-auto">

                        {
                            salesData?.map((data, index) =>
                                <tr key={data._id}>
                                    <th>{index + 1}</th>
                                    <td>{data?.email}</td>
                                    <td>{data?.status}</td>
                                    <td>$ {data?.price}</td>
                                    <td>{data?.date.slice(0, 10)}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminSaleSummary;