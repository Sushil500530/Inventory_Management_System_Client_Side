import { MdLogin } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
import MenuList from "../../Shared/Menulist/MenuList";
import { FaHome, FaShopify } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div className=" w-full dark:bg-zinc-900">
            <nav>
                <div className="navbar lg:flex-row flex flex-row-reverse shadow justify-between">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                   <Logo />
                    <div className="flex-none hidden lg:block">
                        <div className="flex items-center gap-2 dark:text-white">
                            <MenuList address={'/'} linkTitle={'Home'} icon={FaHome} />
                            <MenuList address={'create-shop'} linkTitle={'Create Shop'} icon={FaShopify} />
                            <MenuList address={'login'} linkTitle={'Login'} icon={MdLogin} />
                            <MenuList address={'register'} linkTitle={'Register'} icon={GiArchiveRegister} />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;