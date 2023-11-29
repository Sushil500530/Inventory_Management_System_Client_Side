import { Helmet } from "react-helmet-async";
import useManager from "../../../../Hooks/useManager";
import Loading from "../../../../components/Shared/Loading";

const ManagerShop = () => {
    const [managers, , isLoading] = useManager();
    console.log(managers);
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="w-[90%] mx-auto">
              <Helmet>
                <title>Manager Shop | Admin Home</title>
            </Helmet>
            <h3 className="text-3xl text-center font-bold  flex items-center justify-center gap-2 my-12">Manage Shop</h3>
            <div className="mt-5">
                <table className="table w-full ">
                    {/* head */}
                    <thead className="text-[18px] font-bold table-zebra overflow-x-auto ">
                        <tr className="overflow-x-auto " >
                            <th>Count</th>
                            <th>Shop Logo</th>
                            <th>Shop Name</th>
                            <th>Email</th>
                            <th>Shop Description</th>
                            <th>Notice</th>
                        </tr>
                    </thead>
                    <tbody className="text-[18px] my-3 font-medium overflow-x-auto">

                        {
                            managers?.map((item, index) =>
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.shop_logo} alt="logo" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item?.shop_name}</td>
                                    <td>{item?.email}</td>
                                    <td>{item?.description.slice(0,40)}</td>
                                    <td>
                                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 btn text-white text-base hover:text-black">Send Notice</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagerShop;