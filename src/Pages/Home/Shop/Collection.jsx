/* eslint-disable react/prop-types */
import { MdDetails } from "react-icons/md";
import { Link } from "react-router-dom";

const Collection = ({ product }) => {
    const { _id, product_name, product_cost, image, discount, description, location, owner_name } = product || {};
    return (
        <div className="card bg-base-100 shadow-xl border dark:bg-zinc-800 dark:text-white">
            <figure className=' w-full h-[300px]'>
                <img src={image} alt="image" className='w-full h-full rounded-md' />
            </figure>
            <div className="flex justify-between items-center px-5">
                <div className="flex gap-3 mt-3">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="host-image" className="rounded-full w-12" />
                    <span>
                        <p className="font-medium">{owner_name}</p>
                        <p className="font-medium">{location}</p>
                    </span>
                </div>
                <div>
                    <span>
                        <p className="text-[18px] font-medium">$ {product_cost}</p>
                        <p>Discount {discount}%</p>
                    </span>
                </div>
            </div>
            <div className="p-5">
                <h2 className="card-title">{product_name}</h2>
                <p>{description.slice(0, 70)}</p>
                <div className="card-actions w-2/3 mx-auto mt-5">
                    <Link to={`/product-details/${_id}`} className="w-full">
                        <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-[18px] w-full hover:text-white ">View Details <MdDetails className="text-3xl" /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Collection;