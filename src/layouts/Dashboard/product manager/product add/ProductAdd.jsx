import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import useAuth from '../../../../Hooks/useAuth'
import { imageUpload } from "../../../../api/auth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const ProductAdd = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const handleAddedProduct = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const product_name = form.product_name.value;
        const image = form.image.files[0];
        const description = form.description.value;
        const quantity = form.quantity.value;
        const product_cost = form.product_cost.value;
        const product_profit = form.product_profit.value;
        const discount = form.discount.value;
        const owner_name = user?.displayName;
        const email = user?.email;
        const location = form.location.value;

        try {
            const loadImage = await imageUpload(image)
            const addProducts = {
                product_name,
                quantity,
                product_cost,
                image: loadImage?.data?.display_url,
                product_profit,
                discount,
                description,
                location,
                email,
                owner_name
            };
           axiosSecure.post('/products',addProducts)
           .then(res => {
            setLoading(false)
            if(res.data?.insertedId){
                Swal.fire({
                    title: "Added Successfull!",
                    text: "You clicked the button!",
                    icon: "success",
                    timer:1000
                  });
            }
navigate('/dashboard/manager')
           })


        }
        catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div>
            <h3 className="text-3xl text-center font-bold">Add Product....🧨🧨</h3>
            <div className="container mx-auto mt-12">
                <form onSubmit={handleAddedProduct}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        <div className='space-y-6'>
                            <div className="flex w-full gap-4">
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block text-black font-medium'>
                                        Product Name
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400 ' name='product_name' id='product_name' type='text' placeholder='Product name' required
                                    />
                                </div>
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block text-black font-medium'>
                                        Location
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400 '
                                        name='location' id='location' type='text' placeholder='Location' required
                                    />
                                </div>
                            </div>
                            <div className=' p-4 bg-white w-full m-auto rounded-lg'>
                                <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                    <div className='flex flex-col w-max mx-auto text-center'>
                                        <label>
                                            {/* <input className=" cursor-pointer w-36 hidden" type='file' name='image' id='image' accept='image/*'
                                                hidden
                                            /> */}
                                            <input type='file' name='image' id='image' accept='image/*' className="file-input file-input-secondary focus:border-none w-full max-w-xs" />
                                            {/* <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                                Upload Shop Logo
                                            </div> */}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 w-full">
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block text-black font-medium'>
                                        Quantity
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400 ' name='quantity' id='quantity' type='number' placeholder='Enter quantiey' required
                                    />
                                </div>
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block text-black font-medium'>
                                        Product Cost
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400 ' name='product_cost' id='product_cost' type='number' placeholder='Product Cost' required
                                    />
                                </div>
                            </div>

                        </div>
                        <div className='space-y-6'>
                            <div className='space-y-1'>
                                <label htmlFor='description' className='block font-medium'>
                                    Description
                                </label>
                                <textarea id='description' className='block focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border rounded-md input border-blue-400  ' name='description' placeholder="Write description"
                                ></textarea>
                            </div>
                            <div className="flex gap-4 w-full">
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block text-black font-medium'>
                                        Product Profit
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400 ' name='product_profit' id='product_profit' type='number' placeholder='Product Profit' required
                                    />
                                </div>
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block text-black font-medium'>
                                        Discount %
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400 ' name='discount' id='discount' type='number' placeholder='Discount %' required
                                    />
                                </div>
                            </div>
                            <button type='submit' className='btn w-full mt-5 p-3 text-[18px] text-center font-medium hover:text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-purple-500 to-pink-500 text-black '
                            >
                                {loading ? (
                                    <FaSpinner className='m-auto animate-spin' size={24} />
                                ) : (
                                    'Added Product'
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductAdd;