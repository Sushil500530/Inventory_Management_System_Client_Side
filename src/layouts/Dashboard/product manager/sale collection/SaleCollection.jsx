import useSaleCollection from "../../../../Hooks/useSaleCollection";

const SaleCollection = () => {
    const [products,isLoading] = useSaleCollection();
    console.log(products,isLoading);
    return (
        <div className="w-[90%] mx-auto bg-base-100">
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
                    {/* <tbody className="text-[18px] my-3 font-medium">
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
                                    <td>
                                        <button onClick={() => handleDelete(product)} className="btn bg-red-500 text-2xl text-white hover:text-black"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)
                        }
                    </tbody> */}
                </table>
            </div>


        </div>
    );
};

export default SaleCollection;