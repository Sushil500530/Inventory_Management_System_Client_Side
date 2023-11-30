import { Link, Outlet } from "react-router-dom";
import Container from "../components/Shared/Container";
import Logo from "../components/Header/Navbar/Logo";
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import DashboardMenubar from "./Dashboard/Dashboard menu/DashboardMenubar";
import { Helmet } from "react-helmet-async";
import Footer from "../Pages/Footer/Footer";
const Dashboard = () => {
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <Container>
            <Helmet>
                <title>Dashboard | Inventory M</title>
            </Helmet>
            <div className='bg-gray-100 border text-gray-800 flex justify-between lg:hidden'>
                <div className="w-full">
                    <div className='block cursor-pointer p-4 font-bold dark:bg-zinc-800'>
                        <Logo />
                    </div>
                </div>
                <button onClick={handleToggle} className='dark:bg-zinc-800 mobile-menu-button p-4 focus:outline-none dark:text-white'>
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            <div className="flex w-full min-h-screen">
                {/* dashboard menu bar  */}
                <div className="min-h-screen">
                    <DashboardMenubar isActive={isActive} />
                </div>

                {/* dashboard content */}
                <div className="flex-1 mb-12">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer />
        </Container >
    );
};

export default Dashboard;