import { useLoaderData, useNavigate } from "react-router-dom";
import useManager from "../../../Hooks/useManager";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { FaCartPlus, FaFastBackward } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Footer from "../../Footer/Footer";
import useSaleCollection from "../../../Hooks/useSaleCollection";

const SingleProduct = () => {
    const product = useLoaderData();
    const [managers] = useManager();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [, refetch,] = useSaleCollection();
    const axiosSecure = useAxiosSecure();
    // console.log(Object.keys(product).join(","));
    const {_id, product_name, quantity, product_cost, image, discount, description, location, owner_name, email } = product || {};
    const findEmail = managers?.filter(item => item?.email == email);
    const previousPrice = parseInt(product_cost)
    const discountRange = parseInt(discount)
    const priceCount = (discountRange / 100) * previousPrice;
    const currentPrice = previousPrice - priceCount;
    // console.log(currentPrice);
    const handleBuyProduct = async () => {
        try {
            const buyProduct = {
                menuId: _id,
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
            await axiosSecure.post('/seles-product', buyProduct)
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
            <div className="flex w-full flex-col lg:flex-row gap-8 py-5 items-center justify-center mb-2">
                <div className="lg:w-1/2 h-[620px] w-full">
                    <img src={image} className="w-full h-full rounded-lg" alt="" />
                </div>
                <div className="lg:w-1/2 w-full flex flex-col items-center p-5 lg:p-0 justify-center md:justify-start md:items-start lg:justify-start lg:items-start">
                    <h2 className="text-2xl text-fuchsia-500 font-bold">High Light</h2>
                    <hr className="w-[130px] border border-black mt-3 mb-5" />
                    <h2 className="text-xl text-gray-600 font-bold">Name: <span className="text-black">{product_name}</span></h2>
                    <h2 className="text-xl text-gray-600 my-3 font-bold">Price: $ <span className="text-black">{product_cost}</span></h2>
                    <h2 className="text-xl text-gray-600 font-bold">Discount: <span className="text-black">{discount}%</span></h2>
                    <h2 className="text-xl text-gray-600 my-2 font-bold">Quantity: <span className="text-black">{quantity}</span></h2>
                    <h2 className="text-xl text-gray-600 font-bold flex">Review: <span> <Rating
                        style={{ maxWidth: 160 }}
                        value={5}
                        readOnly /></span></h2>
                    <p className="font-medium text-gray-700 mt-4">{description}</p>
                    <div className="w-full flex items-center gap-20 mt-5">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-600">Contact Us</h3>
                            <hr className="w-[130px] border border-black mt-3 mb-5" />
                            {
                                findEmail[0]?.shop_name ? <h2 className="text-xl text-gray-600 my-3 font-bold">Company Name: <span className="text-black">{findEmail[0]?.shop_name}</span></h2> : <h2 className="text-xl text-gray-600 my-3 font-bold">Company Name: <span className="text-black">No Found</span></h2>
                            }
                            <div className="avatar flex items-center gap-5">
                                <h2 className="text-xl text-gray-600 my-2 font-bold">Cmpany Logo:</h2>
                                {
                                    findEmail[0]?.shop_logo ? <div className="w-24 rounded-full ring ring-offset-base-100 ">
                                        <img src={findEmail[0]?.shop_logo} />
                                    </div> : <span className="text-black text-xl font-bold">No Found</span>
                                }
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl text-gray-600 my-2 font-bold">Owner Name: <span className="text-black">{owner_name}</span></h2>
                            <h2 className="text-xl text-gray-600 my-2 font-bold">Owner Email: <span className="text-black">{email}</span></h2>
                            <h2 className="text-xl text-gray-600 my-2 font-bold">Location: <span className="text-black">{location}</span></h2>
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

                <hr className="w-[130px] border border-black mt-3 mb-5" />
                <p className="mt-3 font-medium capitalize">
                    {`The Porduct to the process of ordering, storing, using, and selling a company's inventory. This includes the management of raw materials, components, and finished products, as well as warehousing and processing of such items.Inventory serves a useful purpose in the supply chain. That said, firms can help minimize the need for inventory by carefully managing those factors that drive inventory levels up.Inventory items can be divided into two main types: Independent demand and dependent demand items. The systems for managing these two types if inventory differ significantly.The two classic systems for managing independent demand inventory are periodic review and perpetual review systems.`}
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default SingleProduct;