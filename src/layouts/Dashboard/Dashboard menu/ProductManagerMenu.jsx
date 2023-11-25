import { AiFillHome } from "react-icons/ai";
import MenuList from "../../../components/Shared/Menulist/MenuList";
import { MdAddShoppingCart, MdOutlineCollectionsBookmark, MdOutlinePayment } from "react-icons/md";
import { FaBook, FaProductHunt } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";

const ProductManagerMenu = () => {
    return (
        <>
            <MenuList address={'manager'} linkTitle={'Product Manager'} icon={AiFillHome} />
            <MenuList address={'product-add'} linkTitle={'Product Add'} icon={MdAddShoppingCart} />
            <MenuList address={'products-section'} linkTitle={'Products Section'} icon={FaProductHunt} />
            <MenuList address={'sale-Collection'} linkTitle={'Sale Collection'} icon={MdOutlineCollectionsBookmark} />
            <MenuList address={'checkout'} linkTitle={'Checkout'} icon={IoBagCheckOutline} />
            <MenuList address={'subscription-and-payment'} linkTitle={'Subscription and Payment'} icon={MdOutlinePayment} />
            <MenuList address={'sale-summary'} linkTitle={'Sale Summary'} icon={FaBook} />
        </>
    );
};

export default ProductManagerMenu;