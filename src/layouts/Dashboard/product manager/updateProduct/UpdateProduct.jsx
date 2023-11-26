import { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { imageUpload } from "../../../../api/auth";
import { FaSpinner } from "react-icons/fa";
import Footer from "../../../../Pages/Footer/Footer";
import Header from "../../../../components/Header/Header";
import Container from "../../../../components/Shared/Container";

const UpdateProduct = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const upProduct = useLoaderData();
    console.log(upProduct);

    const handleUpdateProduct = async (e) => {
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
            const resDate = await axiosSecure.put(`/products/${upProduct?._id}`, addProducts)
            const data = await resDate.data;
            setLoading(false)
            console.log(data);
            if (data?.modifiedCount > 0) {
                Swal.fire({
                    title: "Updated Successfully!",
                    text: `now ${product_name}is modyfieded`,
                    icon: "success",
                    timer:1500
                });
            }
            navigate('/dashboard/manager')
        }
        catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <Container>
            <Header />
            <div className="my-12 w-full p-5 ">
                <h3 className="text-3xl text-center font-bold flex items-center justify-center gap-2">Update Product....🧨🧨</h3>
                <div className="container mx-auto mt-12">
                    <form onSubmit={handleUpdateProduct}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                            <div className='space-y-6'>
                                <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4">
                                    <div className='space-y-1 w-full'>
                                        <label htmlFor='location' className='block text-black font-medium'>
                                            Product Name
                                        </label>
                                        <input className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400 ' name='product_name' id='product_name' type='text' placeholder='Product name' defaultValue={upProduct?.product_name} required
                                        />
                                    </div>
                                    <div className='space-y-1 w-full'>
                                        <label htmlFor='location' className='block text-black font-medium'>
                                            Location
                                        </label>
                                        <input className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400 '
                                            name='location' id='location' type='text' placeholder='Location' defaultValue={upProduct?.location} required
                                        />
                                    </div>
                                </div>
                                <div className=' bg-white w-full m-auto rounded-lg'>
                                    <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg overflow-hidden'>
                                        <div className='flex flex-col w-max mx-auto text-center overflow-hidden'>
                                            <input type='file' name='image' id='image' accept='image/*' className="file-input file-input-secondary focus:border-none " required />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4">
                                    <div className='space-y-1 w-full'>
                                        <label htmlFor='location' className='block text-black font-medium'>
                                            Quantity
                                        </label>
                                        <input className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400 ' name='quantity' id='quantity' type='number' placeholder='Enter quantiey' defaultValue={upProduct?.quantity} required
                                        />
                                    </div>
                                    <div className='space-y-1 w-full'>
                                        <label htmlFor='location' className='block text-black font-medium'>
                                            Product Cost
                                        </label>
                                        <input className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400 ' name='product_cost' id='product_cost' type='number' placeholder='Product Cost' defaultValue={upProduct?.product_cost} required
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className='space-y-6'>
                                <div className='space-y-1'>
                                    <label htmlFor='description' className='block font-medium'>
                                        Description
                                    </label>
                                    <textarea id='description' className='block focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border rounded-md input border-blue-400  ' name='description' placeholder="Write description" defaultValue={upProduct?.description}
                                    ></textarea>
                                </div>
                                <div className="flex gap-4 flex-col md:flex-row lg:flex-row w-full">
                                    <div className='space-y-1 w-full'>
                                        <label htmlFor='location' className='block text-black font-medium'>
                                            Product Profit
                                        </label>
                                        <input className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400 ' name='product_profit' id='product_profit' type='number' placeholder='Product Profit' defaultValue={upProduct?.product_profit} required
                                        />
                                    </div>
                                    <div className='space-y-1 w-full'>
                                        <label htmlFor='location' className='block text-black font-medium'>
                                            Discount %
                                        </label>
                                        <input className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400 ' name='discount' id='discount' type='number' placeholder='Discount %' defaultValue={upProduct?.discount} required
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
            <Footer />
        </Container>
    );
};

export default UpdateProduct;