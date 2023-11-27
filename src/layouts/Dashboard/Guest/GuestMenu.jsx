import { AiFillHome } from "react-icons/ai";
import MenuList from "../../../components/Shared/Menulist/MenuList";
import { GiLevelFourAdvanced } from "react-icons/gi";
import { MdOutlinePayments } from "react-icons/md";

const GuestMenu = () => {
    return (
        <div className="space-y-1">
             <MenuList address={'guest-home'} linkTitle={'Home Menu'} icon={AiFillHome} />
            <MenuList address={'doc-type'} linkTitle={'Promotion'} icon={GiLevelFourAdvanced} />
            <MenuList address={'payment-history'} linkTitle={'Payment History'} icon={MdOutlinePayments } />
        </div>
    );
};

export default GuestMenu;