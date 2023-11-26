import { AiFillHome } from "react-icons/ai";
import MenuList from "../../../components/Shared/Menulist/MenuList";
import { GiLevelFourAdvanced } from "react-icons/gi";

const GuestMenu = () => {
    return (
        <div>
             <MenuList address={'guest-home'} linkTitle={'Home Menu'} icon={AiFillHome} />
            <MenuList address={'doc-type'} linkTitle={'Promotion'} icon={GiLevelFourAdvanced} />
        </div>
    );
};

export default GuestMenu;