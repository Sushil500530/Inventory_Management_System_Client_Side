import { MdPayment } from "react-icons/md";
import Loading from "../../../components/Shared/Loading";
import { RiSlideshowFill } from "react-icons/ri";
import GuestRow from "./GuestRow";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useSaleCollection from "../../../Hooks/useSaleCollection";
import { Helmet } from "react-helmet-async";

const GuestHome = () => {
    const [products, refetch, isLoading] = useSaleCollection();
    const axiosSecure = useAxiosSecure();

    // console.log(currentPrice);
    const totalPrice = products?.reduce((total, currentItem) => total + parseInt(currentItem?.currentPrice), 0);
    // console.log(products);
    const handleDelete = (id) => {
        console.log(id);
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
              axiosSecure.delete(`/sales-product-delete/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Product has been deleted.",
                                icon: "success",
                                timer: 1000
                            });
                        }
                    })
            }
        });
    }
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="w-[90%] mx-auto dark:text-white">
              <Helmet>
                <title>Guest Home | Dashboard</title>
            </Helmet>
            <h3 className="text-xl font-bold text-center my-4">My Ordered All Product</h3>
            <h3 className="text-xl font-bold text-center my-4">Total Price: $ {totalPrice}</h3>
            <div className="flex justify-evenly my-4">
                <h3 className="text-xl font-bold text-center">Total Product : {products?.length}</h3>
                {
                    products?.length ? <Link to="/dashboard/payment">
                        <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-[18px] hover:text-white">Payment Now <MdPayment className="text-[22px]" /></button>
                    </Link> : <button disabled className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-[18px] hover:text-white">Payment Now <MdPayment className="text-[22px]" /></button>
                }
            </div>
            {
                products?.length ? <div className="">
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
                </div> : <>
                    <div className="flex flex-col w-full h-[40vh] items-center justify-center">
                        <h1 className="text-2xl font-bold">Order Products is Not Found</h1> <br />
                        <h1 className="text-2xl font-bold">Please Order First!</h1>
                        <Link to="/">
                            <button className="btn mt-5 bg-gradient-to-r from-purple-500 to-pink-500 text-[18px] hover:text-white">Show Here <RiSlideshowFill className="text-[22px]" /></button>
                        </Link>
                    </div>
                </>
            }
        </div>
    );
};

export default GuestHome;