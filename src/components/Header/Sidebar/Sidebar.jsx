import MenuList from "../../Shared/Menulist/MenuList";
import { FaCartArrowDown, FaHome, FaShopify } from "react-icons/fa";
import { MdDashboardCustomize, MdLogin, MdLogout, MdOutlineDarkMode, MdOutlineSlideshow } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
import useAuth from "../../../Hooks/useAuth";
import profile from '../../../assets/image/authentication/profile.png'
import useSaleCollection from "../../../Hooks/useSaleCollection";
import useRole from "../../../Hooks/useRole";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useThemeMode from "../../../Hooks/useThemeMode";
import { BsSun } from "react-icons/bs";
const Sidebar = () => {
    const { user, logoutUser } = useAuth();
    const { changeTheme, mode } = useThemeMode();
    // const [isAdmin]= useAdmin();
    const [products, refetch,] = useSaleCollection();
    const [users] = useRole();
    const handleLogout = () => {
        const toastId = toast.loading('logout proccessing....');
        logoutUser()
        refetch()
            .then(() => {
                toast.success('Logout successfully....!', { id: toastId });
            })
            .catch(() => { })
    }

    return (
        <div className="flex flex-col gap-2">
            <button onClick={changeTheme} className="bg-transparent btn-sm hover:text-blue-500 transition my-5 flex items-center justify-center">
                                {mode === "dark" ? <BsSun className='text-3xl'></BsSun> : <MdOutlineDarkMode className='text-3xl'></MdOutlineDarkMode>}
                            </button>
            <MenuList address={'/'} linkTitle={'Home'} icon={FaHome} />
            <MenuList address={'create-shop'} linkTitle={'Create Shop'} icon={FaShopify} />
            <span >
                <a href="https://youtu.be/PohSjXM5AW0?si=i0hNC7blRfrCwgz7" target="_blank" >
                    <span className="flex items-center text-[18px] font-medium px-4 py-2 duration-200 transform  hover:bg-gray-300   text-gray-700 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "> <MdOutlineSlideshow className="w-6 h-10 mr-1"></MdOutlineSlideshow>Watch Demo</span>
                </a>
            </span>
            {
                users?.role === "admin" && <MenuList address={'dashboard/admin-home'} linkTitle={'Dashboard'} icon={MdDashboardCustomize} />
            }
            {
                users?.role === "manager" && <MenuList address={'dashboard/manager'} linkTitle={'Dashboard'} icon={MdDashboardCustomize} />
            }

            {
                users?.role === "manager" && <Link to={'dashboard/guest-home'}>
                    <span className="flex items-center text-[18px] font-medium px-4 py-2 duration-200 transform  hover:bg-gray-300   hover:text-gray-700 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "> <FaCartArrowDown className="w-6 h-10 mr-1"></FaCartArrowDown > <div className="badge absolute text-fuchsia-600  -right-1 -top-1 text-2xl">{products?.length}</div></span>
                </Link>
            }
            {
                users?.role === "guest" && <Link to={'dashboard/guest-home'}>
                    <span className=" items-center text-[18px] font-medium px-4 py-2 duration-200 transform  hover:bg-gray-300   hover:text-gray-700 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "> <FaCartArrowDown className="w-6 h-10 mr-1"></FaCartArrowDown > <div className="badge absolute text-fuchsia-600  -right-1 -top-1 text-2xl">{products?.length}</div></span>
                </Link>
            }
            {
                user ? <><div className="avatar flex items-center flex-col justify-start">
                    <h3 className="mr-5 font-medium"> {user?.displayName}</h3>
                    <div className="w-12 mr-3 mt-3 rounded-full mb-5 ring ring-primary ring-offset-base-100 ring-offset-2">
                        {user?.photoURL ? <img src={user?.photoURL} alt="photo" /> : <img src={profile} alt="photo" />}
                    </div>
                    <button onClick={handleLogout} className="btn bg-red-500 text-white text-[18px] flex items-center  font-medium px-4 py-2 duration-200 transform  hover:bg-gray-300   hover:text-gray-700 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ">
                        Logout
                        <MdLogout />
                    </button>
                </div>
                </>

                    :
                    <>
                        <MenuList address={'login'} linkTitle={'Login'} icon={MdLogin} />
                        <MenuList address={'register'} linkTitle={'Register'} icon={GiArchiveRegister} />
                    </>
            }

        </div>
    );
};

export default Sidebar;