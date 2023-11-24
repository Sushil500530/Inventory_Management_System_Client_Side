import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const CreateShop = () => {
    const [loading,setLoading] = useState(false);
    const handleCreateShop = async(e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const shop_name = form.shop_name.value;
        const shop_logo = form.image.files[0];
        const description = form.description.value;
        // const owner = user?.displayName;
        // const owner_email = user?.email;
        const location = form.location.value;
        const create_shop = {shop_name,shop_logo,description,location};
        console.log(create_shop);
    }
    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center my-12">Create a New Shop....🧨🧨</h2>
            <form onSubmit={handleCreateShop}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='space-y-6'>
                        <div className='space-y-1'>
                            <label htmlFor='location' className='block text-black font-medium'>
                                Shop Name
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400 '
                                name='shop_name' id='shop_name' type='text' placeholder='shop name' required
                            />
                        </div>
                        <div className=' p-4 bg-white w-full m-auto rounded-lg'>
                            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input className=" cursor-pointer w-36 hidden" type='file' name='image' id='image' accept='image/*'
                                            hidden
                                        />
                                        <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                            Upload Shop Logo
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-1'>
                            <label htmlFor='description' className='block font-medium'>
                                Description
                            </label>
                            <textarea id='description' className='block focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border rounded-md input border-blue-400  ' name='description' placeholder="Write description"
                            ></textarea>
                        </div>
                    </div>
                    <div className='space-y-6'>
                        <div className='space-y-1'>
                            <label htmlFor='title' className='block text-black font-medium'>
                                Shop Owmer Name
                            </label>
                            <input className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400  ' name='name' id='name' type='text' placeholder='name' required
                            />
                        </div>
                        <div className='space-y-1'>
                            <label htmlFor='title' className='block text-black font-medium'>
                                Shop Owmer Email
                            </label>
                            <input className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400  ' name='email' id='email' type='email' placeholder='email' required
                            />
                        </div>
                        <div className='space-y-1'>
                            <label htmlFor='location' className='block text-black font-medium'>
                                Location
                            </label>
                            <input className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400 '
                                name='location' id='location' type='text' placeholder='Location' required
                            />
                        </div>
                        <button type='submit' className='btn w-full p-3 mt-5 text-[18px] text-center font-medium hover:text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-purple-500 to-pink-500 text-black '
                        >
                            {loading ? (
                                <FaSpinner className='m-auto animate-spin' size={24} />
                            ) : (
                                'Create Shop'
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateShop;