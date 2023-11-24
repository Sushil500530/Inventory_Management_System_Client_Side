import MenuList from "../components/Shared/Menulist/MenuList";
import { BsFillCartCheckFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { GrDocumentStore } from "react-icons/gr";
import { FaAddressBook, FaBook, FaClipboardList, FaUtensils, } from "react-icons/fa";
import { MdContactMail, MdList, MdReviews, MdAddShoppingCart, MdShoppingBag, MdWorkHistory, MdOutlineCollectionsBookmark, MdOutlinePayment } from "react-icons/md";
import { AiFillHome, AiFillCalendar } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import Container from "../components/Shared/Container";
import { FcManager } from "react-icons/fc";

const Dashboard = () => {
    return (
        <Container>
            <div className="flex">
                <div className="w-64 min-h-screen bg-base-200">
                    <ul className="menu pt-8">
                        {/* admin  */}
                        <>
                            {/* <MenuList address={'admin-home'} linkTitle={'Admin Home'} icon={AiFillHome}  /> */}
                            <MenuList address={'dashboard'} linkTitle={'Product Manager'} icon={AiFillHome} />
                            <MenuList address={'product-add'} linkTitle={'Product Add'} icon={MdAddShoppingCart} />
                            <MenuList address={'products-section'} linkTitle={'Products Section'} icon={AiFillHome} />
                            <MenuList address={'sale-Collection'} linkTitle={'Products Section'} icon={MdOutlineCollectionsBookmark} />
                            <MenuList address={'checkout'} linkTitle={'Checkout'} icon={IoBagCheckOutline} />
                            <MenuList address={'subscription-and-payment'} linkTitle={'Subscription and Payment'} icon={MdOutlinePayment} />
                            <MenuList address={'sale-summary'} linkTitle={'Sale Summary'} icon={FaBook} />


                            <div className="divider"></div>

                            <MenuList address={'manager-shop'} linkTitle={'Manager Shop'} icon={FcManager} />
                            <MenuList address={'sale-summary'} linkTitle={'Sale Summary'} icon={FaBook} />
                            <MenuList address={'users'} linkTitle={'All Users'} icon={HiUserGroup} />
                           
                        </>
                        {/* share navlink */}
                        <div className="divider"></div>

                    </ul>
                </div>
                {/* dashboard content */}
                <div className="flex-1 p-5">
                    <Outlet></Outlet>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;