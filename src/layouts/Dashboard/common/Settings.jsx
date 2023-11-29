import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";
import profile from '../../../assets/image/authentication/profile.png'
import Loading from "../../../components/Shared/Loading";

const Settings = () => {
    const { user } = useAuth();
    const [users, , isLoading] = useRole();
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="w-full">
            <h2 className="text-3xl text-center my-8 font-bold">Settings for User👨‍🎓</h2>
            <div className='flex justify-center w-full items-center mt-10 '>
                <Helmet>
                    <title>Setting | Inventory Management</title>
                </Helmet>
                <div className='bg-white shadow-lg rounded-2xl w-full mx-auto lg:w-3/5 pb-12'>
                    <img
                        alt='profile'
                        src='https://i.ibb.co/G7b6P45/23d0f4f631a8071556d0d2b93cac1584.gif'
                        className='w-full mb-4 rounded-t-lg h-[30vh]'
                    />
                    <div className='relative flex flex-col items-center justify-center p-4 '>
                        <a href='#' className='absolute block -top-[75px]'>
                            {user?.photoURL ? <img
                                alt='profile'
                                src={user?.photoURL}
                                className='mx-auto object-cover rounded-full h-28 w-28  border-4 border-white '
                            /> : <img
                                alt='profile'
                                src={profile}
                                className='mx-auto object-cover rounded-full h-24 w-24  border-4 border-white '
                            />}
                        </a>
                        <p className='mt-7 py-1 px-4 text-base text-white bg-pink-500 rounded-full'>
                            {users?.role.toUpperCase()}
                        </p>
                        <div className='p-5 mt-4 rounded-lg w-full'>
                            <div className='w-full text-gray-700 space-y-3 flex items-center flex-col md:flex-row lg:flex-row  md:justify-between lg:justify-evenly'>
                                <div>
                                    <p className=' text-[18px]'>
                                        Name
                                        <p className='font-bold text-xl text-black capitalize'>
                                            {user?.displayName}
                                        </p>
                                    </p>
                                    <p className='text-[18px]'>
                                        Email
                                        <p className='font-bold text-xl text-black capitalize'>{user?.email}</p>
                                    </p>
                                </div>
                                <div>
                                    <button className='btn btn-sm text-[18px] bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                                        Update Profile
                                    </button>
                                    <button className='btn btn-sm bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-1 rounded-lg text-white cursor-pointer text-[18px]'>
                                        Change Password
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;