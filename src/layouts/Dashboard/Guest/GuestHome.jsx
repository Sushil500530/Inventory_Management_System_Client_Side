import { MdPayment } from "react-icons/md";
import useSaleCollection from "../../../Hooks/useSaleCollection";
import Loading from "../../../components/Shared/Loading";
import GuestRow from "./GuestRow";

const GuestHome = () => {
    const [products, refetch, isLoading] = useSaleCollection();

    // console.log(currentPrice);
    const totalPrice = products?.reduce((total, currentItem) => total + parseInt(currentItem.product_cost), 0);

    const handleDelete = (product) => {
        console.log('delete clicked', product);
    }
    if(isLoading){
        return <Loading />
    }
    return (
        <div className="w-[90%] mx-auto">
                <h3 className="text-xl font-bold text-center">My Ordered All Product</h3>
            <div className="flex justify-evenly my-4">
            <h3 className="text-xl font-bold text-center">Total Product : {products?.length}</h3>
            <h3 className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-[18px] hover:text-white">Payment Now <MdPayment className="text-[22px]" /> </h3>
            </div>
            <div className="">
                <table className="table w-full ">
                    {/* head */}
                    <thead className="text-[18px] font-bold table-zebra overflow-x-auto ">
                        <tr className="overflow-x-auto " >
                            <th>Count</th>
                            <th>Image</th>
                            <th>Shop Name</th>
                            <th>Price</th>
                            <th>Discount Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-[18px] my-3 font-medium overflow-x-auto">
                        {
                        products?.map((product, index) => <GuestRow
                         key={product?._id} 
                         product={product} 
                         index={index}
                         handleDelete={handleDelete}
                        ></GuestRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GuestHome;