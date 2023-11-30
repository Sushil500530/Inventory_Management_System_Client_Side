import { Link } from 'react-router-dom';
import logo from './acb93ce28df132e59cdec3129a1da5a8.jpg'
const Logo = () => {
    return (
        <Link to="/">
            <div className=" px-2 mx-2 w-28 h-14 lg:w-[276px] lg:h-[76px] flex rounded-xl gap-2 ">
                {/* <img src="https://i.pinimg.com/564x/f1/03/2a/f1032ab7db04b3f56b43e81c9b21ec7a.jpg" className="w-full h-full" alt="" /> */}
                <img src={logo} className="w-full h-full rounded-xl bg-transparent" alt="" />
                <h3 className="text-2xl lg:text-3xl font-extrabold text-violet-500">Inventory <span className='text-fuchsia-500'>Management</span></h3>
            </div>
        </Link>
    );
};

export default Logo;