import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";
import profile from '../../../assets/image/authentication/profile.png'
import Loading from "../../../components/Shared/Loading";

const Settings = () => {
const {user} = useAuth();
const [getRole, , isLoading] = useRole();
const currentUser = getRole.filter(usr => usr?.email == user?.email)
if(isLoading){
    return <Loading />
}
    return (
        <div className="w-full">
            <h2 className="text-3xl text-center">Settings Section</h2>
            <div className='flex justify-center w-full items-center mt-10'>
                <Helmet>
                    <title>Setting | Inventory Management</title>
                </Helmet>
                <div className='bg-white shadow-lg rounded-2xl w-3/5'>
                    <img
                        alt='profile'
                        src='https://i.ibb.co/G7b6P45/23d0f4f631a8071556d0d2b93cac1584.gif'
                        className='w-full mb-4 rounded-t-lg h-56'
                    />
                    <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                        <a href='#' className='relative block'>
                            {user?.photoURL ? <img
                                alt='profile'
                                src={user?.photoURL}
                                className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                            /> : <img
                            alt='profile'
                            src={profile}
                            className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                        /> }
                        </a>

                        <p className='p-2 px-4 text-xs text-white bg-pink-500 rounded-full'>
                            {currentUser[0]?.role.toUpperCase()}
                        </p>
                        <p className='mt-2 text-xl font-medium text-gray-800 '>
                            {/* User Id: {user.uid} */}
                        </p>
                        <div className='w-full p-2 mt-4 rounded-lg'>
                            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                                <p className='flex flex-col'>
                                    Name
                                    <span className='font-bold text-black '>
                                        {user?.displayName}
                                    </span>
                                </p>
                                <p className='flex flex-col'>
                                    Email
                                    <span className='font-bold text-black '>{user?.email}</span>
                                </p>

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