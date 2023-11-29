/* eslint-disable react/prop-types */
import { GrLogout } from "react-icons/gr";
import HanadleToggleBtn from "../../../components/Shared/Button/HanadleToggleBtn";
import MenuList from "../../../components/Shared/Menulist/MenuList";
import { useState } from "react";
import { FcSettings } from "react-icons/fc";
import AdminMenu from "./AdminMenu";
import ProductManagerMenu from "./ProductManagerMenu";
import { AiFillHome } from "react-icons/ai";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import useRole from "../../../Hooks/useRole";
import GuestMenu from "../Guest/GuestMenu";
import useSaleCollection from "../../../Hooks/useSaleCollection";

const DashboardMenubar = ({ isActive }) => {
    const [toggle, setToggle] = useState(false);
    const {logoutUser} = useAuth();
    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    const [users] = useRole();
    const [products,refetch,isLoading] = useSaleCollection();
    console.log(products);
    const navigate = useNavigate();
    // if(isLoading){
    //     return <Loading />
    // }

    const toggleHandler = event => {
        setToggle(event.target.checked)
    }

    const handleLogout = async() => {
        const log = await logoutUser()
        console.log(log);
        navigate('/')
    }

    return (
        <>
            <div className={`z-10 flex flex-col justify-between pb-6 lg:relative absolute bg-gray-100 overflow-x-hidden w-64 h-screen space-y-6 px-2 inset-y-0 left-0 transform ${isActive && '-translate-x-full '
                } lg:translate-x-0 transition duration-200 ease-in-out`}>
                <div className="menu pt-8">
                    <div className="mb-5">
                        <HanadleToggleBtn toggler={toggleHandler} />
                    </div>
                   
                    {/* admin menu  */}
                     {
                        users?.role ==="admin" && <AdminMenu />
                    }
                      {/* product manager menu  */}
                     {
                        users?.role ==="manager" && <ProductManagerMenu />
                    }
                      {/* guest menu  */}
                     {
                        users?.role ==="guest" && <GuestMenu />
                    }
                   
                </div>
                <div>
                    <div className="divider"></div>
                    <MenuList address={'/'} linkTitle={'Go Home'} icon={AiFillHome} />
                    <MenuList address={'settings'} linkTitle={'Settings'} icon={FcSettings} />
                    <button onClick={handleLogout} className='flex w-full items-center px-4 py-2 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform' >
                        <GrLogout className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default DashboardMenubar;