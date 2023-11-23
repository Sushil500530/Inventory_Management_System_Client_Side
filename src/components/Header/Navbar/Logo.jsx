import logo from './acb93ce28df132e59cdec3129a1da5a8.jpg'
import logo2 from './60236505-inventory-management-written-with-a-marker-pen.jpg'
const Logo = () => {
    return (
        <div className=" px-2 mx-2 w-28 h-14 lg:w-[276px] lg:h-[76px] flex ">
            {/* <img src="https://i.pinimg.com/564x/f1/03/2a/f1032ab7db04b3f56b43e81c9b21ec7a.jpg" className="w-full h-full" alt="" /> */}
            <img src={logo} className="w-full h-full" alt="" />
            <img src={logo2} className="w-full h-full" alt="" />
        </div>
    );
};

export default Logo;