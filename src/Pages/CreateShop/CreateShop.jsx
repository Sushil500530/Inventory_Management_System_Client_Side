import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import IconBar from "../../components/Shared/IconBar";
import { MdAddShoppingCart } from "react-icons/md";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../api/auth";
import Swal from "sweetalert2";
import useManager from "../../Hooks/useManager";

const CreateShop = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()
    const [loading, setLoading] = useState(false);
    const [managers] = useManager()
    const currentUser = managers?.filter(item =>item?.email == user?.email);
   
    const handleCreateShop = async (e) => {
        e.preventDefault();
        setLoading(true);
        if(currentUser[0]?.role === 'manager'){
          
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Your Shop is Existed in!",
              });
         return setLoading(false)
        }
        const form = e.target;
        const shop_name = form.shop_name.value;
        const image = form.image.files[0];
        const description = form.description.value;
        const location = form.location.value;
        try {
            const loadImage = await imageUpload(image);
            const create_shop = { 
                shop_name,
                 shop_logo:loadImage?.data?.display_url, 
                 description, 
                 location,
                 owner: user?.displayName,
                 email:user?.email,
                 role:'manager',
             };
             console.log(create_shop);
            await axiosSecure.patch('/managers', create_shop)
            .then(res => {
                if (res.data?.insertedId) {
                    setLoading(false)
                    Swal.fire({
                        title: "Create Successfull!",
                        text: "You clicked the button!",
                        icon: "success",
                        timer: 1000
                    });
                }
            })
        }
        catch (error) {
            setLoading(false)
            toast.error('Please Choose file or select Image!');
        }
    }
    return (
        <div className="container mx-auto mb-12">
            <h2 className="text-2xl font-bold text-center my-12 flex items-center justify-center gap-2">Create a New Shop <IconBar icon={MdAddShoppingCart} /></h2>
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
                            <div className=' bg-white w-full m-auto rounded-lg'>
                                <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg overflow-hidden'>
                                    <div className='flex flex-col w-max mx-auto text-center overflow-hidden'>
                                        <input type='file' name='image' id='image' accept='image/*' className="file-input file-input-secondary focus:border-none " />
                                    </div>
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
                            <input defaultValue={user?.displayName} className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400  ' name='name' id='name' type='text' placeholder='name' required
                            />
                        </div>
                        <div className='space-y-1'>
                            <label htmlFor='title' className='block text-black font-medium'>
                                Shop Owmer Email
                            </label>
                            <input defaultValue={user?.email} className='w-full px-4 py-3 text-gray-800 border rounded-md input border-blue-400  ' name='email' id='email' type='email' placeholder='email' required
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