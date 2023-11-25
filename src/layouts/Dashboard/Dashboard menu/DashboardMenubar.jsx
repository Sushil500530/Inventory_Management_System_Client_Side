/* eslint-disable react/prop-types */
import { BsFillCartCheckFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { GrDocumentStore, GrLogout } from "react-icons/gr";
import { FaAddressBook, FaBook, FaClipboardList, FaProductHunt, FaUtensils, } from "react-icons/fa";
import { MdContactMail, MdList, MdReviews, MdAddShoppingCart, MdShoppingBag, MdWorkHistory, MdOutlineCollectionsBookmark, MdOutlinePayment } from "react-icons/md";
import { AiFillHome, AiFillCalendar, AiOutlineBars } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";

import HanadleToggleBtn from "../../../components/Shared/Button/HanadleToggleBtn";
import MenuList from "../../../components/Shared/Menulist/MenuList";
import { useState } from "react";
import { FcManager, FcSettings } from "react-icons/fc";

const DashboardMenubar = ({isActive}) => {
    const [toggle, setToggle] = useState(false)
    const toggleHandler = event => {
        setToggle(event.target.checked)
    }


    return (
        <>
            <div className={`z-10 flex flex-col justify-between lg:relative absolute overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2   inset-y-0 left-0 transform ${isActive && '-translate-x-full '
                }  md:translate-x-0  transition duration-200 ease-in-out`}>
                <div className="menu pt-8">
                    <div className="mb-5">
                        <HanadleToggleBtn toggler={toggleHandler} />
                    </div>
                    {/* admin  */}
                    {/* <MenuList address={'admin-home'} linkTitle={'Admin Home'} icon={AiFillHome} /> */}
                    <>
                        <MenuList address={'manager'} linkTitle={'Product Manager'} icon={AiFillHome} />
                        <MenuList address={'product-add'} linkTitle={'Product Add'} icon={MdAddShoppingCart} />
                        <MenuList address={'products-section'} linkTitle={'Products Section'} icon={FaProductHunt} />
                        <MenuList address={'sale-Collection'} linkTitle={'Products Section'} icon={MdOutlineCollectionsBookmark} />
                        <MenuList address={'checkout'} linkTitle={'Checkout'} icon={IoBagCheckOutline} />
                        <MenuList address={'subscription-and-payment'} linkTitle={'Subscription and Payment'} icon={MdOutlinePayment} />
                        <MenuList address={'sale-summary'} linkTitle={'Sale Summary'} icon={FaBook} />


                        <div className="divider"></div>

                        <MenuList address={'manager-shop'} linkTitle={'Manager Shop'} icon={FcManager} />
                        <MenuList address={'admin-sale-summary'} linkTitle={'Sale Summary'} icon={FaBook} />
                        <MenuList address={'all-users'} linkTitle={'All Users'} icon={HiUserGroup} />

                    </>
                    {/* share navlink */}

                </div>
                <div>
                    <div className="divider"></div>
                    <MenuList address={'settings'} linkTitle={'Settings'} icon={FcSettings} />
                    <button className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform' >
                        <GrLogout className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default DashboardMenubar;