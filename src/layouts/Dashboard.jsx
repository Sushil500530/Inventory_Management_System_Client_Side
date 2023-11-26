import { Link, Outlet } from "react-router-dom";
import Container from "../components/Shared/Container";
import Logo from "../components/Header/Navbar/Logo";
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import DashboardMenubar from "./Dashboard/Dashboard menu/DashboardMenubar";
import { Helmet } from "react-helmet-async";
const Dashboard = () => {
    const [isActive, setActive] = useState(false)
  
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <Container>
            <Helmet>
                <title>Dashboard | Inventory Management</title>
            </Helmet>
            <div className='bg-gray-100 border text-gray-800 flex justify-between lg:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>
                            <Logo />
                        </Link>
                    </div>
                </div>
                <button onClick={handleToggle} className='mobile-menu-button p-4 focus:outline-none'>
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            <div className="flex">
                {/* dashboard menu bar  */}
             <DashboardMenubar isActive={isActive} />
              
                {/* dashboard content */}
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </Container >
    );
};

export default Dashboard;