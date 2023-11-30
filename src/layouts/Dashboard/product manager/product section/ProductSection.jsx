import Swal from "sweetalert2";
import useAxios from "../../../../Hooks/useAxios";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Loading from "../../../../components/Shared/Loading";
import { Link } from "react-router-dom";
import Button from "../../../../components/Shared/Button/Button";
import { IoBagAddSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const ProductSection = () => {
    const [products, refetch, isLoading] = useAxios();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (product) => {
        Swal.fire({
            title: "Are you sure?",
            text: ` Delete ${product?.product_name}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/products/${product?._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    if(isLoading){
        return <Loading />
    }
    return (
        <div className="w-[90%] mx-auto dark:text-white">
              <Helmet>
                <title>Product Section | Inventory M</title>
            </Helmet>
           <h3 className="text-3xl text-center font-bold mt-12 mb-5 flex items-center justify-center gap-2">Product Section🧨🧨</h3>  

           {
                products?.length === 0 ? <>
                    <div className="flex items-center gap-3 justify-center w-full h-[60vh] flex-col">
                        <h2 className="text-2xl font bold text-center">No Product Found</h2>
                        <Link to='/dashboard/product-add' className="mb-[18px]">
                            <Button style={'text-blue-500'} title={'Added Product'}
                                icon={IoBagAddSharp}
                            ></Button>
                        </Link>
                    </div>
                </>
                    :
                    <div className="mt-20 w-full">
                        <table className="table">
                            {/* head */}
                            <thead className="text-[18px] font-bold table-zebra bg-base-300 ">
                                <tr>
                                    <th>Sale Count</th>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Product Quantity</th>
                                    <th>Update</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-[18px] my-3 font-medium">
                                {
                                    products?.map((product, index) =>
                                        <tr key={product._id}>
                                            <th>{index + 1}</th>
                                            <th>
                                                <div>
                                                    <div className="mask rounded-md w-16 h-16">
                                                        <img src={product?.image} alt="image" className=" w-full h-full rounded-md" />
                                                    </div>
                                                </div>
                                            </th>
                                            <td>{product?.product_name}</td>
                                            <td className="pl-12"> {product?.quantity}</td>
                                            <td>
                                                <Link to={`/updated-product/${product?._id}`}>
                                                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 btn text-white text-base hover:text-black"><MdEdit />Update</button>
                                                </Link>
                                            </td>
                                            {/* <td>{product?.shop_name ? product?.shop_name :
                                    "No Have"
                                }</td> */}
                                            <td>
                                                <button onClick={() => handleDelete(product)} className="btn bg-red-500 text-2xl text-white hover:text-black"><FaTrashAlt></FaTrashAlt></button>
                                            </td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>

            }
        </div>
    );
};

export default ProductSection;