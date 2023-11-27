import { FaBook } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { HiUserGroup } from "react-icons/hi";
import MenuList from "../../../components/Shared/Menulist/MenuList";
import { AiFillHome } from "react-icons/ai";

const AdminMenu = () => {
    return (
        <div className="space-y-1">
            {/* admin  */}
            <MenuList address={'admin-home'} linkTitle={'Admin Home'} icon={AiFillHome} />
            <MenuList address={'manager-shop'} linkTitle={'Manager Shop'} icon={FcManager} />
            <MenuList address={'admin-sale-summary'} linkTitle={'Sale Summary'} icon={FaBook} />
            <MenuList address={'all-users'} linkTitle={'All Users'} icon={HiUserGroup} />
        </div>
    );
};

export default AdminMenu;