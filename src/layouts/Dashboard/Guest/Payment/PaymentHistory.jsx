import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Loading from "../../../../components/Shared/Loading";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [], isLoading } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res?.data;
        }
    })
    console.log(payments);
    if (isLoading){
        return <Loading />
    }
    console.log(payments);
    return (
        <div className="w-[90%] mx-auto">
              <Helmet>
                <title>Payment History | Dashboard</title>
            </Helmet>
            <h3 className="text-2xl font-bold my-5"> Payment Details</h3>
            <div className="overflow-x-auto mt-12">
                <table className="table">
                    {/* head */}
                    <thead className="text-[18px] font-bold table-zebra overflow-x-auto bg-base-200">
                        <tr>
                            <th></th>
                            <th>Email</th>
                            {/* <th>Category</th> */}
                            <th>Total Price</th>
                            <th>Payment Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-[18px] my-3 font-medium overflow-x-auto">
                        {/* row 1 */}
                        {
                            payments?.map((item, index) =>
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item?.email}</td>
                                    {/* <td>{item?.category}</td> */}
                                    <td className="pl-10">$ {item?.price}</td>
                                    <td>{item?.date} </td>
                                    <td>{item?.status}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default PaymentHistory;