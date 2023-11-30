import { Link } from "react-router-dom";
import useAllPayments from "../../../../Hooks/useAllPayments";
import useAuth from "../../../../Hooks/useAuth";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const SaleCollection = () => {
    const {user} = useAuth();
    const [salesData, , ] = useAllPayments();
  //  const items = salesData?.filter(item => item?.email == user?.email);
    console.log(salesData);
    return (
        <div className="w-full lg:w-[90%] mx-auto bg-base-100 dark:text-white dark:bg-zinc-800">
              <Helmet>
                <title>Sale Collection | Inventory M</title>
            </Helmet>
            <h3 className="text-3xl text-center font-bold mt-12 mb-5 flex items-center justify-center gap-2">Sale Collection🧨🧨</h3>
            {/* input field  */}
            <div className="w-2/3 mx-auto flex items-center ">
                <div className="w-full py-5 px-3">
                    <input type="search" name="search" id="" placeholder="Search Product Id" className="px-3 py-2 input border border-blue-400 p-2 w-full outline-none" />
                </div>
                <div>
                    <input type="button" value="Search" className="btn bg-gradient-to-r from-purple-500 to-pink-500 px-8 text-[18px] font-medium hover:text-white" />
                </div>
            </div>
            <div className="mt-20 w-full">
                <table className="table">
                    {/* head */}
                    <thead className="text-[18px] font-bold table-zebra bg-base-300 ">
                        <tr>
                            <th className="pl-8">Product Id</th>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Product Quantity</th>
                            <th>Discount</th>
                            <th>Salling Price</th>
                            <th>Sold to Customer </th>
                        </tr>
                    </thead>
                    <tbody className="text-[18px] my-3 font-medium">
                        {/* {
                            items?.map((product, index) =>
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
                                    <td>
                                        <button onClick={() => handleDelete(product)} className="btn bg-red-500 text-2xl text-white hover:text-black"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)
                        } */}
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default SaleCollection;