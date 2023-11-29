import { MdLogin, MdOutlineDarkMode, MdOutlineSlideshow } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
import MenuList from "../../Shared/Menulist/MenuList";
import { FaCartArrowDown, FaHome, FaShopify } from "react-icons/fa";
import Logo from "./Logo";
import { MdDashboardCustomize } from "react-icons/md";
import profile from '../../../assets/image/authentication/profile.png'
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import toast from "react-hot-toast";
import { BsSun } from "react-icons/bs";
import useRole from "../../../Hooks/useRole";
import useSaleCollection from "../../../Hooks/useSaleCollection";
import useThemeMode from "../../../Hooks/useThemeMode";

const Navbar = () => {
    const { user, logoutUser } = useAuth();
    const { changeTheme, mode } = useThemeMode();
    // const [isAdmin]= useAdmin();
    const [products, refetch,] = useSaleCollection();
    const [users] = useRole();
    console.log(users);
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
        <div className=" w-full dark:bg-zinc-900">
            <nav>
                <div className="navbar lg:flex-row flex flex-row-reverse items-center shadow justify-between">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <Link to='/'>
                        <Logo />
                    </Link>
                    <div className="flex-none hidden lg:block">
                        <div className="flex items-center gap-2 dark:text-white">
                        <button onClick={changeTheme} className="bg-transparent btn-sm hover:text-blue-500 transition mr-5 flex items-center justify-center">
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
                                    <span className="flex items-center text-[18px] font-medium px-4 py-2 duration-200 transform  hover:bg-gray-300   hover:text-gray-700 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "> <FaCartArrowDown className="w-6 h-10 mr-1"></FaCartArrowDown > <div className="badge absolute text-fuchsia-600  -right-1 -top-1 text-2xl">{products?.length}</div></span>
                                </Link>
                            }
                            {
                                user ? <><div className="avatar flex items-center justify-center">
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
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;