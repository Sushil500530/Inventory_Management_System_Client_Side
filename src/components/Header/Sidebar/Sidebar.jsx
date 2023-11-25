import MenuList from "../../Shared/Menulist/MenuList";
import { FaHome, FaShopify } from "react-icons/fa";
import { MdDashboardCustomize, MdLogin, MdLogout, MdOutlineSlideshow } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
import useAuth from "../../../Hooks/useAuth";
import profile from '../../../assets/image/authentication/profile.png'
const Sidebar = () => {
    const {user,logoutUser} = useAuth();

    const handleLogout = () => {
        logoutUser()
    }
    return (
        <div className="flex flex-col gap-2">
            <MenuList address={'/'} linkTitle={'Home'} icon={FaHome} />
            <MenuList address={'create-shop'} linkTitle={'Create Shop'} icon={FaShopify} />
            <span >
                <a href="https://youtu.be/PohSjXM5AW0?si=i0hNC7blRfrCwgz7" target="_blank" >
                    <span className="flex items-center text-[18px] font-medium px-4 py-2 duration-200 transform  hover:bg-gray-300   hover:text-gray-700 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "> <MdOutlineSlideshow className="w-6 h-10 mr-1"></MdOutlineSlideshow>Watch Demo</span>
                </a>
            </span>
            <MenuList address={'dashboard/manager'} linkTitle={'Dashboard'} icon={MdDashboardCustomize} />
            {
                user ? <><div className="avatar flex flex-col items-center">
                    <h3 className="mr-5 font-medium"> {user?.displayName}</h3>
                    <div className="w-12 mr-3 mt-3 rounded-full mb-5 ring ring-primary ring-offset-base-100 ring-offset-2">
                        {user?.photoURL ? <img src={user?.photoURL} alt="photo" /> : <img src={profile} alt="photo" />}
                    </div>
                    <button onClick={handleLogout} className="btn bg-red-500 text-white text-[18px] flex items-center  font-medium px-4 py-2 duration-200 transform  hover:bg-gray-300   hover:text-gray-700 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ">
                        Logout
                        <MdLogout />
                    </button>
                </div>
                </>   :
                    <>
                        <MenuList address={'login'} linkTitle={'Login'} icon={MdLogin} />
                        <MenuList address={'register'} linkTitle={'Register'} icon={GiArchiveRegister} />
                    </>
            }
        </div>
    );
};

export default Sidebar;