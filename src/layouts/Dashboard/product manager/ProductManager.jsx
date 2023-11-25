import { IoBagAddSharp } from "react-icons/io5";
import Button from "../../../components/Shared/Button/Button";
import { Link } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Loading from "../../../components/Shared/Loading";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ProductManager = () => {
    const [products,refetch,isLoading] = useAxios();
    const axiosSecure = useAxiosSecure();
    console.log(products);

    const handleDelete = async(id) => {
        console.log('object',id);
        

    }
    const handleUpdate = (id) => {
        console.log('update button ',id);
    }

    if(isLoading){
        return <Loading />
    }
    return (
        <div>
            <h2 className="text-3xl font-bold text-center">My Product🐱</h2>
            <div className="flex pl-5 items-center justify-between gap-4 flex-col md:flex-row lg:flex-row h-12 md:border md:border-black lg:border lg:border-black my-8">
                <div>
                    <h2 className="text-2xl font-semibold text-stert">Total <span className="text-fuchsia-500 font-bold">{products?.length}</span> Product Added</h2>
                </div>
                <span>
                    <Link to='/dashboard/product-add' className="mb-[18px]">
                        <Button style={'text-blue-500'} title={'Added Product'}
                            icon={IoBagAddSharp}
                        ></Button>
                    </Link>
                </span>
            </div>
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
                    <div className="mt-20">
                        <table className="table">
                            {/* head */}
                            <thead className="text-[18px] font-bold table-zebra bg-base-300 ">
                                <tr>
                                    <th>Count</th>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Product Cost</th>
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
                                            <td>$ {product?.product_cost}</td>
                                            <td><button onClick={() => handleUpdate(product?._id)} className="bg-gradient-to-r from-purple-500 to-pink-500 btn text-white text-base hover:text-black"><MdEdit />Update</button>
                                            </td>
                                            {/* <td>{product?.shop_name ? product?.shop_name :
                                    "No Have"
                                }</td> */}
                                            <td>
                                                <button onClick={() => handleDelete(product?._id)} className="btn bg-red-500 text-2xl text-white hover:text-black"><FaTrashAlt></FaTrashAlt></button>
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

export default ProductManager;