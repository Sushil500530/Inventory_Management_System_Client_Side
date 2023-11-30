import { useLoaderData, useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { FaCartPlus, FaFastBackward } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Footer from "../../Footer/Footer";
import useSaleCollection from "../../../Hooks/useSaleCollection";
import { Helmet } from "react-helmet-async";

const SingleProduct = () => {
    const product = useLoaderData();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [, refetch,] = useSaleCollection();
    const axiosSecure = useAxiosSecure();
    // console.log(Object.keys(product).join(","));
    // console.log('single product data is--->',product);
    const {_id, product_name, quantity,shop_logo, product_cost, image, discount, description, location, owner_name,shop_name, email } = product || {};
    const previousPrice = parseInt(product_cost)
    const discountRange = parseInt(discount)
    const priceCount = (discountRange / 100) * previousPrice;
    const currentPrice = previousPrice - priceCount;
    // console.log(currentPrice);
    const handleBuyProduct = async () => {
        try {
            const buyProduct = {
                menuId: _id,
                shop_name,
                product_name,
                quantity,
                product_cost,
                image,
                currentPrice,
                description,
                location,
                buyer_name: user?.displayName,
                email: user?.email,
            }
            await axiosSecure.post('/sales-product', buyProduct)
                .then(res => {
                    if (res.data?.insertedId) {
                        Swal.fire({
                            title: "Order Success!",
                            text: `${product_name} is ordered successfully`,
                            icon: "success"
                        });
                        refetch()
                    }
                })
        }
        catch (error) {
            toast.error(error.message);
        }

    }
    return (
        <div>
              <Helmet>
                <title>Product Details | Inventory M </title>
            </Helmet>
            <div className="flex w-full flex-col lg:flex-row gap-8 py-5 items-center justify-center mb-2">
                <div className="lg:w-1/2 h-[620px] w-full">
                    <img src={image} className="w-full h-full rounded-lg" alt="" />
                </div>
                <div className="lg:w-1/2 dark:text-white w-full flex flex-col items-center p-5 lg:p-0 justify-center md:justify-start md:items-start lg:justify-start lg:items-start">
                    <h2 className="text-2xl text-fuchsia-500 font-bold">High Light</h2>
                    <hr className="w-[130px] border border-black dark:border-white mt-3 mb-5" />
                    <h2 className="text-xl text-gray-600 font-bold dark:text-gray-300">Name: <span className="text-black dark:text-gray-300">{product_name}</span></h2>
                    <h2 className="text-xl text-gray-600 my-3 font-bold dark:text-gray-500">Price: $ <span className="text-black dark:text-gray-300">{product_cost}</span></h2>
                    <h2 className="text-xl  text-gray-600 font-bold dark:text-gray-500">Discount: <span className="text-black dark:text-gray-300">{discount}%</span></h2>
                    <h2 className="text-xl text-gray-600 my-2 font-bold dark:text-gray-500">Quantity: <span className="text-black dark:text-gray-300">{quantity}</span></h2>
                    <h2 className="text-xl text-gray-600 font-bold flex dark:text-gray-500">Review: <span> <Rating
                        style={{ maxWidth: 160 }}
                        value={5}
                        readOnly /></span></h2>
                    <p className="font-medium text-gray-700 mt-4 dark:text-gray-300">{description}</p>
                    <div className="w-full flex items-center gap-20 mt-5">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-300">Contact Us</h3>
                            <hr className="w-[130px] border border-black mt-3 mb-5" />
                             <h2 className="text-xl text-gray-600 my-3 font-bold dark:text-gray-500">Company Name: <span className="text-black dark:text-gray-300">{shop_name}</span></h2> 
                            <div className="avatar flex items-center gap-5">
                                <h2 className="text-xl text-gray-600 my-2 font-bold dark:text-gray-500">Cmpany Logo:</h2>
                               <div className="w-24 rounded-full ring ring-offset-base-100 ">
                                        <img src={shop_logo} className="w-full h-full" />
                                    </div> 
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl text-gray-600 my-2 font-bold dark:text-gray-500">Owner Name: <span className="text-black dark:text-gray-300">{owner_name}</span></h2>
                            <h2 className="text-xl text-gray-600 my-2 font-bold dark:text-gray-500">Owner Email: <span className="text-black dark:text-gray-300">{email}</span></h2>
                            <h2 className="text-xl dark:text-gray-500 text-gray-600 my-2 font-bold">Location: <span className="text-black dark:text-gray-300">{location}</span></h2>
                        </div>
                    </div>
                    <div className="mt-10 w-full flex flex-col md:flex-row lg:flex-row gap-5 px-3">
                        <button onClick={() => navigate(-1)} className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-[18px] w-full md:w-1/2 lg:w-1/3 hover:text-white "><FaFastBackward className="text-2xl" />Back</button>
                        <button onClick={() => handleBuyProduct()} className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-[18px] w-full md:w-1/2 lg:w-1/3 hover:text-white ">Order Now <FaCartPlus className="text-3xl" /></button>
                    </div>
                </div>
            </div>
            <div className="mb-5 p-5">
                <h2 className="text-3xl text-fuchsia-500 font-bold">Summary</h2>

                <hr className="w-[130px] border dark:border-white border-black mt-3 mb-5" />
                <p className="mt-3 font-medium capitalize dark:text-gray-300">
                    {`The Porduct to the process of ordering, storing, using, and selling a company's inventory. This includes the management of raw materials, components, and finished products, as well as warehousing and processing of such items.Inventory serves a useful purpose in the supply chain. That said, firms can help minimize the need for inventory by carefully managing those factors that drive inventory levels up.Inventory items can be divided into two main types: Independent demand and dependent demand items. The systems for managing these two types if inventory differ significantly.The two classic systems for managing independent demand inventory are periodic review and perpetual review systems.`}
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default SingleProduct;