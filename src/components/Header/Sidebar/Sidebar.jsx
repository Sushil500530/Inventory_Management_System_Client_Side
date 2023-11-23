import MenuList from "../../Shared/Menulist/MenuList";
import { FaHome, FaShopify } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";

const Sidebar = () => {
    return (
        <div className="flex flex-col gap-2">

            <MenuList address={'/'} linkTitle={'Home'} icon={FaHome} />
            <MenuList address={'create-shop'} linkTitle={'Create Shop'} icon={FaShopify} />
            <MenuList address={'login'} linkTitle={'Login'} icon={MdLogin} />
            <MenuList address={'register'} linkTitle={'Register'} icon={GiArchiveRegister} />
        </div>
    );
};

export default Sidebar;